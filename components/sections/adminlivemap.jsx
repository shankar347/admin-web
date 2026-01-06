import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { User, Phone, MapPin, BadgeCheck, MapPinCheck, Clock } from "lucide-react"
const containerStyle = {
  width: '100%',
  height: '86vh',
};

const mapOptions = {
  mapTypeControl: false,
  fullscreenControl: true,
  streetViewControl: false,
  zoomControl: true,
  gestureHandling: 'greedy',
  clickableIcons: false,
  styles: [
    { featureType: "poi", stylers: [{ visibility: "off" }] }, // Hide POIs
    { featureType: "transit", stylers: [{ visibility: "off" }] }, // Hide transit
    { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, // Hide small road icons
    { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#e1e1e1ff" }] } // Slightly brown land background
  ],
};

export default function AdminLiveMap({ apiKey, riderLocations }) {
  console.log(riderLocations, 'riderloc')
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: apiKey });
  const mapRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [bikeIcon, setBikeIcon] = useState(null);
  const [addresses, setAddresses] = useState({});

  useEffect(() => {
    Object.entries(riderLocations).forEach(([id, rider]) => {
      if (!addresses[id]) {
        getAddressFromLatLng(rider.lat, rider.lng).then((address) => {
          setAddresses((prev) => ({ ...prev, [id]: address }));
        });
      }
    });
  }, [riderLocations]);

  useEffect(() => {
    if (isLoaded && window.google?.maps) {
      setBikeIcon({
        url: 'https://cdn-icons-png.flaticon.com/128/5966/5966256.png', // Motorcycle icon
        scaledSize: new window.google.maps.Size(42, 42),
        anchor: new window.google.maps.Point(21, 21), // Center anchor for rotation
      });
    }
  }, [isLoaded]);

  const ridersArray = useMemo(
    () => Object.entries(riderLocations),
    [riderLocations]
  );

  useEffect(() => {
    if (!mapRef.current || ridersArray.length === 0 || !isLoaded) return;
    const bounds = new window.google.maps.LatLngBounds();
    ridersArray.forEach(([_, { lat, lng }]) => bounds.extend({ lat, lng }));

    if (ridersArray.length === 1) {
      mapRef.current.setCenter(bounds.getCenter());
      mapRef.current.setZoom(15);
    } else {
      mapRef.current.fitBounds(bounds, 80);
    }
  }, [ridersArray, isLoaded]);

  if (!isLoaded) return null;

  const defaultCenter = { lat: 13.0827, lng: 80.2707 };

  // Function to get initials from name
  const getInitials = (name) => {
    if (!name) return 'R';
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  };
  // Convert lat/lng to address using Google Maps Geocoder
  const getAddressFromLatLng = async (lat, lng) => {
    if (!window.google?.maps) return "";
    const geocoder = new window.google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          resolve(results[0].formatted_address);
        } else {
          resolve("Address not found");
        }
      });
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '87vh' }}>
      {/* Title at top center */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        textAlign: 'center',
        fontWeight: '550',
        paddingBlock: '14px',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '12px 24px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        fontSize: '16px',
        color: '#333',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        Rider Livetracking
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ridersArray[0]?.[1] ?? defaultCenter}
        zoom={13}
        options={mapOptions}
        onLoad={(m) => (mapRef.current = m)}
        onUnmount={() => (mapRef.current = null)}
      >
        {ridersArray.map(([userId, { lat, lng, ridedata }]) => (
          <Marker
            key={userId}
            position={{ lat, lng }}
            icon={{
              ...bikeIcon,
              rotation: ridedata?.bearing || 0, // Rotate bike icon to travel direction
            }}
            onClick={() => setActiveId(userId)}
            title={ridedata?.user.user_id || `Driver`}
          />
        ))}

        {activeId && riderLocations[activeId] && (
          <InfoWindow
            position={{
              lat: riderLocations[activeId].lat,
              lng: riderLocations[activeId].lng,
            }}
            onCloseClick={() => setActiveId(null)}
            options={{
              pixelOffset: new window.google.maps.Size(0, -10),
              maxWidth: 360,
            }}
          >
            <div
              style={{
                width: "320px",
                padding: "16px",
                background: "linear-gradient(145deg, #4f46e5, #7c3aed)",
                borderRadius: "16px",
                color: "white",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",

                maxHeight: "360px",      // limit height
                overflowY: "auto",       // allow scrolling

                /* Firefox smooth thin scrollbar */
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.4) transparent",
              }}
              className="info-scroll"
            >

              {/* Profile Icon */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "white",
                  border: "3px solid rgba(255,255,255,0.3)",
                  alignSelf: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                }}
              >
                {riderLocations[activeId].ridedata?.user?.user_id
                  ? riderLocations[activeId].ridedata.user.user_id
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                  : "D"}
              </div>
              <div
                style={{
                  fontSize: '21px',
                  fontWeight: '700',
                  textAlign: 'center',
                  marginTop: '-10px',
                  color: 'white',
                  textShadow: '1px 1px 2px gray', // subtle shadow for readability
                }}
              >
                {riderLocations[activeId].ridedata.user.user_id || "Driver"}
              </div>

              <div style={{ display: "flex", fontSize: '13px', alignItems: "center", gap: "8px" }}>
                <Clock size={20} />
                <span> {riderLocations[activeId].ridedata?.stops[0].starttime || "N/A"}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: "13px",
                  alignItems: "flex-start", // align icon with top of text
                  gap: "8px",
                }}
              >
                <MapPinCheck
                  size={20}
                  style={{
                    flexShrink: 0, // prevent shrinking
                    marginTop: "3px", // align vertically with first line
                  }}
                />
                <span
                  style={{
                    wordBreak: "break-word",
                    whiteSpace: "pre-wrap", // allow wrapping for long text
                    flex: 1,
                  }}
                >
                  {addresses[activeId] || "Fetching..."}
                </span>
              </div>

              <div style={{ fontSize: '15px', fontWeight: '550' }}>
                Order Details
              </div>
              {/* Customer Name */}
              <div style={{ display: "flex", fontSize: '13px', alignItems: "center", gap: "8px" }}>
                <User size={20} />
                <span> {riderLocations[activeId].ridedata.stops[0].customer_name || "N/A"}</span>
              </div>

              {/* Customer Phone */}
              <div style={{ display: "flex", fontSize: '13px', alignItems: "center", gap: "8px" }}>
                <Phone size={20} />
                <span> {riderLocations[activeId].ridedata?.stops[0].customer_phoneno || "N/A"}</span>
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
                  size={20}
                  style={{
                    flexShrink: 0, // prevent shrinking
                    marginTop: "3px", // align vertically with first line
                  }}
                />
                <span
                  style={{
                    wordBreak: "break-word",
                    whiteSpace: "pre-wrap", // allow wrapping for long text
                    flex: 1,
                  }}
                >
                  {riderLocations[activeId].ridedata?.stops[0].customer_address || "Fetching..."}
                </span>
              </div>

            </div>
          </InfoWindow>
        )}

      </GoogleMap>

      <style jsx>{
        `
        .info-scroll::-webkit-scrollbar {
  width: 6px;
}

.info-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.info-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
}

.info-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.65);
}
`
      }

      </style>
    </div>
  );
}