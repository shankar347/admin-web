import React, { useState, useEffect } from "react";
import { Spin, Table, Select, notification, Tag, DatePicker, Drawer, Button, Grid, Card, Modal } from "antd";
import { HelpCircle, Send, ClipboardList, Search, Filter, Menu, X, Calendar, MessageSquare, User, Clock, MessageCircle } from "lucide-react";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import { useDispatch, useSelector } from "react-redux";
import ticketRepositery from "~/repositories/ticketRepositery";
import { getAlltickets } from "~/store/tickets/action";
import dayjs from "dayjs";
import moment from "moment";
import { toggleSidebar } from "~/store/auth/action";

const { useBreakpoint } = Grid;

export default function SupportPage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        priority: "Low",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loader, setLoader] = useState(false);
    // const [isActive, setActive] = useState(false);
    const [openReplyRow, setOpenReplyRow] = useState(null);
    const [replyText, setReplyText] = useState("");
    const [replyStatus, setReplyStatus] = useState("");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [mobileTableOpen, setMobileTableOpen] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [mobileChatModalOpen, setMobileChatModalOpen] = useState(false);
    const [selectedTicketForChat, setSelectedTicketForChat] = useState(null);

    const screens = useBreakpoint();

    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const isActive = useSelector((state) => state.auth.isSidebarActive);
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);


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


    const tickets = useSelector((state) => state.tickets.allTickets) || [];



    // Reset mobile sidebar on desktop
    useEffect(() => {
        if (!isMobile && isMobileSidebarOpen) {
            setIsMobileSidebarOpen(false);
        }
    }, [isMobile, isMobileSidebarOpen]);

    // Auth check
    useEffect(() => {
        let local = JSON.parse(localStorage.getItem("persist:MushroomAdmin"));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    useEffect(() => {
        dispatch(getAlltickets());
    }, [dispatch]);

    // Set primary color
    useEffect(() => {
        if (auth?.color) {
            document.documentElement.style.setProperty('--jl-primary', auth.color);
        }
    }, [auth?.color]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await ticketRepositery.createticket(formData);
            if (res.status === 200) {
                setSuccess(true);
                setFormData({ title: "", description: "", category: "", priority: "Low" });
                dispatch(getAlltickets());
                notification.success({
                    message: "Ticket Created Successfully!",
                    description: "Your support ticket has been submitted. We'll get back to you soon."
                });
            } else {
                notification.error({
                    message: "Failed to Create Ticket",
                    description: res.message || "Please try again."
                });
            }
        } catch (error) {
            notification.error({
                message: "Error",
                description: "An error occurred while creating the ticket."
            });
        } finally {
            setLoading(false);
        }
    };

    // Filter states
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");
    const [filteredTickets, setFilteredTickets] = useState([]);

    useEffect(() => {
        applyFilters();
    }, [tickets, search, startDate, endDate, statusFilter, categoryFilter, priorityFilter]);

    const applyFilters = () => {
        const s = (search || "").trim().toLowerCase();
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate + "T23:59:59") : null;

        const data = (tickets || []).filter((t) => {
            const title = (t.title || "").toString().toLowerCase();
            const desc = (t.description || "").toString().toLowerCase();
            const raisedBy = (t.user?.user_id || t.superadmin?.user_id || "").toString().toLowerCase();

            const matchesSearch = s === "" || title.includes(s) || desc.includes(s) || raisedBy.includes(s);

            const created = t.createdAt ? new Date(t.createdAt) : null;
            const matchesStart = !start || (created && created >= start);
            const matchesEnd = !end || (created && created <= end);

            const matchesStatus = !statusFilter || t.status === statusFilter;
            const matchesCategory = !categoryFilter || t.category === categoryFilter;
            const matchesPriority = !priorityFilter || t.priority === priorityFilter;

            return matchesSearch && matchesStart && matchesEnd && matchesStatus && matchesCategory && matchesPriority;
        });

        setFilteredTickets(data);
    };

    const handleReplySubmit = async (ticket) => {
        if (!replyText.trim()) {
            notification.error({
                message: "Reply cannot be empty!",
                description: "Please type your reply before submitting."
            });
            return;
        }

        const payload = {
            message: replyText,
            status: replyStatus,
        };

        setLoading(true);
        try {
            const res = await ticketRepositery.Replyticket(ticket._id, payload);
            if (res.status === 200) {
                notification.success({
                    message: "Reply Sent!",
                    description: "Your reply has been submitted successfully."
                });
                setReplyText("");
                setReplyStatus("");
                setOpenReplyRow(null);
                if (isMobile) {
                    setMobileChatModalOpen(false);
                }
                dispatch(getAlltickets());
            } else {
                notification.error({
                    message: "Failed to send reply",
                    description: res.message || "Please try again."
                });
            }
        } catch (error) {
            notification.error({
                message: "Error",
                description: "An error occurred while sending your reply."
            });
        } finally {
            setLoading(false);
        }
    };

    const formatRaisedAt = (createdAt) => {
        if (!createdAt) return { date: "-", time: "" };
        const d = new Date(createdAt);
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        const yyyy = d.getFullYear();
        let hours = d.getHours();
        const minutes = String(d.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const time = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
        return { date: `${mm}-${dd}-${yyyy}`, time };
    };

    // Open chat modal for mobile
    const openMobileChat = (ticket) => {
        setSelectedTicketForChat(ticket);
        setMobileChatModalOpen(true);
    };

    // Desktop table columns
    const columns = [
        {
            title: "S.No",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) => index + 1,
            width: 80,
            align: "center",
            responsive: ['md'],
        },
        {
            title: "Raised By",
            key: "raisedBy",
            render: (_, record) => record.user?.user_id || record.superadmin?.user_id || "N/A",
        },
        {
            title: "Role",
            key: "role",
            render: (_, record) => record.user?.role?.name || "superadmin",
            responsive: ['lg'],
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            responsive: ['md'],
        },
        {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            align: "center",
            render: (priority) => {
                const color =
                    priority === "Critical" ? "red" :
                        priority === "High" ? "orange" :
                            priority === "Medium" ? "gold" :
                                "green";
                return (
                    <Tag color={color} style={{ fontSize: "13px", fontWeight: "600" }}>
                        {priority}
                    </Tag>
                );
            },
        },
        {
            title: "Status",
            key: "status",
            align: 'center',
            render: (_, record) => {
                const color = record.status === "Resolved" ? "green" :
                    record.status === "Not Resolved" ? "red" :
                        record.status === "In Progress" ? "blue" :
                            "orange";
                return (
                    <Tag color={color} style={{ fontWeight: "600", fontSize: "13px" }}>
                        {record.status}
                    </Tag>
                );
            },
        },
        {
            title: "Raised At",
            key: "raisedAt",
            render: (_, record) => {
                const { date, time } = formatRaisedAt(record.createdAt);
                return (
                    <div>
                        <div style={{ fontWeight: 600 }}>{date}</div>
                        <div style={{ fontSize: 12, color: "#666" }}>{time}</div>
                    </div>
                );
            },
            responsive: ['md'],
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (_, record) => {
                let appadminreplies = record.replies.filter((rep) => rep.repliedBy === 'appadmin')
                const allowedToReply =
                    auth?.user_id === record?.user?.user_id ||
                    auth?.user_id === record?.superadmin?.user_id;

                return allowedToReply ? (
                    <button
                        onClick={() => {
                            if (isMobile) {
                                openMobileChat(record);
                            } else {
                                setOpenReplyRow(openReplyRow === record._id ? null : record._id);
                            }
                        }}
                        style={{
                            width: isMobile ? "80px" : "100px",
                            borderRadius: "8px",
                            background: auth.color,
                            border: "none",
                            color: "white",
                            paddingBlock: "7px",
                            cursor: "pointer",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: isMobile ? "12px" : "14px",
                            fontWeight: "600",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                    >
                        {isMobile ? "Chat" : (openReplyRow === record._id ? "Close" : "Reply")}
                        {appadminreplies.length > 0 && (
                            <div
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    color: "white",
                                    background: "#34994e",
                                    fontSize: "10px",
                                    lineHeight: "1",
                                    fontWeight: "bold",
                                }}
                            >
                                {appadminreplies.length}
                            </div>
                        )}
                    </button>
                ) : (
                    <span style={{ color: "gray", fontSize: "13px" }}>No Access</span>
                );
            }
        }
    ];

    // Expandable rows for desktop
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
                    padding: isMobile ? "12px" : "20px",
                    borderRadius: "10px",
                    marginTop: "10px",
                    borderLeft: `4px solid ${auth.color}`,
                }}
            >
                <h4 style={{ marginBottom: "10px", color: auth.color, fontSize: isMobile ? "14px" : "16px" }}>
                    {isMobile ? "Reply" : "Add Reply"}
                </h4>

                <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    rows={isMobile ? 2 : 3}
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                        border: `1.5px solid ${auth.color}33`,
                        outline: "none",
                        marginBottom: "10px",
                        fontSize: isMobile ? "14px" : "16px",
                        fontFamily: "Poppins, sans-serif",
                    }}
                    disabled={record.status === "Closed"}
                />

                <div style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "10px",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "stretch" : "center"
                }}>
                    <Select
                        placeholder="Change Status"
                        value={replyStatus}
                        disabled={record.status === "Closed"}
                        onChange={(v) => setReplyStatus(v)}
                        style={{
                            width: isMobile ? "100%" : "200px",
                            fontFamily: "Poppins, sans-serif"
                        }}
                        options={[
                            { value: "Closed", label: "Closed" },
                            { value: "Not Resolved", label: "Not Resolved" },
                            { value: "In Progress", label: "In Progress" },
                            { value: "Resolved", label: "Resolved" },
                        ]}
                    />

                    <button
                        onClick={() => handleReplySubmit(record)}
                        style={{
                            background: auth.color,
                            padding: "10px 16px",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: 600,
                            flexShrink: 0,
                            transition: "all 0.2s ease",
                            fontFamily: "Poppins, sans-serif",
                        }}
                        disabled={record.status === "Closed"}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                    >
                        Submit Reply
                    </button>
                </div>

                <h4 style={{
                    marginTop: "20px",
                    marginBottom: "10px",
                    fontSize: isMobile ? "14px" : "16px",
                    color: "#333",
                    fontWeight: "600",
                }}>
                    Previous Replies
                </h4>

                {record.replies?.length ? (
                    <div style={{ maxHeight: isMobile ? "300px" : "400px", overflowY: "auto" }}>
                        {record.replies
                            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                            .map((rep, idx) => (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    alignItems: rep.repliedBy === 'appadmin' ? 'flex-end' : 'flex-start',
                                    marginBottom: "12px",
                                }}>
                                    {
                                        rep.repliedBy === 'appadmin' ?
                                            <div
                                                key={idx}
                                                style={{
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    background: "#fff",
                                                    padding: isMobile ? "12px" : "14px",
                                                    borderRadius: "12px",
                                                    marginBottom: "10px",
                                                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                                    width: isMobile ? "90%" : "50%",
                                                    flexDirection: isMobile ? "column" : "row",
                                                    gap: isMobile ? "8px" : "0",
                                                    border: "1px solid #e8f4ff",
                                                }}
                                            >
                                                <div style={{
                                                    fontSize: isMobile ? "11px" : "13px",
                                                    color: '#8f8f8f',
                                                    order: isMobile ? 2 : 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "4px",
                                                }}>
                                                    <Clock size={12} />
                                                    {moment(rep.createdAt).fromNow()}
                                                </div>

                                                <div style={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "12px",
                                                    order: isMobile ? 1 : 2
                                                }}
                                                >
                                                    <div style={{ flex: 1 }}>
                                                        <p style={{
                                                            marginBottom: "8px",
                                                            fontSize: isMobile ? "13px" : "14px",
                                                            color: "#333",
                                                            lineHeight: "1.5",
                                                        }}>
                                                            {rep.message}
                                                        </p>
                                                        <Tag color="blue" style={{
                                                            fontSize: isMobile ? "11px" : "12px",
                                                            fontWeight: "500"
                                                        }}>
                                                            {rep.status}
                                                        </Tag>
                                                    </div>
                                                    <div
                                                        style={{
                                                            width: isMobile ? "32px" : "40px",
                                                            height: isMobile ? "32px" : "40px",
                                                            borderRadius: "50%",
                                                            background: "#3b82f6",
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: 600,
                                                            fontSize: isMobile ? "12px" : "14px",
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        {rep.repliedBy?.charAt(0).toUpperCase() || "A"}
                                                    </div>
                                                </div>
                                            </div> :
                                            <div
                                                key={idx}
                                                style={{
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    background: "#fff",
                                                    padding: isMobile ? "12px" : "14px",
                                                    borderRadius: "12px",
                                                    marginBottom: "10px",
                                                    gap: '12px',
                                                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                                                    flexDirection: isMobile ? "column" : "row",
                                                    border: "1px solid #f0f0f0",
                                                }}
                                            >
                                                <div style={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "12px",
                                                }}
                                                >
                                                    <div
                                                        style={{
                                                            width: isMobile ? "32px" : "40px",
                                                            height: isMobile ? "32px" : "40px",
                                                            borderRadius: "50%",
                                                            background: auth.color,
                                                            color: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: 600,
                                                            fontSize: isMobile ? "12px" : "14px",
                                                            flexShrink: 0
                                                        }}
                                                    >
                                                        {rep.repliedBy?.charAt(0).toUpperCase() || "U"}
                                                    </div>

                                                    <div style={{ flex: 1 }}>
                                                        <p style={{
                                                            marginBottom: "8px",
                                                            textWrap: 'wrap',
                                                            fontSize: isMobile ? "13px" : "14px",
                                                            color: "#333",
                                                            lineHeight: "1.5",
                                                        }}>
                                                            {rep.message}
                                                        </p>
                                                        <Tag color="blue" style={{
                                                            fontSize: isMobile ? "11px" : "12px",
                                                            fontWeight: "500"
                                                        }}>
                                                            {rep.status}
                                                        </Tag>
                                                    </div>
                                                </div>

                                                <div style={{
                                                    fontSize: isMobile ? "11px" : "13px",
                                                    color: '#8f8f8f',
                                                    alignSelf: isMobile ? "flex-start" : "center",
                                                    paddingLeft: isMobile ? "44px" : "0",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "4px",
                                                }}>
                                                    <Clock size={12} />
                                                    {moment(rep.createdAt).fromNow()}
                                                </div>
                                            </div>
                                    }
                                </div>
                            ))}
                    </div>
                ) : (
                    <div style={{
                        textAlign: "center",
                        padding: "20px",
                        color: "gray",
                        fontStyle: "italic",
                        fontSize: isMobile ? "13px" : "14px",
                        background: "#f9f9f9",
                        borderRadius: "8px",
                    }}>
                        No replies yet. Be the first to respond!
                    </div>
                )}
            </div>
        ),
    };

    // Mobile Chat Modal Component
    const MobileChatModal = () => {
        if (!selectedTicketForChat) return null;

        const appadminreplies = selectedTicketForChat.replies.filter((rep) => rep.repliedBy === 'appadmin');
        const allowedToReply = auth?.user_id === selectedTicketForChat?.user?.user_id ||
            auth?.user_id === selectedTicketForChat?.superadmin?.user_id;

        return (
            <Modal
                title={
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "10px",
                            background: `${auth.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: auth.color,
                        }}>
                            <MessageCircle size={20} />
                        </div>
                        <div>
                            <div style={{ fontWeight: "600", fontSize: "16px", color: "#1f2937" }}>
                                Ticket: {selectedTicketForChat.title}
                            </div>
                            <div style={{ fontSize: "12px", color: "#6b7280" }}>
                                {selectedTicketForChat.status} • {selectedTicketForChat.priority} Priority
                            </div>
                        </div>
                    </div>
                }
                open={mobileChatModalOpen}
                onCancel={() => setMobileChatModalOpen(false)}
                footer={null}
                width="95%"
                style={{ top: 20, maxHeight: "90vh" }}
                bodyStyle={{ padding: "0", maxHeight: "calc(90vh - 110px)", overflow: "hidden" }}
            >
                <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    {/* Ticket Info Header */}
                    <div style={{
                        padding: "16px",
                        background: "#f9fafb",
                        borderBottom: "1px solid #e5e7eb",
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                            <span style={{ fontSize: "14px", fontWeight: "600", color: "#374151" }}>
                                {selectedTicketForChat.category}
                            </span>
                            <Tag color={
                                selectedTicketForChat.status === "Resolved" ? "green" :
                                    selectedTicketForChat.status === "Not Resolved" ? "red" :
                                        selectedTicketForChat.status === "In Progress" ? "blue" : "orange"
                            }>
                                {selectedTicketForChat.status}
                            </Tag>
                        </div>
                        <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
                            {selectedTicketForChat.description}
                        </p>
                    </div>

                    {/* Chat Messages */}
                    <div style={{
                        flex: 1,
                        padding: "16px",
                        overflowY: "auto",
                        background: "#f8f9fa",
                        minHeight: "300px",
                        maxHeight: "400px",
                    }}>
                        {selectedTicketForChat.replies?.length ? (
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {selectedTicketForChat.replies
                                    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                                    .map((rep, idx) => (
                                        <div key={idx} style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: rep.repliedBy === 'appadmin' ? 'flex-end' : 'flex-start',
                                        }}>
                                            <div style={{
                                                maxWidth: "85%",
                                                padding: "12px",
                                                borderRadius: "18px",
                                                background: rep.repliedBy === 'appadmin' ? "#3b82f6" : auth.color,
                                                color: "white",
                                                position: "relative",
                                            }}>
                                                <div style={{ fontSize: "14px", lineHeight: "1.4" }}>
                                                    {rep.message}
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginTop: "8px",
                                                    fontSize: "11px",
                                                    opacity: 0.9,
                                                }}>
                                                    <span>{rep.repliedBy}</span>
                                                    <span style={{ marginLeft: "8px" }}>
                                                        {moment(rep.createdAt).format("h:mm A")}
                                                    </span>
                                                </div>
                                            </div>
                                            <div style={{
                                                fontSize: "11px",
                                                color: "#6b7280",
                                                marginTop: "4px",
                                                padding: "0 4px",
                                            }}>
                                                {moment(rep.createdAt).fromNow()}
                                                {rep.status && ` • Status: ${rep.status}`}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ) : (
                            <div style={{
                                textAlign: "center",
                                padding: "40px 20px",
                                color: "#9ca3af",
                                fontSize: "14px",
                            }}>
                                <MessageCircle size={48} style={{ marginBottom: "16px", opacity: 0.5 }} />
                                <div>No messages yet. Start the conversation!</div>
                            </div>
                        )}
                    </div>

                    {/* Reply Input Area (only if user can reply) */}
                    {allowedToReply && selectedTicketForChat.status !== "Closed" && (
                        <div style={{
                            padding: "16px",
                            borderTop: "1px solid #e5e7eb",
                            background: "white",
                        }}>
                            <textarea
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Type your reply..."
                                rows={2}
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "12px",
                                    border: `1.5px solid ${auth.color}33`,
                                    outline: "none",
                                    marginBottom: "12px",
                                    fontSize: "14px",
                                    fontFamily: "Poppins, sans-serif",
                                    resize: "none",
                                }}
                            />
                            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                <Select
                                    placeholder="Change Status"
                                    value={replyStatus}
                                    onChange={(v) => setReplyStatus(v)}
                                    style={{ flex: 1 }}
                                    size="small"
                                    options={[
                                        { value: "Closed", label: "Closed" },
                                        { value: "Not Resolved", label: "Not Resolved" },
                                        { value: "In Progress", label: "In Progress" },
                                        { value: "Resolved", label: "Resolved" },
                                    ]}
                                />
                                <button
                                    onClick={() => handleReplySubmit(selectedTicketForChat)}
                                    disabled={!replyText.trim()}
                                    style={{
                                        padding: "10px 20px",
                                        background: replyText.trim() ? auth.color : "#d1d5db",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "10px",
                                        cursor: replyText.trim() ? "pointer" : "not-allowed",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>
        );
    };

    // Enhanced Mobile Ticket Card
    const MobileTicketCard = ({ ticket, index }) => {
        const [expanded, setExpanded] = useState(false);
        const isAllowedToReply = auth?.user_id === ticket?.user?.user_id ||
            auth?.user_id === ticket?.superadmin?.user_id;
        const appadminreplies = ticket.replies.filter((rep) => rep.repliedBy === 'appadmin');
        const priorityColors = {
            "Critical": "#ef4444",
            "High": "#f97316",
            "Medium": "#eab308",
            "Low": "#22c55e"
        };
        const statusColors = {
            "Resolved": "#22c55e",
            "Not Resolved": "#ef4444",
            "In Progress": "#3b82f6",
            "Closed": "#6b7280",
            "Open": "#8b5cf6"
        };

        return (
            <Card
                style={{
                    borderRadius: "16px",
                    marginBottom: "16px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    background: "linear-gradient(135deg, #ffffff 0%, #fafbff 100%)",
                    overflow: "hidden",
                }}
                bodyStyle={{ padding: "20px" }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <span style={{
                                fontWeight: 700,
                                fontSize: "14px",
                                color: auth.color,
                                background: `${auth.color}15`,
                                padding: "2px 8px",
                                borderRadius: "12px",
                            }}>
                                #{index + 1}
                            </span>
                            <div style={{
                                background: priorityColors[ticket.priority] || "#6b7280",
                                color: "white",
                                fontSize: "11px",
                                fontWeight: "700",
                                padding: "3px 10px",
                                borderRadius: "12px",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}>
                                {ticket.priority}
                            </div>
                        </div>

                        <h4 style={{
                            margin: "6px 0",
                            fontSize: "16px",
                            fontWeight: "700",
                            color: "#1f2937",
                            lineHeight: "1.4"
                        }}>
                            {ticket.title}
                        </h4>

                        <p style={{
                            fontSize: "13px",
                            color: "#6b7280",
                            marginBottom: "12px",
                            lineHeight: "1.5",
                        }}>
                            {ticket.description?.substring(0, 100)}...
                        </p>
                    </div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        style={{
                            background: "none",
                            border: "none",
                            color: auth.color,
                            fontSize: "13px",
                            fontWeight: "600",
                            cursor: "pointer",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            background: `${auth.color}10`,
                            transition: "all 0.2s ease",
                        }}
                        onTouchStart={(e) => e.currentTarget.style.transform = "scale(0.98)"}
                        onTouchEnd={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                        {expanded ? "Less" : "More"}
                    </button>
                </div>

                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "16px",
                    fontSize: "12px"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#f3f4f6",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        gap: "4px",
                    }}>
                        <MessageSquare size={12} />
                        <span style={{ fontWeight: "500" }}>{ticket.category}</span>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        background: `${statusColors[ticket.status] || "#6b7280"}15`,
                        padding: "6px 12px",
                        borderRadius: "20px",
                        gap: "4px",
                        color: statusColors[ticket.status] || "#6b7280",
                        fontWeight: "600",
                    }}>
                        <div style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: statusColors[ticket.status] || "#6b7280",
                        }}></div>
                        {ticket.status}
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#f3f4f6",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        gap: "4px",
                    }}>
                        <User size={12} />
                        <span style={{ fontWeight: "500" }}>{ticket.user?.user_id || ticket.superadmin?.user_id || "N/A"}</span>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "12px",
                    borderTop: "1px solid #e5e7eb",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Calendar size={14} color="#6b7280" />
                        <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>
                            {formatRaisedAt(ticket.createdAt).date}
                        </span>
                        {appadminreplies.length > 0 && (
                            <div style={{
                                marginLeft: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                fontSize: "12px",
                                color: "#6b7280",
                            }}>
                                <MessageCircle size={12} />
                                <span>{appadminreplies.length}</span>
                            </div>
                        )}
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                        {isAllowedToReply && (
                            <button
                                onClick={() => openMobileChat(ticket)}
                                style={{
                                    padding: "8px 16px",
                                    background: auth.color,
                                    color: "white",
                                    border: "none",
                                    borderRadius: "10px",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    fontSize: "13px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    transition: "all 0.2s ease",
                                }}
                                onTouchStart={(e) => e.currentTarget.style.opacity = "0.9"}
                                onTouchEnd={(e) => e.currentTarget.style.opacity = "1"}
                            >
                                Chat
                                {appadminreplies.length > 0 && (
                                    <div style={{
                                        width: "18px",
                                        height: "18px",
                                        background: "white",
                                        color: auth.color,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "10px",
                                        fontWeight: "700",
                                    }}>
                                        {appadminreplies.length}
                                    </div>
                                )}
                            </button>
                        )}
                    </div>
                </div>

                {expanded && (
                    <div style={{
                        marginTop: "16px",
                        paddingTop: "16px",
                        borderTop: "1px solid #e5e7eb",
                        animation: "fadeIn 0.3s ease"
                    }}>
                        <div style={{ marginBottom: "16px", background: "#f9fafb", padding: "12px", borderRadius: "12px" }}>
                            <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px", fontWeight: "500" }}>
                                Description
                            </div>
                            <div style={{ fontSize: "14px", color: "#374151", lineHeight: "1.5" }}>
                                {ticket.description}
                            </div>
                        </div>
                    </div>
                )}
            </Card>
        );
    };

    // Filter Section Component
    const FilterSection = () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "24px",
                padding: isMobile ? "20px 16px" : "24px",
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
                border: `1px solid ${auth.color}20`,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Filter size={20} color={auth.color} />
                <h3 style={{ margin: 0, fontSize: isMobile ? "16px" : "18px", fontWeight: "600", color: "#1f2937" }}>
                    Filter Tickets
                </h3>
            </div>

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px", alignItems: "center" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                        width: isMobile ? "100%" : "400px",
                        outline: "none",
                        transition: "0.2s ease",
                        background: "#f8fafc",
                    }}
                >
                    <Search
                        size={20}
                        color="#94a3b8"
                        style={{ marginLeft: "16px" }}
                    />
                    <input
                        type="text"
                        placeholder="Search tickets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            border: "none",
                            padding: "14px 16px",
                            outline: "none",
                            width: "100%",
                            background: "transparent",
                            fontSize: "15px",
                            fontFamily: "Poppins, sans-serif",
                        }}
                    />
                </div>

                <div style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    width: isMobile ? "100%" : "auto",
                }}>
                    <DatePicker
                        suffixIcon={<Calendar size={16} />}
                        value={startDate ? dayjs(startDate) : null}
                        onChange={(date) => setStartDate(date ? date.format("YYYY-MM-DD") : "")}
                        placeholder="Start Date"
                        style={{
                            padding: "12px",
                            borderRadius: "12px",
                            width: isMobile ? "100%" : "150px",
                            border: "1px solid #d1d5db",
                            fontSize: "14px",
                            fontFamily: "Poppins, sans-serif",
                        }}
                    />

                    <DatePicker
                        suffixIcon={<Calendar size={16} />}
                        value={endDate ? dayjs(endDate) : null}
                        onChange={(date) => setEndDate(date ? date.format("YYYY-MM-DD") : "")}
                        placeholder="End Date"
                        style={{
                            padding: "12px",
                            borderRadius: "12px",
                            width: isMobile ? "100%" : "150px",
                            border: "1px solid #d1d5db",
                            fontSize: "14px",
                            fontFamily: "Poppins, sans-serif",
                        }}
                    />
                </div>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "12px",
                width: "100%",
            }}>
                <Select
                    allowClear
                    placeholder="Status"
                    value={statusFilter || undefined}
                    onChange={(v) => setStatusFilter(v || "")}
                    style={{ width: "100%" }}
                    options={[
                        { label: "Open", value: "Open" },
                        { label: "In Progress", value: "In Progress" },
                        { label: "Resolved", value: "Resolved" },
                        { label: "Closed", value: "Closed" },
                        { label: "Not Resolved", value: "Not Resolved" },
                    ]}
                />

                <Select
                    allowClear
                    placeholder="Category"
                    value={categoryFilter || undefined}
                    onChange={(v) => setCategoryFilter(v || "")}
                    style={{ width: "100%" }}
                    options={[
                        { label: "Payment Failure", value: "Payment Failure" },
                        { label: "Account Issue", value: "Account Issue" },
                        { label: "Server Down", value: "Server Down" },
                        { label: "Delete Request", value: "Delete Request" },
                        { label: "Delivery Delay", value: "Delivery Delay" },
                        { label: "Other", value: "Other" },
                    ]}
                />

                <Select
                    allowClear
                    placeholder="Priority"
                    value={priorityFilter || undefined}
                    onChange={(v) => setPriorityFilter(v || "")}
                    style={{ width: "100%" }}
                    options={[
                        { label: "Low", value: "Low" },
                        { label: "Medium", value: "Medium" },
                        { label: "High", value: "High" },
                        { label: "Critical", value: "Critical" },
                    ]}
                />

                <button
                    onClick={() => {
                        setSearch("");
                        setStartDate("");
                        setEndDate("");
                        setStatusFilter("");
                        setCategoryFilter("");
                        setPriorityFilter("");
                    }}
                    style={{
                        padding: "12px 24px",
                        borderRadius: "12px",
                        border: "none",
                        backgroundColor: "#f1f5f9",
                        color: "#64748b",
                        fontWeight: "600",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        width: isMobile ? "100%" : "auto",
                        fontFamily: "Poppins, sans-serif",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#e2e8f0")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#f1f5f9")}
                >
                    <X size={16} />
                    Clear Filters
                </button>
            </div>
        </div>
    );

    // Stats Cards for Mobile
    const MobileStats = () => {
        const stats = {
            total: filteredTickets.length,
            open: filteredTickets.filter(t => t.status === "Open").length,
            inProgress: filteredTickets.filter(t => t.status === "In Progress").length,
            resolved: filteredTickets.filter(t => t.status === "Resolved").length,
        };

        return (
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                marginBottom: "24px",
            }}>
                <div style={{
                    background: `linear-gradient(135deg, ${auth.color}15, ${auth.color}05)`,
                    padding: "16px",
                    borderRadius: "16px",
                    border: `1px solid ${auth.color}20`,
                    textAlign: "center",
                }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: auth.color, marginBottom: "4px" }}>
                        {stats.total}
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "600" }}>
                        Total Tickets
                    </div>
                </div>
                <div style={{
                    background: "#f0f9ff",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid #e0f2fe",
                    textAlign: "center",
                }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#0ea5e9", marginBottom: "4px" }}>
                        {stats.open}
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "600" }}>
                        Open
                    </div>
                </div>
                <div style={{
                    background: "#fef3c7",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid #fde68a",
                    textAlign: "center",
                }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#d97706", marginBottom: "4px" }}>
                        {stats.inProgress}
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "600" }}>
                        In Progress
                    </div>
                </div>
                <div style={{
                    background: "#dcfce7",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid #bbf7d0",
                    textAlign: "center",
                }}>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#16a34a", marginBottom: "4px" }}>
                        {stats.resolved}
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "600" }}>
                        Resolved
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Spin spinning={loader} tip="Loading...">
                <HeaderDashboard />


                <div className="dashboard-container" style={{ marginTop: isMobile ? "120px" : "80px" }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        width: '100%',
                        position: 'relative',
                    }}>
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
                                <Sidebar active={false} page={'customersupport'} />
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


                        {/* Main Content */}
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
                            {isMobile && (
                                <div style={{
                                    position: "fixed",
                                    top: "60px",
                                    left: 0,
                                    right: 0,
                                    background: "white",
                                    zIndex: 999,
                                    padding: "12px 16px",
                                    borderBottom: "1px solid #e5e7eb",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#1f2937" }}>
                                            Support Tickets
                                        </h2>
                                    </div>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button
                                            onClick={() => setMobileFiltersOpen(true)}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "12px",
                                                background: auth.color,
                                                border: "none",
                                                color: "white",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                            }}
                                            onTouchStart={(e) => e.currentTarget.style.transform = "scale(0.95)"}
                                            onTouchEnd={(e) => e.currentTarget.style.transform = "scale(1)"}
                                        >
                                            <Filter size={20} />
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div
                                style={{
                                    maxWidth: "100%",
                                    margin: isMobile ? "0" : "30px auto",
                                    padding: isMobile ? "16px" : "20px",
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >

                                {/* Mobile Stats */}
                                {isMobile && <MobileStats />}

                                {/* Page Header */}
                                <div
                                    style={{
                                        background: `linear-gradient(135deg, ${auth.color}15, ${auth.color}05)`,
                                        padding: isMobile ? "20px 16px" : "30px",
                                        borderRadius: "20px",
                                        marginBottom: "24px",
                                        border: `1px solid ${auth.color}20`,
                                    }}
                                >
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "16px",
                                        flexDirection: isMobile ? "column" : "row",
                                        gap: isMobile ? "16px" : "0",
                                        textAlign: isMobile ? "center" : "left"
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <div style={{
                                                width: isMobile ? "48px" : "56px",
                                                height: isMobile ? "48px" : "56px",
                                                borderRadius: "16px",
                                                background: auth.color,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                            }}>
                                                <HelpCircle size={isMobile ? 24 : 28} />
                                            </div>
                                            <div>
                                                <h2
                                                    style={{
                                                        color: "#1f2937",
                                                        fontSize: isMobile ? "20px" : "24px",
                                                        fontWeight: "700",
                                                        margin: 0,
                                                    }}
                                                >
                                                    Customer Support
                                                </h2>
                                                <p style={{
                                                    color: "#6b7280",
                                                    fontSize: isMobile ? "13px" : "14px",
                                                    margin: "4px 0 0 0",
                                                }}>
                                                    Get help with your account and services
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{
                                            background: auth.color,
                                            color: "#fff",
                                            padding: "12px 24px",
                                            borderRadius: "12px",
                                            fontWeight: "600",
                                            boxShadow: `0 4px 12px ${auth.color}40`,
                                            fontSize: isMobile ? "14px" : "16px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                                        >
                                            Raise a Ticket
                                        </div>
                                    </div>

                                    <p style={{
                                        color: "#4b5563",
                                        lineHeight: "1.6",
                                        fontSize: isMobile ? "14px" : "15px",
                                        margin: 0,
                                    }}>
                                        Need help with your account, delivery, or payment? Use this form to
                                        raise a support ticket. Our team will review and respond as quickly
                                        as possible. You can track the ticket status below.
                                    </p>
                                </div>

                                {/* Ticket Form */}
                                <Card
                                    style={{
                                        borderRadius: "20px",
                                        border: "none",
                                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                                        marginBottom: "32px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: isMobile ? "24px 16px" : "40px",
                                            display: "flex",
                                            flexDirection: isMobile ? "column" : "row",
                                            gap: isMobile ? "32px" : "48px",
                                        }}
                                    >
                                        {/* Left Image - Hidden on Mobile */}
                                        {!isMobile && (
                                            <div
                                                style={{
                                                    flex: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <img
                                                    src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
                                                    alt="Support"
                                                    style={{
                                                        width: "100%",
                                                        maxWidth: "500px",
                                                        borderRadius: "16px",
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {/* Form */}
                                        <div style={{ flex: 1 }}>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px",
                                                marginBottom: "24px",
                                            }}>
                                                <div style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "12px",
                                                    background: `${auth.color}15`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: auth.color,
                                                }}>
                                                    <MessageSquare size={20} />
                                                </div>
                                                <h3 style={{
                                                    margin: 0,
                                                    fontSize: isMobile ? "20px" : "24px",
                                                    fontWeight: "700",
                                                    color: "#1f2937",
                                                }}>
                                                    Submit a Ticket
                                                </h3>
                                            </div>

                                            <form onSubmit={handleSubmit}>
                                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                                    {/* Title */}
                                                    <div>
                                                        <label style={{
                                                            display: "block",
                                                            marginBottom: "8px",
                                                            fontWeight: "600",
                                                            color: "#374151",
                                                            fontSize: "14px",
                                                        }}>
                                                            Title
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter issue title"
                                                            value={formData.title}
                                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                            required
                                                            style={{
                                                                width: "100%",
                                                                padding: "14px 16px",
                                                                border: "2px solid #e5e7eb",
                                                                borderRadius: "12px",
                                                                fontSize: "15px",
                                                                outline: "none",
                                                                transition: "all 0.2s ease",
                                                                fontFamily: "Poppins, sans-serif",
                                                            }}
                                                            onFocus={(e) => {
                                                                e.target.style.borderColor = auth.color;
                                                                e.target.style.boxShadow = `0 0 0 3px ${auth.color}20`;
                                                            }}
                                                            onBlur={(e) => {
                                                                e.target.style.borderColor = "#e5e7eb";
                                                                e.target.style.boxShadow = "none";
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Description */}
                                                    <div>
                                                        <label style={{
                                                            display: "block",
                                                            marginBottom: "8px",
                                                            fontWeight: "600",
                                                            color: "#374151",
                                                            fontSize: "14px",
                                                        }}>
                                                            Description
                                                        </label>
                                                        <textarea
                                                            placeholder="Describe your issue in detail..."
                                                            rows={isMobile ? 4 : 5}
                                                            value={formData.description}
                                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                            required
                                                            style={{
                                                                width: "100%",
                                                                padding: "14px 16px",
                                                                border: "2px solid #e5e7eb",
                                                                borderRadius: "12px",
                                                                fontSize: "15px",
                                                                outline: "none",
                                                                resize: "vertical",
                                                                minHeight: "120px",
                                                                transition: "all 0.2s ease",
                                                                fontFamily: "Poppins, sans-serif",
                                                            }}
                                                            onFocus={(e) => {
                                                                e.target.style.borderColor = auth.color;
                                                                e.target.style.boxShadow = `0 0 0 3px ${auth.color}20`;
                                                            }}
                                                            onBlur={(e) => {
                                                                e.target.style.borderColor = "#e5e7eb";
                                                                e.target.style.boxShadow = "none";
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Category & Priority */}
                                                    <div style={{
                                                        display: "grid",
                                                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                                        gap: "16px",
                                                    }}>
                                                        <div>
                                                            <label style={{
                                                                display: "block",
                                                                marginBottom: "8px",
                                                                fontWeight: "600",
                                                                color: "#374151",
                                                                fontSize: "14px",
                                                            }}>
                                                                Category
                                                            </label>
                                                            <Select
                                                                value={formData.category || undefined}
                                                                onChange={(value) => setFormData({ ...formData, category: value })}
                                                                placeholder="Select category"
                                                                style={{ width: "100%" }}
                                                                options={[
                                                                    { label: "Payment Failure", value: "Payment Failure" },
                                                                    { label: "Account Issue", value: "Account Issue" },
                                                                    { label: "Server Down", value: "Server Down" },
                                                                    { label: "Delete Request", value: "Delete Request" },
                                                                    { label: "Delivery Delay", value: "Delivery Delay" },
                                                                    { label: "Other", value: "Other" },
                                                                ]}
                                                            />
                                                        </div>

                                                        <div>
                                                            <label style={{
                                                                display: "block",
                                                                marginBottom: "8px",
                                                                fontWeight: "600",
                                                                color: "#374151",
                                                                fontSize: "14px",
                                                            }}>
                                                                Priority
                                                            </label>
                                                            <Select
                                                                value={formData.priority}
                                                                onChange={(value) => setFormData({ ...formData, priority: value })}
                                                                style={{ width: "100%" }}
                                                                options={[
                                                                    { label: "Low", value: "Low" },
                                                                    { label: "Medium", value: "Medium" },
                                                                    { label: "High", value: "High" },
                                                                    { label: "Critical", value: "Critical" },
                                                                ]}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Submit Button */}
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        style={{
                                                            width: "100%",
                                                            padding: "16px",
                                                            border: "none",
                                                            background: loading ? "#9fb5ff" : auth.color,
                                                            color: "#fff",
                                                            borderRadius: "12px",
                                                            fontSize: "16px",
                                                            fontWeight: "600",
                                                            cursor: "pointer",
                                                            transition: "all 0.2s ease",
                                                            fontFamily: "Poppins, sans-serif",
                                                            marginTop: "8px",
                                                        }}
                                                        onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = "translateY(-2px)")}
                                                        onMouseLeave={(e) => !loading && (e.currentTarget.style.transform = "translateY(0)")}
                                                    >
                                                        {loading ? (
                                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                                                <div style={{
                                                                    width: "16px",
                                                                    height: "16px",
                                                                    border: "2px solid white",
                                                                    borderTopColor: "transparent",
                                                                    borderRadius: "50%",
                                                                    animation: "spin 1s linear infinite"
                                                                }}></div>
                                                                Submitting...
                                                            </div>
                                                        ) : (
                                                            "Submit Ticket"
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Card>

                                {/* Tickets Section */}
                                <div style={{ marginTop: "32px" }}>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "24px",
                                        flexWrap: "wrap",
                                        gap: "16px",
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <div style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "12px",
                                                background: `${auth.color}15`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: auth.color,
                                            }}>
                                                <ClipboardList size={20} />
                                            </div>
                                            <h3 style={{
                                                margin: 0,
                                                fontSize: isMobile ? "20px" : "24px",
                                                fontWeight: "700",
                                                color: "#1f2937",
                                            }}>
                                                {isMobile ? "Tickets" : "All Support Tickets"}
                                            </h3>
                                        </div>
                                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                            <span style={{
                                                fontSize: "14px",
                                                color: "#6b7280",
                                                fontWeight: "500",
                                            }}>
                                                {filteredTickets.length} tickets found
                                            </span>
                                            {isMobile && (
                                                <button
                                                    onClick={() => setMobileTableOpen(true)}
                                                    style={{
                                                        padding: "8px 16px",
                                                        background: "#f3f4f6",
                                                        border: "none",
                                                        borderRadius: "8px",
                                                        color: "#374151",
                                                        fontWeight: "600",
                                                        fontSize: "13px",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px",
                                                    }}
                                                >
                                                    <Menu size={16} />
                                                    Table View
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Desktop Filters */}
                                    {!isMobile && <FilterSection />}

                                    {/* Mobile Card View */}
                                    {isMobile ? (
                                        <div>
                                            {filteredTickets.length === 0 ? (
                                                <div style={{
                                                    textAlign: "center",
                                                    padding: "60px 20px",
                                                    color: "#6b7280",
                                                    fontSize: "16px",
                                                    background: "#f9fafb",
                                                    borderRadius: "16px",
                                                    border: "1px dashed #e5e7eb",
                                                }}>
                                                    <div style={{ marginBottom: "16px" }}>
                                                        <HelpCircle size={48} color="#d1d5db" />
                                                    </div>
                                                    <div style={{ fontWeight: "600", marginBottom: "8px", color: "#374151" }}>
                                                        No tickets found
                                                    </div>
                                                    <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                                                        Try adjusting your filters or create a new ticket
                                                    </p>
                                                </div>
                                            ) : (
                                                filteredTickets.map((ticket, index) => (
                                                    <MobileTicketCard
                                                        key={ticket._id}
                                                        ticket={ticket}
                                                        index={index}
                                                    />
                                                ))
                                            )}
                                        </div>
                                    ) : (
                                        /* Desktop Table View */
                                        <Card
                                            style={{
                                                borderRadius: "20px",
                                                border: "none",
                                                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Table
                                                dataSource={filteredTickets.map((t, i) => ({ ...t, index: i + 1 })) || []}
                                                rowKey="_id"
                                                columns={columns}
                                                pagination={{
                                                    pageSize: 8,
                                                    showQuickJumper: true,
                                                    showSizeChanger: true,
                                                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} tickets`,
                                                }}
                                                expandable={{
                                                    ...expandable,
                                                    expandIconColumnIndex: -1,
                                                }}
                                                scroll={{ x: 'max-content' }}
                                            />
                                        </Card>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>

            {/* Mobile Chat Modal */}
            <MobileChatModal />

            {/* Mobile Filters Drawer */}
            <Drawer
                title={
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "8px",
                            background: `${auth.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: auth.color,
                        }}>
                            <Filter size={18} />
                        </div>
                        <div>
                            <div style={{ fontWeight: "600", fontSize: "16px", color: "#1f2937" }}>
                                Filter Tickets
                            </div>
                            <div style={{ fontSize: "12px", color: "#6b7280" }}>
                                {filteredTickets.length} tickets found
                            </div>
                        </div>
                    </div>
                }
                placement="right"
                onClose={() => setMobileFiltersOpen(false)}
                open={mobileFiltersOpen}
                width={320}
                styles={{
                    body: { padding: "20px" }
                }}
            >
                <FilterSection />
                <Button
                    type="primary"
                    onClick={() => setMobileFiltersOpen(false)}
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        background: auth.color,
                        height: "48px",
                        borderRadius: "12px",
                        fontWeight: "600",
                        fontSize: "16px",
                    }}
                >
                    Apply Filters
                </Button>
            </Drawer>

            {/* Mobile Table View Drawer */}
            <Drawer
                title={
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "8px",
                            background: `${auth.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: auth.color,
                        }}>
                            <ClipboardList size={18} />
                        </div>
                        <div>
                            <div style={{ fontWeight: "600", fontSize: "16px", color: "#1f2937" }}>
                                All Tickets
                            </div>
                            <div style={{ fontSize: "12px", color: "#6b7280" }}>
                                Table View
                            </div>
                        </div>
                    </div>
                }
                placement="bottom"
                onClose={() => setMobileTableOpen(false)}
                open={mobileTableOpen}
                height="85%"
                styles={{
                    body: { padding: "0" },
                    header: {
                        borderBottom: "1px solid #e5e7eb",
                        padding: "16px 20px"
                    }
                }}
                extra={
                    <Button
                        type="text"
                        onClick={() => setMobileTableOpen(false)}
                        style={{ width: "36px", height: "36px", padding: 0 }}
                    >
                        <X size={20} />
                    </Button>
                }
            >
                <div style={{ height: "100%", overflow: "auto" }}>
                    <Table
                        dataSource={filteredTickets.map((t, i) => ({ ...t, index: i + 1 })) || []}
                        rowKey="_id"
                        columns={columns.filter(col => !col.responsive || col.responsive.includes('md'))}
                        pagination={{ pageSize: 5 }}
                        size="small"
                        scroll={{ y: 400 }}
                        style={{ padding: "0 16px" }}
                    />
                </div>
            </Drawer>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .dashboard-container {
                        padding: 0 0;
                    }
                    
                    .ant-table {
                        font-size: 13px;
                    }
                    
                    .ant-table-thead > tr > th {
                        padding: 12px 8px !important;
                        font-size: 12px;
                    }
                    
                    .ant-table-tbody > tr > td {
                        padding: 12px 8px !important;
                        font-size: 12px;
                    }
                    
                    .ant-select-selector {
                        padding: 8px 12px !important;
                        font-size: 14px !important;
                        height: 42px !important;
                        display: flex !important;
                        align-items: center !important;
                    }
                    
                    .ant-picker {
                        width: 100% !important;
                    }
                    
                    .ant-picker-input > input {
                        font-size: 14px !important;
                    }
                }

                @media (max-width: 576px) {
                    h2 {
                        font-size: 20px !important;
                    }
                    
                    h3 {
                        font-size: 18px !important;
                    }
                    
                    .ant-tag {
                        font-size: 11px !important;
                        padding: 2px 8px !important;
                        border-radius: 6px !important;
                    }
                    
                    .ant-drawer-body {
                        padding: 20px 16px !important;
                    }
                    
                    .ant-btn {
                        font-size: 14px !important;
                        height: 42px !important;
                    }
                    
                    .ant-modal-content {
                        border-radius: 20px !important;
                    }
                    
                    .ant-modal-header {
                        border-radius: 20px 20px 0 0 !important;
                    }
                }

                /* Better scrollbar for mobile */
                @media (max-width: 768px) {
                    #style-2::-webkit-scrollbar {
                        width: 4px;
                    }
                    
                    #style-2::-webkit-scrollbar-thumb {
                        background-color: ${auth.color}60;
                        border-radius: 2px;
                    }
                    
                    #style-2 {
                        scrollbar-width: thin;
                        scrollbar-color: ${auth.color}60 transparent;
                    }
                }

                /* Mobile touch improvements */
                @media (max-width: 768px) {
                    button, .ant-select-selector, input, textarea {
                        -webkit-tap-highlight-color: transparent;
                    }
                    
                    button:active {
                        transform: scale(0.98);
                        transition: transform 0.1s ease;
                    }
                }

                /* Better select styling for mobile */
                .ant-select-dropdown {
                    border-radius: 12px !important;
                    padding: 8px !important;
                }
                
                .ant-select-item {
                    border-radius: 8px !important;
                    margin: 2px 0 !important;
                    padding: 12px !important;
                }
                
                .ant-select-item-option-selected {
                    background-color: ${auth.color}15 !important;
                }
            `}</style>
        </div>
    );
}