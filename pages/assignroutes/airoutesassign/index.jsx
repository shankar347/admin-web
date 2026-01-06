import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderDashboard from "../../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import { Spin, Upload, message, Table, Button, notification, Drawer, Grid } from "antd";

import * as XLSX from "xlsx";
import { Bot, InboxIcon, Menu, X, Smartphone, Monitor } from "lucide-react";
import { MAP_API_KEY, OPEN_API_KEY } from "~/helper/auth";
import { getAllbranch } from "~/store/branches/action";
import { getAllridersRequest } from "~/store/drivers/action";
import DriverRepository from "~/repositories/DriverRepository";
import { toggleSidebar } from "~/store/auth/action";

const { useBreakpoint } = Grid;

const Index = () => {
    const [loader, setLoader] = useState(false);
    const [loadPercent, setLoadPercent] = useState(0);
    const [isRouteCreating, setIsRouteCreating] = useState(false);
    const [excelFile, setExcelFile] = useState(null);
    const { auth } = useSelector(({ auth }) => auth);
    const [loading, setLoading] = useState(false)
    const [expandedKeys, setExpandedKeys] = useState([]);
    let [finalRoutes, setfinalRoutes] = useState([])
    const [swapMode, setSwapMode] = useState(false);
    const [selectedRoutes, setSelectedRoutes] = useState([]);
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [loaderText, setLoaderText] = useState("");
    const [lastFinalRoutes, setLastFinalRoutes] = useState([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showMobileInstructions, setShowMobileInstructions] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const branches = useSelector((state) => state.branches.allBranch || []);
    const drivers = useSelector((state) => state.drivers.allRiders || []);
    const dispatch = useDispatch();
    const screens = useBreakpoint();
    const isActive = useSelector((state) => state.auth.isSidebarActive);

    const { Dragger } = Upload;

    // Set isClient to true on mount
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Initialize isMobile after client-side render
    useEffect(() => {
        if (!isClient) return;

        const getIsMobile = () => window.innerWidth <= 868;
        setIsMobile(getIsMobile());

        const handleResize = () => {
            setIsMobile(getIsMobile());
            // Reset sidebar state when switching from mobile to desktop
            if (window.innerWidth > 868 && isActive) {
                dispatch(toggleSidebar()); // Close sidebar on desktop
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isClient, isActive, dispatch]);

    // Handle mobile menu toggle
    const handleMobileMenuToggle = () => {
        dispatch(toggleSidebar());
    };

    // Handle desktop sidebar toggle
    const handleDesktopToggle = () => {
        dispatch(toggleSidebar());
    };

    // Auth check
    useEffect(() => {
        if (!isClient) return;

        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth, isClient]);

    useEffect(() => {
        dispatch(getAllbranch());
        dispatch(getAllridersRequest());
    }, [dispatch]);

    useEffect(() => {
        if (auth?.color) {
            document.documentElement.style.setProperty("--jl-primary", auth.color);
        }
    }, [auth?.color]);

    const toggleClass = () => setActive(!isActive);

    const REQUIRED_FIELDS = [
        "name",
        "user_name",
        "user_phoneno",
        "payment_amount",
        "isPaid",
        "user_address"
    ];

    // Upload props
    const uploadProps = {
        name: "file",
        accept: ".xlsx,.xls",
        multiple: false,
        beforeUpload: (file) => {
            setExcelFile(file);
            handleupload(file);
            message.success("Excel file attached successfully");
            return false;
        }
    };

    const aiDetectcolumns = async (headers) => {
        const prompt = `
These are Excel columns:
${JSON.stringify(headers)}

Map them to these required fields:

${REQUIRED_FIELDS.join(", ")}

Return JSON only:
{
  "success": true,
  "map": { "field": "ExcelColumnName" }
}
  `;

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${OPEN_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-4.1-mini",
                    messages: [{ role: "user", content: prompt }],
                    response_format: { type: "json_object" }
                })
            });

            const data = await response.json();
            return JSON.parse(data.choices[0].message.content);

        } catch (err) {
            console.error(err);
            return { success: false };
        }
    };

    async function geocodeAddress(address) {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${MAP_API_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.status === "OK") {
            return data.results[0].geometry.location;
        } else {
            return null;
        }
    }

    const handleCreateMultiRoutes = async () => {
        if (lastFinalRoutes.length === 0) {
            return message.warning("Please add at least one route.");
        }

        const delay = (ms) => new Promise((res) => setTimeout(res, ms));

        const haversineDistance = (a, b) => {
            const toRad = (v) => (v * Math.PI) / 180;
            const R = 6371;

            const dLat = toRad(b.lat - a.lat);
            const dLon = toRad(b.lng - a.lng);

            const lat1 = toRad(a.lat);
            const lat2 = toRad(b.lat);

            const aCalc =
                Math.sin(dLat / 2) ** 2 +
                Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

            return 2 * R * Math.asin(Math.sqrt(aCalc));
        };

        const sortStopsNearest = (stops, startPoint) => {
            const pending = [...stops];
            const sorted = [];
            let current = startPoint;

            while (pending.length > 0) {
                let nearestIndex = 0;
                let minDist = Infinity;

                for (let i = 0; i < pending.length; i++) {
                    const dist = haversineDistance(current, pending[i]);
                    if (dist < minDist) {
                        minDist = dist;
                        nearestIndex = i;
                    }
                }

                const next = pending.splice(nearestIndex, 1)[0];
                sorted.push(next);
                current = next;
            }

            return sorted;
        };

        try {
            setLoading(true);
            setIsRouteCreating(true);
            setLoadPercent(0);

            const total = lastFinalRoutes.length;

            for (let i = 0; i < total; i++) {
                const r = lastFinalRoutes[i];

                let branchId = "";
                let branchCode = "";
                let branchCoords = { lat: 0, lng: 0 };
                let branchObj = null;

                if (auth.role === "superadmin") {
                    branchObj = branches.find((b) => b.name === r.branch);
                    if (!branchObj) continue;

                    branchId = branchObj._id;
                    branchCode = branchObj.branchcode || "";
                    branchCoords = {
                        lat: Number(branchObj.lat),
                        lng: Number(branchObj.lng),
                    };
                } else {
                    branchId = auth.branch;
                    branchCode = auth.branchname;
                    branchCoords = {
                        lat: Number(auth.branchlat),
                        lng: Number(auth.branchlng),
                    };
                }

                const driverObj = drivers.find((d) => d.user_id === r.driver);

                const sortedStops = sortStopsNearest(r.stops, branchCoords);

                const mappedStops = sortedStops.map((stop) => ({
                    name: stop.name || "",
                    customer_name: stop.user_name || "",
                    customer_phoneno: stop.user_phoneno || "",
                    customer_address: stop.user_address || "",
                    isPaid: stop.isPaid === "yes" ? "yes" : "no",
                    payment_amount: stop.payment_amount || 0,
                    lat: stop.lat,
                    lng: stop.lng,
                }));

                const routeData = {
                    branch: branchId,
                    branchcode: branchCode,
                    driver: r.driver,
                    drivername: driverObj?.user_id || "",
                    date: r.date,
                    stops: mappedStops,
                };

                await DriverRepository.createRoute(routeData);

                const progress = Math.round(((i + 1) / total) * 100);
                setLoadPercent(progress);
                await delay(300);
            }

            message.success("All routes created successfully!");

            setTimeout(() => {
                window.location.href = "/assignroutes";
            }, 100);

        } catch (err) {
            notification.error({
                message: err.message || "Error creating routes",
            });
        } finally {
            setLoading(false);
            setIsRouteCreating(false);
            setTimeout(() => setLoadPercent(0), 700);
        }
    };

    const geocodeBranches = async () => {
        return Promise.all(
            branches.map(async (b) => {
                const loc = await geocodeAddress(b.address);
                return { ...b, lat: loc.lat, lng: loc.lng };
            })
        );
    };

    const geocodeDrivers = async () => {
        return Promise.all(
            drivers.map(async (d) => {
                const loc = await geocodeAddress(d.area.address);
                return { ...d, lat: loc?.lat, lng: loc?.lng };
            })
        );
    };

    const geocodeCustomers = async (rows) => {
        return Promise.all(
            rows.map(async (r) => {
                const loc = await geocodeAddress(r.user_address);
                return { ...r, lat: loc.lat, lng: loc.lng };
            })
        );
    };

    function extractPincode(address) {
        if (!address || typeof address !== "string") return null;
        const match = address.match(/\b\d{6}\b/);
        return match ? match[0] : null;
    }

    function haversineDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    async function allocateRoutes(stops, drivers) {
        if (!stops.length) return [];

        const finalRoutes = [];

        for (const stop of stops) {
            let ranked = [];

            for (const driver of drivers) {
                const areaName = driver.area?.name?.toLowerCase() || "";
                const areaAddr = driver.area?.address || "";
                const areaPincode = extractPincode(areaAddr);
                const orderPincode = extractPincode(stop.user_address);
                let matchType = 0;
                let distance = Infinity;

                if (areaName && stop.user_address.toLowerCase().includes(areaName)) {
                    matchType = 3;
                }

                if (matchType === 0 && areaPincode && orderPincode) {
                    if (areaPincode === orderPincode) matchType = 2;
                }

                if (matchType === 0 && driver.lat && driver.lng && stop.lat && stop.lng) {
                    distance = haversineDistance(driver.lat, driver.lng, stop.lat, stop.lng);
                    if (distance <= 3) matchType = 1;
                }

                if (matchType > 0) {
                    ranked.push({ driver, matchType, distance });
                }
            }

            if (ranked.length === 0) {
                stop.unassigned = true;
                continue;
            }

            ranked.sort((a, b) => {
                if (b.matchType !== a.matchType) return b.matchType - a.matchType;
                return a.distance - b.distance;
            });

            const nearestDriver = ranked[0].driver;

            let route = finalRoutes.find(r => r.driver === nearestDriver._id);

            if (!route) {
                route = {
                    name: `RT-${nearestDriver?.user_id?.slice(-4)}`,
                    driver: nearestDriver._id,
                    drivername: nearestDriver.user_id,
                    date: new Date().toISOString().split("T")[0],
                    stops: [],
                    branch: nearestDriver.branch.name
                };
                finalRoutes.push(route);
            }

            stop.name = `Order ${route.stops.length + 1}`;
            route.stops.push(stop);
        }

        return finalRoutes;
    }

    const handleupload = async (file) => {
        if (!file) return

        setLoading(true)
        try {
            const reader = new FileReader()

            reader.onload = async (e) => {
                let data = new Uint8Array(e.target.result)
                let workbook = XLSX.read(data, { type: 'array' })
                let sheet = workbook.Sheets[workbook.SheetNames[0]]
                let rawRows = XLSX.utils.sheet_to_json(sheet, { header: 1 })

                let headers = rawRows[0]
                let rows = rawRows.slice(1).map(r =>
                    Object.fromEntries(headers.map((h, i) => [h, r[i]]))
                )

                setLoaderText("Mapping Columns with AI...");

                let mapped = await aiDetectcolumns(headers)

                if (!mapped.success) {
                    message.error("Ai failed map columns")
                    setLoading(false)
                    return
                }

                setLoaderText("Cleaning Excel Data...");

                let cleaned = rows.map((row) => {
                    let obj = {};
                    REQUIRED_FIELDS.forEach((key) => {
                        const col = mapped.map[key];

                        if (col !== undefined) {
                            obj[key] = row[col];
                        }
                        else {
                            if (key === "isPaid") obj[key] = "yes";
                            else if (key === "payment_amount") obj[key] = 0;
                            else obj[key] = "";
                        }
                    });
                    return obj;
                });

                setLoaderText("Geocoding Customer Locations...");
                let customers = await geocodeCustomers(cleaned);

                setLoaderText("Geocoding Branches...");
                let geoBranches = await geocodeBranches();

                setLoaderText("Geocoding Drivers...");
                let geoDrivers = await geocodeDrivers();

                setLoaderText("Allocating AI Routes...");
                const allocated = await allocateRoutes(customers, geoDrivers);

                setfinalRoutes(allocated);
                setLastFinalRoutes(allocated)
                setLoading(false)
                setLoaderText('')

            }
            reader.readAsArrayBuffer(file);
        }
        catch (err) {
            message.error("Error loading file");
            setLoading(false);
        }
    }

    const handleConfirmSwap = () => {
        if (selectedRoutes.length !== 1) {
            return message.error("Select exactly ONE route to assign orders.");
        }

        if (selectedOrders.length === 0) {
            return message.error("Select at least one order.");
        }

        const targetRoute = selectedRoutes[0];

        let updatedRoutes = JSON.parse(JSON.stringify(finalRoutes));
        let movingOrders = [];

        updatedRoutes = updatedRoutes.map(route => {
            const remaining = route.stops.filter(order => {
                if (selectedOrders.includes(order.user_phoneno)) {
                    movingOrders.push(order);
                    return false;
                }
                return true;
            });
            return { ...route, stops: remaining };
        });

        updatedRoutes = updatedRoutes.map(route => {
            if (route.name === targetRoute) {
                return {
                    ...route,
                    stops: [...route.stops, ...movingOrders]
                };
            }
            return route;
        });

        updatedRoutes = updatedRoutes.map(route => ({
            ...route,
            stops: route.stops.map((stop, index) => ({
                ...stop,
                name: `Order ${index + 1}`,
            }))
        }));

        setfinalRoutes(updatedRoutes);
        setLastFinalRoutes(updatedRoutes);
        setSwapMode(false);
        setSelectedOrders([]);
        setSelectedRoutes([]);
        setExpandedKeys([]);

        message.success("Orders swapped successfully!");
    };

    // Responsive columns configuration
    const getTableColumns = () => {
        const baseColumns = [];

        if (swapMode) {
            baseColumns.push({
                title: "",
                width: 40,
                render: (_, route) => (
                    <input
                        type="checkbox"
                        checked={selectedRoutes.includes(route.name)}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setSelectedRoutes([...selectedRoutes, route.name]);
                            } else {
                                setSelectedRoutes(selectedRoutes.filter(id => id !== route.name));
                            }
                        }}
                    />
                )
            });
        }

        if (screens.md) {
            baseColumns.push(
                { title: "Route", dataIndex: "name", width: 120 },
                { title: "Branch", dataIndex: "branch", width: 120 },
                { title: "Driver", dataIndex: "drivername", width: 120 },
                { title: "Date", dataIndex: "date", width: 100 }
            );
        } else {
            baseColumns.push(
                {
                    title: "Route Info",
                    render: (_, row) => (
                        <div className="mobile-route-info">
                            <div><strong>{row.name}</strong></div>
                            <div style={{ fontSize: '12px', color: '#666' }}>
                                {row.branch} • {row.drivername}
                            </div>
                            <div style={{ fontSize: '11px', color: '#999' }}>
                                {row.date} • {row.stops.length} orders
                            </div>
                        </div>
                    ),
                    width: screens.xs ? 180 : 220
                }
            );
        }

        baseColumns.push({
            title: "Orders",
            width: screens.xs ? 100 : 120,
            render: (_, row) => {
                if (swapMode) return null;

                const expanded = expandedKeys.includes(row.name);
                return (
                    <Button
                        type="primary"
                        size={screens.xs ? "small" : "middle"}
                        style={{
                            background: auth.color,
                            color: 'white',
                            border: "none",
                            borderRadius: "6px",
                            padding: screens.xs ? "2px 8px" : "2px 10px",
                            fontSize: screens.xs ? "12px" : "14px"
                        }}
                        onClick={() => {
                            setExpandedKeys(expanded ? [] : [row.name]);
                        }}
                    >
                        {expanded ? "Hide" : `View (${row.stops.length})`}
                    </Button>
                );
            }
        });

        return baseColumns;
    };

    const getOrderColumns = () => {
        const baseColumns = [];

        if (swapMode) {
            baseColumns.push({
                title: "",
                width: 30,
                render: (_, order) => (
                    <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.user_phoneno)}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setSelectedOrders([...selectedOrders, order.user_phoneno]);
                            } else {
                                setSelectedOrders(
                                    selectedOrders.filter(id => id !== order.user_phoneno)
                                );
                            }
                        }}
                    />
                )
            });
        }

        if (screens.md) {
            baseColumns.push(
                { title: "Order", dataIndex: "name", width: 80 },
                { title: "Customer", dataIndex: "user_name", width: 120 },
                { title: "Is Paid", dataIndex: "isPaid", width: 80 },
                { title: "Amount", dataIndex: "payment_amount", width: 80 },
                { title: "Phone", dataIndex: "user_phoneno", width: 110 },
                { title: "Address", dataIndex: "user_address", width: 200 }
            );
        } else {
            baseColumns.push(
                {
                    title: "Order Details",
                    render: (_, order) => (
                        <div className="mobile-order-info">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong>{order.name}</strong>
                                <span style={{
                                    color: order.isPaid === 'yes' ? '#52c41a' : '#ff4d4f',
                                    fontSize: '12px',
                                    fontWeight: '500'
                                }}>
                                    {order.isPaid === 'yes' ? '✓ Paid' : '× Unpaid'}
                                </span>
                            </div>
                            <div><strong>{order.user_name}</strong></div>
                            <div style={{ fontSize: '12px', color: '#666' }}>
                                {order.user_phoneno}
                            </div>
                            <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>
                                ₹{order.payment_amount} • {order.user_address.substring(0, 60)}...
                            </div>
                        </div>
                    )
                }
            );
        }

        return baseColumns;
    };

    // Mobile header component
    const MobileHeader = () => (
        <div className="mobile-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            background: '#fff',
            borderBottom: `2px solid ${auth.color}`,
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <button
                onClick={() => setMobileMenuOpen(true)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: auth.color,
                    fontSize: '24px',
                    cursor: 'pointer'
                }}
            >
                <Menu />
            </button>
            <h3 style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600',
                color: '#262626'
            }}>
                AI Route Manager
            </h3>
            <button
                onClick={() => setShowMobileInstructions(true)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: auth.color,
                    fontSize: '20px',
                    cursor: 'pointer'
                }}
            >
                ℹ️
            </button>
        </div>
    );

    return (
        <div className="ai-route-container">

            <HeaderDashboard />

            <div className="dashboard-container mt-5 pt-2">
                {/* Sidebar */}
                {isMobile ? (
                    <div style={{
                        width: '100%',
                        minWidth: '100%',
                        transition: 'all 0.3s ease',
                        position: 'fixed',
                        top: '0',
                        left: isActive ? '0' : '-100%',
                        height: '100vh',
                        zIndex: 1000,
                        backgroundColor: '#fff',
                        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
                        overflowY: 'auto'
                    }}>
                        <Sidebar active={false} page={'orderanalytics'} />
                        {isActive && (
                            <div
                                onClick={handleMobileMenuToggle}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: auth.color,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                <i className="fas fa-times"></i>
                            </div>
                        )}
                    </div>
                ) : (
                    <div id="sidebar"
                        className={isActive ? 'slide-show' : null}
                        style={{
                            width: isActive ? '80px' : '250px',
                            minWidth: isActive ? '80px' : '250px',
                            transition: 'all 0.3s ease',
                        }}>
                        <Sidebar active={isActive} page={'orderanalytics'} />
                        <div className="slide-toggle" onClick={handleDesktopToggle}>
                            <span className={'qc-arrow'}>
                                <i
                                    className={`fas ${isActive ? 'fa-angle-double-right' : 'fa-angle-double-left'}`}
                                    style={{
                                        color: auth.color,
                                    }}
                                ></i>
                            </span>
                        </div>
                    </div>
                )}

                <div
                    className={!isMobile ? "content content-width mt-3" : ''}
                    style={{
                        flex: 1,
                        border: isMobile ? '' : `2px solid ${auth.color}`,
                        padding: isMobile ? '30px' : '20px',
                        paddingTop: isMobile ? '10px' : '20px',
                        marginLeft: isMobile ? '0' : (isActive ? '20px' : '20px'),
                        width: '100%',
                        transition: 'all 0.3s ease',
                        maxHeight: 'calc(100vh - 90px)',
                        overflowY: 'auto',
                        marginTop: isMobile ? '50px' : ''
                    }}
                    id="style-2"
                >
                    {loading && <FancyLoader auth={auth} text={loaderText} />}
                    {isRouteCreating && <FancyLoader auth={auth} text={`${loadPercent}% completed`} />}

                    {/* ================= HEADER ================= */}

                    <div style={{
                        marginBottom: "22px",
                        padding: "30px 24px 0"
                    }}>
                        <h2
                            style={{
                                margin: 0,
                                fontSize: "28px",
                                fontWeight: 700,
                                color: "#262626",
                            }}
                        >
                            AI Route Management
                        </h2>
                        <p style={{
                            color: "#8c8c8c",
                            fontSize: "16px",
                            marginTop: '3px'
                        }}>
                            Upload your Excel file and let AI intelligently assign branches & drivers
                        </p>
                    </div>


                    {/* ================= UPLOAD SECTION ================= */}
                    {!excelFile && (
                        <div
                            style={{
                                width: "100%",
                                textAlign: "center",
                                padding: screens.md ? "40px 20px" : "30px 16px",
                            }}
                        >
                            {/* AI BOT ICON CARD */}
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                                    width: screens.md ? "110px" : "90px",
                                    height: screens.md ? "110px" : "90px",
                                    borderRadius: screens.md ? "20px" : "18px",
                                    margin: "0 auto 20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                }}
                            >
                                <Bot size={screens.md ? 55 : 45} color="#fff" />
                            </div>

                            <h3
                                style={{
                                    fontSize: screens.md ? "22px" : "20px",
                                    fontWeight: "600",
                                    marginBottom: "10px",
                                    color: "#333",
                                }}
                            >
                                Upload Excel to Start AI Routing
                            </h3>

                            <p
                                style={{
                                    fontSize: screens.md ? "15px" : "14px",
                                    color: "#666",
                                    marginBottom: "30px",
                                    maxWidth: "500px",
                                    marginInline: "auto",
                                    lineHeight: "1.5"
                                }}
                            >
                                The AI engine will analyze customer addresses and automatically assign
                                the best matching branches and drivers.
                            </p>

                            {/* UPLOAD BUTTON */}
                            <div style={{
                                maxWidth: screens.md ? "450px" : "100%",
                                margin: "0 auto",
                                padding: screens.md ? "0" : "0 16px"
                            }}>
                                <Dragger {...uploadProps}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxIcon style={{
                                            color: auth.color,
                                            fontSize: screens.md ? "48px" : "32px"
                                        }} />
                                    </p>
                                    <p className="ant-upload-text" style={{
                                        fontSize: screens.md ? "16px" : "14px"
                                    }}>
                                        {screens.md ? "Click or drag Excel file here" : "Tap to upload Excel"}
                                    </p>
                                    <p className="ant-upload-hint" style={{
                                        fontSize: screens.md ? "14px" : "12px"
                                    }}>
                                        Supported: .xls, .xlsx
                                    </p>
                                </Dragger>
                            </div>


                        </div>
                    )}

                    {/* ================= SHOW AFTER EXCEL UPLOADED ================= */}
                    {excelFile && loading && (
                        <div style={{
                            padding: screens.md ? "30px" : "60px 20px",
                            textAlign: 'center'
                        }}>
                            <Spin spinning={true} size={screens.md ? "large" : "default"} />
                            <p style={{
                                marginTop: '20px',
                                color: auth.color,
                                fontWeight: '500'
                            }}>
                                Processing your file...
                            </p>
                        </div>
                    )}

                    {excelFile && !loading &&
                        <>
                            <div style={{
                                textAlign: screens.md ? "right" : "center",
                                margin: screens.md ? "30px 30px 20px 10px" : "20px 0",
                                display: 'flex',
                                flexDirection: screens.md ? 'row' : 'column',
                                gap: '10px',
                                justifyContent: screens.md ? 'flex-end' : 'center',
                                alignItems: 'center'
                            }}>
                                {swapMode && (
                                    <button style={{
                                        backgroundColor: auth.color,
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "8px",
                                        padding: screens.md ? "12px 15px" : "10px 20px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        width: screens.md ? 'auto' : '90%',
                                        fontSize: screens.md ? '14px' : '13px'
                                    }}
                                        onClick={() => handleConfirmSwap()}
                                    >
                                        Complete Swap
                                    </button>
                                )}
                                <button style={{
                                    backgroundColor: swapMode ? "#ff4d4f" : auth.color,
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: screens.md ? "12px 20px" : "10px 20px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    width: screens.md ? 'auto' : '90%',
                                    fontSize: screens.md ? '14px' : '13px'
                                }}
                                    onClick={() => {
                                        setSwapMode(!swapMode);
                                        if (!swapMode) {
                                            setExpandedKeys(finalRoutes.map(r => r.name));
                                        } else {
                                            setSelectedRoutes([]);
                                            setSelectedOrders([]);
                                            setExpandedKeys([]);
                                        }
                                    }}
                                >
                                    {swapMode ? "Cancel Swap" : "Swap Orders"}
                                </button>
                            </div>

                            <div style={{
                                margin: screens.md ? "30px" : "0",
                                marginTop: screens.md ? '0px' : '10px',
                                overflowX: 'auto'
                            }}>
                                <div className="ai-route-table">
                                    <Table
                                        dataSource={finalRoutes}
                                        columns={getTableColumns()}
                                        rowKey={(row) => row.name}
                                        size={screens.md ? "middle" : "small"}
                                        scroll={screens.xs ? { x: 400 } : {}}
                                        expandable={{
                                            expandIconColumnIndex: -1,
                                            expandedRowKeys: expandedKeys,
                                            onExpand: (expanded, record) => {
                                                setExpandedKeys(expanded ? [record.name] : []);
                                            },
                                            expandedRowRender: (route) => (
                                                <div style={{
                                                    background: '#fafafa',
                                                    borderRadius: '8px',
                                                    padding: screens.md ? '16px' : '12px',
                                                    margin: screens.md ? '0' : '0 -12px'
                                                }}>
                                                    <Table
                                                        dataSource={route.stops}
                                                        pagination={false}
                                                        rowKey={(r) => r.user_phoneno}
                                                        columns={getOrderColumns()}
                                                        size={screens.md ? "middle" : "small"}
                                                        scroll={screens.xs ? { x: 350 } : {}}
                                                        className="nested-table"
                                                    />
                                                </div>
                                            )
                                        }}
                                    />
                                    <div style={{
                                        textAlign: "center",
                                        margin: screens.md ? "0px 0px 0px 0px" : "20px 0",
                                        padding: screens.md ? "0" : "0 16px"
                                    }}>
                                        <button style={{
                                            backgroundColor: auth.color,
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            padding: screens.md ? "12px 15px" : "14px 30px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            width: screens.md ? 'auto' : '100%',
                                            fontSize: screens.md ? '14px' : '16px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                        }}
                                            onClick={() => handleCreateMultiRoutes()}
                                        >
                                            {screens.md ? "Create Routes" : " Create All Routes"}
                                        </button>
                                        {!screens.md && (
                                            <p style={{
                                                fontSize: '12px',
                                                color: '#666',
                                                marginTop: '10px'
                                            }}>
                                                {lastFinalRoutes.length} routes • {lastFinalRoutes.reduce((acc, r) => acc + r.stops.length, 0)} total orders
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>

                {/* Mobile Instructions Drawer */}
                <Drawer
                    title="📱 Mobile Guide"
                    placement="right"
                    onClose={() => setShowMobileInstructions(false)}
                    open={showMobileInstructions}
                    width={280}
                >
                    <div style={{ lineHeight: '1.6', fontSize: '14px' }}>
                        <h4 style={{ color: auth.color }}>How to use on mobile:</h4>
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>Upload Excel files from your device</li>
                            <li>Swipe tables horizontally to see more columns</li>
                            <li>Tap "View" to expand route details</li>
                            <li>Use Swap mode to move orders between routes</li>
                            <li>Rotate to landscape for better table view</li>
                        </ul>
                        <div style={{
                            marginTop: '20px',
                            padding: '12px',
                            background: '#f0f7ff',
                            borderRadius: '8px',
                            borderLeft: `4px solid ${auth.color}`
                        }}>
                            <strong>Tip:</strong> For large files, ensure stable internet connection as AI processing requires geocoding.
                        </div>
                    </div>
                </Drawer>

                {/* Mobile Menu Drawer */}
                <Drawer
                    title={
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Bot size={24} color={auth.color} />
                            <span>AI Route Manager</span>
                        </div>
                    }
                    placement="left"
                    onClose={() => setMobileMenuOpen(false)}
                    open={mobileMenuOpen}
                    width={280}
                >
                    <Sidebar active={true} page={"dashboard"} mobile={true} />
                </Drawer>
            </div>

            <style>{`
                /* 🎯 SCOPED ONLY TO AI ROUTE TABLE */
                .ai-route-table .ant-table,
                .ai-route-table .ant-table-container {
                    border: none !important;     
                    outline:none !important;
                    box-shadow: none !important;
                }

                .ai-route-table .ant-table-wrapper {
                    border: none !important;
                    box-shadow: none !important;
                }

                .ai-route-table .ant-table-expanded-row .ant-table {
                    border: none !important;
                    box-shadow: none !important;
                    margin-left: -12px !important;
                }

                /* Mobile optimizations */
                @media (max-width: 768px) {
                    .dashboard-container {
                        margin-top: 0 !important;
                        padding-top: 0 !important;
                    }
                    
                    .content.content-width {
                        border-radius: 12px !important;
                        margin: 0 !important;
                        padding: 16px !important;
                    }
                    
                    .ant-table-cell {
                        padding: 8px !important;
                    }
                    
                    .mobile-route-info {
                        padding: 4px 0;
                    }
                    
                    .mobile-order-info {
                        padding: 8px 0;
                    }
                    
                    .ant-table-expanded-row > .ant-table-cell {
                        padding: 0 !important;
                    }
                    
                    .nested-table .ant-table {
                        background: transparent !important;
                    }
                    
                    .ant-upload-drag {
                        padding: 20px 8px !important;
                    }
                    
                    .ant-upload-text {
                        font-size: 14px !important;
                    }
                    
                    .ant-upload-hint {
                        font-size: 12px !important;
                    }
                }

                @media (max-width: 480px) {
                    .ai-route-table {
                        margin: 0 -8px;
                    }
                    
                    .ant-table {
                        font-size: 12px;
                    }
                    
                    .mobile-header h3 {
                        font-size: 16px !important;
                    }
                }

                /* Touch-friendly improvements */
                @media (hover: none) and (pointer: coarse) {
                    .ant-btn,
                    button {
                        min-height: 44px;
                    }
                    
                    .ant-table-row {
                        min-height: 50px;
                    }
                    
                    input[type="checkbox"] {
                        transform: scale(1.3);
                        margin: 8px;
                    }
                    
                    .ant-upload-drag {
                        min-height: 200px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                /* Landscape optimizations */
                @media (max-width: 768px) and (orientation: landscape) {
                    .content.content-width {
                        max-height: 85vh;
                        overflow-y: auto;
                    }
                    
                    .ai-route-table .ant-table {
                        min-width: 600px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Index;

export const FancyLoader = ({ text, auth }) => {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {/* SPINNER */}
            <div className="spinner"></div>

            {/* TEXT */}
            <p style={{
                marginTop: "18px",
                fontSize: "18px",
                fontWeight: "600",
                color: "#333",
                letterSpacing: "0.5px",
                textAlign: "center",
                padding: "0 20px"
            }}>
                {text}
            </p>

            {/* Mobile progress indicator */}
            {text && text.includes("%") && (
                <div style={{
                    width: "80%",
                    maxWidth: "300px",
                    height: "6px",
                    background: "#f0f0f0",
                    borderRadius: "3px",
                    marginTop: "20px",
                    overflow: "hidden"
                }}>
                    <div style={{
                        width: text.split("%")[0] + "%",
                        height: "100%",
                        background: auth.color,
                        transition: "width 0.3s ease"
                    }}></div>
                </div>
            )}

            <style>{`
                .spinner {
                    width: 70px;
                    height: 70px;
                    border: 6px solid #ddd;
                    border-top: 6px solid ${auth.color};
                    border-radius: 50%;
                    animation: spin 0.9s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .spinner {
                        width: 50px;
                        height: 50px;
                        border-width: 4px;
                    }
                    
                    p {
                        font-size: 16px !important;
                    }
                }
            `}</style>
        </div>
    );
};