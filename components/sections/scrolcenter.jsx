{/* Active Rider Details Panel with Continuous Left-to-Right Animation */ }
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Route, Users, X, Package, User, Phone } from 'lucide-react';
import { googleApi } from '~/repositories/Repository';
import NoActiveRiders from './noactiverider';

const HorizontalRidersScroll = ({ pending, riderLocations }) => {
  const [activeId, setActiveId] = useState(null);
  const [locationNames, setLocationNames] = useState({});
  const [fullAddresses, setFullAddresses] = useState({});
  const [loadingLocations, setLoadingLocations] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to convert coordinates to area name and full address using Google Geocoding API
  const getLocationInfo = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${window.googleApiKey || googleApi}`
      );
      const data = await response.json();
      console.log(data, 'geocoding response');

      if (data.status === 'OK' && data.results.length > 0) {
        // Find the most specific location (usually the first result)
        const result = data.results[0];

        // Extract area name from address components
        const addressComponents = result.address_components;
        let areaName = '';

        // Look for sublocality, locality, or administrative area
        for (const component of addressComponents) {
          if (component.types.includes('sublocality_level_1') ||
            component.types.includes('sublocality')) {
            areaName = component.long_name;
            break;
          }
          if (component.types.includes('locality')) {
            areaName = component.long_name;
            break;
          }
        }

        // If no specific area found, use formatted address (first part)
        if (!areaName) {
          const parts = result.formatted_address.split(',');
          areaName = parts[0];
        }

        // Clean up the formatted address by removing codes like "X5C2+4H3"
        let cleanedAddress = result.formatted_address;
        // Remove any alphanumeric codes that start with a letter and contain numbers and symbols
        cleanedAddress = cleanedAddress.replace(/^[A-Z0-9+]+,\s*/, '');

        return {
          areaName: areaName,
          fullAddress: cleanedAddress
        };
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }

    // Fallback to coordinates if API fails
    const fallbackCoords = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
    return {
      areaName: fallbackCoords,
      fullAddress: fallbackCoords
    };
  };

  // Auto-scroll effect for continuous left-to-right movement
  useEffect(() => {
    if (!riderLocations || Object.keys(riderLocations).length === 0) return;

    const riderEntries = Object.entries(riderLocations);
    const totalRiders = riderEntries.length;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalRiders);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [riderLocations]);

  // Load area names and full addresses when riderLocations changes
  useEffect(() => {
    const loadLocationInfo = async () => {
      if (!riderLocations || Object.keys(riderLocations).length === 0) {
        setLoadingLocations(false);
        return;
      }

      setLoadingLocations(true);
      const names = {};
      const addresses = {};

      for (const [riderId, riderData] of Object.entries(riderLocations)) {
        if (riderData.lat && riderData.lng) {
          const locationInfo = await getLocationInfo(riderData.lat, riderData.lng);
          names[riderId] = locationInfo.areaName;
          addresses[riderId] = locationInfo.fullAddress;
        }
      }

      setLocationNames(names);
      setFullAddresses(addresses);
      setLoadingLocations(false);
    };

    loadLocationInfo();
  }, [riderLocations]);

  // If no rider locations provided, show empty state
  if (!riderLocations || Object.keys(riderLocations).length === 0) {
    return <NoActiveRiders orders={pending} />
  }

  const getInitials = (name) => {
    if (!name) return 'R';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getGradientColor = (index) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    ];
    return gradients[index % gradients.length];
  };

  const RiderCard = ({ riderId, riderData, index }) => {
    const isActive = activeId === riderId;

    return (
      <div
        className="rider-card"
        style={{
          minWidth: '280px',
          height: '180px',
          background: getGradientColor(index),
          borderRadius: '20px',
          padding: '20px',
          margin: '0 12px',
          color: 'white',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: isActive
            ? '0 15px 35px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2)'
            : '0 8px 25px rgba(0,0,0,0.15)',
          transform: isActive ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'all 0.3s ease',
          border: isActive ? '2px solid rgba(255,255,255,0.4)' : '2px solid transparent',
          flexShrink: 0
        }}
        onClick={() => setActiveId(isActive ? null : riderId)}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Ccircle cx="20" cy="20" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.6
        }} />

        {/* Header with Avatar and Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            border: '2px solid rgba(255,255,255,0.2)',
            marginRight: '12px'
          }}>
            {getInitials(riderData.ridedata?.user.user_id)}
          </div>
          <div>
            <div style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '2px'
            }}>
              {riderData.ridedata?.user.user_id || 'Rider'}
            </div>
            <div style={{
              fontSize: '12px',
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Clock size={12} />
              {riderData.ridedata?.starttime || 'N/A'}
            </div>
          </div>
        </div>

        {/* Route Info */}
        <div style={{
          position: 'relative',
          zIndex: 1
        }}>
          {riderData.ridedata?.routename && (
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              background: 'rgba(255,255,255,0.2)',
              padding: '6px 10px',
              borderRadius: '10px',
              display: 'inline-block'
            }}>
              <Route size={14} style={{ display: 'inline', marginRight: '6px' }} />
              {riderData.ridedata.routename}
            </div>
          )}

          <div style={{
            fontSize: '12px',
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '8px'
          }}>
            <MapPin size={12} />
            {loadingLocations ? 'Loading location...' : (locationNames[riderId] || 'Unknown location')}
          </div>

          {riderData.ridedata?.name && (
            <div style={{
              fontSize: '11px',
              opacity: 0.8,
              background: 'rgba(0,0,0,0.1)',
              padding: '4px 8px',
              borderRadius: '8px',
              display: 'inline-block'
            }}>
              <Route size={10} style={{ display: 'inline', marginRight: '4px' }} />
              {riderData.ridedata?.name}
            </div>
          )}
        </div>

        {/* Active Indicator */}
        {isActive && (
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#00ff88',
            boxShadow: '0 0 10px rgba(0,255,136,0.6)',
            animation: 'pulse 2s infinite'
          }} />
        )}
      </div>
    );
  };

  const riderEntries = Object.entries(riderLocations);
  const totalRiders = riderEntries.length;

  return (
    <>
      <style jsx>{`
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(totalRiders * 304)}px);
          }
        }
        
        @keyframes modalSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .sliding-container {
          animation: slideLeftToRight ${totalRiders * 3}s linear infinite;
        }
        
        .riders-container {
          overflow: hidden;
        }
        
        .riders-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        key={`riders-${Object.keys(riderLocations).join('-')}`}
        style={{
          width: '100%',
          padding: '20px 0',
          position: 'relative'
        }}>
        {/* Header */}

        <h3
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: 'rgba(62, 22, 224, 0.9)',
            marginBottom: '12px',
            letterSpacing: '-0.3px',
            textAlign: 'center'
          }}
        >
          Active Drivers
        </h3>

        {/* Continuous Sliding Container */}
        <div
          className="riders-container"
          style={{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            position: 'relative',
            paddingBottom: '20px'
          }}
        >
          <div
            className="sliding-container"
            style={{
              display: 'flex',
              width: `${(totalRiders * 2) * 904}px`, // Double width for seamless loop
              paddingLeft: '20px',
              paddingRight: '20px'
            }}
          >
            {/* First set of cards */}
            {riderEntries.map(([riderId, riderData], index) => (
              <RiderCard
                key={`${riderId}-1`}
                riderId={riderId}
                riderData={riderData}
                index={index}
              />
            ))}
            {/* Duplicate set for seamless loop */}

          </div>
        </div>

        {/* Slide Indicators */}
        {/* <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '15px'
        }}>
          {riderEntries.map((_, index) => (
            <div
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: index === currentIndex 
                  ? 'rgba(62, 22, 224, 1)' 
                  : 'rgba(62, 22, 224, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div> */}

        {/* Active Rider Details Modal */}
        {activeId && (
          <div
            key={`details-${activeId}`}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={() => setActiveId(null)}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '80vh',
                overflowY: 'auto',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                border: '1px solid rgba(62, 22, 224, 0.1)',
                animation: 'modalSlideIn 0.4s ease-out',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveId(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(62, 22, 224, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: 'rgba(62, 22, 224, 0.7)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(62, 22, 224, 0.2)';
                  e.target.style.color = 'rgba(62, 22, 224, 1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(62, 22, 224, 0.1)';
                  e.target.style.color = 'rgba(62, 22, 224, 0.7)';
                }}
              >
                <X size={20} />
              </button>

              <div style={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'rgba(62, 22, 224, 1)',
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                paddingRight: '50px'
              }}>
                <Route size={24} />
                Route Details - {riderLocations[activeId].ridedata?.user.user_id}
              </div>

              {riderLocations[activeId].ridedata?.stops && riderLocations[activeId].ridedata.stops.length > 0 && (
                <div style={{
                  marginBottom: '25px'
                }}>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '12px'
                  }}>

                    <div style={{
                      background: 'linear-gradient(135deg, rgba(62, 22, 224, 0.05), rgba(62, 22, 224, 0.1))',
                      padding: '15px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      // alignItems: 'center',
                      gap: '12px',
                      border: '1px solid rgba(62, 22, 224, 0.1)'
                    }}>

                      <div style={{
                        display: 'flex',
                        gap: '10px'
                      }}>
                        <Package size={18} style={{
                          marginTop: '2px',
                          flexShrink: 0,
                          color: 'rgba(62, 22, 224, 0.6)'
                        }} />

                        <div style={{
                          fontWeight: '600',
                          marginBottom: '8px',
                          color: 'rgba(62, 22, 224, 1)',
                          fontSize: '16px'
                        }}>
                          Order Details
                        </div>

                      </div>

                      <div style={{ display: "flex", fontSize: '13px', color: 'rgba(62, 22, 224, 0.6)', alignItems: "center", gap: "8px" }}>
                        <User size={18} style={{
                          marginTop: '2px',
                          flexShrink: 0,
                          color: 'rgba(62, 22, 224, 0.6)'
                        }} />
                        <span> {riderLocations[activeId].ridedata.stops[0].customer_name || "N/A"}</span>
                      </div>

                      {/* Customer Phone */}
                      <div style={{ display: "flex", color: 'rgba(62, 22, 224, 0.6)', fontSize: '13px', alignItems: "center", gap: "8px" }}>
                        <Phone size={18}
                          style={{
                            marginTop: '2px',
                            flexShrink: 0,
                            color: 'rgba(62, 22, 224, 0.6)'
                          }} />
                        <span > {riderLocations[activeId].ridedata?.stops[0].customer_phoneno || "N/A"}</span>
                      </div>


                      <div style={{
                        display: "flex",
                        color: 'rgba(62, 22, 224, 0.6)', fontSize: '13px', alignItems: "center", gap: "8px"
                      }}>
                        <Clock size={18} style={{
                          marginTop: '2px',
                          flexShrink: 0,
                          color: 'rgba(62, 22, 224, 0.6)'
                        }} />
                        <span> {riderLocations[activeId].ridedata?.stops[0].starttime || "N/A"}</span>
                      </div>
                      {/* Order Address */}
                      <div
                        style={{
                          display: "flex",
                          fontSize: "13px",
                          alignItems: "flex-start", // align icon with top of text
                          gap: "8px",
                        }}
                      >
                        <MapPin
                          size={18}
                          style={{
                            marginTop: '2px',
                            flexShrink: 0,
                            color: 'rgba(62, 22, 224, 0.6)'
                          }}
                        />
                        <span
                          style={{
                            wordBreak: "break-word",
                            whiteSpace: "pre-wrap", // allow wrapping for long text
                            flex: 1,
                            color: 'rgba(62, 22, 224, 0.6)'
                          }}
                        >
                          {riderLocations[activeId].ridedata?.stops[0].customer_address || "Fetching..."}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              <div style={{
                padding: '20px',
                background: 'rgba(62, 22, 224, 0.05)',
                borderRadius: '12px',
                fontSize: '14px',
                color: 'rgba(62, 22, 224, 0.8)',
                lineHeight: '1.5'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <MapPin size={18} style={{
                    marginTop: '2px',
                    flexShrink: 0,
                    color: 'rgba(62, 22, 224, 0.6)'
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: 'rgba(62, 22, 224, 1)',
                      fontSize: '16px'
                    }}>
                      Current Location
                    </div>
                    <div style={{
                      marginBottom: '8px',
                      fontSize: '14px'
                    }}>
                      {loadingLocations
                        ? 'Loading address...'
                        : (fullAddresses[activeId] &&
                          !fullAddresses[activeId].match(/^[0-9.-]+,\s*[0-9.-]+$/))
                          ? fullAddresses[activeId]
                          : `${riderLocations[activeId].lat.toFixed(4)}, ${riderLocations[activeId].lng.toFixed(4)}`
                      }
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: 'rgba(62, 22, 224, 0.6)',
                      background: 'rgba(62, 22, 224, 0.08)',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      display: 'inline-block'
                    }}>
                      📍 {riderLocations[activeId].lat.toFixed(6)}, {riderLocations[activeId].lng.toFixed(6)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HorizontalRidersScroll;