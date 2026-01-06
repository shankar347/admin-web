
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/header/HeaderDashboard'
import Sidebar from '~/components/sections/sidebar';
import { useSelector } from 'react-redux';

const Index = () => {
  const [loader, setLoader] = useState(false);
  const [isActive, setActive] = useState(false);


  const toggleClass = () => setActive(!isActive);

  const { auth } = useSelector(({ auth }) => auth);

  const [fetchFresh, setFetchFresh] = useState(false);

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);

  useEffect(() => {
    if (auth?.color) {
      document.documentElement.style.setProperty('--jl-primary', auth.color);
    }
  }, [auth?.color]);

  return (
    <div>
      <Spin spinning={loader} tip={'Loading...'}>
        <HeaderDashboard />
        <div className="dashboard-container mt-5 pt-2" >
          <div id="sidebar" className={isActive ? 'slide-show' : null}>
            <Sidebar active={isActive} page={'dashboard'} />
            <div className="slide-toggle" onClick={toggleClass}>
              <span className={'qc-arrow'}>
                <i
                  className="fas fa-angle-double-left"
                  style={{
                    color: auth.color,
                  }}
                ></i>
              </span>
            </div>
          </div>
          <div
            className="content content-width mt-3"
            id="style-2"
            style={{
              border: `2px solid ${auth.color}`,
              overflowY: 'auto', // enable scrollbar
              // maxHeight: '80vh', // example height
            }}
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
            hi
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default Index;


