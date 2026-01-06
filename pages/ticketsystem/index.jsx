import React, { useEffect, useState } from "react";
import { Spin, Table, Select, DatePicker, Button, Tag, message, notification } from "antd";
import dayjs from "dayjs";
import { Search } from "lucide-react";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTotaltickets } from "~/store/tickets/action";
import Topinfocomp from "~/components/sections/topinfocomp";
import ticketRepositery from "~/repositories/ticketRepositery";
import moment from "moment";
const { RangePicker } = DatePicker;

const Index = () => {
    const [loader, setLoader] = useState(false);
    const [isActive, setActive] = useState(false);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [dateRange, setDateRange] = useState([]);
    const [openReplyRow, setOpenReplyRow] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [replyStatus, setReplyStatus] = useState("");
    const toggleClass = () => setActive(!isActive);

    const { auth } = useSelector(({ auth }) => auth);
    let tickets = useSelector((state) => state.tickets.totalTickets || []);
    const dispatch = useDispatch();

    // redirect login check
    useEffect(() => {
        let local = JSON.parse(localStorage.getItem("persist:MushroomAdmin"));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    // primary color apply
    useEffect(() => {
        if (auth?.color) {
            document.documentElement.style.setProperty("--jl-primary", auth.color);
        }
    }, [auth?.color]);

    useEffect(() => {
        dispatch(getTotaltickets());
    }, [dispatch]);

    // FILTER LOGIC
    const filtered = tickets
        ?.filter((v) =>
            search
                ? v.title?.toLowerCase().includes(search.toLowerCase()) ||
                v.description?.toLowerCase().includes(search.toLowerCase()) ||
                v.superadmin?.user_id
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
                : true
        )
        ?.filter((v) => (statusFilter ? v.status === statusFilter : true))
        ?.filter((v) => (priorityFilter ? v.priority === priorityFilter : true))
        ?.filter((v) => (categoryFilter ? v.category === categoryFilter : true))
        ?.filter((v) =>
            dateRange.length === 2
                ? dayjs(v.createdAt).isAfter(dateRange[0]) &&
                dayjs(v.createdAt).isBefore(dateRange[1])
                : true
        );

    // Change Status Action
    const handleChangeStatus = async (ticket) => {
        const status =
            ticket.status === "Open"
                ? "In Progress"
                : ticket.status === "In Progress"
                    ? "Resolved" : "Open"


        setLoader(true);

        let formdata = { status: status }

        const res = await ticketRepositery.editticket(ticket._id, formdata);

        if (res?.status === 200) {
            message.success("Status Updated");
            dispatch(getTotaltickets());
        } else {
            message.error("Failed to update");
        }
        setLoader(false);
    };

    const handleReplySubmit = async (ticket) => {
        if (!replyText.trim()) {
            notification.error({ message: "Reply cannot be empty!" });
            return;
        }

        const payload = {
            message: replyText,
            status: replyStatus,
        };

        const res = await ticketRepositery.Replyticket(ticket._id, payload)

        if (res.status === 200) {
            notification.success({ message: "Reply added successfully!" });
            setReplyText("");
            setReplyStatus("");
            dispatch(getTotaltickets());
        } else {
            notification.error({ message: "Failed to add reply" });
        }
    };


    // Table columns
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (t) => <p>{t}</p>,
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Raised By",
            key: "raised",
            render: (r) => r.superadmin?.user_id || "N/A",
        },
        {
            title: "Raised At",
            key: "createdAt",
            render: (r) => (
                <div>
                    <div>{dayjs(r.createdAt).format("DD-MM-YYYY")}</div>
                    <small>{dayjs(r.createdAt).format("hh:mm A")}</small>
                </div>
            ),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (c) => <Tag color="blue">{c}</Tag>,
        },
        {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            render: (p) => <Tag color="red">{p}</Tag>,
        },
        {
            title: "Status",
            key: "status",
            align: 'center',
            render: (r) => {
                let userreplies = r.replies.filter((rep) => rep.repliedBy !== 'appadmin')
                return (
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Tag color="green" style={{ fontSize: 14 }}>
                            {r.status}
                        </Tag>

                    </div>
                )
            },
        },

        {
            title: "Action",
            key: "action",
            align: "center",
            render: (_, record) => {
                let userreplies = record.replies.filter((rep) => rep.repliedBy !== 'appadmin')

                const allowedToReply =
                    auth?.user_id === record?.user?.user_id ||
                    auth?.user_id === record?.superadmin?.user_id;

                return (
                    <>
                        <button
                            style={{
                                width: "120px",
                                borderRadius: "5px",
                                background: record.status === 'Resolved' ||
                                    record.status === 'Closed' ? "#A6A116" : "#bfb719",
                                border: "none",
                                color: "white",
                                paddingBlock: "7px",

                                opacity: record.status === 'Resolved' ||
                                    record.status === 'Closed' ? 0.6 : 1,
                                cursor: record.status === 'Resolved' ||
                                    record.status === 'Closed' ? "not-allowed" : "pointer",
                                filter: record.status === 'Resolved' ||
                                    record.status === 'Closed' ? "grayscale(40%)" : "none",
                                boxShadow: record.status === 'Resolved' ||
                                    record.status === 'Closed' ? "none" : "0px 2px 6px rgba(0,0,0,0.15)",

                                marginTop: '10px'
                            }}
                            onClick={() => handleChangeStatus(record)}
                            disabled={record.status === 'Resolved'}
                        >
                            Change Status
                        </button>
                        {
                            allowedToReply || auth.role === 'appadmin' ? (
                                <button
                                    onClick={() => setOpenReplyRow(openReplyRow === record._id ? null : record._id)}
                                    style={{
                                        width: "120px",
                                        borderRadius: "5px",
                                        background: "#bfb719",
                                        border: "none",
                                        marginTop: '10px',
                                        color: "white",
                                        paddingBlock: "7px",
                                        cursor: "pointer",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}
                                >
                                    {openReplyRow === record._id ? "Close" : "Reply"}
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                            color: "white",
                                            background: "red",
                                            fontSize: "10px",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        {userreplies.length}
                                    </div>
                                </button>
                            ) : (
                                <span style={{ color: "gray", fontSize: "13px" }}>No Access</span>
                            )
                        }
                    </>

                )
            }
        }
    ];

    const today = dayjs().format("YYYY-MM-DD");
    const todayTickets = tickets.filter((t) =>
        dayjs(t.createdAt).format("YYYY-MM-DD") === today
    );
    const critical = tickets.filter((t) => t.priority === "Critical");
    const high = tickets.filter((t) => t.priority === "High");


    const expandable = {
        expandedRowKeys: openReplyRow ? [openReplyRow] : [],
        onExpand: (expanded, record) => {
            if (expanded) setOpenReplyRow(record._id);
            else setOpenReplyRow(null);
        },
        expandedRowRender: (record) => (
            <div
                style={{
                    background: "#f8f9ff",
                    padding: "20px",
                    borderRadius: "10px",
                    marginTop: "10px",
                    borderLeft: `4px solid #bfb719`,
                }}
            >
                {/* INPUT UI */}
                <h4 style={{ marginBottom: "10px", color: '#bfb719' }}>Add Reply</h4>

                <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    rows={3}
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "8px",
                        border: `1.5px solid ${auth.color}33`,
                        outline: "none",
                        marginBottom: "10px",
                    }}
                    disabled={record.status === "Closed"}
                />

                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <Select
                        placeholder="Change Status"
                        value={replyStatus}
                        disabled={record.status === "Closed"}
                        onChange={(v) => setReplyStatus(v)}
                        style={{ width: "200px" }}
                        options={[
                            { value: "In Progress", label: "In Progress" },
                            { value: "Resolved", label: "Resolved" },
                        ]}
                    />

                    <button
                        onClick={() => handleReplySubmit(record)}
                        style={{
                            background: '#bfb719',
                            padding: "10px 16px",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: 600,
                        }}
                        disabled={record.status === "Closed"}
                    >
                        Submit
                    </button>
                </div>

                {/* SHOW OLD REPLIES */}
                <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>Previous Replies</h4>

                {record.replies?.length ? (
                    record.replies.
                        sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((rep, idx) => (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                alignItems: rep.repliedBy === 'appadmin' ? 'flex-end' : 'flex-start'
                            }}>
                                {
                                    rep.repliedBy === 'appadmin' ?
                                        <div
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                justifyContent: 'space-between',
                                                background: "#fff",
                                                padding: "10px",
                                                borderRadius: "8px",
                                                marginBottom: "10px",
                                                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                                                width: "50%",

                                            }}
                                        >


                                            <div style={{
                                                fontSize: '13px',
                                                color: '#8f8f8f'
                                            }}>
                                                {moment(rep.createdAt).fromNow()}
                                            </div>

                                            <div style={{
                                                display: "flex",
                                                alignItems: "flex-end",
                                                gap: "10px",
                                            }}
                                            >


                                                <div>
                                                    <p style={{ marginBottom: "6px" }}>{rep.message}</p>
                                                    <Tag color="blue">{rep.status}</Tag>
                                                </div>
                                                <div
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "50%",
                                                        background: '#bfb719',
                                                        color: "white",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {rep.repliedBy?.charAt(0).toUpperCase() || "U"}
                                                </div>
                                            </div>

                                        </div> : <div
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                justifyContent: 'space-between',
                                                background: "#fff",
                                                padding: "10px",
                                                borderRadius: "8px",
                                                marginBottom: "10px",
                                                gap: '10px',
                                                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                                            }}
                                        >

                                            <div style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "10px",
                                            }}
                                            >
                                                <div
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        borderRadius: "50%",
                                                        background: '#bfb719',
                                                        color: "white",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {rep.repliedBy?.charAt(0).toUpperCase() || "U"}
                                                </div>

                                                <div>
                                                    <p style={{ marginBottom: "6px", textWrap: 'wrap' }}>{rep.message}</p>
                                                    <Tag color="blue">{rep.status}</Tag>
                                                </div>
                                            </div>

                                            <div style={{
                                                fontSize: '13px',
                                                color: '#8f8f8f'
                                            }}>
                                                {moment(rep.createdAt).fromNow()}
                                            </div>

                                        </div>
                                }
                            </div>
                        ))
                ) : (
                    <p style={{ color: "gray", fontStyle: "italic" }}>No replies yet...</p>
                )}
            </div>
        ),
    };
    return (
        <div>
            <Spin spinning={loader} tip={"Loading..."}>
                <HeaderDashboard />

                <div className="dashboard-container mt-5 pt-2">
                    {/* Sidebar */}
                    <div id="sidebar" className={isActive ? "slide-show" : null}>
                        <Sidebar active={isActive} page={"dashboard"} />
                        <div className="slide-toggle" onClick={toggleClass}>
                            <span className={"qc-arrow"}>
                                <i
                                    className="fas fa-angle-double-left"
                                    style={{ color: auth.color }}
                                ></i>
                            </span>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div
                        className="content content-width mt-3"
                        id="style-2"
                        style={{
                            border: `2px solid ${auth.color}`,
                            overflowY: "auto",
                            overflowX: "auto",
                            padding: 20,
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                flexWrap: "wrap",
                                paddingBlock: "30px",
                            }}
                        >
                            <Topinfocomp
                                color={'#bfb719'}
                                header="Total tickets"
                                data={tickets}
                                icon="fa-solid fa-headset"
                            />
                            <Topinfocomp
                                icon="fa-solid fa-clock"
                                header="Today  tickets"
                                data={todayTickets}
                                color="#04a33e"
                            />
                            <Topinfocomp
                                color="#ff2d2d"
                                header="High Risk tickets"
                                data={[...critical, ...high]}
                                icon="fa-solid fa-circle-exclamation"
                            />

                        </div>

                        {/* Filters */}
                        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
                            {/* Search */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: 0,
                                    border: "1px solid #d7d7d7",
                                    paddingInline: 10,
                                    // border: "",
                                    // padding: "10px",
                                    outline: "none",
                                    width: "50%",
                                    background: '#f7f7f7'
                                }}
                            >
                                <Search size={20} color="gray" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{
                                        outline: "none",
                                        border: 'none',
                                        background: 'transparent'
                                    }}
                                />
                            </div>

                            {/* Status */}
                            <Select
                                allowClear
                                placeholder="Status"
                                value={statusFilter || undefined}
                                onChange={(v) => setStatusFilter(v || "")}
                                style={{ minWidth: 150 }}
                                options={[
                                    { label: "Open", value: "Open" },
                                    { label: "In Progress", value: "In Progress" },
                                    { label: "Resolved", value: "Resolved" },
                                    { label: "Closed", value: "Closed" },
                                ]}
                            />

                            {/* Priority */}
                            <Select
                                allowClear
                                placeholder="Priority"
                                value={priorityFilter || undefined}
                                onChange={(v) => setPriorityFilter(v || "")}
                                style={{ minWidth: 150 }}
                                options={[
                                    { label: "Low", value: "Low" },
                                    { label: "Medium", value: "Medium" },
                                    { label: "High", value: "High" },
                                ]}
                            />

                            {/* Category */}
                            <Select
                                allowClear
                                placeholder="Category"
                                value={categoryFilter || undefined}
                                onChange={(v) => setCategoryFilter(v || "")}
                                style={{ minWidth: 180 }}
                            />

                            {/* Date Range */}
                            <RangePicker
                                onChange={(v) => setDateRange(v || [])}
                                style={{ height: 40 }}
                            />
                        </div>

                        {/* TABLE */}
                        <Table
                            columns={columns}
                            dataSource={filtered}
                            rowKey="_id"
                            pagination={{ pageSize: 10 }}
                            expandable={{
                                ...expandable,
                                expandIconColumnIndex: -1,
                            }}
                        />
                    </div>
                </div>
            </Spin>
        </div>
    );
};

export default Index;
