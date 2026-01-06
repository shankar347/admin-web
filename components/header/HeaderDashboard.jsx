import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { logout, toggleSidebar } from '../../store/auth/action';

const Header = () => {

    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const [theme, setTheme] = useState('light');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const getIsMobile = () =>
        typeof window !== 'undefined' ? window.innerWidth <= 868 : false;

    const [isMobile, setIsMobile] = useState(getIsMobile());


    const handleMobileMenuToggle = () => {
        dispatch(toggleSidebar());

    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(getIsMobile());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    useEffect(() => {
        let localTheme = localStorage.getItem("theme");
        if (localTheme == 'dark') {
            changeTheme('dark');
            setTheme('dark');
        } else {
            changeTheme('light');
            setTheme('light');
        }
    }, []);

    const logoutOne = () => {
        Modal.confirm({
            title: 'Confirm',
            content: 'Do you want to logout ',
            okText: 'Yes',
            onOk: () => logoutOnClick(),
            cancelText: 'No',
            centered: true
        });
    }

    const logoutOnClick = () => {
        dispatch(logout());
        window.location.href = "/";
    }

    const changeTheme = (value) => {
        if (value == 'light') {
            document.documentElement.style.setProperty('--background-color', '#f5f5f5');
            document.documentElement.style.setProperty('--text-color', '#0c0c0c');
            document.documentElement.style.setProperty('--jl-gray', '#f5f5f5');
            localStorage.setItem('theme', 'light');
            setTheme('light')
        } else {
            document.documentElement.style.setProperty('--background-color', '#46494c');
            document.documentElement.style.setProperty('--text-color', '#e4e4e4');
            document.documentElement.style.setProperty('--jl-gray', '#565656');
            localStorage.setItem('theme', 'dark');
            setTheme('dark')
        }
    }

    return (
        <div>
            {/* Desktop Navbar */}
            {!isMobile ? (
                <div
                    style={{
                        backgroundColor: auth.color || "#bfb719",
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 20px',
                        height: '70px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        borderBottomLeftRadius: '25px',
                        borderBottomRightRadius: '25px'
                    }}
                >
                    {/* Logo Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img
                                src={auth.image ? `http://192.168.1.148:5000/${auth.image?.replace(/\\/g, '/')}` : '/favicon.png'}
                                style={{
                                    height: '45px',
                                    width: '45px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2px solid rgba(255,255,255,0.3)'
                                }}
                                alt="Logo"
                            />
                            <div style={{ marginLeft: '10px' }}>
                                <div style={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>
                                    {auth?.name || 'Dashboard'}
                                </div>
                                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>
                                    Welcome back
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Right Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                        {/* User Info */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            padding: '8px 15px',
                            borderRadius: '25px'
                        }}>
                            <div style={{
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <i className="fas fa-user" style={{ color: '#fff', fontSize: '16px' }}></i>
                            </div>
                            <div>
                                <div style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>
                                    {auth?.role}
                                </div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
                                    Administrator
                                </div>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                ':hover': {
                                    backgroundColor: 'rgba(255,255,255,0.25)',
                                    transform: 'scale(1.05)'
                                }
                            }}
                            onClick={logoutOne}
                            title="Logout"
                        >
                            <i className="fas fa-sign-out-alt" style={{ color: '#fff', fontSize: '18px' }}></i>
                        </div>
                    </div>
                </div>
            ) : (
                /* Mobile Navbar */
                <div
                    style={{
                        backgroundColor: auth.color,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 15px',
                        height: '60px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        borderBottomLeftRadius: '25px',
                        borderBottomRightRadius: '25px'
                    }}
                >
                    {/* Logo Section */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img
                                src={auth.image ? `http://192.168.1.148:5000/${auth.image?.replace(/\\/g, '/')}` : '/favicon.png'}
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2px solid rgba(255,255,255,0.3)'
                                }}
                                alt="Logo"
                            />

                        </a>
                    </div>

                    {/* Right Section for Mobile */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        {/* User Info (Mobile) */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            padding: '6px 12px',
                            borderRadius: '20px'
                        }}>
                            <div style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <i className="fas fa-user" style={{ color: '#fff', fontSize: '14px' }}></i>
                            </div>
                            <div style={{ color: '#fff', fontSize: '13px', fontWeight: '500' }}>
                                {auth?.role}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleMobileMenuToggle()}
                        >
                            <i className="fas fa-bars" style={{ color: '#fff', fontSize: '18px' }}></i>
                        </div>

                        {/* Mobile Dropdown Menu */}
                        {mobileMenuOpen && (
                            <div
                                style={{
                                    position: 'fixed',
                                    top: '60px',
                                    right: '15px',
                                    backgroundColor: '#fff',
                                    borderRadius: '10px',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                                    minWidth: '200px',
                                    zIndex: 1001,
                                    overflow: 'hidden'
                                }}
                            >
                                {/* User Profile in Dropdown */}
                                <div style={{
                                    padding: '15px',
                                    backgroundColor: auth.color,
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <img
                                        src={auth.image ? `http://192.168.1.148:5000/${auth.image?.replace(/\\/g, '/')}` : '/favicon.png'}
                                        style={{
                                            height: '40px',
                                            width: '40px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid rgba(255,255,255,0.3)'
                                        }}
                                        alt="Profile"
                                    />
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '600' }}>
                                            {auth?.name || 'User'}
                                        </div>
                                        <div style={{ fontSize: '12px', opacity: 0.8 }}>
                                            {auth?.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <div style={{ padding: '10px 0' }}>
                                    <div
                                        style={{
                                            padding: '12px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            ':hover': {
                                                backgroundColor: '#f5f5f5'
                                            }
                                        }}
                                        onClick={() => {
                                            // Handle navigation to profile
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        <i className="fas fa-user-circle" style={{ color: auth.color, fontSize: '16px' }}></i>
                                        <span style={{ fontSize: '14px' }}>My Profile</span>
                                    </div>

                                    <div
                                        style={{
                                            padding: '12px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            ':hover': {
                                                backgroundColor: '#f5f5f5'
                                            }
                                        }}
                                        onClick={() => {
                                            // Handle navigation to settings
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        <i className="fas fa-cog" style={{ color: auth.color, fontSize: '16px' }}></i>
                                        <span style={{ fontSize: '14px' }}>Settings</span>
                                    </div>

                                    <div
                                        style={{
                                            padding: '12px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            ':hover': {
                                                backgroundColor: '#f5f5f5'
                                            },
                                            color: '#e74c3c'
                                        }}
                                        onClick={logoutOne}
                                    >
                                        <i className="fas fa-sign-out-alt" style={{ fontSize: '16px' }}></i>
                                        <span style={{ fontSize: '14px', fontWeight: '500' }}>Logout</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};


export default Header;

// #277a8a
// #99598e
// #db3c30