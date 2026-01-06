import React, { useEffect, useState } from "react";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import { Spin, Modal, Input, message, notification, Table, Tag, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Topinfocomp from "~/components/sections/topinfocomp";
import adminRepositery from "~/repositories/adminRepositery";
import { Edit, Search, Trash2, Filter, X, Plus, Calendar } from "lucide-react";
import { getAllbranch } from "~/store/branches/action";
import AuthRepository from "~/repositories/AuthRepository";
import { getAllshorter } from "~/store/shorters/action";
import shorterRepository from "~/repositories/shorterRepository";
import { toggleSidebar } from "~/store/auth/action";

const Manageshorters = () => {
    const [loader, setLoader] = useState(false);
    const [isActive, setActive] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setaddModalOpen] = useState(false);
    const [selectedShorter, setselectedShorter] = useState(null);
    const [user_id, setuser_id] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [address, setAddress] = useState("");
    const [branch, setBranch] = useState("");
    const [password, setPassword] = useState("");
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const [showFilters, setShowFilters] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const { auth } = useSelector(({ auth }) => auth);
    const shorters = useSelector((state) => state.shorters.allShorters || []);
    const dispatch = useDispatch()
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRow] = useState([]);
    let branches = useSelector((state) => state.branches.allBranch || []);
    const [filtered, setfiltered] = useState([])
    const [search, setsearch] = useState('')
    const [selectedBranch, setselectedbranch] = useState('')
    const [selectedStatus, setselectedStatus] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setendDate] = useState('')

    branches = branches.filter((branch) => branch.isActive === true)
    const isSidebarActive = useSelector((state) => state.auth.isSidebarActive);

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
            if (window.innerWidth > 868 && isSidebarActive) {
                dispatch(toggleSidebar()); // Close sidebar on desktop
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isClient, isSidebarActive, dispatch]);

    // Handle mobile menu toggle
    const handleMobileMenuToggle = () => {
        dispatch(toggleSidebar());
    };

    // Handle desktop sidebar toggle
    const handleDesktopToggle = () => {
        dispatch(toggleSidebar());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        dispatch(getAllbranch());
    }, [dispatch]);

    useEffect(() => {
        setfiltered(shorters)
    }, [shorters])

    let [formData, setFormData] = useState({
        user_id: "",
        phoneno: "",
        password: "",
        address: "",
        branch: "",
        role: 'sorter'
    });

    useEffect(() => {
        dispatch(getAllshorter());
    }, [dispatch]);

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("persist:MushroomAdmin"));
        const localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, []);

    useEffect(() => {
        if (auth?.color) {
            document.documentElement.style.setProperty('--jl-primary', auth.color);
        }
    }, [auth?.color]);

    useEffect(() => {
        let filtereddata = shorters.filter((driver) => {
            let matchsearch =
                !search.trim() ||
                driver.user_id.toLowerCase().includes(search.toLowerCase()) ||
                driver.phoneno.toLowerCase().includes(search.toLowerCase()) ||
                driver.address.toLowerCase().includes(search.toLowerCase());

            let matchesstatus =
                !selectedStatus || driver.isActive === (selectedStatus === "true");

            let matchesbranch =
                !selectedBranch || driver.branch._id === selectedBranch;

            let matchdate = true;

            if (startDate || endDate) {
                let created = driver.createdAt ? new Date(driver.createdAt) : null;

                if (!created) matchdate = false;

                let start = startDate ? new Date(startDate + "T00:00:00") : null;
                let end = endDate ? new Date(endDate + "T23:59:59") : null;

                if (start && created < start) matchdate = false;
                if (end && created > end) matchdate = false;
            }

            return matchsearch && matchesstatus && matchesbranch && matchdate;
        });

        setfiltered(filtereddata);
    }, [search, shorters, selectedBranch, selectedStatus, startDate, endDate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ["user_id", "password", "branch"];
        for (let field of requiredFields) {
            if (!formData[field]) {
                notification.error({
                    message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
                });
                return;
            }
        }

        try {
            setLoader(true);
            const result = await AuthRepository.Register(formData);
            if (result && result.status === 201) {
                message.success("Sorter Created Successfully!");
                setFormData({
                    user_id: "",
                    phoneno: "",
                    password: "",
                    address: "",
                    branch: "",
                    role: 'sorter'
                });
                setaddModalOpen(false)
                dispatch(getAllshorter());
            } else {
                notification.error({
                    message: result?.message || "Something went wrong",
                });
            }
        } catch (error) {
            notification.error({
                message: error.response?.data?.message || "Failed to create Sorter",
            });
        } finally {
            setLoader(false);
        }
    };

    const handleEdit = (shorter) => {
        setselectedShorter(shorter);
        setuser_id(shorter.user_id);
        setPhoneno(shorter.phoneno);
        setAddress(shorter.address);
        setBranch(shorter.branch?.name || "");
        setPassword("");
        setEditModalOpen(true);
    };

    const handleEditSubmit = async () => {
        if (!user_id.trim()) {
            notification.error({ message: "Sorter name cannot be empty" });
            return;
        }

        try {
            setLoader(true);
            const formdata = {
                user_id,
                phoneno,
                address,
                branch: selectedShorter.branch?._id || "",
            };
            if (password.trim()) formdata.password = password.trim();

            const result = await shorterRepository.editShorter(selectedShorter._id, formdata);

            if (result?.status === 200) {
                message.success("Sorter updated successfully!");
                setEditModalOpen(false);
                setselectedShorter(null);
                dispatch(getAllshorter());
            } else {
                notification.error({
                    message: result?.message || "Failed to update sorter",
                });
            }
        } catch (error) {
            notification.error({
                message: error?.response?.data?.message || "Error updating sorter",
            });
        } finally {
            setLoader(false);
        }
    };

    const handleInactive = (shorter) => {
        Modal.confirm({
            title: "Confirm",
            content: `Do you want to set ${shorter.user_id} as Inactive?`,
            okText: "Yes",
            cancelText: "No",
            centered: true,
            onOk: () => performStatusUpdate(shorter._id, false),
        });
    };

    const handleActive = (shorter) => {
        Modal.confirm({
            title: "Confirm",
            content: `Do you want to activate ${shorter.user_id}?`,
            okText: "Yes",
            cancelText: "No",
            centered: true,
            onOk: () => performStatusUpdate(shorter._id, true),
        });
    };

    const performStatusUpdate = async (shorterId, status) => {
        const formdata = { isActive: status };
        const result = await shorterRepository.editShorter(shorterId, formdata);

        if (result?.status === 200) {
            if (status) {
                notification.success({ message: "Sorter activated successfully!" });
            } else {
                notification.info({ message: "Sorter set to inactive" });
            }
            dispatch(getAllshorter())
        } else {
            notification.error({ message: result?.message || "Failed to update status" });
        }
    };

    const activeShorters = shorters.filter((d) => d.isActive);
    const inactiveShorters = shorters.filter((d) => !d.isActive);

    const handleDelete = (shorterId) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to Delete this Sorter?',
            okText: 'Yes',
            onOk: () => performDelete(shorterId),
            cancelText: 'No',
            centered: true
        });
    }

    const performDelete = async (shorterId) => {
        const result = await shorterRepository.delete(shorterId)

        if (result.status === 200) {
            notification.info({ message: 'Sorter Deleted successfully' });
            dispatch(getAllshorter())
        }
        else {
            notification.error({ message: result.message })
        }
    };

    // Responsive columns for desktop
    const columnsCommon = [
        {
            title: "S.No",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) =>
                (pagination.current - 1) * pagination.pageSize + index + 1,
            width: 80,
            align: "center",
        },
        { title: "User ID", dataIndex: "user_id", key: "user_id" },
        { title: "Phone", dataIndex: "phoneno", key: "phoneno" },
        ...(auth?.role === "appadmin"
            ? [
                {
                    title: "Superadmin",
                    dataIndex: ["superadmin", "user_id"],
                    key: "superadmin",
                }
            ]
            : []
        ),
        {
            title: "Branch",
            dataIndex: ["branch", "name"],
            key: "branch",
            render: (txt) => (txt ? String(txt).toUpperCase() : "-"),
        },
        {
            title: "Status",
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive) => <Tag color={isActive ? "green" : "red"}>{isActive ? "Active" : "Inactive"}</Tag>,
        },
        { title: "Address", dataIndex: "address", key: "address" },
        {
            title: "Action",
            align: 'center',
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive, record) => (
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button
                        onClick={() => isActive ? handleInactive(record) : handleActive(record)}
                        style={{
                            backgroundColor: isActive ? "#ff2d2d" : "#04a33e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "4px 10px",
                            width: '100px',
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        {isActive ? "Inactivate" : "Activate"}
                    </button>
                    <Edit
                        onClick={() => handleEdit(record)}
                        style={{
                            color: auth.color || "var(--theme-color)",
                            cursor: "pointer"
                        }}
                        size={20}
                    />
                    {auth?.role === "appadmin" && (
                        <Trash2
                            onClick={() => handleDelete(record._id)}
                            style={{ color: 'red', cursor: "pointer" }}
                            size={20}
                        />
                    )}
                </div>
            ),
        },
    ];

    // Mobile table columns
    const columnsMobile = [
        {
            title: "Sorter Details",
            dataIndex: "user_id",
            key: "user_id",
            render: (text, record) => (
                <div style={{ padding: '10px 0' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
                        {record.user_id}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>
                        {record.phoneno}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>
                        {record.branch?.name ? String(record.branch.name).toUpperCase() : "-"}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                        {record.address || "No address"}
                    </div>
                    <Tag
                        color={record.isActive ? "green" : "red"}
                        style={{ fontSize: '11px', padding: '2px 8px' }}
                    >
                        {record.isActive ? "Active" : "Inactive"}
                    </Tag>
                </div>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            align: 'right',
            render: (_, record) => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                    <button
                        onClick={() => record.isActive ? handleInactive(record) : handleActive(record)}
                        style={{
                            backgroundColor: record.isActive ? "#ff2d2d" : "#04a33e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "6px 12px",
                            fontSize: "12px",
                            cursor: "pointer",
                            minWidth: '90px'
                        }}
                    >
                        {record.isActive ? "Inactivate" : "Activate"}
                    </button>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <Edit
                            onClick={() => handleEdit(record)}
                            style={{
                                color: auth.color || "var(--theme-color)",
                                cursor: "pointer"
                            }}
                            size={18}
                        />
                        {auth?.role === "appadmin" && (
                            <Trash2
                                onClick={() => handleDelete(record._id)}
                                style={{ color: 'red', cursor: "pointer" }}
                                size={18}
                            />
                        )}
                    </div>
                </div>
            ),
        },
    ];

    const inputStyle = {
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginTop: "5px",
        marginBottom: "15px",
        fontSize: "15px",
    };

    const labelStyle = {
        fontWeight: "600",
        color: "#333",
    };

    return (
        <div>
            <Spin spinning={loader} tip="Loading...">
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    {/* Mobile Sidebar */}
                    {isMobile ? (
                        <div style={{
                            width: '100%',
                            minWidth: '100%',
                            transition: 'all 0.3s ease',
                            position: 'fixed',
                            top: '0',
                            left: isSidebarActive ? '0' : '-100%',
                            height: '100vh',
                            zIndex: 1000,
                            backgroundColor: '#fff',
                            boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
                            overflowY: 'auto'
                        }}>
                            <Sidebar active={false} page="dashboard" />
                            {isSidebarActive && (
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
                        // Desktop Sidebar
                        <div id="sidebar" className={isSidebarActive ? "slide-show" : null}
                            style={{
                                width: isSidebarActive ? '80px' : '250px',
                                minWidth: isSidebarActive ? '80px' : '250px',
                                transition: 'all 0.3s ease',
                            }}>
                            <Sidebar active={isSidebarActive} page="dashboard" />
                            <div className="slide-toggle" onClick={handleDesktopToggle}>
                                <span className="qc-arrow">
                                    <i
                                        className={`fas ${isSidebarActive ? 'fa-angle-double-right' : 'fa-angle-double-left'}`}
                                        style={{ color: auth.color }}
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
                            padding: isMobile ? '10px' : '20px',
                            paddingTop: isMobile ? '10px' : '20px',
                            marginLeft: isMobile ? '0' : (isSidebarActive ? '20px' : '20px'),
                            width: '100%',
                            transition: 'all 0.3s ease',
                            maxHeight: 'calc(100vh - 90px)',
                            overflowY: 'auto',
                            marginTop: isMobile ? '0' : ''
                        }}
                        id="style-2"
                    >
                        {/* Top Info Cards - Responsive */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: isMobile ? 'column' : 'row',
                                alignItems: 'center',
                                justifyContent: "space-around",
                                gap: "20px",
                                padding: isMobile ? "20px 15px" : "30px 20px",
                            }}
                        >
                            <Topinfocomp
                                color={auth.color}
                                header="Total Sorters"
                                data={shorters}
                                icon="fa-solid fa-user-gear"
                            />
                            <Topinfocomp
                                icon="fa-solid fa-circle-check"
                                header="Active Sorters"
                                data={activeShorters}
                                color="#04a33e"
                            />
                            <Topinfocomp
                                color="#ff2d2d"
                                header="Inactive Sorters"
                                data={inactiveShorters}
                                icon="fa-solid fa-circle-xmark"
                            />
                        </div>

                        {/* Add Sorter Button - Only show for non-appadmin */}
                        {auth.role !== 'appadmin' && (
                            <div style={{
                                textAlign: isMobile ? "center" : "right",
                                margin: isMobile ? "10px 15px 20px" : "0px 20px 20px 0px"
                            }}>
                                <button
                                    onClick={() => setaddModalOpen(true)}
                                    style={{
                                        backgroundColor: auth.color,
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "8px",
                                        padding: isMobile ? "10px 16px" : "12px 20px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontSize: isMobile ? "14px" : "16px",
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <Plus size={isMobile ? 16 : 18} />
                                    Add Sorter
                                </button>
                            </div>
                        )}

                        <div style={{
                            margin: isMobile ? '15px' : '30px'
                        }}>
                            {/* Search and Filter Section */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: isMobile ? 'stretch' : 'center',
                                gap: isMobile ? '15px' : '20px',
                                marginBottom: '20px',
                            }}>
                                {/* Search Bar */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        borderRadius: "8px",
                                        border: "2px solid #cdcdcd",
                                        width: isMobile ? "100%" : "450px",
                                        minWidth: isMobile ? "100%" : "300px",
                                        outline: "none",
                                        background: 'white',
                                        transition: "0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.border = `2px solid ${auth.color}`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "2px solid #cdcdcd";
                                    }}
                                >
                                    <Search
                                        size={isMobile ? 18 : 22}
                                        color="gray"
                                        style={{ marginInline: "10px" }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search userid, phone or address..."
                                        value={search}
                                        onChange={(e) => setsearch(e.target.value)}
                                        style={{
                                            border: "none",
                                            padding: isMobile ? "12px 8px" : "15px 12px",
                                            outline: "none",
                                            width: "100%",
                                            background: "transparent",
                                            fontSize: isMobile ? "14px" : "16px",
                                        }}
                                    />
                                </div>

                                {/* Filter Controls */}
                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    {/* Mobile Filter Toggle */}
                                    {isMobile && (
                                        <Button
                                            onClick={() => setShowFilters(!showFilters)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                padding: '8px 12px',
                                                border: `2px solid ${auth.color}`,
                                                borderRadius: '8px',
                                                background: 'white',
                                                color: auth.color,
                                                fontWeight: '500',
                                                width: '100%',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Filter size={16} />
                                            Filters
                                            {showFilters ? <X size={16} /> : null}
                                        </Button>
                                    )}

                                    {/* Filters Container */}
                                    {(!isMobile || showFilters) && (
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: isMobile ? 'column' : 'row',
                                            gap: isMobile ? '12px' : '15px',
                                            width: isMobile ? '100%' : 'auto',
                                            padding: isMobile ? '15px' : '0',
                                            border: isMobile ? '1px solid #eee' : 'none',
                                            borderRadius: isMobile ? '8px' : '0',
                                            background: isMobile ? '#f9f9f9' : 'transparent',
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: isMobile ? 'column' : 'row',
                                                gap: isMobile ? '12px' : '15px',
                                                flexWrap: 'wrap',
                                                width: '100%',
                                            }}>
                                                {/* Date Filters */}
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    flex: isMobile ? '1' : '0 0 auto',
                                                }}>
                                                    <input
                                                        type='date'
                                                        style={{
                                                            width: isMobile ? '100%' : '150px',
                                                            height: isMobile ? '36px' : '40px',
                                                            paddingInline: '10px',
                                                            borderRadius: "8px",
                                                            border: "2px solid #cdcdcd",
                                                            fontSize: isMobile ? '14px' : '16px',
                                                        }}
                                                        value={startDate}
                                                        onChange={(e) => setStartDate(e.target.value)}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.border = `2px solid ${auth.color}`;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.border = "2px solid #cdcdcd";
                                                        }}
                                                    />
                                                </div>

                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    flex: isMobile ? '1' : '0 0 auto',
                                                }}>
                                                    <input
                                                        type='date'
                                                        style={{
                                                            width: isMobile ? '100%' : '150px',
                                                            height: isMobile ? '36px' : '40px',
                                                            paddingInline: '10px',
                                                            borderRadius: "8px",
                                                            border: "2px solid #cdcdcd",
                                                            fontSize: isMobile ? '14px' : '16px',
                                                        }}
                                                        placeholder='Select end date'
                                                        onChange={(e) => setendDate(e.target.value)}
                                                        value={endDate}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.border = `2px solid ${auth.color}`;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.border = "2px solid #cdcdcd";
                                                        }}
                                                    />
                                                </div>

                                                {/* Branch Filter */}
                                                {(auth.role === 'superadmin' || auth.role === 'appadmin') && (
                                                    <select
                                                        style={{
                                                            width: isMobile ? '100%' : '150px',
                                                            height: isMobile ? '36px' : '40px',
                                                            paddingInline: '10px',
                                                            borderRadius: "8px",
                                                            border: "2px solid #cdcdcd",
                                                            fontSize: isMobile ? '14px' : '16px',
                                                            background: 'white',
                                                        }}
                                                        value={selectedBranch}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.border = `2px solid ${auth.color}`;
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.border = "2px solid #cdcdcd";
                                                        }}
                                                        onChange={(e) => setselectedbranch(e.target.value)}
                                                    >
                                                        <option value="" selected disabled hidden>Select branch</option>
                                                        {branches.map((opt) => (
                                                            <option key={opt._id} value={opt._id}>
                                                                {opt.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}

                                                {/* Status Filter */}
                                                <select
                                                    style={{
                                                        width: isMobile ? '100%' : '150px',
                                                        height: isMobile ? '36px' : '40px',
                                                        paddingInline: '10px',
                                                        borderRadius: "8px",
                                                        border: "2px solid #cdcdcd",
                                                        fontSize: isMobile ? '14px' : '16px',
                                                        background: 'white',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.border = `2px solid ${auth.color}`;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.border = "2px solid #cdcdcd";
                                                    }}
                                                    value={selectedStatus}
                                                    onChange={(e) => setselectedStatus(e.target.value)}
                                                >
                                                    <option value="" selected disabled hidden>Select status</option>
                                                    <option value={"true"}>Active</option>
                                                    <option value={"false"}>Inactive</option>
                                                </select>

                                                {/* Clear Filters Button */}
                                                <button
                                                    style={{
                                                        width: isMobile ? '100%' : '100px',
                                                        height: isMobile ? '36px' : '40px',
                                                        cursor: 'pointer',
                                                        border: 'none',
                                                        color: 'white',
                                                        background: auth.color || "#bfb719",
                                                        borderRadius: '8px',
                                                        fontSize: isMobile ? '14px' : '16px',
                                                        fontWeight: '500',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.opacity = 0.6;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.opacity = 1;
                                                    }}
                                                    onClick={() => {
                                                        setsearch('');
                                                        setselectedStatus('');
                                                        setselectedbranch('');
                                                        setStartDate('');
                                                        setendDate('');
                                                        if (isMobile) setShowFilters(false);
                                                    }}
                                                >
                                                    Clear filters
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Table */}
                            <div style={{
                                overflowX: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                borderRadius: '8px',
                                border: '1px solid #f0f0f0',
                            }}>
                                <Table
                                    dataSource={filtered || []}
                                    rowKey="_id"
                                    bordered
                                    columns={isMobile ? columnsMobile : columnsCommon}
                                    scroll={isMobile ? { x: true } : undefined}
                                    onHeaderRow={() => ({
                                        style: {
                                            backgroundColor: "var(--theme-color)",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            whiteSpace: 'nowrap',
                                        },
                                    })}
                                    pagination={{
                                        current: pagination.current,
                                        pageSize: pagination.pageSize,
                                        total: shorters ? shorters.length : 0,
                                        showSizeChanger: !isMobile,
                                        showQuickJumper: !isMobile,
                                        hideOnSinglePage: false,
                                        size: isMobile ? 'small' : 'default',
                                        showTotal: (total, range) =>
                                            isMobile ? `${range[0]}-${range[1]} of ${total}` :
                                                `Showing ${range[0]}-${range[1]} of ${total} items`,
                                        onChange: (page, pageSize) =>
                                            setPagination({ current: page, pageSize }),
                                    }}
                                    size={isMobile ? "small" : "middle"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Sorter Modal */}
                <Modal
                    title='Add Sorter'
                    open={addModalOpen}
                    onCancel={() => setaddModalOpen(false)}
                    onOk={handleSubmit}
                    okText="Add Sorter"
                    cancelText="Cancel"
                    width={isMobile ? "90%" : 520}
                    centered
                >
                    <div style={{ maxHeight: isMobile ? '60vh' : 'none', overflowY: isMobile ? 'auto' : 'visible' }}>
                        <label style={labelStyle}>User ID</label>
                        <input
                            type="text"
                            name="user_id"
                            value={formData.user_id}
                            onChange={handleChange}
                            placeholder="Enter user ID"
                            style={inputStyle}
                            required
                        />

                        <label style={labelStyle}>Phone Number</label>
                        <input
                            type="text"
                            name="phoneno"
                            value={formData.phoneno}
                            onChange={handleChange}
                            placeholder="Enter Phone Number"
                            style={inputStyle}
                        />

                        <label style={labelStyle}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            style={inputStyle}
                            required
                        />

                        <label style={labelStyle}>Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter Address (optional)"
                            style={{ ...inputStyle, height: "80px", resize: "none" }}
                        />

                        <label style={labelStyle}>Branch</label>
                        <select
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        >
                            <option value="">Select Branch</option>
                            {auth.role === 'superadmin' ?
                                (branches && branches.length > 0 ? (
                                    branches.map((b) => (
                                        <option key={b._id} value={b._id}>
                                            {b.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Loading branches...</option>
                                )) : (
                                    <option value={auth.branch} selected>{auth.branchname}</option>
                                )
                            }
                        </select>
                    </div>
                </Modal>

                {/* Edit Modal */}
                <Modal
                    title="Edit Sorter"
                    open={editModalOpen}
                    onCancel={() => setEditModalOpen(false)}
                    onOk={handleEditSubmit}
                    okText="Update"
                    cancelText="Cancel"
                    width={isMobile ? "90%" : 520}
                    centered
                >
                    <div style={{ maxHeight: isMobile ? '60vh' : 'none', overflowY: isMobile ? 'auto' : 'visible' }}>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Sorter Name</label>
                        <Input
                            value={user_id}
                            onChange={(e) => setuser_id(e.target.value)}
                            placeholder="Enter name"
                            style={{ marginBottom: "20px" }}
                            size={isMobile ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Phone No</label>
                        <Input
                            value={phoneno}
                            onChange={(e) => setPhoneno(e.target.value)}
                            placeholder="Enter phone number"
                            style={{ marginBottom: "20px" }}
                            size={isMobile ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Address</label>
                        <Input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter address"
                            style={{ marginBottom: "20px" }}
                            size={isMobile ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch</label>
                        <Input
                            value={branch}
                            disabled
                            style={{ marginBottom: "20px", backgroundColor: "#f5f5f5" }}
                            size={isMobile ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Password (Optional)</label>
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password (optional)"
                            style={{ marginBottom: "20px" }}
                            size={isMobile ? "middle" : "large"}
                        />
                    </div>
                </Modal>
            </Spin>
        </div>
    );
};

export default Manageshorters;