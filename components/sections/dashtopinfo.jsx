import React from 'react';
import {
  Package,
  CheckCircle,
  TrendingUp,
  XCircle,
  TrendingDown
} from 'lucide-react';

const Dashtopinfo = ({
  isMobile,
  completed,
  cancel,
  today,
  compperc,
  cancperc,
  auth
}) => {
  // Get the primary color from auth, fallback to default
  const primaryColor = auth?.color || '#3b82f6';

  // Card data with matching icons
  const statCards = [
    {
      value: today?.length || 0,
      content: 'Orders Today',
      icon: <Package size={isMobile ? 18 : 20} />,
    },
    {
      value: completed?.length || 0,
      content: "Completed",
      icon: <CheckCircle size={isMobile ? 18 : 20} />,
    },
    {
      value: `${compperc}%`,
      content: "Success Rate",
      icon: <TrendingUp size={isMobile ? 18 : 20} />,
    },
    {
      value: cancel?.length || 0,
      content: "Cancelled",
      icon: <XCircle size={isMobile ? 18 : 20} />,
    },
    {
      value: `${cancperc}%`,
      content: "Cancel Rate",
      icon: <TrendingDown size={isMobile ? 18 : 20} />,
    }
  ];

  // Mobile layout - 2 column grid without parent background
  if (isMobile) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          width: "100%",
          padding: "12px",
        }}
      >
        {statCards.map((stat, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 8px",
              backgroundColor: "white",
              borderRadius: "10px",
              border: `1.5px solid ${primaryColor}15`,
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
              minHeight: "60px",
              transition: "all 0.2s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.border = `1.5px solid ${primaryColor}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.border = `1.5px solid ${primaryColor}15`;
            }}
          >
            <div style={{
              color: primaryColor,
              marginBottom: "4px"
            }}>
              {stat.icon}
            </div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1f2937',
                lineHeight: '1.2',
                marginBottom: "2px"
              }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#6b7280',
              lineHeight: '1.2',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              {stat.content}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop layout - centered with 75% width
  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: "left",
        width: "100%",
        marginLeft: '-20px'
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "85px",
          padding: "0 20px",
          width: "70%", // 75% of screen width
          maxWidth: "1200px", // Optional max width
          backgroundColor: "#fefefeff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e5e7eb",
        }}
      >
        {statCards.map((stat, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px", // Further reduced gap
              padding: "10px 14px", // Further reduced padding
              backgroundColor: "white",
              borderRadius: "10px",
              border: `1.5px solid ${primaryColor}15`,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              flex: "1 1 auto", // Allow cards to shrink/grow
              margin: "0 4px", // Reduced margin between cards
              minWidth: "120px", // Reduced min width
              maxWidth: "150px", // Reduced max width
              transition: "all 0.2s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.border = `1.5px solid ${primaryColor}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
              e.currentTarget.style.border = `1.5px solid ${primaryColor}15`;
            }}
          >
            <div style={{
              color: primaryColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              {stat.icon}
            </div>
            <div style={{
              flex: 1,
              minWidth: 0 // Prevent text overflow
            }}>
              <div
                style={{
                  fontSize: '17px', // Slightly smaller
                  fontWeight: '700',
                  color: '#1f2937',
                  lineHeight: '1.2',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '11px', // Smaller font
                color: '#6b7280',
                lineHeight: '1.2',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {stat.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashtopinfo;