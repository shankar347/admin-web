import React from 'react';
import { User, Clock, MapPin, Route, CheckCircle, Trophy } from 'lucide-react';

const CompletedComp = ({ routes }) => {
  console.log(routes);

  // Filter only completed routes
  const completedRoutes = routes?.filter(route => route.iscompleted) || [];

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "470px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e5e7eb",
          minHeight: "300px", // Mobile fallback
          maxHeight: '390px'// Mobile fallback
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
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
            <CheckCircle
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
              }}
            >
              Completed Orders
            </h2>
            <p
              style={{
                fontSize: "12px", // Smaller for mobile
                color: "rgba(255, 255, 255, 0.9)",
                margin: "4px 0 0 0",
                fontWeight: "500",
              }}
            >
              {completedRoutes.length} order{completedRoutes.length !== 1 ? 's' : ''} completed
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
          className="completed-scroll-container"
        >
          {completedRoutes?.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px", // Smaller for mobile
                marginTop: "40px",
                padding: "20px",
              }}
            >
              <CheckCircle size={40} style={{ color: "#d1d5db", marginBottom: "12px" }} />
              <p>No completed routes found</p>
            </div>
          ) : (
            completedRoutes.map((route, i) => (
              <div
                key={route._id || i}
                style={{
                  marginBottom: "12px", // Reduced for mobile
                  padding: "14px", // Reduced for mobile
                  backgroundColor: "#f0fdf4",
                  borderRadius: "10px", // Slightly smaller
                  border: "1px solid #bbf7d0",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                className="completed-route-card"
              >
                {/* Completed Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px", // Adjusted for mobile
                    right: "10px", // Adjusted for mobile
                    backgroundColor: "#10b981",
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
                  <Trophy size={10} /> {/* Smaller */}
                  COMPLETED
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
                    <Route size={14} style={{ color: "#059669" }} /> {/* Smaller */}
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
                    <MapPin size={12} style={{ color: "#059669" }} /> {/* Smaller */}
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
                    border: "1px solid #d1fae5",
                    flexWrap: "wrap", // Wrap on small screens
                  }}
                >
                  <User size={12} style={{ color: "#10b981" }} /> {/* Smaller */}
                  <span
                    style={{
                      fontSize: "12px", // Smaller
                      color: "#065f46",
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
                      border: "1px solid #d1fae5",
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
                          color: "#065f46",
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
                      border: "1px solid #d1fae5",
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
                      <Clock size={10} style={{ color: "#059669" }} /> {/* Smaller */}
                      <span
                        style={{
                          fontSize: "10px", // Smaller
                          color: "#065f46",
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
                    backgroundColor: "#d1fae5",
                    border: "1px solid #10b981",
                    borderRadius: "6px", // Smaller
                    padding: "6px 10px", // Smaller
                    textAlign: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px", // Smaller
                      color: "#065f46",
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
                    marginBottom: "10px",
                    flexWrap: "wrap",
                  }}
                >
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
                  {route.isgivenontheway && (
                    <span
                      style={{
                        fontSize: "9px", // Smaller
                        backgroundColor: "#fef3c7",
                        color: "#92400e",
                        padding: "2px 5px", // Smaller
                        borderRadius: "10px", // Smaller
                        fontWeight: "600",
                      }}
                    >
                      ON THE WAY
                    </span>
                  )}
                </div>

                {/* Success Indicator */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "6px 10px", // Smaller
                    borderRadius: "6px", // Smaller
                    border: "1px solid #10b981",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px", // Reduced gap
                  }}
                  className="success-indicator"
                >
                  <div
                    style={{
                      width: "6px", // Smaller
                      height: "6px", // Smaller
                      backgroundColor: "#10b981",
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px", // Smaller
                      color: "#065f46",
                      fontWeight: "600",
                      flex: 1,
                    }}
                  >
                    Route completed successfully!
                  </span>
                  <CheckCircle size={14} style={{ color: "#10b981", flexShrink: 0 }} /> {/* Smaller */}
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
          .completed-scroll-container {
            padding: 10px !important;
          }
          
          .completed-route-card {
            padding: 12px !important;
            margin-bottom: 10px !important;
          }
          
          /* Stack time cards on very small screens */
          @media (max-width: 480px) {
            .completed-route-card > div:nth-child(4) {
              grid-template-columns: 1fr !important;
            }
            
            .success-indicator span {
              font-size: 10px !important;
            }
          }
        }
        
        /* Custom scrollbar styling */
        .completed-scroll-container {
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: #10b981 #f0fdf4; /* Firefox */
        }
        
        .completed-scroll-container::-webkit-scrollbar {
          width: 6px; /* Thin scrollbar */
          height: 6px; /* Horizontal scrollbar height */
        }
        
        .completed-scroll-container::-webkit-scrollbar-track {
          background: #f0fdf4; /* light-green background */
          border-radius: 10px;
        }
        
        .completed-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 10px;
          border: 1px solid #bbf7d0;
        }
        
        .completed-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #059669, #047857);
        }
        
        /* Mobile-specific scrollbar */
        @media (max-width: 768px) {
          .completed-scroll-container {
            overflow-y: auto; /* Ensure auto scroll on mobile */
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
          }
          
          .completed-scroll-container::-webkit-scrollbar {
            width: 4px; /* Even thinner on mobile */
          }
          
          .completed-scroll-container::-webkit-scrollbar-track {
            background: #f0fdf4;
          }
        }
        
        /* Card hover effects */
        .completed-route-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
          border-color: #10b981;
        }
        
        /* Animations */
        @keyframes completedFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes successPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .completed-route-card {
          animation: completedFadeIn 0.5s ease-out;
        }
        
        .completed-route-card:hover .success-indicator {
          animation: successPulse 1s ease-in-out infinite;
        }
        
        /* Touch-friendly hover alternatives */
        @media (hover: none) and (pointer: coarse) {
          .completed-route-card:hover {
            transform: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }
          
          .completed-route-card:active {
            transform: translateY(-1px);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
          }
        }
      `}</style>
    </div>
  );
};

export default CompletedComp;