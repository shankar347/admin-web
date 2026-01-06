import React, { useEffect, useState, useRef } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    DirectionsService,
    DirectionsRenderer,
    useJsApiLoader,
} from "@react-google-maps/api";
import { User, Phone, MapPin, Clock, BadgeCheck } from "lucide-react";

const containerStyle = {
    width: "100%",
    height: "86vh",
};

const mapOptions = {
    mapTypeControl: false,
    fullscreenControl: true,
    streetViewControl: false,
    zoomControl: true,
    gestureHandling: "greedy",
    clickableIcons: false,
    styles: [
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
        { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#e1e1e1ff" }] },
    ],
};

export default function RouteMap({ stops, apiKey }) {
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: apiKey });
    const [locations, setLocations] = useState([]);
    const [activeStop, setActiveStop] = useState(null);
    const [directions, setDirections] = useState(null);
    const mapRef = useRef(null);

    // Convert address → LatLng
    const getLatLng = (address) =>
        new Promise((resolve) => {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (res) => {
                if (res && res.length > 0) {
                    resolve(res[0].geometry.location);
                } else {
                    resolve({ lat: 13.0827, lng: 80.2707 });
                }
            });
        });

    // Load stops with lat/lng
    useEffect(() => {
        const load = async () => {
            const arr = [];
            for (const stop of stops) {
                const latlng = await getLatLng(stop.customer_address);
                arr.push({ ...stop, latlng });
            }
            setLocations(arr);
        };
        if (isLoaded) load();
    }, [stops, isLoaded]);

    // Generate Directions
    useEffect(() => {
        if (locations.length < 2) return;

        const origin = locations[0].latlng;
        const destination = locations[locations.length - 1].latlng;
        const waypoints = locations
            .slice(1, locations.length - 1)
            .map((loc) => ({ location: loc.latlng, stopover: true }));

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin,
                destination,
                waypoints,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    console.error("Error fetching directions", result);
                }
            }
        );
    }, [locations]);

    // Auto zoom + fit bounds
    useEffect(() => {
        if (!mapRef.current || locations.length === 0) return;

        const bounds = new window.google.maps.LatLngBounds();
        locations.forEach((loc) => bounds.extend(loc.latlng));

        if (locations.length === 1) {
            mapRef.current.setCenter(locations[0].latlng);
            mapRef.current.setZoom(15);
        } else {
            mapRef.current.fitBounds(bounds, 90);
        }
    }, [locations]);

    if (!isLoaded) return null;

    const defaultCenter = { lat: 13.0827, lng: 80.2707 };

    return (
        <div style={{ width: "100%", height: "87vh", position: "relative" }}>
            {/* Title */}
            <div
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                    padding: "12px 20px",
                    background: "rgba(255,255,255,0.9)",
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                }}
            >
                Route Map
            </div>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={locations[0]?.latlng ?? defaultCenter}
                zoom={13}
                options={mapOptions}
                onLoad={(m) => (mapRef.current = m)}
            >
                {/* Directions */}
                {directions && <DirectionsRenderer directions={directions} options={{ suppressMarkers: true, polylineOptions: { strokeColor: "#4285F4", strokeWeight: 5 } }} />}

                {/* Markers */}
                {locations.map((stop, index) => (
                    <Marker
                        key={stop._id}
                        position={stop.latlng}
                        label={{
                            text: `${index + 1}`,
                            color: "white",
                            fontWeight: "bold",
                        }}
                        onClick={() => setActiveStop(stop)}
                    />
                ))}

                {/* InfoWindow */}
                {activeStop && (
                    <InfoWindow
                        position={activeStop.latlng}
                        onCloseClick={() => setActiveStop(null)}
                        options={{
                            pixelOffset: new window.google.maps.Size(0, -10),
                            maxWidth: 380,
                        }}
                    >
                        <div
                            style={{
                                width: "330px",
                                padding: "18px",
                                background: "linear-gradient(145deg, #4f46e5, #7c3aed)",
                                borderRadius: "18px",
                                color: "white",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                                fontFamily:
                                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                fontSize: "15px",
                            }}
                        >
                            <h2 style={{ marginBottom: "14px", textAlign: "center", fontSize: "24px", fontWeight: "700", letterSpacing: "0.6px" }}>
                                {activeStop.name}
                            </h2>
                            <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                                <User size={20} />
                                <span style={{ fontSize: "15px" }}><b>{activeStop.customer_name}</b></span>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                                <Phone size={20} />
                                <span style={{ fontSize: "15px" }}>{activeStop.customer_phoneno}</span>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginBottom: "12px", alignItems: "center", fontSize: "15px" }}>
                                <BadgeCheck size={20} />
                                <span><b>Status:</b>{" "}
                                    <span
                                        style={{
                                            padding: "4px 10px",
                                            borderRadius: "10px",
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            background:
                                                activeStop.iscompleted
                                                    ? "rgba(34,197,94,0.25)"
                                                    : activeStop.isgivenontheway
                                                        ? "rgba(234,179,8,0.25)"
                                                        : activeStop.iscancelled
                                                            ? "rgba(239,68,68,0.25)"
                                                            : "rgba(255,255,255,0.2)",
                                            color:
                                                activeStop.iscompleted
                                                    ? "#22c55e"
                                                    : activeStop.isgivenontheway
                                                        ? "#eab308"
                                                        : activeStop.iscancelled
                                                            ? "#ef4444"
                                                            : "#ffffff",
                                        }}
                                    >
                                        {activeStop.iscompleted
                                            ? "Delivered"
                                            : activeStop.isgivenontheway
                                                ? "Given on the way"
                                                : activeStop.iscancelled
                                                    ? "Cancelled"
                                                    : "Pending"}
                                    </span>
                                </span>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginBottom: "6px" }}>
                                <Clock size={20} />
                                <span style={{ fontSize: "15px" }}><b>Start:</b> {activeStop.starttime || "Not Started"}</span>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginBottom: "6px" }}>
                                <Clock size={20} />
                                <span style={{ fontSize: "15px" }}><b>End:</b> {activeStop.endtime || "Not Completed"}</span>
                            </div>
                            <div style={{ display: "flex", gap: "10px", marginBottom: "12px", lineHeight: "1.4", alignItems: "flex-start", width: '100%' }}>
                                <MapPin size={26} style={{ width: '8%', marginTop: "3px" }} />
                                <span style={{ width: '92%', fontSize: "15px", whiteSpace: "normal", wordBreak: "break-word" }}>
                                    {activeStop.customer_address}
                                </span>
                            </div>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}
