import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard'
import Sidebar from '~/components/sections/sidebar';
import { io } from 'socket.io-client';
import { apiUrl } from '~/repositories/Repository';
import HorizontalRidersScroll from '~/components/sections/scrolcenter';
import Chatcompdash from '~/components/charts/ridersbarchart';
import Piebranchroutes from '~/components/charts/branchpiechart';
import Riderbarroute from '~/components/charts/riderroutes';
import Piebranchorders from '~/components/charts/branchorder';
import Dashmidcomp from '~/components/sections/ordermidcomp';
import Threechart from '~/components/charts/threechart';
import Dashbranch from '~/components/sections/dashbranch';
import Dashstops from '~/components/sections/dashstops';
import Dashrider from '~/components/sections/dashrider';
import Liveorder from '~/components/sections/liveorder';
import Cancelcomp from '~/components/sections/cancelcomp';
import OnTheWayComp from '~/components/sections/onthewaycomp';
import CompletedComp from '~/components/sections/completedcomp';
import Dashtopinfo from '~/components/sections/dashtopinfo';
import Topleftchart from '~/components/charts/topleftchart';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTodayRoutesRequest } from '~/store/orders/action';
import AppadminDashboard from '~/components/sections/appadmindashboard';
import { toggleSidebar } from '~/store/auth/action';


