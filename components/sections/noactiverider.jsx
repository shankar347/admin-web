import { Users, Clock, Package } from "lucide-react";
import { useEffect, useState } from "react";

export default function NoActiveRiders({ orders = [] }) {
  const [time, setTime] = useState("00:00");
  const [pendingCount, setPendingCount] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    // Calculate pending count based on isCompleted field
    console.log(orders, 'order')
    const pendingOrders = orders.filter(order => !order.iscompleted);
    setPendingCount(pendingOrders.length);

    // Update time every second
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Scanning animation
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 200);

    return () => {
      clearInterval(timeInterval);
      clearInterval(scanInterval);
    };
  }, [orders]);

  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "auto",
      }}
    >
      <div
        className="moving-border"
        style={{
          background:
            "linear-gradient(135deg, rgba(62, 22, 224, 0.03) 0%, rgba(62, 22, 224, 0.08) 100%)",
          borderRadius: "20px",
          padding: "30px 50px",
          paddingTop: '30px',
          paddingBottom: '30px',
          maxWidth: "550px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(62, 22, 224, 0.05)",
        }}
      >
        {/* Post Office */}
        <div className="postofficecontaner">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6917/6917648.png"
            className="postoffice"
            alt="Post Office"
          />
        </div>

        {/* Delivery Packages */}
        <div className="driveroneorder1">
          <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="Package" />
        </div>

        <div className="driveroneorder2">
          <img src="https://cdn-icons-png.flaticon.com/128/16683/16683469.png" alt="Package" />
        </div>

        <div className="driveroneorder3">
          <img src="https://cdn-icons-png.flaticon.com/128/16683/16683439.png" alt="Package" />
        </div>

        <div className="drivertwoorder1">
          <img src="https://cdn-icons-png.flaticon.com/128/3868/3868196.png" alt="Package" />
        </div>

        <div className="drivertwoorder2">
          <img src="https://cdn-icons-png.flaticon.com/128/11107/11107554.png" alt="Package" />
        </div>

        <div className="drivertwoorder3">
          <img src="https://cdn-icons-png.flaticon.com/128/949/949635.png" alt="Package" />
        </div>

        <div className="drivertwoorder4">
          <img src="https://cdn-icons-png.flaticon.com/128/6889/6889381.png" alt="Package" />
        </div>

        {/* Bikes */}
        <div className="bike cw">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5966/5966256.png"
            className="bike-icon"
            alt="Bike"
          />
        </div>

        <div className="bike ccw">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5966/5966256.png"
            className="bike-icon"
            alt="Bike"
          />
        </div>

        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 20 }}>
          {/* Scanning Animation Container */}
          <div className="scanning-container">
            <div className="scanning-circle">
              {/* Scanning waves */}
              <div className="scanning-wave" />
              <div className="scanning-wave" style={{ animationDelay: "0.5s" }} />
              <div className="scanning-wave" style={{ animationDelay: "1s" }} />

              {/* User Icon with scanning effect */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(62, 22, 224, 0.1) 0%, rgba(62, 22, 224, 0.15) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  marginTop: '-10px',
                  border: "2px solid rgba(62, 22, 224, 0.1)",
                  boxShadow: "0 4px 12px rgba(62, 22, 224, 0.1)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Users size={24} color="rgba(62, 22, 224, 0.9)" />
              </div>

              {/* Scanning Line */}
              <div
                className="scanning-line"
                style={{
                  height: `${scanProgress}%`,
                  opacity: scanProgress > 0 && scanProgress < 100 ? 0.7 : 0
                }}
              />
            </div>

            {/* Scanning Progress Text */}
            <div className="scanning-progress">
              <div className="scanning-dots">
                <div className="scanning-dot active" />
                <div className="scanning-dot" />
                <div className="scanning-dot" />
              </div>
              <span className="scanning-text">
                {scanProgress < 100 ? "Scanning for drivers..." : "Scan complete"}
              </span>
            </div>
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "rgba(62, 22, 224, 0.9)",
              marginBottom: "6px",
              marginTop: "15px",
            }}
          >
            No Active Drivers
          </h3>

          <p
            style={{
              fontSize: "13px",
              color: "rgba(62, 22, 224, 0.6)",
              lineHeight: "1.5",
              margin: 0,
              marginBottom: "20px",
            }}
          >
            All drivers are offline. They will appear here when they start delivering.
          </p>

          {/* Status Cards */}
          <div style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            {/* Current Time Card */}
            <div className="status-card">
              <div className="status-icon">
                <Clock size={14} />
              </div>
              <div>
                <div className="status-label">Time</div>
                <div className="status-value">{time}</div>
              </div>
            </div>

            {/* Pending Deliveries Card */}
            <div className="status-card">
              <div className="status-icon">
                <Package size={14} />
              </div>
              <div>
                <div className="status-label">Pending</div>
                <div className="status-value">
                  {pendingCount} of {orders.length}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Compact Waiting Status */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: "rgba(62, 22, 224, 0.8)",
          fontWeight: "500",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "10px 16px",
          borderRadius: "16px",
          border: "1px solid rgba(62, 22, 224, 0.1)",
          boxShadow: "0 4px 12px rgba(62, 22, 224, 0.05)",
        }}
      >
        <div className="pulse-dot" />
        <span>Searching for available drivers...</span>
      </div>

      <style>
        {`
        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(62, 22, 224, 0.5);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(62, 22, 224, 0.4);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
            box-shadow: 0 0 0 6px rgba(62, 22, 224, 0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(62, 22, 224, 0);
          }
        }

        .moving-border {
          position: relative;
          border-radius: 20px;
          border: 1.5px dashed rgba(62, 22, 224, 0.3);
        }

        /* Bike containers */
        .bike {
          position: absolute;
          z-index: 5;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .postofficecontaner {
          position: absolute;
          z-index: 5;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          left: 0;
          transform: translateY(-50%) rotate(90deg);
        }

        .postoffice {
          width: 180px;
          height: 16px;
          object-fit: contain;
          filter: drop-shadow(0 1px 3px rgba(62, 22, 224, 0.3));
        }

        .bike-icon {
          width: 16px;
          height: 16px;
          object-fit: contain;
          filter: drop-shadow(0 1px 3px rgba(62, 22, 224, 0.3));
        }

        /* Delivery icons */
        .driveroneorder1, .driveroneorder2, .driveroneorder3,
        .drivertwoorder1, .drivertwoorder2, .drivertwoorder3, .drivertwoorder4 {
          position: absolute;
          z-index: 4;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .driveroneorder1 img, .driveroneorder2 img, .driveroneorder3 img,
        .drivertwoorder1 img, .drivertwoorder2 img, .drivertwoorder3 img, .drivertwoorder4 img {
          width: 16px;
          height: 16px;
          object-fit: contain;
          filter: drop-shadow(0 1px 3px rgba(62, 22, 224, 0.3));
        }

        /* Scanning Animation */
        .scanning-container {
          position: relative;
          margin-bottom: 10px;
        }

        .scanning-circle {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scanning-wave {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1.5px solid rgba(62, 22, 224, 0.1);
          border-radius: 50%;
          animation: wave 2s linear infinite;
        }

        @keyframes wave {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .scanning-line {
          position: absolute;
          width: 3px;
          background: linear-gradient(to bottom, transparent, #3E16E0, transparent);
          border-radius: 2px;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          transition: height 0.1s ease;
          z-index: 1;
        }

        .scanning-progress {
          margin-top: 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .scanning-dots {
          display: flex;
          gap: 3px;
        }

        .scanning-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(62, 22, 224, 0.3);
          animation: scanningDot 1.5s ease-in-out infinite;
        }

        .scanning-dot.active {
          background: rgba(62, 22, 224, 0.8);
        }

        .scanning-dot:nth-child(2) { animation-delay: 0.3s; }
        .scanning-dot:nth-child(3) { animation-delay: 0.6s; }

        @keyframes scanningDot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .scanning-text {
          font-size: 11px;
          color: rgba(62, 22, 224, 0.7);
          font-weight: 500;
        }

        /* Loading Progress Bar */
        .loading-bar-container {
          margin-top: 20px;
          width: 100%;
        }

        .loading-bar {
          width: 100%;
          height: 4px;
          background: rgba(62, 22, 224, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .loading-progress {
          height: 100%;
          background: linear-gradient(90deg, 
            rgba(62, 22, 224, 0.3), 
            rgba(62, 22, 224, 0.6),
            rgba(62, 22, 224, 0.9)
          );
          border-radius: 2px;
          transition: width 0.1s ease;
          position: relative;
        }

        .loading-progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .loading-text {
          font-size: 11px;
          color: rgba(62, 22, 224, 0.6);
          text-align: center;
          font-weight: 500;
        }

        /* Status Cards */
        .status-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(62, 22, 224, 0.1);
          border-radius: 10px;
          padding: 8px 12px;
          min-width: 100px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 6px rgba(62, 22, 224, 0.03);
          transition: all 0.3s ease;
        }

        .status-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 3px 8px rgba(62, 22, 224, 0.08);
          border-color: rgba(62, 22, 224, 0.15);
        }

        .status-icon {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: linear-gradient(135deg, rgba(62, 22, 224, 0.1), rgba(62, 22, 224, 0.15));
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(62, 22, 224, 0.9);
        }

        .status-label {
          font-size: 10px;
          color: rgba(62, 22, 224, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.4px;
          font-weight: 600;
        }

        .status-value {
          font-size: 12px;
          color: rgba(62, 22, 224, 0.9);
          font-weight: 600;
          margin-top: 1px;
        }

        /* Position styles */
        .driveroneorder1 {
          top: 0px;
          left: 25%;
          transform: translateX(-50%);
        }

        .driveroneorder2 {
          top: 50%;
          right: 0px;
          transform: translateY(-50%);
        }

        .driveroneorder3 {
          bottom: 0px;
          right: 25%;
          transform: translateX(50%);
        }

        .drivertwoorder1 {
          bottom: 0px;
          left: 25%;
          transform: translateX(-50%);
        }

        .drivertwoorder2 {
          top: 75%;
          right: 0px;
          transform: translateY(-50%);
        }

        .drivertwoorder3 {
          top: 0px;
          right: 25%;
          transform: translateX(50%);
        }

        .drivertwoorder4 {
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Bike animations */
        .bike.cw {
          animation: rideCW 24s linear infinite;
        }

        .ccw {
          animation: rideCCW 28s linear infinite;
        }

        @keyframes rideCW {
          0% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(-90deg) scaleY(-1);
          }
          5% {
            top: 0px;
            left: 0px;
            transform: rotate(-90deg) scaleY(-1);
          }
          5.1% {
            top: 0px;
            left: 0px;
            transform: rotate(0deg) scaleY(-1);
          }
          12% {
            top: 0px;
            left: 25%;
            transform: rotate(0deg) scaleY(-1);
          }
          19% {
            top: 0px;
            left: 25%;
            transform: rotate(0deg) scaleY(-1);
          }
          26% {
            top: 0px;
            left: calc(100% - 16px);
            transform: rotate(0deg) scaleY(-1);
          }
          26.1% {
            top: 0px;
            left: calc(100% - 16px);
            transform: rotate(90deg) scaleY(-1);
          }
          33% {
            top: calc(50% - 9px);
            left: calc(100% - 16px);
            transform: rotate(90deg) scaleY(-1);
          }
          40% {
            top: calc(50% - 9px);
            left: calc(100% - 16px);
            transform: rotate(90deg) scaleY(-1);
          }
          47% {
            top: calc(100% - 18px);
            left: calc(100% - 18px);
            transform: rotate(90deg) scaleY(-1);
          }
          47.1% {
            top: calc(100% - 18px);
            left: calc(100% - 18px);
            transform: rotate(180deg) scaleY(-1);
          }
          54% {
            top: calc(100% - 18px);
            left: 75%;
            transform: rotate(180deg) scaleY(-1);
          }
          61% {
            top: calc(100% - 18px);
            left: 75%;
            transform: rotate(180deg) scaleY(-1);
          }
          75% {
            top: calc(100% - 18px);
            left: 0px;
            transform: rotate(180deg) scaleY(-1);
          }
          75.1% {
            top: calc(100% - 18px);
            left: 0px;
            transform: rotate(-90deg) scaleY(-1);
          }
          85% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(-90deg) scaleY(-1);
          }
          92% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(-90deg) scaleY(-1);
          }
          100% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(-90deg) scaleY(-1);
          }
        }

        @keyframes rideCCW {
          0% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(90deg);
          }
          4% {
            top: calc(100% - 18px);
            left: 0px;
            transform: rotate(90deg);
          }
          4.1% {
            top: calc(100% - 18px);
            left: 0px;
            transform: rotate(0deg);
          }
          10% {
            top: calc(100% - 18px);
            left: 25%;
            transform: rotate(0deg);
          }
          16% {
            top: calc(100% - 18px);
            left: 25%;
            transform: rotate(0deg);
          }
          22% {
            top: calc(100% - 18px);
            left: calc(100% - 16px);
            transform: rotate(0deg);
          }
          22.1% {
            top: calc(100% - 18px);
            left: calc(100% - 16px);
            transform: rotate(-90deg);
          }
          28% {
            top: 75%;
            left: calc(100% - 16px);
            transform: rotate(-90deg);
          }
          34% {
            top: 75%;
            left: calc(100% - 16px);
            transform: rotate(-90deg);
          }
          44% {
            top: 0px;
            left: calc(100% - 16px);
            transform: rotate(-90deg);
          }
          44.1% {
            top: 0px;
            left: calc(100% - 16px);
            transform: rotate(180deg);
          }
          50% {
            top: 0px;
            left: 75%;
            transform: rotate(180deg);
          }
          56% {
            top: 0px;
            left: 75%;
            transform: rotate(180deg);
          }
          62% {
            top: 0px;
            left: 50%;
            transform: rotate(180deg);
          }
          68% {
            top: 0px;
            left: 50%;
            transform: rotate(180deg);
          }
          76% {
            top: 0px;
            left: 0px;
            transform: rotate(180deg);
          }
          76.1% {
            top: 0px;
            left: 0px;
            transform: rotate(90deg);
          }
          86% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(90deg);
          }
          93% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(90deg);
          }
          100% {
            top: calc(50% - 9px);
            left: 0px;
            transform: rotate(90deg);
          }
        }
        `}
      </style>
    </div>
  );
}