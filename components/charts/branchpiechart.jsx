import { Building } from "lucide-react";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  '#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
  '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6b7280'
];

const STATUS_COLORS = {
  completed: '#10b981',
  pending: '#f59e0b',
  cancelled: '#ef4444',
  total: '#6366f1'
};

// Custom Tooltip with enhanced design
const CustomTooltip = ({ active, payload, isMobile }) => {
  if (active && payload && payload.length) {
    const { branchName, completed, branchCode, pending, cancelled, total } = payload[0].payload;

    return (
      <div
        className="tooltip-container"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: isMobile ? '8px' : '12px',
          boxShadow: isMobile
            ? '0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 10px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          padding: isMobile ? '12px' : '16px',
          fontWeight: '600',
          maxWidth: isMobile ? '160px' : '220px',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1000,
          fontSize: isMobile ? '12px' : 'inherit',
        }}
      >
        {/* Tooltip background effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: isMobile ? '2px' : '3px',
          background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
          borderRadius: isMobile ? '8px 8px 0 0' : '12px 12px 0 0',
        }} />

        <p style={{
          margin: '0 0 8px 0',
          fontSize: isMobile ? '13px' : '15px',
          fontWeight: '700',
          color: '#1f2937',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '6px' : '8px',
          lineHeight: '1.2'
        }}>
          <span style={{
            width: isMobile ? '6px' : '8px',
            height: isMobile ? '6px' : '8px',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius: '50%',
            display: 'inline-block',
            flexShrink: 0
          }} />
          <span style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {branchName} ({branchCode})
          </span>
        </p>

        {/* Status breakdown */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '4px' : '6px',
          marginTop: isMobile ? '8px' : '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '4px 0' : '6px 0',
            borderBottom: '1px solid rgba(229, 231, 235, 0.3)'
          }}>
            <span style={{
              fontSize: isMobile ? '11px' : '13px',
              color: '#6b7280',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              Completed
            </span>
            <span style={{
              fontSize: isMobile ? '11px' : '13px',
              fontWeight: '700',
              color: STATUS_COLORS.completed,
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              padding: isMobile ? '1px 6px' : '2px 10px',
              borderRadius: isMobile ? '6px' : '8px',
              whiteSpace: 'nowrap'
            }}>
              {completed}
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '4px 0' : '6px 0',
            borderBottom: '1px solid rgba(229, 231, 235, 0.3)'
          }}>
            <span style={{
              fontSize: isMobile ? '11px' : '13px',
              color: '#6b7280',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              Pending
            </span>
            <span style={{
              fontSize: isMobile ? '11px' : '13px',
              fontWeight: '700',
              color: STATUS_COLORS.pending,
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              padding: isMobile ? '1px 6px' : '2px 10px',
              borderRadius: isMobile ? '6px' : '8px',
              whiteSpace: 'nowrap'
            }}>
              {pending}
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '4px 0' : '6px 0',
            borderBottom: '1px solid rgba(229, 231, 235, 0.3)'
          }}>
            <span style={{
              fontSize: isMobile ? '11px' : '13px',
              color: '#6b7280',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              Cancelled
            </span>
            <span style={{
              fontSize: isMobile ? '11px' : '13px',
              fontWeight: '700',
              color: STATUS_COLORS.cancelled,
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              padding: isMobile ? '1px 6px' : '2px 10px',
              borderRadius: isMobile ? '6px' : '8px',
              whiteSpace: 'nowrap'
            }}>
              {cancelled}
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '6px 0 0 0' : '8px 0 0 0',
            borderTop: '2px solid rgba(99, 102, 241, 0.2)',
            marginTop: isMobile ? '2px' : '4px'
          }}>
            <span style={{
              fontSize: isMobile ? '12px' : '14px',
              color: '#1f2937',
              fontWeight: '700',
              whiteSpace: 'nowrap'
            }}>
              Total Routes
            </span>
            <span style={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '800',
              color: STATUS_COLORS.total,
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              padding: isMobile ? '2px 8px' : '4px 12px',
              borderRadius: isMobile ? '8px' : '10px',
              whiteSpace: 'nowrap'
            }}>
              {total}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

