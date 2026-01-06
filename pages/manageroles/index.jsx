// ======================== FULL UPDATED COMPONENT ============================
import React, { useEffect, useMemo, useState } from "react";
import { Table, Button, Modal, Checkbox, notification, Spin, Tag, Row, Col, Grid } from "antd";
import HeaderDashboard from "../../components/header/HeaderDashboard";
import Sidebar from "~/components/sections/sidebar";
import { useDispatch, useSelector } from "react-redux";
import adminRepositery from "~/repositories/adminRepositery";
import { getAllusersRequest } from "~/store/drivers/action";
import { toggleSidebar } from "~/store/auth/action";

const { useBreakpoint } = Grid;

// Permission sets
const FEATURES_FOR_ADMIN = [
  { name: "Order Management", actions: ["View", "Create", "Edit", "Delete"] },
  { name: "Driver Management", actions: ["View", "Create", "Edit", "Delete"] },
  { name: "Sorter Management", actions: ["View", "Create", "Edit", "Delete"] },
  { name: "Ticket Management", actions: ["View", "Create"] },
];

const FEATURES_FOR_SORTER = [
  { name: "Order Management", actions: ["View", "Create", "Edit", "Delete"] },
  { name: "Driver Management", actions: ["View", "Create", "Edit", "Delete"] },
  { name: "Ticket Management", actions: ["View", "Create"] },
];

const FEATURES_FOR_DRIVER = [
  { name: "Order Management", actions: ["View", "Create", "Edit", "Delete"] },
];

