import React, { useEffect, useState, useMemo } from "react";
import {
  Spin,
  message,
  Modal,
  Input,
  Select,
  Button,
  DatePicker,
  Checkbox,
  Table,
  notification,
  Grid,
} from "antd";
import { FileSpreadsheet, Network, Plus, Edit3, Bot, Menu, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import SpreadsheetImportModal from "~/components/sections/routecreatemodel";
import { getAllbranch } from "~/store/branches/action";
import { getAllridersRequest } from "~/store/drivers/action";
import DriverRepository from "~/repositories/DriverRepository";
import dayjs from "dayjs";
import Link from "next/link";
import { toggleSidebar } from "~/store/auth/action";

const { useBreakpoint } = Grid;

const Index = () => {
  const [loader, setLoader] = useState(false);
  const [spreadsheetModalVisible, setSpreadsheetModalVisible] = useState(false);
  const [manualModalVisible, setManualModalVisible] = useState(false);
  const [mode, setMode] = useState("single");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const screens = useBreakpoint();

  const branches = useSelector((state) => state.branches.allBranch || []);
  const drivers = useSelector((state) => state.drivers.allRiders || []);
  const dispatch = useDispatch();

  // Form states
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [routeName, setRouteName] = useState("");
  const [stops, setStops] = useState([]);
  const { auth } = useSelector(({ auth }) => auth);
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

  const filteredDrivers = useMemo(() => {
    if (!selectedBranch) return [];
    return drivers.filter((d) => d.branch?._id === selectedBranch);
  }, [selectedBranch, drivers]);

  useEffect(() => {
    dispatch(getAllbranch());
    dispatch(getAllridersRequest());
  }, [dispatch]);

  const toggleClass = () => setActive(!isActive);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    if (auth?.color) {
      document.documentElement.style.setProperty("--jl-primary", auth.color);
    }
  }, [auth?.color]);

  const openSpreadsheetModal = (modeType) => {
    setMode(modeType);
    setSpreadsheetModalVisible(true);
  };

  const closeSpreadsheetModal = () => {
    setSpreadsheetModalVisible(false);
  };

  const openManualModal = () => {
    setManualModalVisible(true);
  };

  useEffect(() => {
    if (auth && auth.role !== "superadmin" && auth.branch) {
      setSelectedBranch(auth.branch);
    }
  }, [auth]);

  const closeManualModal = () => {
    setManualModalVisible(false);
    setSelectedBranch("");
    setSelectedDriver("");
    setSelectedDate(null);
    setRouteName("");
    setStops([]);
  };

  // Add Stop Row
  const addStop = () => {
    setStops((prev) => [
      ...prev,
      {
        key: Date.now(),
        name: "",
        customer_name: "",
        customer_phoneno: "",
        payment_amount: "",
        isPaid: false,
        customer_address: "",
      },
    ]);
  };

  const handleStopChange = (index, field, value) => {
    const updatedStops = [...stops];
    updatedStops[index][field] = value;
    setStops(updatedStops);
  };

  const removeStop = (index) => {
    const updated = [...stops];
    updated.splice(index, 1);
    setStops(updated);
  };

  const handleCreateManualRoute = async () => {
    if (!selectedBranch || !selectedDriver) {
      return message.warning("Please select branch and driver");
    }
    if (stops.length === 0) {
      return message.warning("Please add at least one stop");
    }

    const branchObj = branches.find((b) => b._id === selectedBranch);
    const driverObj = filteredDrivers.find((d) => d._id === selectedDriver);

    const routeData = {
      user_id: driverObj?.user_id || "",
      name: routeName,
      branch: selectedBranch,
      branchcode: branchObj?.branchcode || "",
      driver: selectedDriver,
      drivername: driverObj?.user_id || "",
      date: selectedDate.format("YYYY-MM-DD"),
      iscompleted: false,
      stops: stops.map((s) => ({
        ...s,
        starttime: null,
        endtime: null,
        totaltime: null,
        isactive: false,
        iscompleted: false,
        iscancelled: false,
        isgivenontheway: false,
      })),
    };

    try {
      setLoader(true);
      const result = await DriverRepository.createRoute(routeData);
      if (result?.status === 201) {
        message.success("Manual route created successfully!");
        closeManualModal();
      } else {
        notification.error({
          message: result?.message || "Failed to create manual route",
        });
      }
    } catch (err) {
      notification.error({
        message: err.response?.data?.message || "Error creating manual route",
      });
    } finally {
      setLoader(false);
    }
  };

  // Responsive table columns for stops
  const getStopColumns = () => {
    const baseColumns = [
      {
        title: "Stop Name",
        dataIndex: "name",
        render: (text, _, idx) => (
          <Input
            value={text}
            placeholder="Stop Name"
            onChange={(e) => handleStopChange(idx, "name", e.target.value)}
            size={screens.xs ? "small" : "middle"}
          />
        ),
      },
      {
        title: "User Name",
        dataIndex: "customer_name",
        render: (text, _, idx) => (
          <Input
            value={text}
            placeholder="User Name"
            onChange={(e) => handleStopChange(idx, "customer_name", e.target.value)}
            size={screens.xs ? "small" : "middle"}
          />
        ),
      },
      {
        title: "User Phone",
        dataIndex: "customer_phoneno",
        render: (text, _, idx) => (
          <Input
            value={text}
            placeholder="Phone"
            onChange={(e) => handleStopChange(idx, "customer_phoneno", e.target.value)}
            size={screens.xs ? "small" : "middle"}
          />
        ),
      },
    ];

    // Show additional columns on medium screens and up
    if (!screens.xs) {
      baseColumns.push(
        {
          title: "Payment",
          dataIndex: "payment_amount",
          render: (text, _, idx) => (
            <Input
              value={text}
              placeholder="Amount"
              onChange={(e) => handleStopChange(idx, "payment_amount", e.target.value)}
              size={screens.xs ? "small" : "middle"}
            />
          ),
        },
        {
          title: "Paid?",
          dataIndex: "isPaid",
          render: (checked, _, idx) => (
            <Checkbox
              checked={checked}
              onChange={(e) => handleStopChange(idx, "isPaid", e.target.checked)}
            />
          ),
        }
      );
    }

    // Always show address and action
    baseColumns.push(
      {
        title: "Address",
        dataIndex: "customer_address",
        render: (text, _, idx) => (
          <Input
            value={text}
            placeholder="User Address"
            onChange={(e) => handleStopChange(idx, "customer_address", e.target.value)}
            size={screens.xs ? "small" : "middle"}
          />
        ),
      },
      {
        title: "Action",
        render: (_, __, idx) => (
          <Button
            danger
            onClick={() => removeStop(idx)}
            size={screens.xs ? "small" : "middle"}
          >
            {screens.xs ? "X" : "Remove"}
          </Button>
        ),
      }
    );

    return baseColumns;
  };


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
    <div className="route-management-container">
      <Spin spinning={loader} tip={"Loading..."}>
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
            <div style={{
              marginBottom: screens.xs ? "24px" : "32px",
              padding: screens.xs ? "24px 16px 0" : "50px 24px 0",
              textAlign: screens.xs ? 'center' : 'left',
            }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: screens.xs ? "24px" : "28px",
                  fontWeight: 700,
                  color: "#262626",
                }}
              >
                Route Management
              </h2>
              <p style={{
                color: "#8c8c8c",
                fontSize: screens.xs ? "14px" : "16px",
                marginTop: '8px',
              }}>
                Create and manage your delivery routes efficiently
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: screens.lg
                  ? "repeat(auto-fit, minmax(320px, 1fr))"
                  : screens.md
                    ? "repeat(auto-fit, minmax(280px, 1fr))"
                    : "1fr",
                gap: screens.xs ? "16px" : "24px",
                padding: screens.xs ? "16px" : "24px",
                maxWidth: "1200px",
                marginInline: "auto",
              }}
            >
              {/* Import Ai Route */}
              <Link href={'/assignroutes/airoutesassign'} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    ...cardStyle,
                    flexDirection: screens.xs ? 'column' : 'row',
                    textAlign: screens.xs ? 'center' : 'left',
                    padding: screens.xs ? '16px' : '20px',
                  }}
                >
                  <b style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    fontSize: '11px',
                    width: screens.xs ? '60px' : '70px',
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    color: 'white',
                    background: 'linear-gradient(135deg, #6366F1, #8B5CF6)'
                  }}>
                    Popular
                  </b>
                  <CardIcon
                    icon={<Bot size={screens.xs ? 24 : 32} color="#6366F1" />}
                    mobile={screens.xs}
                  />
                  <CardInfo
                    title="Allocate Routes with AI"
                    desc="Upload and let AI assign branches and drivers automatically"
                    mobile={screens.xs}
                  />
                </div>
              </Link>

              {/* Import Single Route */}
              <div
                style={{
                  ...cardStyle,
                  flexDirection: screens.xs ? 'column' : 'row',
                  textAlign: screens.xs ? 'center' : 'left',
                  padding: screens.xs ? '16px' : '20px',
                }}
                onClick={() => openSpreadsheetModal("single")}
              >
                <CardIcon
                  icon={<FileSpreadsheet size={screens.xs ? 24 : 32} color="#1890ff" />}
                  mobile={screens.xs}
                />
                <CardInfo
                  title="Import Single Route"
                  desc="Upload a spreadsheet and create a single route"
                  mobile={screens.xs}
                />
              </div>

              {/* Import Multiple Routes */}
              <div
                style={{
                  ...cardStyle,
                  flexDirection: screens.xs ? 'column' : 'row',
                  textAlign: screens.xs ? 'center' : 'left',
                  padding: screens.xs ? '16px' : '20px',
                }}
                onClick={() => openSpreadsheetModal("multiple")}
              >
                <CardIcon
                  icon={<Network size={screens.xs ? 24 : 32} color="#F59E0B" />}
                  mobile={screens.xs}
                />
                <CardInfo
                  title="Import Multiple Routes"
                  desc="Upload spreadsheet and create multiple routes automatically"
                  mobile={screens.xs}
                />
              </div>

              {/* Manual Route Creation */}
              <div
                style={{
                  ...cardStyle,
                  flexDirection: screens.xs ? 'column' : 'row',
                  textAlign: screens.xs ? 'center' : 'left',
                  padding: screens.xs ? '16px' : '20px',
                }}
                onClick={openManualModal}
              >
                <CardIcon
                  icon={<Edit3 size={screens.xs ? 24 : 32} color="#fa541c" />}
                  mobile={screens.xs}
                />
                <CardInfo
                  title="Create Route Manually"
                  desc="Fill form to create a route manually"
                  mobile={screens.xs}
                />
              </div>
            </div>


          </div>
        </div>
      </Spin>

      {/* Excel Import Modal */}
      <SpreadsheetImportModal
        visible={spreadsheetModalVisible}
        mode={mode}
        onClose={closeSpreadsheetModal}
        branches={branches}
        drivers={drivers}
        auth={auth}
        isMobile={isMobile}
      />

      {/* Manual Route Creation Modal */}
      <Modal
        open={manualModalVisible}
        onCancel={closeManualModal}
        title="Create Manual Route"
        width={screens.lg ? 1000 : screens.md ? 800 : screens.xs ? '95%' : '90%'}
        footer={null}
        style={{
          top: screens.xs ? 16 : 100,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <div>
            <label className="font-medium mb-1 block">Select Branch</label>
            <Select
              placeholder="Select Branch"
              value={selectedBranch}
              onChange={(v) => {
                if (auth.role === "superadmin") {
                  setSelectedBranch(v);
                  setSelectedDriver("");
                }
              }}
              options={
                auth.role === "superadmin"
                  ? branches.map((b) => ({
                    label: b.name,
                    value: b._id,
                  }))
                  : [
                    {
                      label: auth.branchname,
                      value: auth.branch,
                    },
                  ]
              }
              style={{ width: "100%" }}
              disabled={auth.role !== "superadmin"}
              size={screens.xs ? "small" : "middle"}
            />
          </div>

          <div>
            <label className="font-medium mb-1 block">Select Driver</label>
            <Select
              placeholder="Select Driver"
              value={selectedDriver}
              onChange={setSelectedDriver}
              options={filteredDrivers.map((d) => ({
                label: d.user_id,
                value: d._id,
              }))}
              style={{ width: "100%" }}
              size={screens.xs ? "small" : "middle"}
            />
          </div>

          <div>
            <label className="font-medium mb-1 block">Select Date</label>
            <DatePicker
              style={{ width: "100%" }}
              value={selectedDate}
              onChange={setSelectedDate}
              size={screens.xs ? "small" : "middle"}
            />
          </div>

          <div>
            <label className="font-medium mb-1 block">Route Name</label>
            <Input
              placeholder="Optional route name"
              value={routeName}
              onChange={(e) => setRouteName(e.target.value)}
              size={screens.xs ? "small" : "middle"}
            />
          </div>
        </div>

        <div className="mb-4 text-right">
          <Button
            onClick={addStop}
            style={{
              backgroundColor: "#fa541c",
              color: "white",
              border: "none",
            }}
            size={screens.xs ? "small" : "middle"}
            icon={<Plus size={16} />}
          >
            Add Stop
          </Button>
        </div>

        <div style={{
          overflowX: 'auto',
          marginBottom: '16px',
          border: '1px solid #f0f0f0',
          borderRadius: '8px',
        }}>
          <Table
            dataSource={stops}
            columns={getStopColumns()}
            pagination={false}
            size={screens.xs ? "small" : "middle"}
            scroll={{ x: screens.xs ? 800 : undefined, y: 300 }}
            style={{ minWidth: screens.xs ? '800px' : '100%' }}
          />
        </div>

        <div className="text-right mt-5" style={{
          display: 'flex',
          gap: '12px',
          justifyContent: screens.xs ? 'space-between' : 'flex-end',
        }}>
          <Button
            onClick={closeManualModal}
            size={screens.xs ? "small" : "middle"}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleCreateManualRoute}
            style={{ backgroundColor: "#fa541c", borderColor: "#fa541c" }}
            size={screens.xs ? "small" : "middle"}
          >
            Create Route
          </Button>
        </div>
      </Modal>
    </div>
  );
};

// Helper components
const cardStyle = {
  background: "white",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: "2px solid transparent",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  position: 'relative',
  minHeight: '120px',
};

const CardIcon = ({ icon, mobile }) => (
  <div style={{
    flexShrink: 0,
    padding: mobile ? "8px" : "12px",
    background: "#f8f9ff",
    borderRadius: "12px",
    marginBottom: mobile ? "12px" : 0,
  }}>
    {icon}
  </div>
);

const CardInfo = ({ title, desc, mobile }) => (
  <div style={{ flex: 1 }}>
    <h3 style={{
      margin: 0,
      color: "#262626",
      fontSize: mobile ? "16px" : "18px",
      fontWeight: 600,
      marginBottom: mobile ? "4px" : "8px",
    }}>
      {title}
    </h3>
    <p style={{
      color: "#595959",
      fontSize: mobile ? "12px" : "14px",
      lineHeight: 1.5,
    }}>
      {desc}
    </p>
  </div>
);

export default Index;