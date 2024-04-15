import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Dashboard from '../../components/sections/dashboard';
import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';

const Home = (props) => {

    const { auth } = useSelector(({ auth }) => auth);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        }
    }, [auth]);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <HeaderDashboard />
            <div className="dashboard-container mt-5 pt-3">
                <div id="sidebar" className={isActive ? 'slide-show' : null}>
                    <Sidebar page={'home'} />
                    <div className="slide-toggle" onClick={toggleClass}>
                        <span className={"qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
                    </div>
                </div>
                <Dashboard />
            </div>
        </div>
    );
};

export default Home;
