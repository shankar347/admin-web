import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { logout } from '../../store/auth/action';
import { getAdminUserMenu } from '../../store/adminMenu/action';
import { Modal } from 'antd';
import AdminRepository from '../../repositories/AdminMenuRepository';

import Moment from "moment";
const Sidebar = (props) => {

    const itemsRef = useRef([]);
    const dispatch = useDispatch();
    const { userMenu } = useSelector(({ adminMenu }) => adminMenu);
    const [showDropdown, setShowDropdown] = useState(0);
    const { auth } = useSelector(({ auth }) => auth);

    const [menuGroups, setMenuGroups] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        dispatch(getAdminUserMenu());
    }, []);

    useEffect(() => {
        let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
        let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
        if (localAuth && !localAuth.isLoggedIn) {
            window.location.href = "/";
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

    useEffect(() => {
        console.log(props.page,"gbdfhguhdfughdfh")
        let e = itemsRef.current[props.page];
        if (e) {
            e.scrollIntoView();
        }
        (async () => {
            let today = new Date()
            const data = await AdminRepository.adminMenu();
            const expiredAt = Moment(data.message.expiredAt ? data.message.expiredAt : null).format("YYYY-MM-DD HH:mm:ss")
            const time = Moment(today).format("YYYY-MM-DD HH:mm:ss")
            if (userMenu && userMenu != "Unauthorized Request" && userMenu.length > 0) {
                setMenuGroups(userMenu.filter(um => um.group_id == null))
                setMenuItems(userMenu.filter(um => um.group_id != null))
            } else if ((expiredAt < time || data.status === 500 || data.status === 401)) {
                localStorage.removeItem('persist:MushroomAdmin');
            }
        }
        )()
    }, [userMenu]);


  

    const showMenu = (id) => {
        if (id == showDropdown) {
            setShowDropdown(0)
        } else {
            setShowDropdown(id)
        }
    }

    return (
        <div>
            <div className="side-menu text-center" id={"style-2"}>
                <ul className='text-left'>
                    <li className={props.page === "home" ? "active" : ''} ref={el => itemsRef.current['home'] = el} >
                        <Link href="/home">
                            <a>
                                <span className='menu-icon'><i className="fas fa-home"></i></span>
                                <span className='menu-text'>Home</span>
                            </a>
                        </Link>
                    </li>
                    {menuGroups && menuGroups.length > 0 &&
                        menuGroups.map(mg => {
                            let href = mg.menu_link;
                            return (
                                <li className={(props.page === mg.menu_title) || (showDropdown == mg._id) && "menu-active"} key={mg._id} ref={el => itemsRef.current[mg.name] = el} onClick={() => showMenu(mg._id)}>
                                    <Link href={menuItems && menuItems.length > 0 && menuItems.find(mi => mi.group_id == mg._id) ? '' : href}>
                                        <a className='d-flex justify-content-between align-items-center'>
                                            <span>
                                                <span className='menu-icon'><i className={`fas ${mg.menu_icon}`}></i></span>
                                                <span className='menu-text'>{mg.menu_title}</span>
                                            </span>
                                            {menuItems && menuItems.length > 0 && menuItems.find(mi => mi.group_id == mg._id) &&
                                                <span className='menu-arrow'>
                                                    <i className={`fas fa-chevron-${showDropdown == mg._id ? 'up' : 'down'}`}></i>
                                                </span>
                                            }
                                        </a>
                                    </Link>
                                    {mg.menu_id == 21 ?
                                        <ul className={`drop-down ${showDropdown == mg._id && 'drop-down-show'}`}>
                                           
                                        </ul>
                                        :
                                        <ul className={`drop-down ${showDropdown == mg._id && 'drop-down-show'}`}>
                                            {menuItems && menuItems.length > 0 &&
                                                menuItems.map(mi => {
                                                    let href = mi.menu_link;
                                                    if (mi.group_id == mg._id) {
                                                        return (
                                                            <li className={props.page === mi.menu_title ? "active" : ''} id={'1'} ref={el => itemsRef.current[mi.name] = el}>
                                                                <Link href={href}>
                                                                    <a>
                                                                        <span className='menu-icon'><i className={`fas ${mi.menu_icon}`}></i></span>
                                                                        <span className='menu-text'>{mi.menu_title}</span>
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                }
                                                )}
                                        </ul>
                                    }

                                </li>
                            )
                        })}
                    <li className={props.page === "Change Password" ? "active" : ''} id={'1'} ref={el => itemsRef.current['Change Password'] = el}>
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
