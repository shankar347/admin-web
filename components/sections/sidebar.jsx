import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Modal } from 'antd';
import { closeeSidebar, logout, toggleSidebar } from '../../store/auth/action';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const itemsRef = useRef([]);
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const router = useRouter();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const logoutOne = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to logout?',
            okText: 'Yes',
            onOk: () => logoutOnClick(),
            cancelText: 'No',
            centered: true,
        });
    };

    const logoutOnClick = () => {
        dispatch(logout());
        window.location.href = '/';
    };

    // ✅ Use fallback color if auth.color is not defined
    const activeColor = auth?.color || '#bfb719'; // bright yellow fallback

    const getTextStyle = (path) => {
        const isActive = router.pathname.startsWith(path);
        const isHovered = hoveredItem === path;
        return {
            color: isActive || isHovered ? activeColor : '#000',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            fontWeight: isActive ? '600' : '400',
            WebkitTextFillColor: isActive || isHovered ? activeColor : '#000',
        };
    };

    const getIconStyle = (path) => {
        const isActive = router.pathname.startsWith(path);
        const isHovered = hoveredItem === path;

        return {
            backgroundColor: isActive ? activeColor : isHovered ? `${activeColor}20` : 'transparent',
            color: isActive ? '#fff' : isHovered ? activeColor : '#000',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            padding: '10px 12px',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '35px',
            minHeight: '35px',
            WebkitTextFillColor: isActive ? '#fff' : isHovered ? activeColor : '#000',
        };
    };

    const isActive = useSelector((state) => state.auth.isSidebarActive);

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

    const handleMobileMenuToggle = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className="side-menu text-center"
            style={{
                // border: `2px solid ${auth.color}`,
                overflowY: 'auto', // enable scrollbar
            }} id="style-2">
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
            <ul className="text-left" style={{ listStyle: 'none', padding: 0 }}>
                {/* Dashboard */}
                <li
                    onClick={() => {
                        isMobile && handleMobileMenuToggle()
                    }}
                    ref={(el) => (itemsRef.current['home'] = el)}
                    onMouseEnter={() => setHoveredItem('/dashboard')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Link href="/dashboard">
                        <a style={getTextStyle('/dashboard')}>
                            <span className="menu-icon" style={getIconStyle('/dashboard')}>
                                <i className="fas fa-columns"></i>
                            </span>
                            <span className="menu-text">Dashboard</span>
                        </a>
                    </Link>
                </li>


                {console.log(isActive)}

                {/* Role-based menu */}
                {auth.role === 'appadmin' ? <>
                    {[
                        { path: '/ticketsystem', icon: 'fa-headset', text: 'Ticket System' },
                        { path: '/managesorters', icon: 'fa-user-gear', text: 'Mange Sorters' },
                        { path: '/managedrivers', icon: 'fa-truck-fast', text: 'Manage Drivers' },
                        { path: '/manageadmins', icon: 'fa-user-shield', text: 'Manage Admins' },
                        { path: '/managebranch', icon: 'fa-solid fa-box', text: 'Manage Branches' },
                    ].filter(Boolean).map(({ path, icon, text }) => (
                        <li
                            key={path}
                            onMouseEnter={() => setHoveredItem(path)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {/* <Link href={path} > */}
                            <a style={getTextStyle(path)} onClick={handleMobileMenuToggle}
                                href={path}>
                                <span className="menu-icon" style={getIconStyle(path)}>
                                    <i className={`fa ${icon}`}></i>
                                </span>
                                <span className="menu-text">{text}</span>
                            </a>
                            {/* </Link> */}
                        </li>
                    ))}
                </> : (
                    <>
                        {[
                            { path: '/orderanalytics', icon: 'fa-chart-pie', text: 'Order analytics' },
                            { path: '/orderreports', icon: 'fa-unlock', text: 'Order reports' },
                            // { path: '/deliveryguys', icon: 'fa-home', text: 'Delivery guys' },
                            auth.role !== 'sorter' && { path: '/livetracking', icon: 'fa-location', text: 'Live tracking' },
                            { path: '/assignroutes', icon: 'fa-route', text: 'Assign Routes' },
                            { path: '/manageroles', icon: 'fa-cogs', text: 'Role management' },
                            auth.role === 'superadmin' &&
                            { path: '/manageadmins', icon: 'fa-user-shield', text: 'Manage Admins' },
                            auth.role !== 'sorter' &&

                            { path: '/managesorters', icon: 'fa-user-gear', text: 'Mange Sorters' },
                            { path: '/managedrivers', icon: 'fa-truck-fast', text: 'Manage Drivers' },
                            auth.role === 'superadmin' && { path: '/managebranch', icon: 'fa-solid fa-box', text: 'Manage Branches' },
                            { path: '/customersupport', icon: 'fa-headset', text: 'Customer Support' },

                        ].filter(Boolean).map(({ path, icon, text }) => (
                            <li
                                onClick={() => {
                                    isMobile && handleMobileMenuToggle()
                                }}
                                key={path}
                                onMouseEnter={() => setHoveredItem(path)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link href={path}>
                                    <a style={getTextStyle(path)}>
                                        <span className="menu-icon" style={getIconStyle(path)}>
                                            <i className={`fa ${icon}`}></i>
                                        </span>
                                        <span className="menu-text">{text}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </>
                )}

                {/* Logout */}
                <li
                    onClick={logoutOne}
                    onMouseEnter={() => setHoveredItem('logout')}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ cursor: 'pointer' }}
                >
                    <a style={getTextStyle('logout')}>
                        <span className="menu-icon" style={getIconStyle('logout')}>
                            <i className="fas fa-sign-out-alt"></i>
                        </span>
                        <span className="menu-text">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
