import React, { useEffect, useMemo, useState } from "react";
import {
  MapPin,
  Package,
  CheckCircle,
  XCircle,
  Truck,
  Clock,
  ChevronDown,
  ChevronUp,
  User,
  Phone
} from "lucide-react";
import { useSelector } from "react-redux";

const Dashstops = ({ todayroutes }) => {
  const { auth } = useSelector(({ auth }) => auth);
  const [expandedBranch, setExpandedBranch] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);

  // Check screen size for responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const branchdata = useMemo(() => {
    if (!todayroutes || todayroutes.length === 0) return [];

    const branchStats = {};

    todayroutes.forEach((route) => {
      const brName = route?.branch?.name || "Unknown Branch";

      if (!branchStats[brName]) {
        branchStats[brName] = {
          branch: brName,
          total: 0,
          completed: 0,
          cancelled: 0,
          ontheway: 0,
          pending: 0,
          completedStops: [],
          cancelledStops: [],
          onthewayStops: [],
          pendingStops: []
        };
      }

      route.stops?.forEach((stop) => {
        branchStats[brName].total += 1;

        const stopObj = {
          stopname: stop.name,
          customer: stop.customer_name,
          phone: stop.customer_phoneno,
          routename: route.name,
        };

        if (stop.iscompleted) {
          branchStats[brName].completed += 1;
          branchStats[brName].completedStops.push(stopObj);
        }
        else if (stop.iscancelled) {
          branchStats[brName].cancelled += 1;
          branchStats[brName].cancelledStops.push(stopObj);
        }
        else if (stop.isgivenontheway) {
          branchStats[brName].ontheway += 1;
          branchStats[brName].onthewayStops.push(stopObj);
        }
        else {
          branchStats[brName].pending += 1;
          branchStats[brName].pendingStops.push(stopObj);
        }
      });
    });

    return Object.values(branchStats);
  }, [todayroutes]);

  const toggleBranch = (branchName) => {
    setExpandedBranch(expandedBranch === branchName ? null : branchName);
    setExpandedCategory({});
  };

  const toggleCategory = (branchIndex, category) => {
    const key = `${branchIndex}-${category}`;
    setExpandedCategory(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="dashboardcomp1"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          maxHeight: '350px',
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e5e7eb",
        }}
      >

        {/* HEADER */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(62, 22, 224, 1) 0%, rgba(88, 46, 255, 1) 100%)",
            borderRadius: "12px 12px 0 0",
            padding: "20px",
            width: '100%',
            // margin:'0',
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "100px",
              height: "100px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "-5%",
              width: "80px",
              height: "80px",
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: "50%",
            }}
          />

          <Package size={24} color="white" />
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#ffffff",
              margin: "0",
              marginTop: '7px',
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              letterSpacing: "0.5px",
            }}
          >
            {auth.role === 'superadmin' ?
              "Branch wise Orders Status" : 'Orders Status'}
          </h2>
        </div>

        {/* BODY */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "15px"
          }}
          className="scroll-container"
        >
          {branchdata?.length === 0 ? (
            <div style={{
              textAlign: "center",
              marginTop: "40px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px"
            }}>
              <Package size={48} color="#9ca3af" />
              <p style={{ color: "#6b7280" }}>No orders found</p>
            </div>
          ) : (
            branchdata.map((branch, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "16px",
                  padding: "16px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* Branch Header with Toggle */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: expandedBranch === branch.branch ? "10px" : "0",
                    cursor: "pointer",
                    padding: "4px"
                  }}
                  onClick={() => toggleBranch(branch.branch)}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      backgroundColor: "#6366f1",
                      borderRadius: "8px",
                      padding: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <MapPin size={18} color="white" />
                    </div>
                    <h3 style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#1f2937",
                      margin: "0",
                    }}>{branch.branch}</h3>
                  </div>
                  {expandedBranch === branch.branch ? (
                    <ChevronUp size={20} color="#6366f1" />
                  ) : (
                    <ChevronDown size={20} color="#6366f1" />
                  )}
                </div>

                {/* Summary Stats - Always Visible - REMOVED TOTAL */}
                <div style={{
                  display: "flex",
                  gap: "18px",
                  flexWrap: "wrap",
                  marginBottom: "10px",
                  marginTop: '15px',
                  justifyContent: "center"
                }}>
                  <StatusTag
                    icon={<CheckCircle size={14} />}
                    count={branch.completed}
                    label="Completed"
                    color="#10b981"
                  />
                  <StatusTag
                    icon={<XCircle size={14} />}
                    count={branch.cancelled}
                    label="Cancelled"
                    color="#ef4444"
                  />
                  <StatusTag
                    icon={<Truck size={14} />}
                    count={branch.ontheway}
                    label="On The Way"
                    color="#3b82f6"
                  />
                  <StatusTag
                    icon={<Clock size={14} />}
                    count={branch.pending}
                    label="Pending"
                    color="#f59e0b"
                  />
                  {/* Total Status Tag REMOVED */}
                </div>

                {/* Collapsible Details */}
                {expandedBranch === branch.branch && (
                  <div style={{ marginTop: "15px" }}>
                    {/* STOP LISTS with Dropdowns */}
                    <StatusDropdown
                      title="Completed"
                      ismobile={isMobile}
                      color="#10b981"
                      icon={<CheckCircle size={16} />}
                      list={branch.completedStops}
                      count={branch.completed}
                      isExpanded={expandedCategory[`${index}-completed`]}
                      onToggle={() => toggleCategory(index, 'completed')}
                    />

                    <StatusDropdown
                      title="Cancelled"
                      color="#ef4444"
                      ismobile={isMobile}

                      icon={<XCircle size={16} />}
                      list={branch.cancelledStops}
                      count={branch.cancelled}
                      isExpanded={expandedCategory[`${index}-cancelled`]}
                      onToggle={() => toggleCategory(index, 'cancelled')}
                    />

                    <StatusDropdown
                      title="On-The-Way"
                      color="#3b82f6"
                      ismobile={isMobile}

                      icon={<Truck size={16} />}
                      list={branch.onthewayStops}
                      count={branch.ontheway}
                      isExpanded={expandedCategory[`${index}-ontheway`]}
                      onToggle={() => toggleCategory(index, 'ontheway')}
                    />

                    <StatusDropdown
                      ismobile={isMobile}

                      title="Pending"
                      color="#f59e0b"
                      icon={<Clock size={16} />}
                      list={branch.pendingStops}
                      count={branch.pending}
                      isExpanded={expandedCategory[`${index}-pending`]}
                      onToggle={() => toggleCategory(index, 'pending')}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Styles */}
        <style>{`
      /* Custom Violet/Light Scrollbar Styling */
.scroll-container::-webkit-scrollbar { 
  width: 10px; 
}
.scroll-container::-webkit-scrollbar-track {
  background: linear-gradient(135deg, rgba(62, 22, 224, 1) 0%, rgba(88, 46, 255, 1) 100%);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.scroll-container::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%);
  border-radius: 10px;
  border: 2px solid rgba(62, 22, 224, 0.3);
}
.scroll-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%);
}
.scroll-container::-webkit-scrollbar-thumb:active {
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%);
}

/* Firefox Scrollbar Styling */
.scroll-container {
  scrollbar-width: thin;
  scrollbar-color: rgba(62,22,224,0.8) rgba(62, 22, 224, 0.5);
}

/* For better visibility on dark background, you might want to add these: */
.scroll-container {
  /* Optional: Add subtle text shadow for better readability if needed */
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.scroll-container > * {
  color: white; /* Change text color to white for better contrast */
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .dashboardcomp1 {
    height: auto;
    max-height: 80vh;
  }
  
  .scroll-container {
    padding: 10px;
  }
  
  h3 {
    font-size: 16px !important;
  }
  
  /* Smaller scrollbar for mobile */
  .scroll-container::-webkit-scrollbar { 
    width: 6px; 
  }
}

@media (max-width: 480px) {
  .scroll-container {
    padding: 8px;
  }
}
        `}</style>
      </div>
    </div>
  );
};

