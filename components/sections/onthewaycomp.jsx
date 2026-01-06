import React from 'react';
import { User, Clock, MapPin, Route, Truck, Navigation } from 'lucide-react';

const OnTheWayComp = ({ routes }) => {
  console.log(routes);

  // Filter only routes that are on the way
  const onTheWayRoutes = routes?.filter(route => route.isgivenontheway) || [];

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "450px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e5e7eb",
          minHeight: "300px", // Mobile fallback
          maxHeight: '380px'
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            borderRadius: "12px 12px 0 0",
            padding: "16px 12px", // Reduced padding for mobile
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

          <div style={{ position: "relative", zIndex: 2 }}>
            <Truck
              size={20} // Smaller for mobile
              style={{
                color: "#ffffff",
                marginBottom: "6px",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
              }}
            />
            <h2
              style={{
                fontSize: "16px", // Smaller for mobile
                fontWeight: "700",
                color: "#ffffff",
                margin: "0",
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                letterSpacing: "0.5px",
                lineHeight: "1.3", // Better line height for mobile
              }}
            >
              On the way Orders
            </h2>
            <p
              style={{
                fontSize: "12px", // Smaller for mobile
                color: "rgba(255, 255, 255, 0.9)",
                margin: "4px 0 0 0",
                fontWeight: "500",
              }}
            >
              {onTheWayRoutes.length} order{onTheWayRoutes.length !== 1 ? 's' : ''} given in the way
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "12px", // Reduced padding for mobile
          }}
          className="ontheway-scroll-container"
        >
          {onTheWayRoutes?.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px", // Smaller for mobile
                marginTop: "40px",
                padding: "20px",
              }}
            >
              <Truck size={40} style={{ color: "#d1d5db", marginBottom: "12px" }} />
              <p>No routes On the way found</p>
            </div>
          ) : (
            onTheWayRoutes.map((route, i) => (
              <div
                key={route._id || i}
                style={{
                  marginBottom: "12px", // Reduced for mobile
                  padding: "14px", // Reduced for mobile
                  backgroundColor: "#fffbeb",
                  borderRadius: "10px", // Slightly smaller
                  border: "1px solid #fed7aa",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                className="ontheway-route-card"
              >
                {/* On the way Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px", // Adjusted for mobile
                    right: "10px", // Adjusted for mobile
                    backgroundColor: "#f59e0b",
                    color: "#ffffff",
                    borderRadius: "12px", // Smaller
                    padding: "3px 6px", // Smaller
                    fontSize: "10px", // Smaller
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    zIndex: 1,
                  }}
                >
                  <Navigation size={10} /> {/* Smaller */}
                  ON THE WAY
                </div>

                {/* Route Info */}
                <div style={{ marginBottom: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    <Route size={14} style={{ color: "#d97706" }} /> {/* Smaller */}
                    <h3
                      style={{
                        fontSize: "15px", // Smaller for mobile
                        fontWeight: "700",
                        color: "#1f2937",
                        margin: "0",
                        paddingRight: "60px", // Make room for badge
                      }}
                    >
                      {route.routename}
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "10px",
                    }}
                  >
                    <MapPin size={12} style={{ color: "#d97706" }} /> {/* Smaller */}
                    <span
                      style={{
                        fontSize: "13px", // Smaller
                        fontWeight: "600",
                        color: "#374151",
                        textTransform: "capitalize",
                      }}
                    >
                      {route.name}
                    </span>
                  </div>
                </div>

                {/* Driver Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "10px",
                    backgroundColor: "#ffffff",
                    padding: "6px 10px", // Smaller
                    borderRadius: "6px", // Smaller
                    border: "1px solid #fef3c7",
                    flexWrap: "wrap", // Wrap on small screens
                  }}
                >
                  <User size={12} style={{ color: "#f59e0b" }} /> {/* Smaller */}
                  <span
                    style={{
                      fontSize: "12px", // Smaller
                      color: "#92400e",
                      fontWeight: "500",
                    }}
                  >
                    Driver:
                  </span>
                  <span
                    style={{
                      fontSize: "13px", // Smaller
                      fontWeight: "600",
                      color: "#1f2937",
                    }}
                  >
                    {route.driver}
                  </span>
                </div>

                {/* Time Information */}

                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    gap: "8px",
                    marginBottom: "10px",
                  }}
                >
                  {/* Start Time */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "6px 10px", // Smaller
                      borderRadius: "6px", // Smaller
                      border: "1px solid #f3f4f6",
                      width: '50%',

                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        marginBottom: "2px",
                      }}
                    >
                      <Clock size={10} style={{ color: "#10b981" }} /> {/* Smaller */}
                      <span
                        style={{
                          fontSize: "10px", // Smaller
                          color: "#6b7280",
                          fontWeight: "500",
                          textTransform: "uppercase",
                        }}
                      >
                        Start
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "12px", // Smaller
                        fontWeight: "600",
                        color: "#1f2937",
                      }}
                    >
                      {route.starttime}
                    </span>
                  </div>

                  {/* End Time */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "6px 10px", // Smaller
                      borderRadius: "6px", // Smaller
                      border: "1px solid #f3f4f6",
                      width: '50%',
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        marginBottom: "2px",


                      }}
                    >
                      <Clock size={10}
                        style={{ color: "#f59e0b" }}
                      /> {/* Smaller */}
                      <span
                        style={{
                          fontSize: "10px", // Smaller
                          color: "#6b7280",
                          fontWeight: "500",
                          textTransform: "uppercase",
                        }}
                      >
                        End
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "12px", // Smaller
                        fontWeight: "600",
                        color: "#1f2937",
                      }}
                    >
                      {route.endtime}
                    </span>
                  </div>
                </div>
                {/* Duration */}
                <div
                  style={{
                    backgroundColor: "#fef3c7",
                    border: "1px solid #fbbf24",
                    borderRadius: "6px", // Smaller
                    padding: "6px 10px", // Smaller
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px", // Smaller
                      color: "#92400e",
                      fontWeight: "600",
                    }}
                  >
                    Duration: {route.totaltime}
                  </span>
                </div>

                {/* Status Indicators */}
                <div
                  style={{
                    display: "flex",
                    gap: "4px", // Smaller
                    flexWrap: "wrap",
                  }}
                >
                  {route.iscompleted && (
                    <span
                      style={{
                        fontSize: "9px", // Smaller
                        backgroundColor: "#dcfce7",
                        color: "#166534",
                        padding: "2px 5px", // Smaller
                        borderRadius: "10px", // Smaller
                        fontWeight: "600",
                      }}
                    >
                      COMPLETED
                    </span>
                  )}
                  {route.isactive && (
                    <span
                      style={{
                        fontSize: "9px", // Smaller
                        backgroundColor: "#dbeafe",
                        color: "#1d4ed8",
                        padding: "2px 5px", // Smaller
                        borderRadius: "10px", // Smaller
                        fontWeight: "600",
                      }}
                    >
                      ACTIVE
                    </span>
                  )}
                  {route.iscancelled && (
                    <span
                      style={{
                        fontSize: "9px", // Smaller
                        backgroundColor: "#fecaca",
                        color: "#dc2626",
                        padding: "2px 5px", // Smaller
                        borderRadius: "10px", // Smaller
                        fontWeight: "600",
                      }}
                    >
                      CANCELLED
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Custom Scrollbar Style - Responsive */}
      <style>{`
        /* Mobile-first responsive styles */
        @media (max-width: 768px) {
          .ontheway-scroll-container {
            padding: 10px !important;
          }
          
          .ontheway-route-card {
            padding: 12px !important;
            margin-bottom: 10px !important;
          }
          
          /* Adjust card content for very small screens */
          @media (max-width: 480px) {
            .ontheway-route-card > div:nth-child(4) {
              grid-template-columns: 1fr !important;
            }
            
            .ontheway-route-card h3 {
              font-size: 14px !important;
              line-height: 1.2 !important;
            }
          }
        }
        
        /* Custom scrollbar styling */
        .ontheway-scroll-container {
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: #f59e0b #fffbeb; /* Firefox */
        }
        
        .ontheway-scroll-container::-webkit-scrollbar {
          width: 6px; /* Thin scrollbar */
          height: 6px; /* Horizontal scrollbar height */
        }
        
        .ontheway-scroll-container::-webkit-scrollbar-track {
          background: #fffbeb; /* light-yellow background */
          border-radius: 10px;
        }
        
        .ontheway-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 10px;
          border: 1px solid #fed7aa;
        }
        
        .ontheway-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #d97706, #b45309);
        }
        
        /* Mobile-specific scrollbar */
        @media (max-width: 768px) {
          .ontheway-scroll-container {
            overflow-y: auto; /* Ensure auto scroll on mobile */
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
          }
          
          .ontheway-scroll-container::-webkit-scrollbar {
            width: 4px; /* Even thinner on mobile */
          }
          
          .ontheway-scroll-container::-webkit-scrollbar-track {
            background: #fffbeb;
          }
        }
        
        /* Card hover effects */
        .ontheway-route-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.15);
          border-color: #fbbf24;
        }
        
        /* Animations */
        @keyframes onthewayFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .ontheway-route-card {
          animation: onthewayFadeIn 0.5s ease-out;
        }
        
        /* Pulse animation for on-the-way badge */
        .ontheway-route-card:hover > div:first-child {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        /* Touch-friendly hover alternatives */
        @media (hover: none) and (pointer: coarse) {
          .ontheway-route-card:hover {
            transform: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }
          
          .ontheway-route-card:active {
            transform: translateY(-1px);
            box-shadow: 0 8px 25px rgba(245, 158, 11, 0.15);
          }
          
          .ontheway-route-card:active > div:first-child {
            animation: pulse 1.5s ease-in-out infinite;
          }
        }
        
        /* Improved responsive text */
        @media (max-width: 400px) {
          .ontheway-route-card h3 {
            font-size: 13px !important;
          }
          
          .ontheway-route-card > div:nth-child(2) > div:nth-child(2) span {
            font-size: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OnTheWayComp;