const Normaldashboard = () => {
  const [loader, setLoader] = useState(false);
  const getIsMobile = () =>
    typeof window !== 'undefined' ? window.innerWidth <= 868 : false;

  const [isMobile, setIsMobile] = useState(getIsMobile());


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const [fetchFresh, setFetchFresh] = useState(false);
  const [activeRiders, setactiveRiders] = useState([])
  const [riderLocations, setRiderLocations] = useState({});
  // const [todayroutes,setTodayroutes]=useState([])
  const [canceledorders, setcanceldeorders] = useState([])
  const [onthewayorders, setonthewayorders] = useState([])
  const [completedorders, setcompletedorders] = useState([])
  const [cancelpercentage, setcancelpercentage] = useState(0)
  const [successspercentage, setsuceesspercentage] = useState(0)
  const [totalorders, settotalorders] = useState([])
  const { auth } = useSelector(({ auth }) => auth);

  const todayroutes = useSelector((state) => state.orders.todayRoutes);
  const isActive = useSelector((state) => state.auth.isSidebarActive);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodayRoutesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (auth?.color) {
      document.documentElement.style.setProperty('--jl-primary', auth.color);
    }
  }, [auth?.color]);


  const handleMobileMenuToggle = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    if (!todayroutes || todayroutes.length === 0) return; // Avoid running before data is available

    let canceled = todayroutes.flatMap((route) =>
      route?.stops
        ?.filter((stop) => stop?.iscancelled === true)
        ?.map((stop) => ({
          ...stop,
          routename: route?.name,
          driver: route?.user.user_id,
        }))
    );

    let ontheway = todayroutes.flatMap((route) =>
      route?.stops
        ?.filter((stop) => stop?.isgivenontheway === true)
        ?.map((stop) => ({
          ...stop,
          routename: route?.name,
          driver: route?.user.user_id,
        }))
    );

    let completed = todayroutes.flatMap((route) =>
      route?.stops
        ?.filter(
          (stop) =>
            stop?.iscompleted === true &&
            !stop?.iscancelled
        )
        ?.map((stop) => ({
          ...stop,
          routename: route?.name,
          driver: route?.user.user_id,
        }))
    );


    let totalord = todayroutes.flatMap((route) =>
      route?.stops
        ?.map((stop) => ({
          ...stop,
          routename: route?.name,
          driver: route?.user.user_id,
        }))
    );

    setcanceldeorders(canceled);
    setcompletedorders(completed);
    setonthewayorders(ontheway);
    settotalorders(totalord);

    let cancelPercentage =
      totalord?.length > 0 ? (canceled?.length / totalord?.length) * 100 : 0;
    setcancelpercentage(cancelPercentage?.toFixed(2));

    let successPercentage =
      totalord?.length > 0 ? (completed?.length / totalord?.length) * 100 : 0;
    setsuceesspercentage(successPercentage?.toFixed(2));
  }, [todayroutes]); // Depend on todayroutes



  useEffect(() => {
    let local = typeof window !== 'undefined' ? localStorage : null;
    const getactiveRiders = async () => {
      const res = await fetch(`${apiUrl}/admin/activeriders`, {
        headers: {
          'authorization': `Bearer ${local.usertoken}`
        }
      });
      const data = await res.json();
      // console.log(data)
      if (!data?.data) {
        console.error('Error fetching users:', data.error);
        return;
      }
      // console.log(data.data, 'afafda')
      setactiveRiders((prev) => {
        const prevStr = JSON.stringify(prev)
        const newvalue = JSON.stringify(data.data)

        if (prevStr !== newvalue) {
          return data.data
        }

        return prev
      })
    }
    getactiveRiders()

    let interal = setInterval(getactiveRiders, 5000)

    return () => clearInterval(interal)

  }, [])




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










  let router = useRouter()
  console.log(isMobile, 'ismobile', isActive, 'isactive')
  //  console.log(todayroutes,'to')
  const handleDesktopToggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div style={{

    }}>
      <Spin spinning={loader} tip={'Loading...'}>
        <HeaderDashboard />
        <div className="dashboard-container mt-5 pt-2" >
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            width: '100%',
            // minHeight: 'calc(100vh - 70px)',
            position: 'relative',
            // paddingTop: isMobile ? '0' : '20px'
          }}>
            {/* Sidebar */}

            {
              isMobile ?
                <div style={{
                  width: isMobile ? '100%' : (isActive ? '80px' : '250px'),
                  minWidth: isMobile ? '100%' : (isActive ? '80px' : '250px'),
                  transition: 'all 0.3s ease',
                  position: isMobile ? 'fixed' : 'relative',
                  top: isMobile ? '0' : 'auto',
                  left: isMobile ? (isActive ? '0' : '-100%') : 'auto',
                  height: isMobile ? '100vh' : 'calc(100vh - 90px)',
                  zIndex: 1000,
                  backgroundColor: '#fff',
                  boxShadow: isMobile ? '2px 0 10px rgba(0,0,0,0.1)' : 'none',
                  overflowY: 'auto'
                }}>
                  <Sidebar active={isActive}
                    page={'dashboard'} />
                  {isMobile && (
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
                </div> :
                <div id="sidebar"
                  className={isActive ? 'slide-show' : null}
                  style={{
                    width: isActive ? '80px' : '250px',
                    minWidth: isActive ? '80px' : '250px',
                    transition: 'all 0.3s ease',
                  }}>
                  <Sidebar active={isActive} page={'orderanalytics'} />
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
            }





            {/* Main Content */}
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
                overflowY: 'auto'
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

              {/* Dashboard Top Info */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                margin: isMobile ? '10px 0' : '0 15px 16px',
                gap: isMobile ? '15px' : '0'
              }}>
                <Dashtopinfo
                  auth={auth}
                  isMobile={isMobile}
                  completed={completedorders}
                  cancel={canceledorders}
                  today={totalorders}
                  compperc={successspercentage}
                  cancperc={cancelpercentage}
                />
              </div>

              {/* Horizontal Riders Scroll */}
              <div style={{
                margin: isMobile ? '15px 0' : '20px 0'
              }}>
                <HorizontalRidersScroll
                  pending={totalorders}
                  riderLocations={riderLocations} />
              </div>

              {/* Top Left Chart */}
              <div style={{
                display: 'flex',
                width: isMobile ? '100%' : '95%',
                gap: isMobile ? '15px' : '20px',
                padding: isMobile ? '15px 10px' : '25px 20px',
                margin: 'auto'
              }}>
                <Topleftchart />
              </div>

              {/* Cancel and On The Way Components */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : '20px',
                padding: isMobile ? '15px 10px' : '25px 20px'
              }}>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Cancelcomp routes={canceledorders} />
                </div>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <OnTheWayComp routes={onthewayorders} />
                </div>
              </div>

              {/* Completed Component */}
              <div style={{
                width: isMobile ? '100%' : '50%',
                margin: isMobile ? '15px auto' : '0 auto 20px',
                padding: isMobile ? '15px 10px' : '25px 20px'
              }}>
                <CompletedComp routes={completedorders} />
              </div>

              {/* Branch Routes and Rider Bar Route */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : '20px',
                padding: isMobile ? '15px 10px' : '25px 20px'
              }}>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Piebranchroutes todayroutes={todayroutes} />
                </div>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Riderbarroute todayroutes={todayroutes} />
                </div>
              </div>

              {/* Live Order and Dash Rider */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : '20px',
                padding: isMobile ? '15px 10px' : '25px 20px'
              }}>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Liveorder todayroutes={activeRiders} />
                </div>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Dashrider todayroutes={todayroutes} />
                </div>
              </div>

              {/* Branch Orders and Chart */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : '20px',
                padding: isMobile ? '15px 10px' : '25px 20px'
              }}>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Piebranchorders todayroutes={todayroutes} />
                </div>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Chatcompdash todayroutes={todayroutes} />
                </div>
              </div>

              {/* Dashboard Middle Component - Orders Completed */}
              <div style={{
                width: isMobile ? '100%' : '70%',
                margin: 'auto',
                padding: isMobile ? '15px 10px' : '25px 20px'
              }}>
                <Dashmidcomp
                  rightsubhead={"Total orders"}
                  fontSize={isMobile ? '48px' : '92px'}
                  leftcolor={'rgb(40, 192, 96)'}
                  leftvalue={completedorders?.length}
                  rightvalue={totalorders?.length}
                  leftsubhead={'Completed'}
                  height={isMobile ? '200px' : '330px'}
                  heading={"Orders completed"}
                  ismobile={isMobile}
                />
              </div>

              {/* Cancelled and On The Way Orders */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : '20px',
                padding: isMobile ? '15px 10px' : '25px 20px'
              }}>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Dashmidcomp
                    rightsubhead={"Total orders"}
                    leftcolor={'rgba(223, 66, 66, 1)'}
                    leftvalue={canceledorders?.length}
                    rightvalue={totalorders?.length}
                    leftsubhead={'Cancelled'}
                    heading={"Orders cancelled"}
                    ismobile={isMobile}
                  />
                </div>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Dashmidcomp
                    rightsubhead={"Total orders"}
                    leftcolor={'#f59e0b'}
                    leftvalue={onthewayorders?.length}
                    rightvalue={totalorders?.length}
                    leftsubhead={'On the way'}
                    heading={'Orders Given on the way'}
                    ismobile={isMobile}
                  />
                </div>
              </div>

              {/* Stops and Branch */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : '20px',
                padding: isMobile ? '15px 10px' : '25px 20px',
                marginBottom: isMobile ? '20px' : '0'
              }}>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Dashstops todayroutes={todayroutes} />
                </div>
                <div style={{
                  width: isMobile ? '100%' : '48%'
                }}>
                  <Dashbranch todayroutes={todayroutes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
}

const Index = () => {
  const { isLoggedIn, auth, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("persist:MushroomAdmin"));
    const localAuth = local && local.auth ? JSON.parse(local.auth) : {};

    if (!localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);

  if (!isLoggedIn) {
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

  return auth.role === "appadmin" ? <AppadminDashboard /> : <Normaldashboard />;
};

export default Index;