// Custom label component for pie chart
const CustomLabel = ({ x, y, fill, value, branchCode }) => {
  return (
    <g>
      <text
        x={x}
        y={y}
        fill={fill}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight="600"
      >
        <tspan x={x} dy="-6">{branchCode}</tspan>
      </text>
    </g>
  );
};

const Piebranchroutes = ({ todayroutes }) => {
  const [isInView, setIsInView] = useState(false); // Track if component is in view
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation played
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { auth } = useSelector(({ auth }) => auth);

  // Check screen size for responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          // Set animation played after completion
          setTimeout(() => {
            setHasAnimated(true);
          }, 1000); // After animation duration
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: '50px' // Trigger 50px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);
  // Group routes by start location and calculate status counts
  const chartData = useMemo(() => {
    if (!todayroutes || todayroutes.length === 0) return [];
    const grouped = todayroutes.reduce((acc, route) => {
      const branchName = route?.branch?.name || "Unknown";
      const branchCode = route?.branch?.branchcode || "N/A";
      const branchKey = `${branchName}-${branchCode}`;

      if (!acc[branchKey]) {
        acc[branchKey] = {
          branchName,
          branchCode,
          total: 0,
          completed: 0,
          pending: 0,
          cancelled: 0,
        };
      }

      acc[branchKey].total += 1;

      if (route.iscanceled) {
        acc[branchKey].cancelled += 1;
      } else if (route.stops && Array.isArray(route.stops)) {
        let routeCompleted = 0;
        let routePending = 0;
        let routeCancelled = 0;

        route.stops.forEach((stop) => {
          if (stop.iscompleted && !stop.iscancelled) routeCompleted += 1;
          else if (stop.iscancelled) routeCancelled += 1;
          else routePending += 1;
        });

        if (routeCompleted > 0 && routePending === 0 && routeCancelled === 0) {
          acc[branchKey].completed += 1;
        } else if (routeCancelled > 0) {
          acc[branchKey].cancelled += 1;
        } else {
          acc[branchKey].pending += 1;
        }
      } else {
        acc[branchKey].pending += 1;
      }

      return acc;
    }, {});

    return Object.values(grouped)
      .sort((a, b) => b.total - a.total)
      .slice(0, 10)
      .map((item, index) => ({
        ...item,
        color: COLORS[index % COLORS.length],
        value: item.total,
      }));
  }, [todayroutes]);

  // Handle pie segment hover
  const handleMouseOver = (data, index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      ref={containerRef}
      className="dashboardcomp1"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: isMobile ? '300px' : '380px',
        width: '100%',
        position: 'relative',
        padding: isMobile ? '10px' : '14px',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '-80px' : '-100px',
        right: isMobile ? '-80px' : '-50px',
        width: isMobile ? '160px' : '200px',
        height: isMobile ? '160px' : '200px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: isMobile ? '-60px' : '-60px',
        left: isMobile ? '-60px' : '-60px',
        width: isMobile ? '120px' : '180px',
        height: isMobile ? '120px' : '180px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite reverse'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(20px, -20px) rotate(120deg); }
          66% { transform: translate(-15px, 10px) rotate(240deg); }
        }
        
        @keyframes pieSegment {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .segment-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .segment-hover:hover {
          filter: brightness(1.15);
          transform: translate(0, -2px);
        }
        
        .legend-item:hover {
          transform: translateY(4px);
          transition: transform 0.2s ease;
        }
        
        .recharts-tooltip-wrapper {
          outline: none !important;
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
          width: '100%',
          height: '100%'
        }}
      >
        {/* Enhanced Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: isMobile ? '8px' : '12px',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              padding: isMobile ? '6px' : '8px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}>
              <Building color="white" size={isMobile ? 18 : 24} />
            </div>
            <div
              style={{
                fontSize: isMobile ? "17px" : "20px",
                fontWeight: "700",
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px'
              }}
            >
              {auth.role === 'superadmin' ? "Branch Distribution" : "Route Statistics"}
            </div>
          </div>

          <div style={{
            fontSize: isMobile ? "12px" : "14px",
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: '400px',
            lineHeight: '1.4'
          }}>
            Routes breakdown by status and branch
          </div>

          <div
            style={{
              width: "50px",
              height: "3px",
              background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
              borderRadius: "2px",
              marginTop: "10px",
              opacity: "0.8"
            }}
          />
        </div>

        {/* No Data State */}
        {chartData.length === 0 && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '20px 12px' : '40px',
            color: '#9ca3af',
            textAlign: 'center',
            height: isMobile ? '180px' : '220px',
            width: '100%'
          }}>
            <div style={{
              fontSize: '72px',
              marginBottom: '16px',
              opacity: '0.5',
              animation: 'float 3s ease-in-out 1'
            }}>
              <Building size={isMobile ? 48 : 72} />
            </div>
            <div style={{
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: "600",
              marginBottom: "6px",
              color: "#4b5563"
            }}>
              No branch data available
            </div>
            <div style={{
              fontSize: isMobile ? "12px" : "14px",
              maxWidth: "280px",
              lineHeight: "1.5"
            }}>
              Branch statistics will appear here once routes are assigned
            </div>
          </div>
        )}

        {/* Chart Container */}
        {chartData.length > 0 && (
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '30px',
            width: '100%',
            height: isMobile ? '240px' : '265px',
            marginBottom: isMobile ? '3px' : '12px'
          }}>
            {/* Pie Chart */}
            <div style={{
              width: isMobile ? '100%' : '50%',
              height: isMobile ? '230px' : '200px',
              position: 'relative'
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="branchName"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(props) => {
                      const { x, y, fill, value, branchCode } = props;
                      return (
                        <CustomLabel
                          x={x}
                          y={y}
                          fill={fill}
                          value={value}
                          branchCode={branchCode}
                        />
                      );
                    }}
                    innerRadius={isMobile ? 30 : 40}
                    outerRadius={isMobile ? 60 : 75}
                    paddingAngle={isMobile ? 2 : 3}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    animationBegin={100}
                    animationDuration={isInView ? 800 : 0} // Only animate when in view
                    animationEasing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                    isAnimationActive={isInView && !hasAnimated} // Only animate once when entering view
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className="segment-hover"
                        style={{
                          filter: hoveredIndex === index ?
                            `drop-shadow(0 4px 6px ${entry.color}40)` :
                            'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                          opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.8,
                          // Only animate when entering view for first time
                          animation: (isInView && !hasAnimated) ?
                            `pieSegment 0.6s ease-out ${index * 0.05}s both` : 'none',
                          stroke: 'white',
                          strokeWidth: hoveredIndex === index ? 2 : 1
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={<CustomTooltip isMobile={isMobile} />}
                    wrapperStyle={{ outline: 'none', pointerEvents: 'none' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div style={{
              width: isMobile ? '100%' : '40%',
              height: isMobile ? '80px' : '180px',
              overflowY: 'auto',
              padding: isMobile ? '0' : '0 10px',
              paddingRight: isMobile ? '0' : '5px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
                gap: isMobile ? '6px' : '8px'
              }}>
                {chartData.map((entry, index) => (
                  <div
                    key={index}
                    className="legend-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: isMobile ? '6px 8px' : '8px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      border: '1px solid rgba(229, 231, 235, 0.5)',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseOver={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: entry.color,
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    <div style={{
                      flex: 1,
                      minWidth: 0
                    }}>
                      <div style={{
                        fontSize: isMobile ? '11px' : '13px',
                        fontWeight: '600',
                        color: '#1f2937',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {entry.branchCode}
                      </div>
                      <div style={{
                        fontSize: isMobile ? '10px' : '12px',
                        color: '#6b7280',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {entry.branchName}
                      </div>
                    </div>
                    <div style={{
                      fontSize: isMobile ? '12px' : '14px',
                      fontWeight: '700',
                      color: entry.color
                    }}>
                      {entry.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default Piebranchroutes;