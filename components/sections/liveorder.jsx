import React, { useMemo } from "react";
import { MapPin, Package, Route, BikeIcon, Bike, CarTaxiFront, User } from "lucide-react";

const Liveorder = ({ todayroutes }) => {

  const branchdata = useMemo(() => {
    if (!todayroutes || todayroutes.length === 0) return [];

    const branchStats = {};

    console.log(todayroutes)






    todayroutes.forEach((route) => {

      const branch = route?.name;
      if (!branchStats[branch]) {
        branchStats[branch] = { branch, count: 0, stops: [] };
      }
      console.log(route, 'r35t')
      route.stops.forEach((stop) => {


        branchStats[branch].count += 1;
        branchStats[branch].stops.push({
          stopname: stop?.name,
          routename: route?.user?.user_id,
        });

      });
    });

    return Object.values(branchStats).sort((a, b) => b.count - a.count);
  }, [todayroutes]);

  //   console.log(branchdata, "hi");

  return (
    <div style={{ width: "100%" }}>
      <div
        className="dashboardcomp1"
        style={{
          display: "flex",
          flexDirection: "column",
          // width:'200px',
          height: "380px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* Enhanced Header */}
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

          <div style={{ position: "relative", zIndex: 2 }}>
            <Package
              size={24}
              style={{
                color: "#ffffff",
                marginBottom: "8px",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
              }}
            />
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#ffffff",
                margin: "0",
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                letterSpacing: "0.5px",
              }}
            >
              Route wise orders with rider
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "5px",
            paddingTop: '15px'
          }}
          className="scroll-container"
        >
          {branchdata?.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "16px",
                marginTop: "40px",
              }}
            >
              <Package size={48} style={{ color: "#d1d5db", marginBottom: "16px" }} />
              <p>No completed orders found</p>
            </div>
          ) : (
            branchdata.map((branch, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "24px",
                  padding: "20px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                className="branch-card"
              >
                {/* Branch Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                    paddingBottom: "12px",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(62, 22, 224, 1)",
                      color: "#ffffff",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginRight: "12px",
                      boxShadow: "0 2px 8px rgba(62, 22, 224, 0.3)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#1f2937",
                        margin: "0",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <User size={18} style={{ color: "#6366f1" }} />
                      {branch?.branch}
                    </h3>
                  </div>
                </div>

                {/* Total Orders */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#10b981",
                      color: "#ffffff",
                      borderRadius: "20px",
                      padding: "6px 12px",
                      fontSize: "14px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Package size={16} />
                    Total orders: {branch?.count}
                  </div>
                </div>

                {/* Stops List */}
                {branch?.stops?.length > 0 && (
                  <div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Route size={16} style={{ color: "#8b5cf6" }} />
                      Driver Stops
                    </h4>
                    <div
                      style={{
                        display: "grid",
                        gap: "8px",
                      }}
                    >
                      {branch.stops.map((stop, stopIndex) => (
                        <div
                          key={stopIndex}
                          style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            padding: "12px 16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            transition: "all 0.2s ease",
                          }}
                          className="stop-item"
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: "#10b981",
                                borderRadius: "50%",
                              }}
                            />
                            <span
                              style={{
                                fontSize: "15px",
                                fontWeight: "600",
                                color: "#1f2937",
                                textTransform: "capitalize",
                              }}
                            >
                              {stop.stopname}
                            </span>
                          </div>
                          <span
                            style={{
                              fontSize: "13px",
                              color: "#6b7280",
                              backgroundColor: "#f3f4f6",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontWeight: "500",
                            }}
                          >
                            {stop.routename}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Enhanced Custom Scrollbar Style */}
      <style>{`
        .scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
        }
        
        .branch-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          border-color: #c7d2fe;
        }
        
        .stop-item:hover {
          background-color: #f8fafc;
          border-color: #c7d2fe;
          transform: translateX(4px);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .branch-card {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

// Example usage with sample data


export default Liveorder