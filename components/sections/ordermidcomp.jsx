import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Bike } from 'lucide-react';

const Dashmidcomp = ({
  heading,
  leftsubhead,
  rightsubhead,
  leftvalue,
  rightvalue,
  leftcolor = '#6366f1',
  rightcolor = '#6366f1',
  fontSize = '59px',
  mobileFontSize = '40px',
  height = '280px',
  mobileHeight = '220px',
  calculateTrend = true,
  leftTrend: propLeftTrend,
  rightTrend: propRightTrend,
  leftPercentage: propLeftPercentage,
  rightPercentage: propRightPercentage,
  showHeaderIcon = true,
}) => {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [calculatedValues, setCalculatedValues] = useState({
    leftTrend: 'neutral',
    rightTrend: 'neutral',
    leftPercentage: '0%',
    rightPercentage: '0%'
  });

  // Handle responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate trends and percentages based on values



  return (
    <div
      className="dashboardcomp1"
      style={{
        height: isMobile ? '250px' : '350px',
        width: '100%',
        background: 'white',
        borderRadius: isMobile ? '12px' : '16px',
        padding: isMobile ? '12px' : '20px',
        boxShadow: `
          0 4px 20px rgba(0, 0, 0, 0.05),
          0 0 0 1px rgba(229, 231, 235, 0.3)
        `,
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Decorative background elements */}
      {!isMobile && (
        <>
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.02) 0%, transparent 70%)',
            borderRadius: '50%',
          }} />
        </>
      )}

      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: isMobile ? '34px' : '44px',
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
          <div style={{
            position: 'relative',
            display: 'inline-block'
          }}>
            <div
              style={{
                fontSize: isMobile ? "17px" : "20px",
                fontWeight: "700",
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                letterSpacing: '-0.5px'
              }}
            >
              {heading}
            </div>
          </div>
        </div>

        <div style={{
          fontSize: isMobile ? "12px" : "14px",
          color: '#6b7280',
          textAlign: 'center',
          maxWidth: '400px',
          lineHeight: '1.4'
        }}>
          Total Count of Orders by Status
        </div>

        <div
          style={{
            width: "50px",
            height: "3px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            borderRadius: "2px",
            marginTop: "10px",
            opacity: "0.8"
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        width: '100%',
        height: 'calc(100% - 70px)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          gap: isMobile ? '8px' : '0'
        }}>

          {/* Left Section */}
          <div
            style={{
              width: isMobile ? '100%' : '48%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isMobile ? '10px' : '15px',
              borderRadius: isMobile ? '8px' : '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              borderTop: hovered === 'active'
                ? '3px solid transparent'
                : '1px solid rgba(229, 231, 235, 0.5)',
              background: hovered === 'active'
                ? 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box'
                : 'white',
              boxSizing: 'border-box'
            }}
            onMouseEnter={() => setHovered('active')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Subheader with equal margin/padding */}
            <div style={{
              fontSize: isMobile ? '13px' : '16px',
              fontWeight: '600',
              color: leftcolor,
              textAlign: 'center',
              marginBottom: isMobile ? '10px' : '15px',
              padding: isMobile ? '6px 0' : '8px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '6px' : '8px',
              width: '100%'
            }}>
              <div style={{
                width: isMobile ? '8px' : '10px',
                height: isMobile ? '8px' : '10px',
                borderRadius: '50%',
                background: leftcolor,
              }} />
              {isMobile ? leftsubhead : leftsubhead + ' Orders'}
            </div>

            {/* Value with trend - FIXED: Always show trend for left side when it's 100% */}
            <div style={{
              fontSize: isMobile ? mobileFontSize : fontSize,
              fontWeight: '800',
              textAlign: 'center',
              color: leftcolor,
              marginBottom: isMobile ? '4px' : '6px',
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '6px' : '8px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {leftvalue}
              {/* Always show trend indicator for left side, even if neutral but value is 100% */}

            </div>
          </div>

          {/* Divider - Hidden on mobile */}

          <div style={{
            width: '1px',
            height: '60%',
            background: 'linear-gradient(180deg, transparent 0%, #e5e7eb 50%, transparent 100%)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#e5e7eb',
            }} />
          </div>


          {/* Right Section */}
          <div
            style={{
              width: isMobile ? '100%' : '48%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isMobile ? '10px' : '15px',
              borderRadius: isMobile ? '8px' : '10px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              borderTop: hovered === 'inactive'
                ? '3px solid transparent'
                : '1px solid rgba(229, 231, 235, 0.5)',
              background: hovered === 'inactive'
                ? 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box'
                : 'white',
              boxSizing: 'border-box'
            }}
            onMouseEnter={() => setHovered('inactive')}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Subheader with equal margin/padding */}
            <div style={{
              fontSize: isMobile ? '13px' : '16px',
              fontWeight: '600',
              color: rightcolor,
              textAlign: 'center',
              marginBottom: isMobile ? '10px' : '15px',
              padding: isMobile ? '6px 0' : '8px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '6px' : '8px',
              width: '100%'
            }}>
              <div style={{
                width: isMobile ? '8px' : '10px',
                height: isMobile ? '8px' : '10px',
                borderRadius: '50%',
                background: rightcolor,
              }} />
              {rightsubhead}
            </div>

            {/* Value - No trend indicator for right side */}
            <div style={{
              fontSize: isMobile ? mobileFontSize : fontSize,
              fontWeight: '800',
              textAlign: 'center',
              color: rightcolor,
              marginBottom: isMobile ? '4px' : '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '6px' : '8px',
              flexWrap: 'wrap'
            }}>
              {rightvalue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashmidcomp;