import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Modal } from 'antd';

import { logout } from '../../store/auth/action';

const Sidebar = (props) => {

    const itemsRef = useRef([]);
    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
        } else {
            let menus = JSON.parse(localStorage.getItem('menus'));
            setMenuItems(menus)
        }
    }, [auth]);

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

    return (
        <div>
            <div className="side-menu text-center" id={"style-2"}>
                <ul className='text-left'>
                        <li className={props.page === "dashboard" ? "menu-active" : ''} 
                      ref={el => itemsRef.current['home'] = el} >
                        <Link href="/dashboard">
                            <a>
                                <span className='menu-icon'>
                                    <i className="fas fa-columns"></i></span>
                                <span className='menu-text'>Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    <li className={props.page === "home" ? "menu-active" : ''} ref={el => itemsRef.current['home'] = el} >
                        <Link href="/home">
                            <a>
                                <span className='menu-icon'><i className="fas fa-home"></i></span>
                                <span className='menu-text'>Home</span>
                            </a>
                        </Link>
                    </li>
                    {menuItems && menuItems.length > 0 &&
                        menuItems.map(mi => {
                            let href = mi.menu_link;
                            return (
                                <li className={props.page === mi.menu_link ? "menu-active" : ''} id={'1'} ref={el => itemsRef.current[mi.name] = el}>
                                    <Link href={href}>
                                        <a>
                                            <span className='menu-icon'><i className={`fas ${mi.menu_icon}`}></i></span>
                                            <span className='menu-text'>{mi.menu_title}</span>
                                        </a>
                                    </Link>
                                </li>
                            )
                        }
                    )}
                    <li className={props.page === "changepassword" ? "menu-active" : ''} id={'1'} ref={el => itemsRef.current['Change Password'] = el}>
                        <Link href="/changepassword">
                            <a>
                                <span className='menu-icon'><i className="fas fa-unlock"></i></span>
                                <span className='menu-text'>Change Password</span>
                            </a>
                        </Link>
                    </li>
                    <li className="nav__menu-item" style={{ cursor: 'pointer' }} onClick={logoutOne}>
                        <a>
                            <span className='menu-icon'><i className="fas fa-sign-out-alt"></i></span>
                            <span className='menu-text'>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
