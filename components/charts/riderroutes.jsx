import { Bike } from "lucide-react";
import React, { useMemo, useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const COLORS = [
  "url(#gradient0)",
  "url(#gradient1)",
  "url(#gradient2)",
  "url(#gradient3)",
  "url(#gradient4)",
  "url(#gradient5)",
  "url(#gradient6)",
  "url(#gradient7)",
  "url(#gradient8)",
  "url(#gradient9)",
];

const GRADIENT_COLORS = [
  { start: "#667eea", end: "#764ba2" }, // Purple gradient
  { start: "#f093fb", end: "#f5576c" }, // Pink to red
  { start: "#4facfe", end: "#00f2fe" }, // Blue to teal
  { start: "#43e97b", end: "#38f9d7" }, // Green to aqua
  { start: "#fa709a", end: "#fee140" }, // Pink to yellow
  { start: "#30cfd0", end: "#330867" }, // Teal to deep blue
  { start: "#a3bded", end: "#6991c7" }, // Light to dark blue
  { start: "#f6d365", end: "#fda085" }, // Yellow to orange
  { start: "#5ee7df", end: "#b490ca" }, // Teal to purple
  { start: "#d299c2", end: "#fef9d7" }, // Pink to light yellow
];

// Custom Tooltip with enhanced design
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { username, count, routes } = payload[0].payload;
    return (
      <div
        className="tooltip-container"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '12px',
          boxShadow: `
            0 10px 25px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.1)
          `,
          padding: '16px',
          fontWeight: '600',
          maxWidth: "180px",
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1000,
        }}
      >
        {/* Tooltip background effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px 12px 0 0',
        }} />

        <p style={{
          margin: '0 0 10px 0',
          fontSize: '15px',
          fontWeight: '700',
          color: '#1f2937',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50%',
            display: 'inline-block'
          }} />
          {username}
        </p>



        {routes.length > 0 && (
          <div style={{
            marginTop: '12px',
            borderTop: '1px solid rgba(229, 231, 235, 0.5)',
            paddingTop: '12px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1f2937',
                letterSpacing: '0.5px'
              }}>
                ROUTES
              </span>
              <span style={{
                fontSize: '11px',
                color: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                padding: '2px 8px',
                borderRadius: '10px'
              }}>
                {routes.length}
              </span>
            </div>
            <ol style={{
              margin: '0',
              paddingLeft: '18px',
              fontSize: '12px',
              color: '#6b7280',
              maxHeight: '120px',
              overflowY: 'auto'
            }}>
              {routes.map((routeName, i) => (
                <li key={i} style={{
                  marginBottom: '4px',
                  padding: '4px 0',
                  borderBottom: '1px solid rgba(229, 231, 235, 0.3)',
                  position: 'relative',
                  paddingLeft: '6px'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '-18px',
                    top: '8px',
                    width: '5px',
                    height: '5px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%'
                  }} />
                  {routeName}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
  return null;
};

const Riderbarroute = ({ todayroutes }) => {
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

  // Prepare BarChart Data
  const barData = useMemo(() => {
    if (!todayroutes || todayroutes.length === 0) return [];

    const userStats = {};

    todayroutes.forEach((route) => {
      const user = route.user.user_id;
      if (!userStats[user]) {
        userStats[user] = { username: user, count: 0, routes: [] };
      }

      if (route.iscompleted) {
        userStats[user].count += 1;
        userStats[user].routes.push(route.name);
      }
    });

    return Object.values(userStats)
      .filter(user => user.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
      .map((user, index) => ({
        ...user,
        color: COLORS[index % COLORS.length],
        gradient: GRADIENT_COLORS[index % GRADIENT_COLORS.length]
      }));
  }, [todayroutes]);

  // Handle bar hover
  const handleMouseOver = (data, index) => {
    setHoveredBar(index);
  };

  const handleMouseLeave = () => {
    setHoveredBar(null);
  };

  return (
    <div
      className="dashboardcomp1"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: isMobile ? '320px' : '400px',
        width: '100%',
        position: 'relative',
        padding: isMobile ? '12px' : '14px',
        overflow: 'hidden',
        maxHeight: '390px'
      }}
    >
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: isMobile ? '-80px' : '-100px',
        right: isMobile ? '-80px' : '-50px',
        width: isMobile ? '160px' : '300px',
        height: isMobile ? '160px' : '300px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out '
      }} />

      <div style={{
        position: 'absolute',
        bottom: isMobile ? '-60px' : '-60px',
        left: isMobile ? '-60px' : '-60px',
        width: isMobile ? '120px' : '220px',
        height: isMobile ? '120px' : '220px',
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
        
        @keyframes barRise {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        
        .bar-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .bar-hover:hover {
          filter: brightness(1.2);
          transform: translateY(-4px);
        }
        
        @media (max-width: 640px) {
          .mobile-scroll {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            width: 100%;
          }
          
          .mobile-scroll::-webkit-scrollbar {
            height: 4px;
          }
          
          .mobile-scroll::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          }
          
          .mobile-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
          }
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
          marginBottom: isMobile ? '8px' : '4px',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: isMobile ? '6px' : '8px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
            }}>
              <Bike color="white" size={isMobile ? 18 : 24} />
            </div>
            <div
              style={{
                fontSize: isMobile ? "17px" : "20px",
                fontWeight: "700",
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.5px'
              }}
            >
              Routes Overview
            </div>
          </div>

          <div style={{
            fontSize: isMobile ? "12px" : "14px",
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: '400px',
            lineHeight: '1.4'
          }}>
            Top performers by completed routes
          </div>

          <div
            style={{
              width: "50px",
              height: "3px",
              background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "2px",
              marginTop: "10px",
              opacity: "0.8"
            }}
          />
        </div>

        {/* No Data State */}
        {barData.length === 0 && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '20px 12px' : '60px',
            color: '#9ca3af',
            textAlign: 'center',
            height: isMobile ? '220px' : '300px',
            width: '100%'
          }}>
            <div style={{
              fontSize: '72px',
              marginBottom: '16px',
              opacity: '0.5',
              animation: 'float 3s ease-in-out 1'
            }}>
              <Bike size={isMobile ? 48 : 72} />
            </div>
            <div style={{
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: "600",
              marginBottom: "6px",
              color: "#4b5563"
            }}>
              No completed routes yet
            </div>
            <div style={{
              fontSize: isMobile ? "12px" : "14px",
              maxWidth: "280px",
              lineHeight: "1.5"
            }}>
              Rider statistics will appear here once routes are marked as completed
            </div>
          </div>
        )}

        {/* Chart Container */}
        {barData.length > 0 && (
          <div
            className={isMobile ? "mobile-scroll" : ""}
            style={{
              width: "100%",
              height: isMobile ? "220px" : '290px',
              position: 'relative'
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{
                  top: isMobile ? 5 : 20,
                  right: isMobile ? 5 : 30,
                  left: 0,
                  bottom: 0
                }}
                barCategoryGap={isMobile ? "12%" : "20%"}
                barGap={isMobile ? 2 : 4}
              >
                {/* SVG Gradients */}
                <defs>
                  {GRADIENT_COLORS.map((gradient, index) => (
                    <linearGradient
                      key={index}
                      id={`gradient${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor={gradient.start} stopOpacity={0.9} />
                      <stop offset="100%" stopColor={gradient.end} stopOpacity={0.9} />
                    </linearGradient>
                  ))}
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(229, 231, 235, 0.5)"
                  vertical={false}
                />

                <XAxis
                  dataKey="username"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#6b7280',
                    fontSize: isMobile ? 9 : 12,
                    fontWeight: '600',
                    angle: isMobile ? -45 : 0,
                    textAnchor: isMobile ? 'end' : 'middle',
                  }}
                  interval={0}
                  height={isMobile ? 50 : 40}
                />

                <YAxis
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#6b7280',
                    fontSize: isMobile ? 9 : 12,
                    fontWeight: '600'
                  }}
                  label={
                    {
                      value: 'Completed Routes',
                      angle: -90,
                      position: 'insideLeft',
                      offset: 20,
                      style: {
                        textAnchor: 'middle',
                        fill: '#6b7280',
                        fontSize: '13px',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        marginRight: '-40px'
                      }
                    }
                  }
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }}
                />

                <Bar
                  dataKey="count"
                  radius={[8, 8, 3, 3]}
                  maxBarSize={isMobile ? 30 : 60}
                  onMouseOver={(data, index) => handleMouseOver(data, index)}
                  onMouseLeave={handleMouseLeave}
                  animationBegin={100}
                  animationDuration={800}
                  animationEasing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                >
                  {barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="bar-hover"
                      style={{
                        filter: hoveredBar === index ?
                          `drop-shadow(0 6px 8px ${GRADIENT_COLORS[index % GRADIENT_COLORS.length].start}40)` :
                          'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                        opacity: hoveredBar === null || hoveredBar === index ? 1 : 0.8,
                        animation: `barRise 0.6s ease-out ${index * 0.1}s both`
                      }}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>


          </div>
        )}
      </div>
    </div>
  );
};

export default Riderbarroute;