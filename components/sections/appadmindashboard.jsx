import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '~/components/sections/sidebar';
import { Spin, Modal, Input, notification, Table, Tag, Tooltip, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getAllsuperadmins, editSuperadmin } from '~/store/superadmins/action';
import Topinfocomp from './topinfocomp';
import dayjs from 'dayjs';
import SuperadminRepositery from '~/repositories/SuperadminRepositery';
import { Edit, Trash, Trash2 } from 'lucide-react';
import { columnsCommon } from './adminTablecolumns';

const AppadminDashboard = () => {
    const [loader, setLoader] = useState(false);
    const [isActive, setActive] = useState(false);
    const [activeAdmins, setActiveadmins] = useState([]);
    const [InactiveAdmins, setINActiveadmins] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [multiBranchEnabled, setMultiBranchEnabled] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null); const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const [addModalOpen, setaddModalOpen] = useState(false);
    // console.log(addModalOpen, 'af')


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData1({ ...formData1, image: files[0] });
        } else {
            setFormData1({ ...formData1, [name]: value });
        }
    };

    const today = new Date().toISOString().split("T")[0];
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);
    const expiryDate = expiry.toISOString().split("T")[0];

    const [formData1, setFormData1] = useState({
        user_id: '',
        description: '',
        branchLimit: '1',
        sorterLimit: '2',
        driverLimit: '2',
        startDate: today,
        expiryDate: expiryDate,
        password: '',
        colorTheme: '#bfb719',
        image: null
    });
    const [formData, setFormData] = useState({
        user_id: "",
        password: "",
        description: "",
        image: null,
        branchLimit: "",
        sorterLimit: '',
        driverLimit: "",
        startDate: today,
        expiryDate: expiryDate,
        colorTheme: "#bfb719", // Default color
    });

    const Allsuperadmins = useSelector((state) => state.superadmins.allSuperadmins);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllsuperadmins());
    }, [dispatch]);

    useEffect(() => {
        const active = Allsuperadmins.filter((admin) => admin.isActive);
        const inactive = Allsuperadmins.filter((admin) => !admin.isActive);
        setActiveadmins(active);
        setINActiveadmins(inactive);
    }, [Allsuperadmins]);

    const toggleClass = () => setActive(!isActive);

    const handleEdit = (admin) => {
        setSelectedAdmin(admin);
        setFormData({
            user_id: admin.user_id,
            description: admin.description,
            branchLimit: admin.branchLimit,
            sorterLimit: admin.sorterLimit,
            driverLimit: admin.driverLimit,
            startDate: dayjs(admin.startDate).format('YYYY-MM-DD'),
            expiryDate: dayjs(admin.expiryDate).format('YYYY-MM-DD'),
            password: '',
            colorTheme: admin.colorTheme || '#bfb719',
            image: null
        });
        setEditModalOpen(true);
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
        }
    };

    const handleEditSubmit = () => {
        if (!selectedAdmin) return;

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) formDataToSend.append(key, value);
        });

        formDataToSend.set('startDate', new Date(formData.startDate).toISOString());
        formDataToSend.set('expiryDate', new Date(formData.expiryDate).toISOString());

        if (!formData.password) formDataToSend.delete('password');

        dispatch(editSuperadmin({ id: selectedAdmin._id, formdata: formDataToSend }));
        notification.success({ message: 'Superadmin updated successfully' });
        setEditModalOpen(false);
    };

    const handleInactive = (adminId) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to set this superadmin as Inactive?',
            okText: 'Yes',
            onOk: () => performInactive(adminId),
            cancelText: 'No',
            centered: true
        });
    };

    const handleDelete = (adminId) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to Delete this  superadmin ?',
            okText: 'Yes',
            onOk: () => performDelete(adminId),
            cancelText: 'No',
            centered: true
        });
    }

    const handleActive = (adminId) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to set this superadmin as Active?',
            okText: 'Yes',
            onOk: () => performActive(adminId),
            cancelText: 'No',
            centered: true
        });
    };

    const performInactive = (adminId) => {
        const updated = { isActive: false };
        dispatch(editSuperadmin({ id: adminId, formdata: updated }));
        notification.info({ message: 'Superadmin set to inactive' });
    };

    const performDelete = async (adminId) => {

        const result = await SuperadminRepositery.deleteSuperadmin(adminId)

        if (result.status === 200) {
            notification.info({ message: 'Superadmin Deleted successfully' });
            dispatch(getAllsuperadmins())
        }
        else {
            notification.error({ message: result.message })
        }
    };

    const performActive = (adminId) => {
        const updated = { isActive: true };
        dispatch(editSuperadmin({ id: adminId, formdata: updated }));
        notification.success({ message: 'Superadmin activated successfully' });
    };

    const getDaysLeft = (expiryDate) => {
        const diff = dayjs(expiryDate).diff(dayjs(), 'day');
        return diff;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = [
            "user_id",
            "password",
            "branchLimit",
            "sorterLimit",
            "driverLimit",
            "startDate",
            "expiryDate",
            "colorTheme",
        ];

        for (let field of requiredFields) {
            if (!formData1[field]) {
                notification.error({
                    message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
                });
                return;
            }
        }

        const formDataToSend = new FormData();
        Object.entries(formData1).forEach(([key, value]) => {
            if (value) formDataToSend.append(key, value);
        });

        const result = await SuperadminRepositery.AddSuperadmin(formDataToSend);
        console.log(result,
            'afa', result.status, result.status === 200)
        if (result.status === 200) {
            notification.success({ message: "Superadmin Created Successfully!" });
            setFormData1({
                user_id: "",
                password: "",
                description: "",
                image: null,
                branchLimit: "",
                sorterLimit: '',
                driverLimit: "",
                startDate: today,
                expiryDate: expiryDate,
                colorTheme: "#bfb719",
            });
            setaddModalOpen(false)
            dispatch(getAllsuperadmins())
        } else if (result && result.message) {
            notification.error({ message: result.message });
        } else {
            notification.error({ message: "Something went wrong" });
        }

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

    const columnsCommon = [
        {
            title: "S.No",
            dataIndex: "index",
            key: "index",
            width: 70,
            align: "center",
            render: (text, record, index) =>
                (pagination.current - 1) * pagination.pageSize + index + 1,
        },
        {
            title: "Profile",
            dataIndex: "image",
            key: "image",
            align: "center",
            render: (img) => (
                <img
                    src={`http://192.168.1.148:5000/${img?.replace(/\\/g, "/")}`}
                    alt="admin"
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #e2e2e2",
                    }}
                />
            ),
        },
        {
            title: "User_id",
            dataIndex: "user_id",
            key: "user_id",
            render: (text) => (
                <span style={{ fontWeight: 600, color: "#333" }}>{text}</span>
            ),
        },
        {
            title: "Branch Limit",
            dataIndex: "branchLimit",
            key: "branchLimit",
            align: "center",
        },
        {
            title: "Driver Limit",
            dataIndex: "driverLimit",
            key: "driverLimit",
            align: "center",
        },
        {
            title: "Sorter Limit",
            dataIndex: "sorterLimit",
            key: "sorterLimit",
            align: "center",
        },
        {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate",
            align: "center",
            render: (date) => dayjs(date).format("DD MMM YYYY"),
        },
        {
            title: "Expiry Date",
            dataIndex: "expiryDate",
            key: "expiryDate",
            align: "center",
            render: (date, record) => {
                const daysLeft = getDaysLeft(record.expiryDate);
                const expiryColor = daysLeft <= 15 ? "#ff2d2d" : "#04a33e";
                return (
                    <span style={{ color: expiryColor, fontWeight: 600 }}>
                        {daysLeft <= 0
                            ? "Expired"
                            : `In ${daysLeft} day${daysLeft > 1 ? "s" : ""}`}
                    </span>
                );
            },
        },
        {
            title: "Status",
            dataIndex: "isActive",
            key: "isActive",
            align: "center",
            render: (isActive) => (
                <Tag color={isActive ? "green" : "red"}>
                    {isActive ? "Active" : "Inactive"}
                </Tag>
            ),
        },

        {
            title: "Action",
            dataIndex: "isActive",
            key: "isActive",
            align: "center",
            render: (isActive, record) =>
                isActive ? (
                    <button
                        onClick={() => handleInactive(record._id)}
                        style={{
                            backgroundColor: "#ff2d2d",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "5px 12px",
                            width: "90px",
                            cursor: "pointer",
                            fontWeight: 500,
                            transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        Inactive
                    </button>
                ) : (
                    <button
                        onClick={() => handleActive(record._id)}
                        style={{
                            backgroundColor: "#04a33e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "5px 12px",
                            width: "90px",
                            cursor: "pointer",
                            fontWeight: 500,
                            transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        Active
                    </button>
                ),
        },
        {
            title: "Edit",
            key: "edit",
            align: "center",
            render: (_, record) => (
                <Tooltip title="Edit Admin">
                    <Edit
                        onClick={() => handleEdit(record)}
                        style={{
                            color: "#bfb719",
                            cursor: "pointer",
                            transition: "all 0.3s",
                        }}
                        size={20}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#bfb719")}

                    />
                </Tooltip>
            ),
        },
        {
            title: "Delete",
            key: "delete",
            align: "center",
            render: (_, record) => (
                <Tooltip title="Delete Admin">
                    <Trash2
                        onClick={() => handleDelete(record._id)}
                        style={{
                            color: "red",
                            cursor: "pointer",
                            transition: "all 0.3s",
                        }}
                        size={20}


                    />
                </Tooltip>
            ),
        },
    ];


    return (
        <div>
            <Spin spinning={loader} tip={'Loading...'}>
                <HeaderDashboard />
                <div className="dashboard-container mt-5 pt-2">
                    <div id="sidebar" className={isActive ? 'slide-show' : null}>
                        <Sidebar active={isActive} page={'dashboard'} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={'qc-arrow'}>
                                <i className="fas fa-angle-double-left"></i>
                            </span>
                        </div>
                    </div>

                    <div className="content content-width mt-3" id={'style-2'}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexWrap: 'wrap',
                                paddingBlock: '30px'
                            }}
                        >
                            <Topinfocomp
                                color={'#bfb719'}
                                header={'Total Superadmin'}
                                data={Allsuperadmins}
                                icon={'fa-solid fa-user-shield'}
                            />
                            <Topinfocomp
                                icon={'fa-solid fa-user-check'}
                                header={'Active Superadmin'}
                                data={activeAdmins}
                                color={'#04a33e'}
                            />
                            <Topinfocomp
                                color={'#ff2d2d'}
                                header={'Inactive Superadmin'}
                                data={InactiveAdmins}
                                icon={'fa-solid fa-user-xmark'}
                            />
                        </div>
                        <div style={{ textAlign: "right", margin: "0px 20px 20px 0px" }}>
                            <button
                                onClick={() => setaddModalOpen(true)}
                                style={{
                                    backgroundColor: '#bfb719',
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "12px 20px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                            >
                                <i
                                    className="fa-solid fa-plus"
                                    style={{ marginRight: "8px" }}
                                ></i>
                                Add Superadmin
                            </button>
                        </div>
                        <div style={{
                            margin: '30px'
                        }}>
                            <Table
                                dataSource={Allsuperadmins || []}  // ensure array
                                rowKey="_id"
                                bordered
                                columns={columnsCommon}
                                onHeaderRow={() => ({
                                    style: {
                                        backgroundColor: "var(--theme-color)",
                                        color: "#fff",
                                        fontWeight: "bold",
                                    },
                                })}
                                pagination={{
                                    current: pagination.current,
                                    pageSize: pagination.pageSize,
                                    total: Allsuperadmins ?
                                        Allsuperadmins.length : 0,
                                    showSizeChanger: true,
                                    showQuickJumper: true,
                                    hideOnSinglePage: false,   // 👈 Force show even for 1 page
                                    onChange: (page, pageSize) =>
                                        setPagination({ current: page, pageSize }),
                                }}
                            />

                        </div>
                    </div>
                </div>

                <Modal
                    title={'Add Superadmin'}
                    open={addModalOpen}
                    onCancel={() => setaddModalOpen(false)}
                    onOk={handleSubmit}
                    okText="Update"
                >
                    <label style={labelStyle}>User_id</label>
                    <input
                        type="text"
                        name="user_id"
                        value={formData1.user_id}
                        onChange={handleChange}
                        placeholder="Enter user_id"
                        style={inputStyle}
                        required
                    />

                    {/* Password */}
                    <label style={labelStyle}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData1.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        style={inputStyle}
                        required
                    />

                    {/* Description */}
                    <label style={labelStyle}>Description</label>
                    <textarea
                        name="description"
                        value={formData1.description}
                        onChange={handleChange}
                        placeholder="Enter Description"
                        style={{ ...inputStyle, height: "80px", resize: "none" }}
                    />

                    {/* Color Theme */}
                    <label style={labelStyle}>Color Theme</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <input
                            type="color"
                            name="colorTheme"
                            value={formData1.colorTheme}
                            onChange={handleChange}
                            style={{ width: "60px", height: "40px", border: "none" }}
                        />
                        <input
                            type="text"
                            name="colorTheme"
                            value={formData1.colorTheme}
                            onChange={handleChange}
                            placeholder="Enter Color Code or Name"
                            style={{ ...inputStyle, flex: 1 }}
                        />
                    </div>

                    {/* Image Upload */}
                    <label style={labelStyle}>Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    {/* Image Preview */}
                    {formData1.image && (
                        <div style={{ marginBottom: "15px", textAlign: "center" }}>
                            <img
                                src={URL.createObjectURL(formData1.image)}
                                alt="Preview"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                    marginTop: "5px",
                                }}
                            />
                        </div>
                    )}

                    {/* Admin & Driver Limit */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: '20px',
                            marginTop: "15px",
                            backgroundColor: "#f6f6f6",
                            padding: "8px 12px",
                            borderRadius: "8px",
                        }}
                    >
                        <span style={{ fontWeight: 600 }}>Enable Multi Branch</span>
                        <Switch
                            checked={multiBranchEnabled}
                            onChange={(checked) => setMultiBranchEnabled(checked)}

                        />

                    </div>
                    <div style={{
                        fontSize: '14px',
                        margin: '5px',
                        marginInline: '25px',
                        marginBottom: '20px',
                    }}>
                        *By default single branch will be created with 2 driver and 2 shorter for 30 days
                    </div>

                    {/* Conditional Fields */}
                    {multiBranchEnabled && (
                        <>
                            <label style={labelStyle}>Branch Count Limit</label>
                            <input
                                type="number"
                                name="branchLimit"
                                value={formData1.branchLimit}
                                onChange={handleChange}
                                placeholder="Enter Branch Limit"
                                style={inputStyle}
                            />

                            <label style={labelStyle}>Sorter Count Limit</label>
                            <input
                                type="number"
                                name="sorterLimit"
                                value={formData1.sorterLimit}
                                onChange={handleChange}
                                placeholder="Enter Sorter Limit"
                                style={inputStyle}
                            />

                            <label style={labelStyle}>Driver Count Limit</label>
                            <input
                                type="number"
                                name="driverLimit"
                                value={formData1.driverLimit}
                                onChange={handleChange}
                                placeholder="Enter Driver Limit"
                                style={inputStyle}
                            />

                            <label style={labelStyle}>Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData1.startDate}
                                onChange={handleChange}
                                style={inputStyle}
                            />

                            <label style={labelStyle}>Expiry Date</label>
                            <input
                                type="date"
                                name="expiryDate"
                                value={formData1.expiryDate}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </>
                    )}

                </Modal>

                {/* --- Enhanced Edit Modal --- */}
                <Modal
                    title={`Edit ${selectedAdmin ? selectedAdmin.user_id : ''}`}
                    open={editModalOpen}
                    onCancel={() => setEditModalOpen(false)}
                    onOk={handleEditSubmit}
                    okText="Update"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label style={{ fontWeight: 600 }}>User_id</label>
                        <Input value={formData.user_id} onChange={(e) => handleInputChange('user_id', e.target.value)} />

                        <label style={{ fontWeight: 600 }}>Description</label>
                        <Input value={formData.description} onChange={(e) => handleInputChange('description', e.target.value)} />

                        <label style={{ fontWeight: 600 }}>Color Theme</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                                type="color"
                                name="colorTheme"
                                value={formData.colorTheme}
                                onChange={(e) => handleInputChange('colorTheme', e.target.value)}
                                style={{ width: '50px', height: '35px', border: 'none' }}
                            />
                            <input
                                type="text"
                                value={formData.colorTheme}
                                onChange={(e) => handleInputChange('colorTheme', e.target.value)}
                                placeholder="Enter color code or name"
                                style={{
                                    flex: 1,
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    border: '1px solid #ccc'
                                }}
                            />
                        </div>

                        <label style={{ fontWeight: 600 }}>Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                                padding: '6px'
                            }}
                        />

                        {/* Preview Section */}
                        {(formData.image || selectedAdmin?.image) && (
                            <img
                                src={
                                    formData.image
                                        ? URL.createObjectURL(formData.image)
                                        : `http://localhost:5000/${selectedAdmin.image?.replace(/\\/g, '/')}`
                                }
                                alt="Preview"
                                style={{
                                    width: '90px',
                                    height: '90px',
                                    borderRadius: '10px',
                                    objectFit: 'cover',
                                    marginTop: '8px',
                                    alignSelf: 'center'
                                }}
                            />
                        )}

                        <label style={{ fontWeight: 600 }}>Branch Limit</label>
                        <Input
                            value={formData.branchLimit}
                            onChange={(e) => handleInputChange('branchLimit', e.target.value)}
                        />

                        <label style={{ fontWeight: 600 }}>Sorter Limit</label>
                        <Input
                            value={formData.sorterLimit}
                            onChange={(e) => handleInputChange('sorterLimit', e.target.value)}
                        />

                        <label style={{ fontWeight: 600 }}>Driver Limit</label>
                        <Input
                            value={formData.driverLimit}
                            onChange={(e) => handleInputChange('driverLimit', e.target.value)}
                        />

                        <label style={{ fontWeight: 600 }}>Start Date</label>
                        <input
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => handleInputChange('startDate', e.target.value)}
                            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
                        />

                        <label style={{ fontWeight: 600 }}>Expiry Date</label>
                        <input
                            type="date"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
                        />

                        <label style={{ fontWeight: 600 }}>Password</label>
                        <Input.Password
                            value={formData.password}
                            placeholder="Enter new password (optional)"
                            onChange={(e) => handleInputChange('password', e.target.value)}
                        />
                    </div>
                </Modal>
            </Spin>
        </div>
    );
};

export default AppadminDashboard;
