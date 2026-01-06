import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Search, MapPin, Clock, User, Calendar, Package, Map, MapPinCheck, MapPinX, Filter, X } from 'lucide-react';
import { Modal, Spin, Table, Drawer } from 'antd';
import HeaderDashboard from '../../components/header/HeaderDashboard'
import Sidebar from '~/components/sections/sidebar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllRoutes } from '~/store/orders/action';
import { getAllbranch } from '~/store/branches/action';
import RouteMap from '~/components/sections/driverroutemap';
import { StopAddressCell } from '../agentroutes/[id]';
import { toggleSidebar } from '~/store/auth/action';

const RouteDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [expandedStops, setExpandedStops] = useState({});
  const [filterType, setFilterType] = useState('today');
  const [dateRange, setDateRange] = useState([null, null]);
  const [loader, setLoader] = useState(false);
  const [selectedbranch, setselectedbranch] = useState('')
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedtime, setselectedtime] = useState('')
  const [showRouteModal, setShowRouteModal] = useState(false);
  const [activeStop, setActiveStop] = useState(null);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const { auth } = useSelector(({ auth }) => auth);
  let branches = useSelector((state) => state.branches.allBranch || []);
  const dispatch = useDispatch()
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const isActive = useSelector((state) => state.auth.isSidebarActive);


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

  branches = branches.map(b => ({
    label: b.name.charAt(0).toUpperCase() + b.name.slice(1),
    value: b._id
  }));

  useEffect(() => {
    dispatch(getAllbranch());
  }, [dispatch]);

  const toggleClass = () => setActive(!isActive);

  const routes = useSelector((state) => state.orders.allRoutes)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleClearFilters = () => {
    setselectedbranch('');
    setselectedtime('');
    setDateRange([null, null]);
  };

  useEffect(() => {
    dispatch(getAllRoutes())
  }, [dispatch]);



  const filterStops = (stops, filterType) => {
    if (filterType === 'ontheway') {
      return stops.filter(stop => stop.isgivenontheway === true);
    } else if (filterType === 'cancelled') {
      return stops.filter(stop => stop.iscancelled === true);
    }
    return stops;
  };

  const filterRoutesByStops = (routes, filterType) => {
    if (filterType === 'ontheway') {
      return routes.filter(route =>
        route.stops && route.stops.some(stop => stop.isgivenontheway === true)
      );
    } else if (filterType === 'cancelled') {
      return routes.filter(route =>
        route.stops && route.stops.some(stop => stop.iscancelled === true)
      );
    }
    return routes;
  };

  useEffect(() => {
    if (auth?.color) {
      document.documentElement.style.setProperty('--jl-primary', auth.color);
    }
  }, [auth?.color]);

  const timeRanges = [
    { label: "6 AM to 9 AM", value: "6:00-9:00" },
    { label: "9 AM to 12 PM", value: "09:00-12:00" },
    { label: "12 AM to 3 PM", value: "12:00-15:00" },
    { label: "3 PM to 6 PM", value: "15:00-18:00" },
  ];

  const filterRoutes = () => {
    let filteredRoutes = routes.filter((route) => {
      const [datePart, timePart, meridian] = route.starttime.split(" ");
      const [day, month, year] = datePart.split("-");
      const dateStr = `${month}-${day}-${year} ${timePart} ${meridian}`;

      const createdAt = new Date(dateStr);
      let matchesSearch =
        route?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route?.userid?.user_id?.toLowerCase().includes(searchTerm.toLowerCase());

      let withinRange = true;

      if (filterType === 'today') {
        const todayEnd = new Date(today);
        todayEnd.setHours(23, 59, 59, 999);
        withinRange = createdAt >= today && createdAt <= todayEnd;
      } else if (filterType === 'dateRange') {
        if (dateRange[0] && dateRange[1]) {
          const startDate = new Date(dateRange[0]);
          const endDate = new Date(dateRange[1]);
          endDate.setHours(23, 59, 59, 999);
          withinRange = createdAt >= startDate && createdAt <= endDate;
        }

        if (selectedbranch && selectedbranch.length !== 0) {
          const branchMatch = route.branch === selectedbranch;
          matchesSearch = matchesSearch && branchMatch;
        }

        if (selectedtime.length !== 0) {
          function timeToMinutes(t) {
            const [time, modifier] = t.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (modifier === 'PM' && hours !== 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;
            return hours * 60 + minutes;
          }

          const selectedRange = timeRanges.find(range => range.value === selectedtime);
          if (selectedRange) {
            const [startStr, endStr] = selectedRange.value.split('-');
            const startTotalMinutes = timeToMinutes(startStr.trim());
            const endTotalMinutes = timeToMinutes(endStr.trim());
            const parts = route.starttime.split(" ");
            const timeString = parts.slice(1).join(" ");
            const routeStartMinutes = timeToMinutes(timeString);

            if (routeStartMinutes < startTotalMinutes || routeStartMinutes >= endTotalMinutes) {
              return false;
            }
          }
        }
      }
      return matchesSearch && withinRange;
    });

    filteredRoutes = filterRoutesByStops(filteredRoutes, filterType);
    return filteredRoutes;
  };

  const responsiveColumns = isMobile ? [
    {
      title: "S.No",
      key: "index",
      width: 60,
      align: "center",
      render: (text, record, index) => {
        if (record.isDateHeader) return null;
        const data = groupedDateTableData();
        const realIndex = data
          .slice(0, index)
          .filter(item => !item.isDateHeader)
          .length;
        return (pagination.current - 1) * pagination.pageSize + realIndex + 1;
      }
    },
    {
      title: "Route Details",
      key: "mobileDetails",
      render: (_, record) => {
        if (record.isDateHeader) {
          return (
            <div style={{
              fontWeight: 700,
              fontSize: "14px",
              background: "#f1f5f9",
              padding: "8px 12px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <Calendar color={auth.color} style={{ width: 16, height: 16 }} />
              <span style={{ color: auth.color }}>
                {record.date}
              </span>
            </div>
          );
        }

        return (
          <div style={{ padding: "8px 0" }}>
            <div style={{ marginBottom: "6px" }}>
              <b style={{ fontSize: "14px" }}>{record.name}</b>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", color: "#666" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <User size={12} />
                <span>Driver: {record?.userid?.user_id || 'N/A'}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock size={12} />
                <span>Start: {record.starttime?.split(' ')[1] || 'N/A'}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Package size={12} />
                <span>Orders: {record?.stops?.length || 0}</span>
              </div>
            </div>
          </div>
        );
      }
    },
    {
      title: "Actions",
      key: "mobileActions",
      width: 100,
      align: "center",
      render: (_, record) => {
        if (record.isDateHeader) return null;

        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {record.drivermapstops?.length > 0 ? (
              <button
                style={{
                  background: auth.color,
                  color: 'white',
                  padding: '6px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setActiveStop(record.drivermapstops);
                  setShowRouteModal(true);
                }}
              >
                <MapPinCheck size={14} />
                Route
              </button>
            ) : (
              <button
                style={{
                  background: '#9b9b9b',
                  color: 'white',
                  padding: '6px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'not-allowed',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  justifyContent: 'center'
                }}
                disabled
              >
                <MapPinX size={14} />
                No Route
              </button>
            )}

            <button
              style={{
                background: '#3B82F6',
                color: 'white',
                padding: '6px 8px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '11px'
              }}
              onClick={() => {
                if (expandedRowKeys.includes(record._id)) {
                  setExpandedRowKeys(expandedRowKeys.filter(id => id !== record._id));
                } else {
                  setExpandedRowKeys([...expandedRowKeys, record._id]);
                }
              }}
            >
              {expandedRowKeys.includes(record._id) ? 'Hide' : 'View'}
            </button>
          </div>
        );
      }
    }
  ] : [
    {
      title: "S.No",
      key: "index",
      width: 80,
      align: "center",
      render: (text, record, index) => {
        if (record.isDateHeader) return null;
        const data = groupedDateTableData();
        const realIndex = data
          .slice(0, index)
          .filter(item => !item.isDateHeader)
          .length;
        return (pagination.current - 1) * pagination.pageSize + realIndex + 1;
      }
    },
    {
      title: "Route Name",
      dataIndex: "name",
      render: (text, record) =>
        record.isDateHeader ? (
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              background: "#f1f5f9",
              padding: "8px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            <Calendar
              color={auth.color}
              style={{ width: 18, height: 18 }}
            />
            <span
              style={{
                color: auth.color,
                margin: 0,
                padding: 0,
                lineHeight: "18px"
              }}
            >
              {record.date}
            </span>
          </div>
        ) : (
          <b>{text}</b>
        )
    },
    {
      title: 'Driver',
      dataIndex: ['userid', 'user_id'],
      render: (id) => <span>{id}</span>
    },
    {
      title: 'Start Time',
      dataIndex: 'starttime',
      align: 'center',
      render: (t, record) => record.isDateHeader ? null : t || <Clock style={{ color: 'red' }} size={18} />
    },
    {
      title: 'End Time',
      dataIndex: 'endtime',
      align: 'center',
      render: (t, record) => record.isDateHeader ? null : t || <Clock style={{ color: 'red' }} size={18} />
    },
    {
      title: 'Total Time',
      dataIndex: 'totaltime',
      align: 'center',
      render: (t, record) => record.isDateHeader ? null : t || <Clock style={{ color: 'red' }} size={18} />
    },
    {
      title: 'Total Orders',
      key: 'totalorders',
      align: 'center',
      render: (_, record) => {
        if (record.isDateHeader) return null;
        return (
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
            <Package size={16} color={auth.color} />
            <span>{record?.stops?.length}</span>
          </div>
        );
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      align: 'center',
      render: (_, route) => {
        if (route.isDateHeader) return null;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {route.drivermapstops?.length > 0 ? (
              <button
                style={{
                  background: auth.color,
                  color: 'white',
                  padding: '7px 0px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setActiveStop(route.drivermapstops);
                  setShowRouteModal(true);
                }}
              >
                <MapPinCheck size={22} /> View Route
              </button>
            ) : (
              <button
                style={{
                  background: '#9b9b9b',
                  color: 'white',
                  padding: '7px 0px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'not-allowed'
                }}
                disabled
              >
                <MapPinX size={22} /> No Routemap
              </button>
            )}

            <button
              style={{
                background: '#3B82F6',
                color: 'white',
                padding: '7px 14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => {
                if (expandedRowKeys.includes(route._id)) {
                  setExpandedRowKeys(expandedRowKeys.filter(id => id !== route._id));
                } else {
                  setExpandedRowKeys([...expandedRowKeys, route._id]);
                }
              }}
            >
              {expandedRowKeys.includes(route._id) ? 'Hide Orders' : 'View Orders'}
            </button>
          </div>
        );
      }
    }
  ];

  const expandedRowRender = (route) => {
    const stopColumns = isMobile ? [
      {
        title: 'S.No',
        dataIndex: 'serial',
        width: 40,
        render: (_, __, i) => <b style={{ fontSize: '12px' }}>{i + 1}</b>
      },
      {
        title: 'Order',
        key: 'mobileOrder',
        render: (record) => (
          <div style={{ fontSize: '12px' }}>
            <div><b>{record.name}</b></div>
            <div style={{ color: '#666', marginTop: '4px' }}>
              {record.customer_name} · {record.customer_phoneno}
            </div>
            <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
              {record.customer_address?.substring(0, 40)}...
            </div>
          </div>
        )
      },
      {
        title: 'Status',
        key: 'mobileStatus',
        width: 100,
        render: (record) => (
          <div style={{ fontSize: '11px' }}>
            <div>Paid: {record.isPaid ? "Yes" : "No"}</div>
            <div>${record.payment_amount || '0'}</div>
          </div>
        )
      }
    ] : [
      {
        title: 'S.No',
        dataIndex: 'serial',
        width: 60,
        render: (_, __, i) => <b>{i + 1}</b>
      },
      {
        title: 'Order Name',
        dataIndex: 'name',
        render: (text) => <b>{text}</b>
      },
      {
        title: 'Customer Name',
        dataIndex: 'customer_name'
      },
      {
        title: 'Phone',
        dataIndex: 'customer_phoneno'
      },
      {
        title: 'IsPaid',
        dataIndex: 'isPaid',
        render: (paid) => (paid ? "Yes" : "No")
      },
      {
        title: 'Amount',
        dataIndex: 'payment_amount'
      },
      {
        title: 'Address',
        dataIndex: 'customer_address'
      },
      {
        title: 'Start Time',
        dataIndex: 'starttime',
        align: 'center',
        render: (t) => t || <Clock style={{ color: 'red' }} size={18} />
      },
      {
        title: 'End Time',
        dataIndex: 'endtime',
        align: 'center',
        render: (t) => t || <Clock style={{ color: 'red' }} size={18} />
      },
      {
        title: 'Total Time',
        dataIndex: 'totaltime',
        align: 'center',
        render: (t) => t || <Clock style={{ color: 'red' }} size={18} />
      },
      {
        title: "Order Proof",
        key: "orderProof",
        render: (record) => {
          const img = record?.end_photo
            ? record.end_photo
            : "https://media.istockphoto.com/id/2148623503/vector/proof-of-delivery-line-icon.jpg?s=612x612&w=0&k=20&c=UdCWUQPbQmLui_r2BWT6Xfy9eUtkZ38Ja8H-UwlPSA0=";

          return (
            <div style={{ textAlign: "center" }} className="expanded-box">
              <img
                src={img}
                alt="proof"
                onClick={() => setPreviewImage(img)}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 4,
                  objectFit: "cover",
                  border: "1px solid #ccc",
                  marginBottom: 4,
                  cursor: "pointer",
                  transition: "0.2s"
                }}
              />
              <div style={{ fontSize: 12, color: "#666" }}>
                {record.end_location ? <StopAddressCell latLng={record?.end_location} /> : "No location"}
              </div>
            </div>
          );
        }
      }
    ];

    return (
      <Table
        columns={stopColumns}
        dataSource={route.stops}
        size="small"
        pagination={false}
        rowKey={(r, i) => i}
        bordered
        scroll={isMobile ? { x: 300 } : undefined}
      />
    );
  };

  const tableData = filterRoutes()?.map((route, index) => ({
    ...route,
    key: route._id,
    serial: index + 1
  }));

  const groupedDateTableData = () => {
    const filteredRoutes = filterRoutes();
    const grouped = {};
    filteredRoutes.forEach(route => {
      const [datePart] = route.starttime.split(" ");
      const [day, month, year] = datePart.split("-");
      const formatted = `${day}/${month}/${year}`;
      if (!grouped[formatted]) grouped[formatted] = [];
      grouped[formatted].push(route);
    });

    const sortedDates = Object.keys(grouped).sort((a, b) => {
      const da = new Date(a.split("/").reverse().join("-"));
      const db = new Date(b.split("/").reverse().join("-"));
      return db - da;
    });

    const finalList = [];
    sortedDates.forEach(date => {
      finalList.push({
        key: `header-${date}`,
        isDateHeader: true,
        date
      });
      grouped[date].forEach(route => {
        finalList.push({
          ...route,
          key: route._id,
          isDateHeader: false
        });
      });
    });

    return finalList;
  };

  const MobileFilterDrawer = () => (
    <Drawer
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Filter size={20} />
          <span>Filters</span>
        </div>
      }
      placement="right"
      onClose={() => setShowMobileFilters(false)}
      open={showMobileFilters}
      width={300}
    >
      <div style={{ padding: '16px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>Filter Type</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { value: 'today', label: "Today's Reports" },
              { value: 'dateRange', label: 'Date Range' },
              { value: 'all', label: 'All Routes' },
              { value: 'ontheway', label: "Given on the way" },
              { value: 'cancelled', label: 'Cancelled Order' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setFilterType(option.value);
                  if (option.value !== 'dateRange') {
                    setShowMobileFilters(false);
                  }
                }}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  backgroundColor: filterType === option.value ? auth.color : 'white',
                  color: filterType === option.value ? 'white' : '#374151',
                  fontWeight: '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {filterType === 'dateRange' && (
          <>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Date Range</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', color: '#666' }}>
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={dateRange[0] || ''}
                    onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '6px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', color: '#666' }}>
                    End Date
                  </label>
                  <input
                    type="date"
                    value={dateRange[1] || ''}
                    onChange={(e) => setDateRange([dateRange[0], e.target.value])}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '6px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Branch</h3>
              <select
                value={selectedbranch}
                onChange={(e) => setselectedbranch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select Branch</option>
                {branches.map((value, idx) => (
                  <option key={idx} value={value.value}>
                    {value.label}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Time Range</h3>
              <select
                value={selectedtime}
                onChange={(e) => setselectedtime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  backgroundColor: 'white'
                }}
              >
                <option value="">Select Time</option>
                {timeRanges.map((value, idx) => (
                  <option key={idx} value={value.value}>
                    {value.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div style={{ marginTop: '24px', display: 'flex', gap: '10px' }}>
          <button
            onClick={() => {
              handleClearFilters();
              setShowMobileFilters(false);
            }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #dc2626',
              backgroundColor: 'white',
              color: '#dc2626',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Clear
          </button>
          <button
            onClick={() => setShowMobileFilters(false)}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: auth.color,
              color: 'white',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (!isClient) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Spin spinning={true} tip={'Loading...'} />
      </div>
    );
  }

  return (
    <div>
      <Spin spinning={loader} tip={'Loading...'}>
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
              <Sidebar active={false} page={'orderreports'} />
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
            <style jsx>{`
              #style-2 {
                scrollbar-width: thin;
                scrollbar-color: ${auth.color} #f1f1f1;
                overflow-x: auto;
                overflow-y: auto;
              }

              @media (max-width: 767px) {
                .dashboard-container {
                  margin-top: 60px !important;
                  padding-top: 0 !important;
                }
                
                .content {
                  margin-top: 0.5rem !important;
                  border: none !important;
                  padding: 12px !important;
                }
                
                .mobile-search-container {
                  padding: 12px !important;
                  background: white;
                  margin: -12px -12px 16px -12px;
                  border-bottom: 1px solid #e5e7eb;
                }
                
                .mobile-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 16px;
                  padding: 0 12px;
                }
                
                .mobile-filter-btn {
                  display: flex;
                  align-items: center;
                  gap: 6px;
                  padding: 8px 12px;
                  background: ${auth?.color || '#3B82F6'};
                  color: white;
                  border: none;
                  border-radius: 6px;
                  font-size: 14px;
                  cursor: pointer;
                }
                
                .ant-table-wrapper {
                  overflow-x: auto;
                }
                
                .ant-table {
                  font-size: 12px;
                }
                
                .ant-table-thead > tr > th {
                  padding: 8px !important;
                  font-size: 12px;
                }
                
                .ant-table-tbody > tr > td {
                  padding: 12px 8px !important;
                }
                
                .mobile-active-filter {
                  background: #e0f2fe;
                  padding: 6px 12px;
                  border-radius: 6px;
                  margin: 12px;
                  font-size: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }
              }

              @media (min-width: 768px) {
                .mobile-only {
                  display: none !important;
                }
              }

              @media (max-width: 767px) {
                .desktop-only {
                  display: none !important;
                }
              }

              #style-2::-webkit-scrollbar {
                width: 8px;
                height: 8px;
              }

              #style-2::-webkit-scrollbar-thumb {
                background-color: ${auth.color};
                border-radius: 4px;
              }

              #style-2::-webkit-scrollbar-track {
                background-color: #f1f1f1;
              }
            `}</style>

            <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
              {/* Mobile Header */}
              {isMobile && (
                <div className="mobile-only">
                  <div className="mobile-header">
                    <h1 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1E293B',
                      margin: 0
                    }}>
                      Order Routes
                    </h1>
                    <button
                      className="mobile-filter-btn"
                      onClick={() => setShowMobileFilters(true)}
                    >
                      <Filter size={16} />
                      Filters
                    </button>
                  </div>

                  {filterType && (
                    <div className="mobile-active-filter">
                      <span>
                        Active: {[
                          { value: 'today', label: "Today's Reports" },
                          { value: 'dateRange', label: 'Date Range' },
                          { value: 'all', label: 'All Routes' },
                          { value: 'ontheway', label: "Given on the way" },
                          { value: 'cancelled', label: 'Cancelled Order' }
                        ].find(f => f.value === filterType)?.label || filterType}
                      </span>
                      <X size={14} onClick={handleClearFilters} style={{ cursor: 'pointer' }} />
                    </div>
                  )}

                  <div className="mobile-search-container">
                    <div style={{ position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        paddingLeft: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        pointerEvents: 'none'
                      }}>
                        <Search style={{ height: '18px', width: '18px', color: '#9CA3AF' }} />
                      </div>
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search routes or drivers..."
                        style={{
                          display: 'block',
                          width: '100%',
                          paddingLeft: '36px',
                          paddingRight: '12px',
                          paddingTop: '10px',
                          paddingBottom: '10px',
                          border: '1px solid #D1D5DB',
                          borderRadius: '8px',
                          fontSize: '14px',
                          backgroundColor: 'white',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Desktop Header */}
              <div className="desktop-only" style={{
                borderBottom: '1px solid #E2E8F0'
              }}>
                <div style={{
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '0 16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px 0'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      width: '100%'
                    }}>
                      <h1 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#1E293B',
                        margin: 0,
                        flex: 1,
                        textAlign: 'center'
                      }}>
                        Order Routes
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: isMobile ? '0' : '32px 16px'
              }}>
                {/* Desktop Filter Panel */}
                {!isMobile && (
                  <div style={{ borderRadius: '12px', padding: '24px' }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '16px',
                      alignItems: 'center',
                      marginBottom: '16px'
                    }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {[
                          { value: 'today', label: "Today's Reports" },
                          { value: 'dateRange', label: 'Date Range' },
                          { value: 'all', label: 'All Routes' },
                          { value: 'ontheway', label: "Given on the way" },
                          { value: 'cancelled', label: 'Cancelled Order' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setFilterType(option.value)}
                            style={{
                              padding: '12px',
                              width: '190px',
                              borderRadius: '8px',
                              border: '1px solid #D1D5DB',
                              backgroundColor: filterType === option.value ? '#3B82F6' : auth.color,
                              color: filterType === option.value ? 'black' : 'white',
                              fontWeight: '600',
                              fontSize: '19px',
                              cursor: 'pointer',
                              transition: 'all 0.2s'
                            }}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {filterType === 'dateRange' && (
                      <>
                        <div style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          marginBottom: '7px',
                          color: '#374151',
                          marginTop: '30px'
                        }}>
                          Select Filters
                        </div>

                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '15px',
                          alignItems: 'center',
                        }}>
                          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <input
                              type="date"
                              value={dateRange[0] || ''}
                              onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
                              style={{
                                padding: '10px 14px',
                                borderRadius: '8px',
                                border: '1px solid #d1d5db',
                                fontSize: '14px',
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                              }}
                              onFocus={(e) => (e.target.style.borderColor = auth?.color || '#2563eb')}
                              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                            />
                            <input
                              type="date"
                              value={dateRange[1] || ''}
                              onChange={(e) => setDateRange([dateRange[0], e.target.value])}
                              style={{
                                padding: '10px 14px',
                                borderRadius: '8px',
                                border: '1px solid #d1d5db',
                                fontSize: '14px',
                                transition: 'border-color 0.3s, box-shadow 0.3s',
                              }}
                              onFocus={(e) => (e.target.style.borderColor = auth?.color || '#2563eb')}
                              onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                            />
                          </div>

                          <select
                            value={selectedbranch}
                            onChange={(e) => setselectedbranch(e.target.value)}
                            style={{
                              padding: '12px 18px',
                              borderRadius: '8px',
                              border: '1px solid #d1d5db',
                              fontSize: '14px',
                              backgroundColor: 'white',
                              cursor: 'pointer',
                              transition: 'border-color 0.3s, box-shadow 0.3s',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = auth?.color || '#2563eb')}
                            onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                          >
                            <option value="" hidden disabled>
                              Select Branch
                            </option>
                            {branches.map((value, idx) => (
                              <option key={idx} value={value.value}>
                                {value.label}
                              </option>
                            ))}
                          </select>

                          <select
                            value={selectedtime}
                            onChange={(e) => setselectedtime(e.target.value)}
                            style={{
                              padding: '12px 18px',
                              borderRadius: '8px',
                              border: '1px solid #d1d5db',
                              fontSize: '14px',
                              backgroundColor: 'white',
                              cursor: 'pointer',
                              transition: 'border-color 0.3s, box-shadow 0.3s',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = auth?.color || '#2563eb')}
                            onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
                          >
                            <option value="" hidden disabled>
                              Select Time
                            </option>
                            {timeRanges.map((value, idx) => (
                              <option key={idx} value={value.value}>
                                {value.label}
                              </option>
                            ))}
                          </select>

                          <button
                            onClick={handleClearFilters}
                            style={{
                              padding: '11px 20px',
                              borderRadius: '8px',
                              border: 'none',
                              backgroundColor: auth?.color || '#3B82F6',
                              color: 'white',
                              fontWeight: '600',
                              cursor: 'pointer',
                              transition: 'background-color 0.3s, transform 0.2s',
                            }}
                          >
                            Clear Filters
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Desktop Search Bar */}
                {!isMobile && (
                  <div style={{ marginBottom: '24px', marginLeft: '20px' }}>
                    <div style={{ position: 'relative', maxWidth: '400px' }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        paddingLeft: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        pointerEvents: 'none'
                      }}>
                        <Search style={{ height: '20px', width: '20px', color: '#9CA3AF' }} />
                      </div>
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by route name or driver..."
                        style={{
                          display: 'block',
                          width: '100%',
                          paddingLeft: '40px',
                          paddingRight: '12px',
                          paddingTop: '12px',
                          paddingBottom: '12px',
                          border: '1px solid #D1D5DB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          backgroundColor: 'white',
                          outline: 'none',
                          transition: 'all 0.15s'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Loading State */}
                {loading && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '48px 0',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      border: '3px solid #E5E7EB',
                      borderTop: '3px solid #3B82F6',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    <span style={{
                      marginLeft: '12px',
                      color: '#64748B',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}>
                      Loading routes...
                    </span>
                    <style>
                      {`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                        }
                      `}
                    </style>
                  </div>
                )}

                {/* Routes Table */}
                {!loading && (
                  <div className="ai-route-table" style={isMobile ? { padding: '0 4px' } : {}}>
                    {filterType === "dateRange" || filterType === "all" ? (
                      <Table
                        columns={responsiveColumns}

                        dataSource={groupedDateTableData()}
                        rowKey="key"
                        pagination={{
                          current: pagination.current,
                          pageSize: pagination.pageSize,
                          showSizeChanger: !isMobile,
                          showQuickJumper: !isMobile,
                          size: isMobile ? 'small' : 'default',
                          onChange: (page, pageSize) =>
                            setPagination({ current: page, pageSize })
                        }}
                        expandable={{
                          expandedRowRender,
                          expandedRowKeys,
                          expandIconColumnIndex: -1,
                          onExpandedRowsChange: setExpandedRowKeys,
                          expandIcon: () => null,
                          rowExpandable: r => !r.isDateHeader
                        }}
                        bordered={!isMobile}
                        size={isMobile ? 'small' : 'default'}
                        scroll={isMobile ? { x: 300 } : undefined}
                      />
                    ) : (
                      <Table
                        columns={responsiveColumns}
                        dataSource={tableData}
                        rowKey="_id"
                        pagination={{
                          showSizeChanger: !isMobile,
                          showQuickJumper: !isMobile,
                          hideOnSinglePage: false,
                          size: isMobile ? 'small' : 'default',
                          onChange: (page, pageSize) =>
                            setPagination({ current: page, pageSize }),
                        }}
                        expandable={{
                          expandedRowRender,
                          expandedRowKeys,
                          onExpandedRowsChange: setExpandedRowKeys,
                          expandIcon: () => null,
                          expandIconColumnIndex: -1,
                        }}
                        bordered={!isMobile}
                        size={isMobile ? 'small' : 'default'}
                        scroll={isMobile ? { x: 300 } : undefined}
                      />
                    )}
                  </div>
                )}

                {previewImage && (
                  <div
                    onClick={() => setPreviewImage(null)}
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100vw",
                      height: "100vh",
                      background: "rgba(0,0,0,0.8)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 9999,
                      cursor: "zoom-out"
                    }}
                  >
                    <img
                      src={previewImage}
                      style={{
                        maxWidth: "90%",
                        maxHeight: "90%",
                        borderRadius: 8,
                        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
                      }}
                      alt="preview"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Spin>

      <MobileFilterDrawer />

      <Modal
        open={showRouteModal}
        onCancel={() => {
          setShowRouteModal(false);
          setActiveStop(null);
        }}
        footer={null}
        width={isMobile ? '100%' : 900}
        style={isMobile ? { top: 0, margin: 0, padding: 0 } : {}}
        bodyStyle={isMobile ? { padding: 0, height: 'calc(100vh - 55px)' } : {}}
        closeIcon={
          <div
            style={{
              background: "red",
              width: 28,
              height: 28,
              borderRadius: "50%",
              display: "flex",
              position: 'absolute',
              top: isMobile ? '5px' : '10px',
              right: isMobile ? '5px' : '10px',
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              zIndex: 1000
            }}
          >
            ✕
          </div>
        }
      >
        <div style={isMobile ? { height: '100%', width: '100%' } : {}}>
          <RouteMap stops={activeStop} apiKey={process.env.MAP_API_KEY} />
        </div>
      </Modal>

      <style>{`
        .ai-route-table .ant-table-expanded-row .ant-table {
            border: none !important;
            box-shadow: none !important;
            margin-left: ${isMobile ? '0' : '22px'} !important;
        }
        
        @media (max-width: 767px) {
          .ai-route-table .ant-table-expanded-row .ant-table {
            margin: 0 !important;
            font-size: 11px;
          }
          
          .ant-drawer-body {
            padding: 0 !important;
          }
          
          .ant-modal-body {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RouteDashboard;