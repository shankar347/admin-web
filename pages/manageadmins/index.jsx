import React, { useEffect, useState } from "react";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import { Spin, Modal, Input, message, notification, Table, Tag, Grid, Dropdown, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAlladmins, updateadmin } from "~/store/superadmins/action";
import Topinfocomp from "~/components/sections/topinfocomp";
import { getAllbranch } from "~/store/branches/action";
import { Edit, Search, Trash2, Filter, X, Plus, Calendar, ChevronDown } from "lucide-react";
import AuthRepository from "~/repositories/AuthRepository";
import adminRepositery from "~/repositories/adminRepositery";
import { toggleSidebar } from "~/store/auth/action";

const { useBreakpoint } = Grid;

const ManageAdmins = () => {
    const [loader, setLoader] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [user_id, setuser_id] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [address, setAddress] = useState("");
    const [branch, setBranch] = useState("");
    const [password, setPassword] = useState(""); // ✅ NEW FIELD
    const [addModalOpen, setaddModalOpen] = useState(false);
    const [filtered, setfiltered] = useState([])
    const [search, setsearch] = useState('')
    const [selectedBranch, setselectedbranch] = useState('')
    const [selectedStatus, setselectedStatus] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setendDate] = useState('')
    const [showFilters, setShowFilters] = useState(false);

    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const { auth } = useSelector(({ auth }) => auth);
    const admins = useSelector((state) => state.superadmins.alladmins || []);
    const dispatch = useDispatch();
    let branches = useSelector((state) => state.branches.allBranch || []);
    const screens = useBreakpoint();
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const isActive = useSelector((state) => state.auth.isSidebarActive);

    branches = branches.filter((branch) => branch.isActive === true)
    const toggleClass = () => setActive(!isActive);
    let [formData, setFormData] = useState({
        user_id: "",
        phoneno: "",
        password: "",
        address: "",
        branch: "",
        role: "admin"
    });

    useEffect(() => {
        dispatch(getAlladmins());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllbranch());
    }, [dispatch]);

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
        if (auth?.color) {
            document.documentElement.style.setProperty('--jl-primary', auth.color);
        }
    }, [auth?.color]);

    // ------- Edit Modal -------
    const handleEdit = (admin) => {
        setSelectedAdmin(admin);
        setuser_id(admin.user_id);
        setPhoneno(admin.phoneno);
        setAddress(admin.address);
        setBranch(admin.branch?.name || "");
        setPassword(""); // ✅ Reset password field
        setEditModalOpen(true);
    };

    useEffect(() => {
        setfiltered(admins)
    }, [admins])

    useEffect(() => {
        let filtereddata = admins.filter((driver) => {
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
    }, [search, admins, selectedBranch, selectedStatus, startDate, endDate]);

    const handleEditSubmit = async () => {
        if (!user_id.trim()) {
            notification.error({ message: "Admin name cannot be empty" });
            return;
        }

        try {
            setLoader(true);
            const formdata = {
                user_id,
                phoneno,
                address,
                branch: selectedAdmin.branch?._id || "",
            };

            // ✅ include password only if user entered one
            if (password.trim()) {
                formdata.password = password.trim();
            }

            await dispatch(updateadmin({ id: selectedAdmin._id, formdata }));

            message.success("Admin updated successfully!");
            setEditModalOpen(false);
            setSelectedAdmin(null);
        } catch (error) {
            notification.error({
                message: error.response?.data?.message || "Failed to update admin",
            });
        } finally {
            setLoader(false);
        }
    };

    // ------- Activate / Inactivate -------
    const handleInactive = (admin) => {
        Modal.confirm({
            title: "Confirm",
            content: `Do you want to set ${admin.user_id} as Inactive?`,
            okText: "Yes",
            cancelText: "No",
            centered: true,
            onOk: () => performStatusUpdate(admin._id, false),
        });
    };

    const handleActive = (admin) => {
        Modal.confirm({
            title: "Confirm",
            content: `Do you want to activate ${admin.user_id}?`,
            okText: "Yes",
            cancelText: "No",
            centered: true,
            onOk: () => performStatusUpdate(admin._id, true),
        });
    };

    const performStatusUpdate = async (adminId, status) => {
        try {
            setLoader(true);
            await dispatch(updateadmin({ id: adminId, formdata: { isActive: status } }));

            if (status) {
                notification.success({ message: "Admin activated successfully!" });
            } else {
                notification.info({ message: "Admin set to inactive" });
            }
        } catch (error) {
            notification.error({
                message: "Failed to update admin status",
            });
        } finally {
            setLoader(false);
        }
    };

    const activeAdmins = admins.filter((a) => a.isActive);
    const inactiveAdmins = admins.filter((a) => !a.isActive);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
            const result = await AuthRepository.Register(formData); // API call to backend
            if (result && result.status === 201) {
                message.success("Admin Created Successfully!");
                setFormData({
                    user_id: "",
                    phoneno: "",
                    password: "",
                    address: "",
                    branch: "",
                    role: "admin",
                });
                setaddModalOpen(false)
                dispatch(getAlladmins())
            } else {
                notification.error({
                    message: result?.message || "Something went wrong",
                });
            }
        } catch (error) {
            notification.error({
                message: error.response?.data?.message || "Failed to create Admin",
            });
        } finally {
            setLoader(false);
        }
    };

    const handleDelete = (adminId) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to Delete this  Admin ?',
            okText: 'Yes',
            onOk: () => performDelete(adminId),
            cancelText: 'No',
            centered: true
        });
    }

    const performDelete = async (adminId) => {
        const result = await adminRepositery.deleteAdmin(adminId)

        if (result.status === 200) {
            notification.info({ message: 'Admin Deleted successfully' });
            dispatch(getAlladmins())
        }
        else {
            notification.error({ message: result.message })
        }
    };

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

    const columnsCommon = [
        {
            title: "S.No",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) =>
                (pagination.current - 1) * pagination.pageSize + index + 1,
            width: screens.xs ? 50 : 80,
            align: "center",
            responsive: ['xs'],
        },
        {
            title: "User ID",
            dataIndex: "user_id",
            key: "user_id",
            responsive: ['xs', 'sm'],
        },
        {
            title: "Phone",
            dataIndex: "phoneno",
            key: "phoneno",
            responsive: ['sm'],
        },
        ...(auth?.role === "appadmin"
            ? [
                {
                    title: "Superadmin",
                    dataIndex: ["superadmin", "user_id"],
                    key: "superadmin",
                    responsive: ['md'],
                }
            ]
            : []
        ),
        {
            title: "Branch",
            dataIndex: ["branch", "name"],
            key: "branch",
            render: (txt) => (txt ? String(txt).toUpperCase() : "-"),
            responsive: ['sm'],
        },
        {
            title: "Status",
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive) => <Tag color={isActive ? "green" : "red"}>{isActive ? "Active" : "Inactive"}</Tag>,
            responsive: ['xs'],
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            responsive: ['md'],
        },
        {
            title: "Action",
            align: 'center',
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive, record) => (
                <div style={{
                    display: 'flex',
                    flexDirection: screens.xs ? 'column' : 'row',
                    gap: '8px',
                    alignItems: 'center'
                }}>
                    <button
                        onClick={() => isActive ? handleInactive(record) : handleActive(record)}
                        style={{
                            backgroundColor: isActive ? "#ff2d2d" : "#04a33e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: screens.xs ? "6px 8px" : "4px 10px",
                            minWidth: screens.xs ? "90px" : "100px",
                            cursor: "pointer",
                            fontWeight: 500,
                            fontSize: screens.xs ? "12px" : "14px",
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
                        size={screens.xs ? 18 : 20}
                    />

                    {auth?.role === "appadmin" && (
                        <Trash2
                            onClick={() => handleDelete(record._id)}
                            style={{ color: 'red', cursor: "pointer" }}
                            size={screens.xs ? 18 : 20}
                        />
                    )}
                </div>
            ),
        },
    ];

    // Responsive table columns for mobile
    const columnsMobile = [
        {
            title: "Admin Details",
            dataIndex: "user_id",
            key: "user_id",
            render: (text, record) => (
                <div style={{ padding: '8px 0' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
                        {record.user_id}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>
                        {record.phoneno}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>
                        {record.branch?.name ? String(record.branch.name).toUpperCase() : "-"}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>
                        {record.address}
                    </div>
                    <Tag
                        color={record.isActive ? "green" : "red"}
                        style={{ fontSize: '11px', padding: '2px 6px', marginTop: '4px' }}
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
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button
                        onClick={() => record.isActive ? handleInactive(record) : handleActive(record)}
                        style={{
                            backgroundColor: record.isActive ? "#ff2d2d" : "#04a33e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "6px 10px",
                            fontSize: "12px",
                            cursor: "pointer",
                        }}
                    >
                        {record.isActive ? "Deactivate" : "Activate"}
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Spin spinning={loader} tip="Loading...">
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
                            <Sidebar active={isActive} page={'manageadmins'} />
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
                            padding: isMobile ? '10px' : '20px',
                            paddingTop: isMobile ? '10px' : '20px',
                            marginLeft: isMobile ? '0' : (isActive ? '20px' : '20px'),
                            width: '100%',
                            transition: 'all 0.3s ease',
                            maxHeight: 'calc(100vh - 90px)',
                            overflowY: 'auto',
                            marginTop: isMobile ? '0' : ''
                        }}
                        id="style-2"
                    >
                        {/* Top Info - Responsive Grid */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: isMobile ? 'column' : 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                gap: "30px",
                                padding: screens.xs ? "20px 15px" : "30px 20px",
                            }}
                        >
                            <Topinfocomp
                                color={auth.color}
                                header="Total Admins"
                                data={admins}
                                icon="fa-solid fa-user-shield"
                                responsive={true}
                            />
                            <Topinfocomp
                                icon="fa-solid fa-circle-check"
                                header="Active Admins"
                                data={activeAdmins}
                                color="#04a33e"
                                responsive={true}
                            />
                            <Topinfocomp
                                color="#ff2d2d"
                                header="Inactive Admins"
                                data={inactiveAdmins}
                                icon="fa-solid fa-circle-xmark"
                                responsive={true}
                            />
                        </div>

                        {/* Action Bar */}
                        <div style={{
                            padding: screens.xs ? '15px' : '30px',
                            paddingTop: screens.xs ? '10px' : '0',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: screens.xs ? 'stretch' : 'center',
                                gap: screens.xs ? '15px' : '20px',
                                marginBottom: '20px',
                            }}>
                                {/* Search Bar */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        borderRadius: "8px",
                                        border: "2px solid #cdcdcd",
                                        width: screens.xs ? "100%" : "450px",
                                        minWidth: screens.xs ? "100%" : "300px",
                                        outline: "none",
                                        background: 'white',
                                        transition: "0.2s ease",
                                        flex: screens.xs ? '1' : '0 0 auto',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.border = `2px solid ${auth.color}`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "2px solid #cdcdcd";
                                    }}
                                >
                                    <Search
                                        size={screens.xs ? 18 : 22}
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
                                            padding: screens.xs ? "12px 8px" : "15px 12px",
                                            outline: "none",
                                            width: "100%",
                                            background: "transparent",
                                            fontSize: screens.xs ? "14px" : "16px",
                                        }}
                                    />
                                </div>

                                {/* Filter and Add Button Group */}
                                <div style={{
                                    display: 'flex',
                                    gap: '10px',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    {/* Filter Toggle Button for Mobile */}
                                    {screens.xs && (
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
                                            }}
                                        >
                                            <Filter size={16} />
                                            Filters
                                            {showFilters ? <X size={16} /> : <ChevronDown size={16} />}
                                        </Button>
                                    )}

                                    {/* Desktop Filters or Mobile Expanded Filters */}
                                    {(!screens.xs || showFilters) && (
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: screens.xs ? 'column' : 'row',
                                            gap: screens.xs ? '12px' : '15px',
                                            width: screens.xs ? '100%' : 'auto',
                                            padding: screens.xs ? '15px' : '0',
                                            border: screens.xs ? '1px solid #eee' : 'none',
                                            borderRadius: screens.xs ? '8px' : '0',
                                            background: screens.xs ? '#f9f9f9' : 'transparent',
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: screens.xs ? 'column' : 'row',
                                                gap: screens.xs ? '12px' : '15px',
                                                flexWrap: 'wrap',
                                                width: '100%',
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    flex: screens.xs ? '1' : '0 0 auto',
                                                }}>
                                                    <input
                                                        type='date'
                                                        style={{
                                                            width: screens.xs ? '100%' : '150px',
                                                            height: screens.xs ? '36px' : '40px',
                                                            paddingInline: '10px',
                                                            borderRadius: "8px",
                                                            border: "2px solid #cdcdcd",
                                                            fontSize: screens.xs ? '14px' : '16px',
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
                                                    flex: screens.xs ? '1' : '0 0 auto',
                                                }}>
                                                    <input
                                                        type='date'
                                                        style={{
                                                            width: screens.xs ? '100%' : '150px',
                                                            height: screens.xs ? '36px' : '40px',
                                                            paddingInline: '10px',
                                                            borderRadius: "8px",
                                                            border: "2px solid #cdcdcd",
                                                            fontSize: screens.xs ? '14px' : '16px',
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

                                                {(auth.role === 'superadmin' || auth.role === 'appadmin') && (
                                                    <select
                                                        style={{
                                                            width: screens.xs ? '100%' : '150px',
                                                            height: screens.xs ? '36px' : '40px',
                                                            paddingInline: '10px',
                                                            borderRadius: "8px",
                                                            border: "2px solid #cdcdcd",
                                                            fontSize: screens.xs ? '14px' : '16px',
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

                                                <select
                                                    style={{
                                                        width: screens.xs ? '100%' : '150px',
                                                        height: screens.xs ? '36px' : '40px',
                                                        paddingInline: '10px',
                                                        borderRadius: "8px",
                                                        border: "2px solid #cdcdcd",
                                                        fontSize: screens.xs ? '14px' : '16px',
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

                                                <button
                                                    style={{
                                                        width: screens.xs ? '100%' : '100px',
                                                        height: screens.xs ? '36px' : '40px',
                                                        cursor: 'pointer',
                                                        border: 'none',
                                                        color: 'white',
                                                        background: auth.color || "#bfb719",
                                                        borderRadius: '8px',
                                                        fontSize: screens.xs ? '14px' : '16px',
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
                                                        if (screens.xs) setShowFilters(false);
                                                    }}
                                                >
                                                    Clear filters
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Add Admin Button */}
                                    {auth?.role === "appadmin" && (
                                        <Button
                                            onClick={() => setaddModalOpen(true)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: screens.xs ? '10px 15px' : '12px 20px',
                                                backgroundColor: auth.color || "#bfb719",
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontSize: screens.xs ? '14px' : '16px',
                                                fontWeight: '500',
                                                whiteSpace: 'nowrap',
                                                marginLeft: screens.xs ? '0' : 'auto',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.opacity = 0.8;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.opacity = 1;
                                            }}
                                        >
                                            <Plus size={screens.xs ? 16 : 18} />
                                            Add Admin
                                        </Button>
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
                                    columns={screens.xs ? columnsMobile : columnsCommon}
                                    scroll={screens.xs ? { x: true } : undefined}
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
                                        total: admins ? admins.length : 0,
                                        showSizeChanger: !screens.xs,
                                        showQuickJumper: !screens.xs,
                                        hideOnSinglePage: false,
                                        size: screens.xs ? 'small' : 'default',
                                        showTotal: (total, range) =>
                                            screens.xs ? `${range[0]}-${range[1]} of ${total}` :
                                                `Showing ${range[0]}-${range[1]} of ${total} items`,
                                        onChange: (page, pageSize) =>
                                            setPagination({ current: page, pageSize }),
                                    }}
                                    size={screens.xs ? "small" : "middle"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Admin Modal */}
                <Modal
                    title="Add New Admin"
                    open={addModalOpen}
                    onCancel={() => setaddModalOpen(false)}
                    onOk={handleSubmit}
                    okText="Create Admin"
                    cancelText="Cancel"
                    width={screens.xs ? "90%" : 520}
                    centered
                >
                    <div style={{ maxHeight: screens.xs ? '60vh' : 'none', overflowY: screens.xs ? 'auto' : 'visible' }}>
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
                            placeholder="Enter phone number"
                            style={inputStyle}
                        />

                        <label style={labelStyle}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            style={inputStyle}
                            required
                        />

                        <label style={labelStyle}>Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter address"
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
                            {branches && branches.length > 0 ? (
                                branches.map((b) => (
                                    <option key={b._id} value={b._id}>
                                        {b.name}
                                    </option>
                                ))
                            ) : (
                                <option disabled>Loading branches...</option>
                            )}
                        </select>
                    </div>
                </Modal>

                {/* Edit Admin Modal */}
                <Modal
                    title="Edit Admin"
                    open={editModalOpen}
                    onCancel={() => setEditModalOpen(false)}
                    onOk={handleEditSubmit}
                    okText="Update"
                    cancelText="Cancel"
                    width={screens.xs ? "90%" : 520}
                    centered
                >
                    <div style={{ maxHeight: screens.xs ? '60vh' : 'none', overflowY: screens.xs ? 'auto' : 'visible' }}>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Admin Name</label>
                        <Input
                            value={user_id}
                            onChange={(e) => setuser_id(e.target.value)}
                            placeholder="Enter name"
                            style={{ marginBottom: "20px" }}
                            size={screens.xs ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Phone No</label>
                        <Input
                            value={phoneno}
                            onChange={(e) => setPhoneno(e.target.value)}
                            placeholder="Enter phone number"
                            style={{ marginBottom: "20px" }}
                            size={screens.xs ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Address</label>
                        <Input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter address"
                            style={{ marginBottom: "20px" }}
                            size={screens.xs ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch</label>
                        <Input
                            value={branch}
                            disabled
                            style={{ marginBottom: "20px", backgroundColor: "#f5f5f5" }}
                            size={screens.xs ? "middle" : "large"}
                        />

                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>New Password (Optional)</label>
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                            style={{ marginBottom: "20px" }}
                            size={screens.xs ? "middle" : "large"}
                        />
                    </div>
                </Modal>
            </Spin>
        </div>
    );
};

export default ManageAdmins;