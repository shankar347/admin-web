
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard'
import Sidebar from '~/components/sections/sidebar';
import AdminLiveMap from '~/components/sections/adminlivemap';
import { apiUrl, googleApi } from '~/repositories/Repository';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '~/store/auth/action';

const Index = () => {
  const [loader, setLoader] = useState(false);


  const toggleClass = () => setActive(!isActive);


  const [fetchFresh, setFetchFresh] = useState(false);


  const [activeRiders, setactiveRiders] = useState([])
  const [riderLocations, setRiderLocations] = useState({});
  const { auth } = useSelector(({ auth }) => auth);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isActive = useSelector((state) => state.auth.isSidebarActive);
  const dispatch = useDispatch();
  // Set isClient to true on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize isMobile after client-side render
  useEffect(() => {
    if (!isClient) return;

    const getIsMobile = () => window.innerWidth <= 868;
    setIsMobile(getIsMobile());

    const handleResize = () => {
      setIsMobile(getIsMobile());
      // Reset sidebar state when switching from mobile to desktop
      if (window.innerWidth > 868 && isActive) {
        dispatch(toggleSidebar()); // Close sidebar on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, isActive, dispatch]);

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    dispatch(toggleSidebar());
  };

  // Handle desktop sidebar toggle
  const handleDesktopToggle = () => {
    dispatch(toggleSidebar());
  };

  // Auth check
  useEffect(() => {
    if (!isClient) return;

    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth, isClient]);



  useEffect(() => {
    const getactiveRiders = async () => {
      let local = typeof window !== 'undefined' ? localStorage : null;
      const res = await fetch(`${apiUrl}/admin/activeriders`, {
        headers: {
          'authorization': `Bearer ${local.usertoken}`
        }
      });
      const data = await res.json();
      // console.log(data)
      if (data?.error) {
        console.error('Error fetching users:', data.error);
        return;
      }
      setactiveRiders(data?.data)
    }
    getactiveRiders()

    let interval = setInterval(getactiveRiders, 5000)

    return () => clearInterval(interval)

  }, [])

  // console.log(riderLocations, 'hi')



  console.log(activeRiders, 'at')

  useEffect(() => {

    const socket = io("http://192.168.1.148:5000", {
      transports: ["websocket"],   // ✅ Force WebSocket only
      reconnection: true,
      reconnectionAttempts: 5
    });

    socket.on("connect", () => {
      console.log("SOCKET CONNECTED:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.log("SOCKET CONNECTION ERROR:", err);
    });

    socket.on("locationUpdate", (data1) => {
      let data = JSON.parse(data1)
      console.log("LOC UPDATE:", data);

      console.log(data.userId)
      console.log(data.userId === activeRiders[0].userid)

      const rider = activeRiders.find(r => r.userid === data.userId)
      console.log(rider, 'r')

      if (rider) {
        setRiderLocations(prev => ({
          ...prev,
          [data.userId]: {
            lat: data.latitude,
            lng: data.longitude,
            ridedata: rider
          }
        }));
      }


    });


    return () => {
      socket.disconnect();
    };

  }, [activeRiders]);


  if (!isClient) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Spin spinning={true} tip={'Loading...'} />
      </div>
    );
  }


  return (
    <div>
      <Spin spinning={loader} tip={'Loading...'}>
        <HeaderDashboard />
        <div className="dashboard-container mt-5 pt-2" >
          {/* Sidebar */}
          {isMobile ? (
            <div style={{
              width: '100%',
              minWidth: '100%',
              transition: 'all 0.3s ease',
              position: 'fixed',
              top: '0',
              left: isActive ? '0' : '-100%',
              height: '100vh',
              zIndex: 1000,
              backgroundColor: '#fff',
              boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
              overflowY: 'auto'
            }}>
              <Sidebar active={false} page={'orderanalytics'} />
              {isActive && (
                <div
                  onClick={handleMobileMenuToggle}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    backgroundColor: auth.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fas fa-times"></i>
                </div>
              )}
            </div>
          ) : (
            <div id="sidebar"
              className={isActive ? 'slide-show' : null}
              style={{
                width: isActive ? '80px' : '250px',
                minWidth: isActive ? '80px' : '250px',
                transition: 'all 0.3s ease',
              }}>
              <Sidebar active={isActive} page={'livetracking'} />
              <div className="slide-toggle" onClick={handleDesktopToggle}>
                <span className={'qc-arrow'}>
                  <i
                    className={`fas ${isActive ? 'fa-angle-double-right' : 'fa-angle-double-left'}`}
                    style={{
                      color: auth.color,
                    }}
                  ></i>
                </span>
              </div>
            </div>
          )}
          <div
            className={!isMobile ? "content content-width mt-3" : ''}
            style={{
              flex: 1,
              border: isMobile ? '' : `2px solid ${auth.color}`,
              padding: isMobile ? '10px' : '20px',
              paddingTop: isMobile ? '10px' : '20px',
              marginLeft: isMobile ? '0' : (isActive ? '20px' : '20px'),
              width: '100%',
              transition: 'all 0.3s ease',
              maxHeight: 'calc(100vh - 90px)',
              overflowY: 'auto',
              marginTop: isMobile ? '0' : ''
            }}
            id="style-2"
          >
            {/* Dynamic scrollbar color style */}
            <style jsx>{`
    #style-2::-webkit-scrollbar {
      width: 8px;
    }
    #style-2::-webkit-scrollbar-thumb {
      background-color: ${auth.color};
      border-radius: 4px;
    }
    #style-2::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
    /* For Firefox */
    #style-2 {
      scrollbar-width: thin;
      scrollbar-color: ${auth.color} #f1f1f1;
    }
  `}</style>
            <AdminLiveMap apiKey={googleApi}
              // auth={au}
              riderLocations={riderLocations} />
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default Index;