// Status Tag Component
const StatusTag = ({ icon, count, label, color }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: color,
    padding: "6px 12px",
    color: "white",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    minWidth: "60px",
    justifyContent: "center"
  }}>
    {icon}
    <span>{count}</span>
    <span style={{
      display: "none",
      '@media (min-width: 640px)': {
        display: "inline"
      }
    }}>{label}</span>
  </div>
);

// Reusable Status Dropdown Component - REMOVED Hash icon from route display
const StatusDropdown = ({ title, ismobile, list, color, icon, count, isExpanded, onToggle }) => {
  if (!list || list.length === 0) return null;

  return (
    <div style={{ marginBottom: "12px" }}>
      {/* Dropdown Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 15px",
          backgroundColor: color + "15",
          border: `1px solid ${color}30`,
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: isExpanded ? "8px" : "0",
        }}
        onClick={onToggle}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: ismobile ? '5px' : "8px",
            color: color
          }}>
            {icon}
            <div style={{
              fontSize: ismobile ? '12px' : "16px",
              fontWeight: "600",
              margin: "0",
              color: 'black'
            }}>{ismobile ? title : title + ' Stops'}</div>
          </div>
          <span style={{
            backgroundColor: color,
            color: "white",
            padding: ismobile ? '0px 5px' : "2px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "600",
            marginRight: '0px',
            flexShrink: '0'
          }}>{count}</span>
        </div>
        {isExpanded ? (
          <ChevronUp size={15} color={color} />
        ) : (
          <ChevronDown size={15} color={color} />
        )}
      </div>

      {/* Dropdown Content */}
      {isExpanded && (
        <div style={{
          maxHeight: "200px",
          overflowY: "auto",
          paddingRight: "5px",
        }}>
          {list.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: `1px solid ${color}20`,
                padding: ismobile ? '7px' : "12px",
                borderRadius: "8px",
                marginBottom: "6px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <strong style={{ fontSize: "14px", color: "#1f2937" }}>{item.stopname}</strong>
                <span style={{
                  fontSize: ismobile ? "10px" : '12px',
                  backgroundColor: "#f3f4f6",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  color: "#4b5563",
                }}>
                  {item.routename}
                </span>
              </div>

              {(item.customer || item.phone) && (
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  fontSize: "13px",
                  color: "#6b7280"
                }}>
                  {item.customer && (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <MapPin size={12} />
                      <span>{item.customer}</span>
                    </div>
                  )}
                  {item.phone && (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Phone size={12} />
                      <span>{item.phone}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashstops;