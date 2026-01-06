import React from 'react';
import { User, Clock, MapPin, Route, XCircle, AlertTriangle } from 'lucide-react';

const Cancelcomp = ({ routes }) => {
  console.log(routes);

  // Filter only cancelled routes
  const cancelledRoutes = routes?.filter(route => route.iscancelled) || [];

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
            background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
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
            <XCircle
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
              Cancelled Orders
            </h2>
            <p
              style={{
                fontSize: "12px", // Smaller for mobile
                color: "rgba(255, 255, 255, 0.9)",
                margin: "4px 0 0 0",
                fontWeight: "500",
              }}
            >
              {cancelledRoutes.length} order{cancelledRoutes.length !== 1 ? 's' : ''} cancelled
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
          className="cancel-scroll-container"
        >
          {cancelledRoutes?.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "14px", // Smaller for mobile
                marginTop: "40px",
                padding: "20px",
              }}
            >
              <XCircle size={40} style={{ color: "#d1d5db", marginBottom: "12px" }} />
              <p>No cancelled routes found</p>
            </div>
          ) : (
            cancelledRoutes.map((route, i) => (
              <div
                key={route._id || i}
                style={{
                  marginBottom: "12px", // Reduced for mobile
                  padding: "14px", // Reduced for mobile
                  backgroundColor: "#fef2f2",
                  borderRadius: "10px", // Slightly smaller
                  border: "1px solid #fecaca",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                className="cancel-route-card"
              >
                {/* Cancelled Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px", // Adjusted for mobile
                    right: "10px", // Adjusted for mobile
                    backgroundColor: "#ef4444",
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
                  <AlertTriangle size={10} /> {/* Smaller */}
                  CANCELLED
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
                    <Route size={14} style={{ color: "#dc2626" }} /> {/* Smaller */}
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
                    <MapPin size={12} style={{ color: "#dc2626" }} /> {/* Smaller */}
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
                    border: "1px solid #f3f4f6",
                    flexWrap: "wrap", // Wrap on small screens
                  }}
                >
                  <User size={12} style={{ color: "#6366f1" }} /> {/* Smaller */}
                  <span
                    style={{
                      fontSize: "12px", // Smaller
                      color: "#6b7280",
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

                {/* Time Information - Stack on mobile */}
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
                      <Clock size={10} style={{ color: "#ef4444" }} /> {/* Smaller */}
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
                    backgroundColor: "#fff7ed",
                    border: "1px solid #fed7aa",
                    borderRadius: "6px", // Smaller
                    padding: "6px 10px", // Smaller
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px", // Smaller
                      color: "#9a3412",
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
                    marginTop: "10px",
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
              </div>
            ))
          )}
        </div>
      </div>

      {/* Custom Scrollbar Style - Responsive */}
      <style>{`
        /* Mobile-first responsive styles */
        @media (max-width: 768px) {
          .cancel-scroll-container {
            padding: 10px !important;
          }
          
          .cancel-route-card {
            padding: 12px !important;
            margin-bottom: 10px !important;
          }
          
          /* Make time cards stack vertically on very small screens */
          @media (max-width: 480px) {
            .cancel-scroll-container {
              grid-template-columns: 1fr !important;
            }
            
            /* Stack time info vertically on very small screens */
            .cancel-route-card > div:first-child > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        }
        
        /* Custom scrollbar styling */
        .cancel-scroll-container {
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: #ef4444 #fee2e2; /* Firefox */
        }
        
        .cancel-scroll-container::-webkit-scrollbar {
          width: 6px; /* Thin scrollbar */
          height: 6px; /* Horizontal scrollbar height */
        }
        
        .cancel-scroll-container::-webkit-scrollbar-track {
          background: #fee2e2; /* light-red background */
          border-radius: 10px;
        }
        
        .cancel-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ef4444, #dc2626);
          border-radius: 10px;
          border: 1px solid #fecaca;
        }
        
        .cancel-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #dc2626, #b91c1c);
        }
        
        /* Mobile-specific scrollbar */
        @media (max-width: 768px) {
          .cancel-scroll-container {
            overflow-y: auto; /* Ensure auto scroll on mobile */
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
          }
          
          .cancel-scroll-container::-webkit-scrollbar {
            width: 4px; /* Even thinner on mobile */
          }
        }
        
        /* Animation */
        @keyframes cancelFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .cancel-route-card {
          animation: cancelFadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Cancelcomp;