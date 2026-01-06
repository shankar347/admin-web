import React, { useEffect, useState } from "react";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import { Spin, Modal, Input, message, notification, Table, Tag, Button, Tooltip, Divider, Upload, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import SuperadminRepositery from "~/repositories/SuperadminRepositery";
import dayjs from "dayjs";
import Topinfocomp from "~/components/sections/topinfocomp";
import branchrepositery from "~/repositories/branchrepositery";
import { editbranchRequest, getAllbranch } from "~/store/branches/action";
import { Building, CrossIcon, Delete, Edit, Eye, EyeClosed, InboxIcon, Map, MapPin, MapPinHouse, MapPinned, MapPinPlus, MapPinPlusInsideIcon, Search, Trash2, UserPlus, UserSearch, View, ViewIcon, XCircle, XIcon } from "lucide-react";
import AuthRepository from "~/repositories/AuthRepository";
import { getAlladmins } from "~/store/superadmins/action";
import * as XLSX from "xlsx";
import { toggleSidebar } from "~/store/auth/action";

const ManageBranch = () => {
    const [loader, setLoader] = useState(false);
    const [isActive, setActive] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [branchName, setBranchName] = useState("");
    const [branchaddress, setBranchaddress] = useState("");
    const [branchCode, setBranchCode] = useState("");
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const { auth } = useSelector(({ auth }) => auth);
    const branches = useSelector((state) => state.branches.allBranch || []);
    const dispatch = useDispatch();
    const toggleClass = () => setActive(!isActive);
    const [search, setsearch] = useState('')
    const [filtered, setfiltered] = useState([])
    const [Areas, setAreas] = useState([])
    const [areaName, setareaname] = useState('')
    const [areaAddress, setareaAddress] = useState('')
    const [isareaaddOn, setisareaaddOn] = useState(false)
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [addModalOpen1, setaddModalOpen1] = useState(false);
    const [addModalOpen2, setaddModalOpen2] = useState(false);
    const [excelData, setExcelData] = useState([]);
    const [excelColumns, setExcelColumns] = useState([]);
    const [excelAreaNameCol, setExcelAreaNameCol] = useState(null);
    const [excelAreaAddrCol, setExcelAreaAddrCol] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    let [formData, setFormData] = useState({
        user_id: "",
        phoneno: "",
        password: "",
        address: "",
        branch: "",
        role: "admin"
    });

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

    useEffect(() => {
        setfiltered(branches)
    }, [branches])

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
            const result = await AuthRepository.Register(formData);
            if (result && result.status === 201) {
                message.success("Admin Assigned Successfully!");
                setFormData({
                    user_id: "",
                    phoneno: "",
                    password: "",
                    address: "",
                    branch: "",
                    role: "admin",
                });
                setaddModalOpen1(false)
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

    const handleExcelRead = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const workbook = XLSX.read(e.target.result, { type: "binary" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet);

            setExcelData(rows);
            if (rows.length > 0) {
                setExcelColumns(Object.keys(rows[0]));
            }
        };
        reader.readAsBinaryString(file);
    };

    const confirmExcelMapping = () => {
        if (!excelAreaNameCol || !excelAreaAddrCol) {
            return message.error("Please map both columns");
        }

        const newAreas = excelData.map((row) => ({
            name: row[excelAreaNameCol],
            address: row[excelAreaAddrCol]
        }));

        setAreas((prev) => [...prev, ...newAreas]);

        message.success("Areas added successfully!");
        setExcelColumns([]);
        setExcelAreaNameCol(null);
        setExcelAreaAddrCol(null);
        setExcelData([]);
    };

    useEffect(() => {
        if (!search.trim()) {
            setfiltered(branches);
            return;
        }

        let filtered = branches.filter((branch) =>
            branch.name.toLowerCase().includes(search.toLowerCase()) ||
            branch.branchcode.toLowerCase().includes(search.toLowerCase())
        )

        setfiltered(filtered)

    }, [search, branches])

    useEffect(() => {
        dispatch(getAllbranch());
    }, [dispatch]);

    useEffect(() => {
        if (auth?.color) {
            document.documentElement.style.setProperty('--jl-primary', auth.color);
        }
    }, [auth?.color]);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem("persist:MushroomAdmin"));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [dispatch]);

    const handleupdatearea = () => {
        setAreas(
            (prev) => prev.map((item, index) =>
                index === editIndex ? { name: areaName, address: areaAddress } : item
            ))
        setisareaaddOn(false)
        setareaAddress('')
        setareaname('')
        setEditIndex(null)
    }

    const handlecleararea = () => {
        setisareaaddOn(false)
        setAreas((prev) => ([
            ...prev,
            {
                name: areaName,
                address: areaAddress
            }
        ]))
        setareaAddress('')
        setareaname('')
    }

    const handleEdit = (branch) => {
        setSelectedBranch(branch);
        setBranchName(branch.name);
        setBranchaddress(branch.address)
        setAreas(branch.areas)
        setBranchCode(branch.branchcode || "");
        setEditModalOpen(true);
    };

    const handleDelete = (adminId) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to Delete this branch?',
            okText: 'Yes',
            onOk: () => performDelete(adminId),
            cancelText: 'No',
            centered: true
        });
    }

    const performDelete = async (adminId) => {
        const result = await branchrepositery.deleteBranch(adminId)

        if (result.status === 200) {
            notification.info({ message: 'Branch Deleted successfully' });
            dispatch(getAllbranch())
        }
        else {
            notification.error({ message: result.message })
        }
    };

    const handleEditSubmit = async () => {
        if (!branchName.trim()) {
            notification.error({ message: "Branch name cannot be empty" });
            return;
        }

        try {
            setLoader(true);
            const formdata = {
                name: branchName,
                branchcode: branchCode,
                address: branchaddress,
                areas: Areas
            };

            await dispatch(
                editbranchRequest({
                    id: selectedBranch._id,
                    formdata,
                })
            );

            message.success("Branch updated successfully!");
            setEditModalOpen(false);
            setSelectedBranch(null);

        } catch (error) {
            notification.error({
                message: error.response?.data?.message || "Failed to update Branch",
            });
        } finally {
            setLoader(false);
        }
    };

    const handleAddareasSubmit = async () => {
        if (Areas.length < 1) {
            notification.error({ message: "Add atleast one Area to update" });
            return;
        }

        try {
            setLoader(true);
            const formdata = {
                areas: Areas
            };

            dispatch(
                editbranchRequest({
                    id: selectedBranch._id,
                    formdata,
                })
            );

            message.success("Area added successfully!");
            setaddModalOpen2(false);
            setSelectedBranch(null);

        } catch (error) {
            notification.error({
                message: error.response || "Failed to update Branch",
            });
        } finally {
            setLoader(false);
        }
    };

    const handleAddSubmit = async () => {
        if (!branchName.trim() || !branchCode.trim() || !branchaddress.trim()) {
            notification.error({ message: "Please fill all fields" });
            return;
        }

        try {
            setLoader(true);
            const data = {
                name: branchName,
                branchcode: branchCode,
                address: branchaddress,
                areas: Areas
            };

            const result = await branchrepositery.createBranch(data);
            if (result && result.status === 200) {
                message.success("Branch Created Successfully!");
                setBranchName("");
                setBranchCode("");
                setBranchaddress('')
                setAreas([])
                setAddModalOpen(false);
                dispatch(getAllbranch());
            } else {
                notification.error({
                    message: result.message || "Something went wrong",
                });
            }
        } catch (error) {
            notification.error({
                message: error.response?.data?.message || "Failed to create Branch",
            });
        } finally {
            setLoader(false);
        }
    };

    const handleInactive = (branchId) => {
        Modal.confirm({
            title: "Confirm",
            content: "Do you want to set this branch as Inactive?",
            okText: "Yes",
            onOk: () => performInactive(branchId),
            cancelText: "No",
            centered: true,
        });
    };

    const handleActive = (branchId) => {
        Modal.confirm({
            title: "Confirm",
            content: "Do you want to set this branch as Active?",
            okText: "Yes",
            onOk: () => performActive(branchId),
            cancelText: "No",
            centered: true,
        });
    };

    const performInactive = (branchId) => {
        const updated = { isActive: false };
        dispatch(editbranchRequest({ id: branchId, formdata: updated }));
        notification.info({ message: "Branch set to inactive" });
    };

    const performActive = (branchId) => {
        const updated = { isActive: true };
        dispatch(editbranchRequest({ id: branchId, formdata: updated }));
        notification.success({ message: "Branch activated successfully" });
    };

    const activeBranches = branches.filter((b) => b.isActive);
    const inactiveBranches = branches.filter((b) => !b.isActive);

    // Desktop columns
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
            title: "Branch name",
            dataIndex: "name",
            key: "name",
            align: 'center',
        },
        {
            title: "Branch code",
            align: 'center',
            dataIndex: "branchcode",
            key: "branchcode"
        },
        {
            title: "Status",
            align: 'center',
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive) => <Tag color={isActive ? "green" : "red"}>{isActive ? "Active" : "Inactive"}</Tag>,
        },
        {
            title: "Address",
            align: 'center',
            key: "address",
            dataIndex: "address",
        },
        {
            title: "Actions",
            align: "center",
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive, record) => (
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: "8px",
                    alignItems: 'center'
                }}>
                    <button
                        onClick={() => isActive ? handleInactive(record) : handleActive(record)}
                        style={{
                            backgroundColor: isActive ? "#ff2d2d" : "#04a33e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "6px 12px",
                            minWidth: "100px",
                            cursor: "pointer",
                            fontWeight: 500,
                            fontSize: '14px'
                        }}
                    >
                        {isActive ? "Inactivate" : "Activate"}
                    </button>

                    <div style={{ display: 'flex', gap: '10px' }}>
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
                </div>
            ),
        },
        {
            title: "Admin",
            align: "center",
            key: "addAdmin",
            render: (_, record) => (
                <Tooltip title="Add Admin">
                    <UserPlus
                        onClick={() => {
                            setaddModalOpen1(true);
                            setFormData(prev => ({
                                ...prev,
                                branch: record._id
                            }));
                        }}
                        style={{
                            color: auth.color || "var(--theme-color)",
                            cursor: "pointer"
                        }}
                        size={22}
                    />
                </Tooltip>
            )
        },
        {
            title: "Areas",
            align: "center",
            key: "addAreas",
            render: (_, record) => (
                <Tooltip title="Add Areas">
                    <MapPinPlus
                        onClick={() => {
                            setSelectedBranch(record);
                            setaddModalOpen2(true);
                            setAreas(record.areas);
                        }}
                        style={{
                            color: auth.color || "var(--theme-color)",
                            cursor: "pointer"
                        }}
                        size={22}
                    />
                </Tooltip>
            )
        },
        {
            title: "Count",
            align: "center",
            key: "totalAreas",
            render: (_, record) => (
                <Tooltip title="Total Areas">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            color: auth.color || "var(--theme-color)",
                            cursor: "pointer",
                            fontWeight: 600
                        }}
                    >
                        <MapPin size={20} />
                        {record.areas?.length || 0}
                    </div>
                </Tooltip>
            )
        },
        {
            title: "View",
            align: "center",
            key: "viewAreas",
            render: (_, record) =>
                !expandedRowKeys.includes(record._id) ? (
                    <Tooltip title="View Areas">
                        <EyeClosed
                            onClick={() => {
                                setExpandedRowKeys([...expandedRowKeys, record._id]);
                            }}
                            style={{
                                color: auth.color || "var(--theme-color)",
                                cursor: "pointer"
                            }}
                            size={22}
                        />
                    </Tooltip>
                ) : (
                    <Tooltip title="Hide Areas">
                        <Eye
                            onClick={() => {
                                setExpandedRowKeys(
                                    expandedRowKeys.filter(id => id !== record._id)
                                );
                            }}
                            style={{
                                color: auth.color || "var(--theme-color)",
                                cursor: "pointer"
                            }}
                            size={22}
                        />
                    </Tooltip>
                )
        },
    ];

    // Mobile columns
    const columnsMobile = [
        {
            title: "Branch Details",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div style={{ padding: '12px 0' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px', color: '#333' }}>
                        {record.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {record.branchcode}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {record.address}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} /> Areas: {record.areas?.length || 0}
                    </div>
                    <Tag
                        color={record.isActive ? "green" : "red"}
                        style={{ fontSize: '11px', padding: '2px 8px', marginRight: '8px' }}
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
                        <UserPlus
                            onClick={() => {
                                setaddModalOpen1(true);
                                setFormData(prev => ({
                                    ...prev,
                                    branch: record._id
                                }));
                            }}
                            style={{
                                color: auth.color || "var(--theme-color)",
                                cursor: "pointer"
                            }}
                            size={18}
                        />
                        <MapPinPlus
                            onClick={() => {
                                setSelectedBranch(record);
                                setaddModalOpen2(true);
                                setAreas(record.areas);
                            }}
                            style={{
                                color: auth.color || "var(--theme-color)",
                                cursor: "pointer"
                            }}
                            size={18}
                        />
                        {!expandedRowKeys.includes(record._id) ? (
                            <EyeClosed
                                onClick={() => {
                                    setExpandedRowKeys([...expandedRowKeys, record._id]);
                                }}
                                style={{
                                    color: auth.color || "var(--theme-color)",
                                    cursor: "pointer"
                                }}
                                size={18}
                            />
                        ) : (
                            <Eye
                                onClick={() => {
                                    setExpandedRowKeys(
                                        expandedRowKeys.filter(id => id !== record._id)
                                    );
                                }}
                                style={{
                                    color: auth.color || "var(--theme-color)",
                                    cursor: "pointer"
                                }}
                                size={18}
                            />
                        )}
                    </div>
                </div>
            ),
        },
    ];

    const expandedRowRender = (branch) => {
        const Areacolumns = [
            {
                title: 'S.No',
                dataIndex: 'serial',
                width: 78,
                render: (_, __, i) => <b>{i + 1}</b>
            },
            {
                title: 'Area Name',
                dataIndex: 'name',
                render: (text) => <b>{text}</b>
            },
            {
                title: 'Address',
                dataIndex: 'address'
            },
        ]

        return (
            <div style={{
                padding: isMobile ? '10px' : '15px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                margin: isMobile ? '5px 0' : '10px 0'
            }}>
                <Table
                    columns={Areacolumns}
                    dataSource={branch.areas}
                    size="small"
                    pagination={false}
                    rowKey={(r, i) => i}
                    bordered
                    scroll={isMobile ? { x: true } : undefined}
                />
            </div>
        );
    }

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
            <Spin spinning={loader} tip={"Loading..."}>
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
                            <Sidebar active={false} page={"dashboard"} />
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
                            <Sidebar active={isSidebarActive} page={"dashboard"} />
                            <div className="slide-toggle" onClick={handleDesktopToggle}>
                                <span className={"qc-arrow"}>
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
                                header={"Total Branches"}
                                data={branches}
                                icon={"fa-solid fa-code-branch"}
                            />
                            <Topinfocomp
                                icon={"fa-solid fa-circle-check"}
                                header={"Active Branches"}
                                data={activeBranches}
                                color={"#04a33e"}
                            />
                            <Topinfocomp
                                color={"#ff2d2d"}
                                header={"Inactive Branches"}
                                data={inactiveBranches}
                                icon={"fa-solid fa-circle-xmark"}
                            />
                        </div>

                        {/* Add Branch Button */}
                        {auth.role !== 'appadmin' && (
                            <div style={{
                                textAlign: isMobile ? "center" : "right",
                                margin: isMobile ? "10px 15px 20px" : "0px 20px 20px 0px"
                            }}>
                                <button
                                    onClick={() => setAddModalOpen(true)}
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
                                    <i
                                        className="fa-solid fa-plus"
                                        style={{ marginRight: "8px" }}
                                    ></i>
                                    Add Branch
                                </button>
                            </div>
                        )}

                        <div style={{
                            margin: isMobile ? '15px' : '30px'
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
                                    marginBottom: '15px',
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
                                    placeholder="Search branch name or code..."
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
                                        total: branches ? branches.length : 0,
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
                                    expandable={{
                                        expandedRowRender,
                                        expandedRowKeys,
                                        expandIconColumnIndex: -1,
                                        onExpandedRowsChange: setExpandedRowKeys,
                                        expandIcon: () => null,
                                        rowExpandable: r => !r.isDateHeader
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Branch Modal */}
                <Modal
                    title="Add Branch"
                    open={addModalOpen}
                    onCancel={() => setAddModalOpen(false)}
                    onOk={handleAddSubmit}
                    okText="Create"
                    width={isMobile ? "90%" : 520}
                    centered
                >
                    <div style={{ maxHeight: isMobile ? '60vh' : 'none', overflowY: isMobile ? 'auto' : 'visible' }}>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch Name</label>
                        <Input
                            value={branchName}
                            onChange={(e) => setBranchName(e.target.value)}
                            placeholder="Enter branch name"
                            style={{ marginBottom: "15px" }}
                            size={isMobile ? "middle" : "large"}
                        />
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch Code</label>
                        <Input
                            value={branchCode}
                            onChange={(e) => setBranchCode(e.target.value)}
                            placeholder="ex: pvm, gdy"
                            style={{ marginBottom: "15px" }}
                            size={isMobile ? "middle" : "large"}
                        />
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch Address</label>
                        <Input
                            value={branchaddress}
                            onChange={(e) => setBranchaddress(e.target.value)}
                            placeholder="address with pincode"
                            size={isMobile ? "middle" : "large"}
                        />
                    </div>
                </Modal>

                {/* Add Areas Modal */}
                <Modal
                    title="Add Areas"
                    open={addModalOpen2}
                    onCancel={() => setaddModalOpen2(false)}
                    onOk={handleAddareasSubmit}
                    okText="Create"
                    width={isMobile ? "95%" : 650}
                    centered
                >
                    <div style={{ maxHeight: isMobile ? '70vh' : 'none', overflowY: 'auto' }}>
                        {/* TOP RIGHT BUTTONS */}
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 10,
                                marginBottom: 15,
                            }}
                        >
                            {!isareaaddOn && (
                                <Button type="primary" onClick={() => setisareaaddOn(true)} size={isMobile ? "small" : "middle"}>
                                    + Add Manually
                                </Button>
                            )}

                            {isareaaddOn && (
                                <>
                                    <Button danger onClick={() => setisareaaddOn(false)} size={isMobile ? "small" : "middle"}>
                                        Cancel
                                    </Button>
                                    <Button type="primary" onClick={handlecleararea} size={isMobile ? "small" : "middle"}>
                                        Confirm Area
                                    </Button>
                                </>
                            )}
                        </div>

                        {/* AREA LIST */}
                        {!isareaaddOn && Areas.length > 0 && (
                            <>
                                <label style={{ fontWeight: 600 }}>View Areas</label>
                                {Areas.map((area, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            gap: "10px",
                                            padding: isMobile ? "8px 10px" : "12px 14px",
                                            background: "white",
                                            borderRadius: "12px",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            flex: 1,
                                            flexWrap: 'wrap'
                                        }}>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                minWidth: isMobile ? '100px' : '120px',
                                                gap: "10px"
                                            }}>
                                                <b style={{ fontSize: isMobile ? "14px" : "16px" }}>{area.name}</b>
                                            </div>
                                            <MapPin size={isMobile ? 16 : 20} />
                                            <p style={{ fontSize: isMobile ? "14px" : "16px", margin: 0 }}>{area.address}</p>
                                        </div>
                                        <XCircle
                                            color="red"
                                            size={isMobile ? 18 : 20}
                                            style={{ cursor: "pointer", flexShrink: 0 }}
                                            onClick={() =>
                                                setAreas(prev => prev.filter((_, index) => index !== i))
                                            }
                                        />
                                    </div>
                                ))}
                            </>
                        )}

                        {/* MANUAL ADD */}
                        {isareaaddOn && (
                            <>
                                <label style={{ fontWeight: 600 }}>Area Name</label>
                                <Input
                                    value={areaName}
                                    onChange={(e) => setareaname(e.target.value)}
                                    placeholder="Enter area name"
                                    style={{ marginBottom: 15 }}
                                    size={isMobile ? "middle" : "large"}
                                />

                                <label style={{ fontWeight: 600 }}>Area Address</label>
                                <Input
                                    value={areaAddress}
                                    onChange={(e) => setareaAddress(e.target.value)}
                                    placeholder="Area address with pincode"
                                    size={isMobile ? "middle" : "large"}
                                />
                            </>
                        )}

                        {/* EXCEL UPLOAD (DRAGGER) */}
                        {!isareaaddOn && (
                            <>
                                <Divider />
                                <label style={{ fontWeight: 600 }}>Upload Excel</label>
                                <Upload.Dragger
                                    accept=".xls,.xlsx"
                                    multiple={false}
                                    beforeUpload={(file) => {
                                        handleExcelRead(file);
                                        return false;
                                    }}
                                    style={{
                                        padding: isMobile ? 15 : 25,
                                        borderRadius: 12,
                                        background: "#fafafa",
                                    }}
                                >
                                    <p className="ant-upload-drag-icon">
                                        <InboxIcon style={{ fontSize: isMobile ? 30 : 40 }} />
                                    </p>
                                    <p className="ant-upload-text">Click or drag Excel file here</p>
                                    <p className="ant-upload-hint">
                                        Upload Excel with columns like: Area Name, Address
                                    </p>
                                </Upload.Dragger>
                            </>
                        )}

                        {/* COLUMN MAPPING */}
                        {excelColumns.length > 0 && !isareaaddOn && (
                            <div style={{ marginTop: 20 }}>
                                <Divider />
                                <label style={{ fontWeight: 600 }}>Map Columns</label>

                                <div style={{ marginTop: 10 }}>
                                    <p><b>Area Name Column</b></p>
                                    <Select
                                        style={{ width: "100%" }}
                                        placeholder="Select column for Area Name"
                                        options={excelColumns.map(c => ({ label: c, value: c }))}
                                        onChange={setExcelAreaNameCol}
                                        size={isMobile ? "small" : "middle"}
                                    />

                                    <p style={{ marginTop: 15 }}><b>Area Address Column</b></p>
                                    <Select
                                        style={{ width: "100%" }}
                                        placeholder="Select column for Area Address"
                                        options={excelColumns.map(c => ({ label: c, value: c }))}
                                        onChange={setExcelAreaAddrCol}
                                        size={isMobile ? "small" : "middle"}
                                    />
                                </div>

                                <Button
                                    type="primary"
                                    block
                                    style={{ marginTop: 20 }}
                                    onClick={confirmExcelMapping}
                                    size={isMobile ? "small" : "middle"}
                                >
                                    Confirm & Add Areas
                                </Button>
                            </div>
                        )}
                    </div>
                </Modal>

                {/* Edit Branch Modal */}
                <Modal
                    title="Edit Branch"
                    open={editModalOpen}
                    onCancel={() => setEditModalOpen(false)}
                    onOk={handleEditSubmit}
                    okText="Update"
                    width={isMobile ? "95%" : 650}
                    centered
                >
                    <div style={{ maxHeight: isMobile ? '70vh' : 'none', overflowY: 'auto' }}>
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch Name</label>
                        <Input
                            value={branchName}
                            onChange={(e) => setBranchName(e.target.value)}
                            placeholder="Enter new name"
                            style={{ marginBottom: "15px" }}
                            size={isMobile ? "middle" : "large"}
                        />
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch Code</label>
                        <Input
                            value={branchCode}
                            onChange={(e) => setBranchCode(e.target.value)}
                            placeholder="ex: pvm, gdy"
                            style={{ marginBottom: "15px" }}
                            size={isMobile ? "middle" : "large"}
                        />
                        <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Branch Address</label>
                        <Input
                            value={branchaddress}
                            onChange={(e) => setBranchaddress(e.target.value)}
                            placeholder="address with pincode"
                            size={isMobile ? "middle" : "large"}
                        />

                        <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'end',
                            marginTop: '15px',
                            gap: '10px'
                        }}>
                            {
                                isareaaddOn &&
                                <Button type="primary" danger style={{
                                    width: isMobile ? '100px' : 120,
                                    height: isMobile ? 32 : 35
                                }}
                                    onClick={() => {
                                        setisareaaddOn(false)
                                    }}
                                    size={isMobile ? "small" : "middle"}
                                >
                                    Cancel
                                </Button>
                            }
                            <Button type="primary" style={{
                                width: isMobile ? '120px' : 120,
                                height: isMobile ? 32 : 35
                            }}
                                onClick={() => {
                                    isareaaddOn ? (
                                        editIndex !== null ?
                                            handleupdatearea()
                                            :
                                            handlecleararea()
                                    ) : setisareaaddOn(true)
                                }}
                                size={isMobile ? "small" : "middle"}
                            >
                                {isareaaddOn ? (editIndex !== null ? "Update Area" : "Confirm Area") : "Add Area"}
                            </Button>
                        </div>

                        <div>
                            {!isareaaddOn && Areas.length > 0 && <label style={{ fontWeight: 600 }}>Areas</label>}
                            {
                                !isareaaddOn &&
                                Areas.map((area, i) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "10px",
                                            padding: isMobile ? "8px 10px" : "12px 14px",
                                            background: "white",
                                            borderRadius: "12px",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)",
                                            marginTop: "10px",
                                            cursor: "pointer",
                                            transition: "all 0.25s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.12), 0 10px 24px rgba(0,0,0,0.10)";
                                            e.currentTarget.style.transform = "scale(1.02)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.06)";
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, flexWrap: 'wrap' }}>
                                            <b style={{ fontSize: isMobile ? "14px" : "16px" }}>{area.name}</b>
                                            <MapPin color={auth.color} size={isMobile ? 16 : 20} />
                                            <p style={{ fontSize: isMobile ? "14px" : "16px", margin: 0 }}>{area.address}</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <Edit
                                                onClick={() => {
                                                    setEditIndex(i)
                                                    setisareaaddOn(true)
                                                    setareaname(area.name)
                                                    setareaAddress(area.address)
                                                }}
                                                style={{
                                                    marginRight: isMobile ? '5px' : '10px',
                                                    color: auth.color || "var(--theme-color)",
                                                    cursor: "pointer"
                                                }}
                                                size={isMobile ? 18 : 20}
                                            />
                                            <XCircle color="red" size={isMobile ? 18 : 20} style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setAreas((prev) => prev.filter((_, index) => index !== i))
                                                }} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {
                            isareaaddOn &&
                            <>
                                <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Area Name</label>
                                <Input
                                    value={areaName}
                                    onChange={(e) => setareaname(e.target.value)}
                                    placeholder="Enter area name"
                                    style={{ marginBottom: "15px" }}
                                    size={isMobile ? "middle" : "large"}
                                />
                                <label style={{ fontWeight: 600, display: 'block', marginBottom: '8px' }}>Area Address</label>
                                <Input
                                    value={areaAddress}
                                    onChange={(e) => setareaAddress(e.target.value)}
                                    placeholder="Area address with pincode"
                                    size={isMobile ? "middle" : "large"}
                                />
                            </>
                        }
                    </div>
                </Modal>

                {/* Add Admin Modal */}
                <Modal
                    title="Add Admin"
                    open={addModalOpen1}
                    onCancel={() => setaddModalOpen1(false)}
                    onOk={handleSubmit}
                    okText="Create"
                    width={isMobile ? "90%" : 520}
                    centered
                >
                    <div style={{ maxHeight: isMobile ? '60vh' : 'none', overflowY: isMobile ? 'auto' : 'visible' }}>
                        <label style={labelStyle}>Admin ID</label>
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
                            placeholder="Enter Address"
                            style={{ ...inputStyle, height: "80px", resize: "none" }}
                        />
                    </div>
                </Modal>
            </Spin>

            <style>{`
                .ai-route-table .ant-table-expanded-row .ant-table {
                    border: none !important;
                    box-shadow: none !important;
                    margin-left: -12px !important;
                }
                
                @media (max-width: 768px) {
                    .ai-route-table .ant-table-expanded-row .ant-table {
                        margin-left: 0 !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ManageBranch;