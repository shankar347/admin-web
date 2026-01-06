import React, { useEffect, useState } from 'react';
import {
  ChevronDown, ChevronUp, Search, MapPin, Clock,
  User, Calendar, Mail, Phone, Home, AlertCircle, Package, Building2, MapPinHouse, House, CalendarDays,
} from 'lucide-react';
import { Spin, Table, Tag, Tooltip } from 'antd';
// import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard'
import Sidebar from '~/components/sections/sidebar';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserAllRoutes } from '~/store/orders/action';
import { getuserrequest } from '~/store/drivers/action';
import moment from 'moment';
const RouteDashboard = () => {
  // const [routes, setRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isActive, setActive] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const { auth } = useSelector(({ auth }) => auth);

  const toggleClass = () => setActive(!isActive);
  const [expandedStops, setExpandedStops] = useState({});
  const dispatch = useDispatch()
  const [expandedRows, setExpandedRows] = useState([]);
  const routes = useSelector((state) => state.orders.driverallRoutes)
  const user = useSelector((state) => state.drivers.user)

  console.log(user)

  const [previewImage, setPreviewImage] = useState(null);
  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);


  useEffect(() => {
    if (auth?.color) {
      document.documentElement.style.setProperty('--jl-primary', auth.color);
    }
  }, [auth?.color]);

  useEffect(() => {
    dispatch(getuserrequest({ id }))
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getUserAllRoutes({ id }))
  }, [dispatch, id]);

  console.log(routes, 'hi')

  // Mock agent data - replace with actual API call
  const [agentData, setAgentData] = useState({
    name: 'Siva Kumar',
    email: 'siva@example.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Chennai',
    emergencyNo: '+91 9876543211',
    branch: 'Chennai Main Branch'
  });




  // Sample data based on your input structure

  const filterRoutes = () => {
    return routes.filter((route) => {
      const search = searchTerm.toLowerCase();

      const matchesRouteName =
        route?.name?.toLowerCase().includes(search);

      const matchesStops = route?.stops?.some((stop) => {
        return (
          stop?.name?.toLowerCase().includes(search) ||
          stop?.address?.toLowerCase().includes(search)
        );
      });

      return matchesRouteName || matchesStops;
    });
  };

  // Group routes by date
  const groupRoutesByDate = () => {
    const filteredRoutes = filterRoutes();
    const grouped = {};

    filteredRoutes.forEach(route => {
      const date = new Date(route.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(route);
    });

    return grouped;
  };

  const toggleStops = (id) => {
    setExpandedStops((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Get status badge for stops
  const getStopStatusBadge = (stop) => {
    if (stop.iscancelled) {
      return (
        <span style={{
          fontSize: '10px',
          padding: '2px 6px',
          borderRadius: '4px',
          backgroundColor: '#FEE2E2',
          color: '#DC2626',
          fontWeight: '600',
          marginLeft: '8px'
        }}>
          CANCELLED
        </span>
      );
    }
    if (stop.isgivenontheway) {
      return (
        <span style={{
          fontSize: '10px',
          padding: '2px 6px',
          borderRadius: '4px',
          backgroundColor: '#FEF3C7',
          color: '#D97706',
          fontWeight: '600',
          marginLeft: '8px'
        }}>
          ON THE WAY
        </span>
      );
    }
    return null;
  };




  const expandedRowRender = (route) => {
    const stopColumns = [
      { title: "S.No", render: (_, __, i) => <b>{i + 1}</b>, width: 60 },
      { title: "Order Name", dataIndex: "name", render: (t) => <b>{t}</b> },
      { title: "Customer", dataIndex: "customer_name" },
      { title: "Phone", dataIndex: "customer_phoneno" },
      { title: "IsPaid", dataIndex: "isPaid", render: (v) => (v ? "Yes" : "No") },
      { title: "Amount", dataIndex: "payment_amount" },
      { title: "Address", dataIndex: "customer_address" },
      {
        title: "Start",
        dataIndex: "starttime",
        align: "center",
        render: (t) => t || <Clock color="red" size={18} />,
      },
      {
        title: "End",
        dataIndex: "endtime",
        align: "center",
        render: (t) => t || <Clock color="red" size={18} />,
      },
      {
        title: "Total",
        dataIndex: "totaltime",
        align: "center",
        render: (t) => t || <Clock color="red" size={18} />,
      },
      {
        title: "Order Proof",
        render: (r) => {
          const img =
            r.end_photo ||
            "https://media.istockphoto.com/id/2148623503/vector/proof-of-delivery-line-icon.jpg?s=612x612&w=0&k=20&c=UdCWUQPbQmLui_r2BWT6Xfy9eUtkZ38Ja8H-UwlPSA0=";

          return (
            <div style={{ textAlign: "center" }}
              className="expanded-box"
            >
              <img
                src={img}
                alt="proof"
                onClick={() => setPreviewImage(img)}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 6,
                  objectFit: "cover",
                  cursor: 'pointer',
                  border: "1px solid #ccc",
                }}
              />
              <div style={{ fontSize: 12, color: "#666" }}>
                {r.end_location ? <StopAddressCell latLng={r?.end_location} /> : "No location"}
              </div>
            </div>
          );
        },
      },
    ];

    return (

      <Table
        columns={stopColumns}
        dataSource={route.stops || []}
        pagination={false}
        size="small"
        rowKey={(r, i) => i}
        bordered

      />
    );
  };

  // =============== Main Table Columns ===============
  const columns = [
    {
      title: "Route Name",
      dataIndex: "name",
      align: 'center',
      render: (text, record) =>
        record.isHeader ? (
          <div
            style={{
              fontWeight: 700,
              fontSize: "16px",
              background: "#f1f5f9",
              padding: "8px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "left",   // ⭐ Fix alignment
              gap: "8px",
              justifyContent: "left", // ⭐ Center icon + text together
            }}
          >
            <Calendar
              color={auth.color}
              style={{ width: 18, height: 18 }} // ⭐ equal size for stable alignment
            />

            <span
              style={{
                color: auth.color,
                margin: 0,         // ⭐ remove default margin
                padding: 0,
                lineHeight: "18px" // ⭐ same as icon height
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
      title: "Orders",
      dataIndex: "stops",
      align: 'center',
      render: (stops, row) =>
        row.isHeader ? null : <div
          className="flex items-center justify-center gap-1"
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Package size={16} color={auth.color} />
          <span>{row?.stops?.length}</span>
        </div>,
    },
    {
      title: "Start Time",
      dataIndex: "starttime",
      align: 'center',
      render: (t, row) =>
        row.isHeader ? null : t || <Clock color="red" size={18} />,
    },
    {
      title: "End Time",
      dataIndex: "endtime",
      align: 'center',
      render: (t, row) =>
        row.isHeader ? null : t || <Clock color="red" size={18} />,
    },
    {
      title: "Total Time",
      dataIndex: "endtime",
      align: 'center',
      render: (t, row) =>
        row.isHeader ? null : t || <Clock color="red" size={18} />,
    },
    {
      title: 'Action',
      align: 'center',
      render: (_, route) => (
        route.isHeader ? null :
          <button
            style={{
              background: auth.color || '#3B82F6',
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
      )
    }
  ];


  return (

    <div>
      <Spin spinning={loader} tip={'Loading...'}>
        <HeaderDashboard />
        <div className="dashboard-container mt-5 pt-2" >
          <div id="sidebar" className={isActive ? 'slide-show' : null}>
            <Sidebar active={isActive} page={'dashboard'} />
            <div className="slide-toggle" onClick={toggleClass}>
              <span className={'qc-arrow'}>
                <i
                  className="fas fa-angle-double-left"
                  style={{
                    color: auth.color,
                  }}
                ></i>
              </span>
            </div>
          </div>
          <div
            className="content content-width mt-3"
            id="style-2"
            style={{
              border: `2px solid ${auth.color}`,
              overflowY: 'auto', // enable scrollbar
              // maxHeight: '80vh', // example height
            }}
          >
            {/* Dynamic scrollbar color style */}
            <style jsx>{`
  #style-2 {
    scrollbar-width: thin;
    scrollbar-color: ${auth.color} #f1f1f1;
    overflow-x: auto;
    overflow-y: auto;
  }

  /* Chrome, Edge, Safari */
  #style-2::-webkit-scrollbar {
    width: 8px;      /* Vertical scrollbar */
    height: 8px;     /* Horizontal scrollbar 👈 add this */
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
              {/* Agent Profile Header */}

              <div style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
                borderBottom: '1px solid #E2E8F0',
                marginBottom: '24px'
              }}>
                <div style={{
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '20px 16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'wrap'
                  }}>
                    {/* Agent Profile Left Side */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#3B82F6',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'white',
                        boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)'
                      }}>
                        {user?.user_id?.charAt(0).toUpperCase() || 'S'}
                      </div>
                      <div>
                        <h2 style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#1E293B',
                          margin: '0 0 4px 0'
                        }}>
                          {user?.user_id || 'N/A'}
                        </h2>
                        <p style={{
                          color: '#64748B',
                          margin: 0,
                          fontSize: '14px'
                        }}>
                          Agent Dashboard
                        </p>
                      </div>
                    </div>

                    {/* Agent Details Right Side */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '16px',
                        flex: 1,
                        maxWidth: '800px'
                      }}>

                        <div style={{
                          display: 'flex',
                          alignItems: 'center', gap: '8px',
                          minWidth: '120px',
                        }}>
                          <Phone style={{ width: '16px', height: '16px', color: '#64748B' }} />
                          <span style={{ fontSize: '14px', color: '#374151' }}>
                            {user.phoneno || 'N/A'}
                          </span>
                        </div>
                        <Tooltip title={'Branch name'}>
                          <div style={{
                            display: 'flex',
                            minWidth: '120px',
                            alignItems: 'center', gap: '8px'
                          }}>
                            <Building2 style={{ width: '16px', height: '16px', color: '#64748B' }} />
                            <span style={{ fontSize: '14px', color: '#374151' }}>
                              {user.branch.name || 'N/A'}
                            </span>
                          </div>
                        </Tooltip>

                        <Tooltip title={'Branch address'}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            <MapPin style={{
                              width: '6%',
                              height: '16px', color: '#64748B'
                            }} />
                            <span style={{
                              fontSize: '14px',
                              color: '#374151'
                            }}>
                              {user.branch.address || 'N/A'}
                            </span>
                          </div>
                        </Tooltip>

                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '16px',
                          flex: 1,
                          maxWidth: '800px'
                        }}
                      >


                        <Tooltip title={"Order service area"}>
                          <div style={{
                            display: 'flex',
                            minWidth: '120px', alignItems: 'center', gap: '8px'
                          }}>
                            <MapPinHouse style={{ width: '16px', height: '16px', color: '#64748B' }} />
                            <span style={{ fontSize: '14px', color: '#374151' }}>
                              {user.area.name || 'N/A'}
                            </span>
                          </div>
                        </Tooltip>
                        <Tooltip title={'Joined At'}>
                          <div style={{
                            display: 'flex',
                            minWidth: '120px', alignItems: 'center', gap: '8px'
                          }}>
                            <CalendarDays style={{ width: '16px', height: '16px', color: '#64748B' }} />
                            <span style={{ fontSize: '14px', color: '#374151' }}>
                              {moment(user.createdAt).format("DD-MM-YYYY") || 'N/A'}
                            </span>
                          </div>
                        </Tooltip>
                        <Tooltip title={"Address"}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center', gap: '8px'
                          }}>
                            <House style={{ width: '7%', height: '16px', color: '#64748B' }} />
                            <span style={{ fontSize: '14px', color: '#374151' }}>
                              {user.address || 'N/A'}
                            </span>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 16px 32px'
              }}>
                {/* Page Title and Search */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px',
                  gap: '20px',
                  flexWrap: 'wrap',
                  marginLeft: '29px'
                }}>


                  {/* <div style={{
                      display: 'flex',
                      paddingLeft: '29px',
                      alignItems: 'baseline',
                      fontWeight: '550',
                      gap: '3px'
                    }}>
                      <div style={{
                        fontSize: '2px',
                        fontWeight: '550',
                      }}>
                        {user.user_id}
                      </div>

                      <div style={{
                        fontWeight: '550'
                      }}>
                        Orders
                      </div>
                    </div> */}


                  {/* Search Bar */}
                  <div style={{ position: 'relative', maxWidth: '400px', minWidth: '300px' }}>
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
                      placeholder="Search routes, drivers, locations..."
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
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#D1D5DB';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

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
                  <div
                    style={{
                      // background: "white",
                      padding: "20px",
                      // borderRadius: "12px",
                      // boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Table
                      className="ai-route-table"
                      columns={columns}
                      dataSource={(() => {
                        const grouped = groupRoutesByDate();
                        const finalRows = [];

                        // Sort DD/MM/YYYY → newest first
                        const sortedDates = Object.keys(grouped).sort((a, b) => {
                          const da = new Date(a.split("/").reverse().join("-"));
                          const db = new Date(b.split("/").reverse().join("-"));
                          return db - da; // NEW → OLD
                        });

                        sortedDates.forEach((date) => {
                          // Add date header row
                          finalRows.push({
                            key: `date-${date}`,
                            isHeader: true,
                            date,
                          });

                          // Add actual rows
                          grouped[date].forEach((r, idx) => {
                            finalRows.push({
                              ...r,
                              key: r._id || `${date}-${idx}`,
                              isHeader: false,
                            });
                          });
                        });

                        return finalRows;
                      })()}


                      pagination={{
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        onChange: (page, pageSize) =>
                          setPagination({ current: page, pageSize })
                      }}
                      expandable={{
                        expandedRowRender,
                        expandedRowKeys,
                        expandIconColumnIndex: -1,
                        onExpandedRowsChange: setExpandedRowKeys,
                        expandIcon: () => null,
                        rowExpandable: r => !r.isHeader
                      }}
                      rowClassName={(row) =>
                        row.isHeader ? "date-header-row" : "route-row"
                      }
                      bordered
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Spin>
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
      <style>{`

/* Expanded row: remove outer border around child table */
.ai-route-table .ant-table-expanded-row .ant-table {
    border: none !important;             /* child table outline removed */
    box-shadow: none !important;
    margin-left: 22px !important;
}

`}</style>
    </div>
  );
};

export const StopAddressCell = ({ latLng }) => {

  async function getAddressFromCoordinates(latLng) {
    try {

      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${process.env.MAP_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK") {
        // The first result is usually the most accurate
        const address = data.results[0].formatted_address;
        return address;
      } else {
        console.error("Geocoding error:", data.status);
        return "Address not found";
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Address not found";
    }
  }
  const [address, setAddress] = useState("Loading...");
  useEffect(() => {
    if (latLng) {
      getAddressFromCoordinates(latLng).then(setAddress);
    }
  }, [latLng]);
  return <span>{address}</span>;
};

export default RouteDashboard;