const ManageRoles = () => {
  const { auth } = useSelector(({ auth }) => auth);
  const users = useSelector((state) => state.drivers.allUsers || []);
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  const [loader, setLoader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isActive = useSelector((state) => state.auth.isSidebarActive);

  // selections
  const [selectedRowKeysAdmins, setSelectedRowKeysAdmins] = useState([]);
  const [selectedRowsAdmins, setSelectedRowsAdmins] = useState([]);
  const [selectedRowKeysDrivers, setSelectedRowKeysDrivers] = useState([]);
  const [selectedRowsDrivers, setSelectedRowsDrivers] = useState([]);
  const [selectedRowKeysSorters, setSelectedRowKeysSorters] = useState([]);
  const [selectedRowsSorters, setSelectedRowsSorters] = useState([]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingUsers, setEditingUsers] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    dispatch(getAllusersRequest());
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

  const toggleClass = () => setActive(!isActive);

  // Filter roles
  const admins = useMemo(() => users.filter((u) => u.role?.name === "admin"), [users]);
  const drivers = useMemo(() => users.filter((u) => u.role?.name === "driver"), [users]);
  const sorters = useMemo(() => users.filter((u) => u.role?.name === "sorter"), [users]);

  // ========== find common permissions for multiple users ==========
  const computeCommonPermissions = (userList) => {
    if (!userList || userList.length === 0) return [];
    const permsPerUser = userList.map((u) => u.role?.permissions || []);
    const allFeatures = Array.from(
      new Set(permsPerUser.flatMap((p) => p.map((f) => f.feature)))
    );
    const common = allFeatures.map((feature) => {
      const actionsArrays = permsPerUser.map((p) => {
        const f = p.find((x) => x.feature === feature);
        return f ? f.actions : [];
      });
      const intersection = actionsArrays.reduce((acc, arr) => {
        if (acc === null) return arr.slice();
        return acc.filter((a) => arr.includes(a));
      }, null);
      return { feature, actions: intersection || [] };
    });
    return common;
  };

  const openEditFor = (userOrUsers) => {
    const list = Array.isArray(userOrUsers) ? userOrUsers : [userOrUsers];
    setEditingUsers(list);

    const common = computeCommonPermissions(list);
    setSelectedPermissions(common);

    setEditModalOpen(true);
  };

  // ================= SELECT / UNSELECT ONE ACTION =================
  const toggleAction = (feature, action) => {
    setSelectedPermissions((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));

      let f = copy.find((p) => p.feature === feature);
      if (!f) {
        copy.push({ feature, actions: [action] });
        return copy;
      }

      if (f.actions.includes(action)) {
        f.actions = f.actions.filter((a) => a !== action);
      } else {
        f.actions.push(action);
      }

      return copy;
    });
  };

  // ================= SELECT ALL ACTIONS for a FEATURE =================
  const toggleFeatureSelectAll = (feature, actions) => {
    setSelectedPermissions((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      let f = copy.find((p) => p.feature === feature);

      const allSelected = f && f.actions.length === actions.length;

      if (allSelected) {
        // uncheck all
        f.actions = [];
      } else {
        // check all
        if (!f) {
          copy.push({ feature, actions: [...actions] });
        } else {
          f.actions = [...actions];
        }
      }

      return copy;
    });
  };

  const toggleGlobalSelectAll = (checked, allFeatures) => {
    if (checked) {
      // select all permissions properly
      const all = allFeatures.map(f => ({
        feature: f.name,
        actions: [...f.actions]
      }));
      setSelectedPermissions(all);
    } else {
      setSelectedPermissions([]);
    }
  };

  const handleSave = async () => {
    if (!editingUsers || editingUsers.length === 0) return;
    setLoader(true);
    try {
      const roleIds = Array.from(new Set(editingUsers.map((u) => u.role?._id).filter(Boolean)));
      const payload = { permissions: selectedPermissions };
      const promises = roleIds.map((roleId) => adminRepositery.updateRole(roleId, payload));
      const results = await Promise.all(promises);
      const failed = results.filter((r) => !(r && r.status === 200));

      if (failed.length === 0) {
        notification.success({ message: "Permissions updated successfully!" });
        dispatch(getAllusersRequest());
        setEditModalOpen(false);
      } else {
        notification.error({ message: failed[0].message || "Some updates failed" });
      }
    } catch (err) {
      notification.error({ message: err.message || "Failed to update permissions" });
    } finally {
      setLoader(false);
    }
  };

  // Responsive columns configuration
  const columnsCommon = useMemo(() => {
    const baseColumns = [
      {
        title: "User ID",
        dataIndex: "user_id",
        key: "user_id",
        responsive: ['xs', 'sm', 'md', 'lg', 'xl']
      },
      {
        title: "Phone",
        dataIndex: "phoneno",
        key: "phoneno",
        responsive: ['sm', 'md', 'lg', 'xl']
      },
      {
        title: "Branch",
        dataIndex: ["branch", "name"],
        key: "branch",
        render: (txt) => (txt ? String(txt).toUpperCase() : "-"),
        responsive: ['md', 'lg', 'xl']
      },
      {
        title: "Status",
        dataIndex: "isActive",
        key: "isActive",
        render: (isActive) => (
          <Tag
            color={isActive ? "green" : "red"}
            style={{
              fontSize: screens.xs ? '12px' : '14px',
              padding: screens.xs ? '2px 8px' : '4px 8px'
            }}
          >
            {isActive ? "Active" : "Inactive"}
          </Tag>
        ),
        responsive: ['sm', 'md', 'lg', 'xl']
      },
      {
        title: "Actions",
        key: "actions",
        render: (_, record) => (
          <Button
            type="primary"
            onClick={() => openEditFor(record)}
            style={{
              backgroundColor: "var(--theme-color)",
              borderColor: "var(--theme-color)",
              fontSize: screens.xs ? '12px' : '14px',
              padding: screens.xs ? '4px 8px' : '6px 12px',
              height: 'auto',
              whiteSpace: 'normal',
              lineHeight: screens.xs ? '1.2' : '1.5'
            }}
          >
            {screens.xs ? "Manage" : "Manage Permissions"}
          </Button>
        ),
        responsive: ['xs', 'sm', 'md', 'lg', 'xl']
      },
    ];

    return baseColumns.filter(col =>
      !col.responsive ||
      (Array.isArray(col.responsive) && col.responsive.some(breakpoint => screens[breakpoint]))
    );
  }, [screens]);

  const rowSelectionAdmins = {
    selectedRowKeys: selectedRowKeysAdmins,
    onChange: (keys, rows) => {
      setSelectedRowKeysAdmins(keys);
      setSelectedRowsAdmins(rows);
    },
  };

  const rowSelectionDrivers = {
    selectedRowKeys: selectedRowKeysDrivers,
    onChange: (keys, rows) => {
      setSelectedRowKeysDrivers(keys);
      setSelectedRowsDrivers(rows);
    },
  };

  const rowSelectionSorters = {
    selectedRowKeys: selectedRowKeysSorters,
    onChange: (keys, rows) => {
      setSelectedRowKeysSorters(keys);
      setSelectedRowsSorters(rows);
    },
  };

  const openEditForSelectedAdmins = () => {
    if (selectedRowsAdmins.length === 0) {
      notification.info({ message: "Select at least one admin" });
      return;
    }
    openEditFor(selectedRowsAdmins);
  };

  const openEditForSelectedDrivers = () => {
    if (selectedRowsDrivers.length === 0) {
      notification.info({ message: "Select at least one driver" });
      return;
    }
    openEditFor(selectedRowsDrivers);
  };

  const openEditForSelectedSorters = () => {
    if (selectedRowsSorters.length === 0) {
      notification.info({ message: "Select at least one sorter" });
      return;
    }
    openEditFor(selectedRowsSorters);
  };

  // determine features based on role
  const featuresToRender = useMemo(() => {
    if (!editingUsers || editingUsers.length === 0) return [];
    const allDrivers = editingUsers.every((u) => u.role?.name === "driver");
    const allAdmins = editingUsers.every((u) => u.role?.name === "admin");
    const allSorters = editingUsers.every((u) => u.role?.name === "sorter");

    if (allDrivers) return FEATURES_FOR_DRIVER;
    if (allAdmins) return FEATURES_FOR_ADMIN;
    if (allSorters) return FEATURES_FOR_SORTER;

    return FEATURES_FOR_ADMIN;
  }, [editingUsers]);

  // GLOBAL "Select All" checked state
  const isGlobalChecked =
    selectedPermissions.length === featuresToRender.length &&
    featuresToRender.every(f => {
      const found = selectedPermissions.find(p => p.feature === f.name);
      return found && found.actions.length === f.actions.length;
    });

  // Responsive styles
  const containerStyle = {
    border: `2px solid ${auth?.color || "#bfb719"}`,
    overflowY: "auto",
    padding: screens.xs ? "12px" : "20px",
    marginTop: screens.xs ? "16px" : "24px",
    borderRadius: screens.xs ? "8px" : "12px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: screens.xs ? "16px" : "20px",
    fontSize: screens.xs ? "18px" : "24px",
    fontWeight: "600"
  };

  const sectionHeaderStyle = {
    display: "flex",
    flexDirection: screens.xs ? "column" : "row",
    justifyContent: "space-between",
    alignItems: screens.xs ? "flex-start" : "center",
    gap: screens.xs ? "8px" : "0",
    marginBottom: screens.xs ? "12px" : "16px"
  };

  const sectionTitleStyle = {
    fontSize: screens.xs ? "16px" : "20px",
    margin: 0
  };

  const manageButtonStyle = {
    fontSize: screens.xs ? "12px" : "14px",
    padding: screens.xs ? "4px 12px" : "6px 16px",
    height: 'auto'
  };

  return (
    <div>
      <Spin spinning={loader}>
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
            <h2 style={headerStyle}>
              Role Management
            </h2>

            {/* Admin */}
            {auth.role === "superadmin" && (
              <div style={{ marginBottom: screens.xs ? "20px" : "24px" }}>
                <div style={sectionHeaderStyle}>
                  <h3 style={sectionTitleStyle}>Admins</h3>
                  <Button
                    onClick={openEditForSelectedAdmins}
                    disabled={selectedRowKeysAdmins.length === 0}
                    className="theme-primary-btn"
                    style={manageButtonStyle}
                  >
                    {screens.xs ? `Manage (${selectedRowKeysAdmins.length})` : `Manage Selected (${selectedRowKeysAdmins.length})`}
                  </Button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <Table
                    dataSource={admins}
                    columns={columnsCommon}
                    rowKey="_id"
                    rowSelection={rowSelectionAdmins}
                    pagination={{
                      pageSize: screens.xs ? 4 : screens.sm ? 5 : 6,
                      showSizeChanger: !screens.xs,
                      size: screens.xs ? 'small' : 'default'
                    }}
                    bordered
                    size={screens.xs ? "small" : "default"}
                    scroll={screens.xs ? { x: 500 } : undefined}
                  />
                </div>
              </div>
            )}

            {/* Sorters */}
            {auth.role !== "sorter" && (
              <div style={{ marginTop: screens.xs ? "20px" : "24px" }}>
                <div style={sectionHeaderStyle}>
                  <h3 style={sectionTitleStyle}>Sorters</h3>
                  <Button
                    onClick={openEditForSelectedSorters}
                    disabled={selectedRowKeysSorters.length === 0}
                    className="theme-primary-btn"
                    style={manageButtonStyle}
                  >
                    {screens.xs ? `Manage (${selectedRowKeysSorters.length})` : `Manage Selected (${selectedRowKeysSorters.length})`}
                  </Button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <Table
                    dataSource={sorters}
                    columns={columnsCommon}
                    rowKey="_id"
                    rowSelection={rowSelectionSorters}
                    pagination={{
                      pageSize: screens.xs ? 4 : screens.sm ? 5 : 6,
                      showSizeChanger: !screens.xs,
                      size: screens.xs ? 'small' : 'default'
                    }}
                    bordered
                    size={screens.xs ? "small" : "default"}
                    scroll={screens.xs ? { x: 500 } : undefined}
                  />
                </div>
              </div>
            )}

            {/* Drivers */}
            <div style={{ marginTop: screens.xs ? "20px" : "24px" }}>
              <div style={sectionHeaderStyle}>
                <h3 style={sectionTitleStyle}>Drivers</h3>
                <Button
                  onClick={openEditForSelectedDrivers}
                  disabled={selectedRowKeysDrivers.length === 0}
                  className="theme-primary-btn"
                  style={manageButtonStyle}
                >
                  {screens.xs ? `Manage (${selectedRowKeysDrivers.length})` : `Manage Selected (${selectedRowKeysDrivers.length})`}
                </Button>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <Table
                  dataSource={drivers}
                  columns={columnsCommon}
                  rowKey="_id"
                  rowSelection={rowSelectionDrivers}
                  pagination={{
                    pageSize: screens.xs ? 4 : screens.sm ? 5 : 6,
                    showSizeChanger: !screens.xs,
                    size: screens.xs ? 'small' : 'default'
                  }}
                  bordered
                  size={screens.xs ? "small" : "default"}
                  scroll={screens.xs ? { x: 500 } : undefined}
                />
              </div>
            </div>

            {/* Permissions Modal */}
            <Modal
              title={
                editingUsers.length === 1
                  ? `Manage Permissions - ${editingUsers[0]?.user_id}`
                  : `Manage Permissions - ${editingUsers.length} selected`
              }
              open={editModalOpen}
              onCancel={() => setEditModalOpen(false)}
              onOk={handleSave}
              width={screens.xs ? "95%" : screens.sm ? "85%" : screens.md ? "720px" : "720px"}
              okText="Save"
              cancelText="Cancel"
              bodyStyle={{
                padding: screens.xs ? "16px" : "24px",
                maxHeight: "60vh",
                overflowY: "auto"
              }}
            >
              {/* GLOBAL SELECT ALL */}
              <div style={{
                marginBottom: screens.xs ? "12px" : "16px",
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: screens.xs ? 'space-between' : 'flex-end',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <Checkbox
                  checked={isGlobalChecked}
                  onChange={(e) => toggleGlobalSelectAll(e.target.checked, featuresToRender)}
                  style={{
                    fontSize: screens.xs ? "14px" : "16px"
                  }}
                >
                  Select All Permissions
                </Checkbox>
              </div>

              <Row gutter={[16, 16]}>
                {featuresToRender.map((feature) => {
                  const selectedFeature = selectedPermissions.find(
                    (p) => p.feature === feature.name
                  );
                  const selectedActions = selectedFeature?.actions || [];

                  const isFeatureChecked = selectedActions.length === feature.actions.length;
                  const isFeatureIndeterminate =
                    selectedActions.length > 0 &&
                    selectedActions.length < feature.actions.length;

                  return (
                    <Col span={24} key={feature.name}>
                      <div
                        style={{
                          marginBottom: screens.xs ? "12px" : "16px",
                          border: "1px solid #eee",
                          padding: screens.xs ? "12px" : "14px",
                          borderRadius: "8px",
                          backgroundColor: "#fafafa"
                        }}
                      >
                        <div style={{
                          display: "flex",
                          flexDirection: screens.xs ? "column" : "row",
                          justifyContent: "space-between",
                          alignItems: screens.xs ? "flex-start" : "center",
                          marginBottom: screens.xs ? "8px" : "12px",
                          gap: screens.xs ? "8px" : "0"
                        }}>
                          <h4 style={{
                            margin: 0,
                            fontSize: screens.xs ? "15px" : "16px",
                            fontWeight: "500"
                          }}>
                            {feature.name}
                          </h4>

                          {/* SELECT ALL for each feature */}
                          <div>
                            <Checkbox
                              checked={isFeatureChecked}
                              indeterminate={isFeatureIndeterminate}
                              onChange={() => toggleFeatureSelectAll(feature.name, feature.actions)}
                              style={{
                                fontSize: screens.xs ? "14px" : "15px"
                              }}
                            >
                              Select all
                            </Checkbox>
                          </div>
                        </div>

                        <div style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: screens.xs ? "8px" : "12px",
                          rowGap: screens.xs ? "8px" : "10px"
                        }}>
                          {feature.actions.map((item) => (
                            <div key={item} style={{
                              flex: screens.xs ? "0 0 calc(50% - 8px)" : "0 0 auto",
                              minWidth: screens.xs ? "auto" : "100px"
                            }}>
                              <Checkbox
                                checked={selectedActions.includes(item)}
                                onChange={(e) => toggleAction(feature.name, item)}
                                style={{
                                  fontSize: screens.xs ? "14px" : "15px",
                                  whiteSpace: "nowrap"
                                }}
                              >
                                {item}
                              </Checkbox>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Modal>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default ManageRoles;
// ==========================================================================