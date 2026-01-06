import { Edit } from "lucide-react";
import { Tag, Tooltip } from "antd";
import dayjs from "dayjs";

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
                src={`http://localhost:5000/${img?.replace(/\\/g, "/")}`}
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
        title: "Username",
        dataIndex: "username",
        key: "username",
        render: (text) => (
            <span style={{ fontWeight: 600, color: "#333" }}>{text}</span>
        ),
    },
    {
        title: "Admin Limit",
        dataIndex: "adminLimit",
        key: "adminLimit",
        align: "center",
    },
    {
        title: "Driver Limit",
        dataIndex: "driverLimit",
        key: "driverLimit",
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
        title: "Edit",
        key: "edit",
        align: "center",
        render: (_, record) => (
            <Tooltip title="Edit Admin">
                <Edit
                    onClick={() => handleEdit(record)}
                    style={{
                        color: "var(--theme-color)",
                        cursor: "pointer",
                        transition: "all 0.3s",
                    }}
                    size={20}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#bfb719")}
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--theme-color)")
                    }
                />
            </Tooltip>
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
];
