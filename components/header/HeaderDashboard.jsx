import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { logout } from '../../store/auth/action';

const Header = () => {

    const dispatch = useDispatch();
    const { auth } = useSelector(({ auth }) => auth);
    const [theme, setTheme] = useState('light');

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
            <div className='header-nav d-flex justify-content-between'>
                <div className="logo text-left">
                    <a href="/home">
                        <div className="text-center">
                            <img src={"/img/logo_12.png"}
                                style={{ height: '50px' }}
                                className="img-fluid"></img>
                        </div>
                    </a>
                </div>
                <div className='d-flex align-items-center'>
                    <h4 className="user-name m-0">
                        <i className="fas fa-user pr-2" style={{ color: '#fff', fontSize: '18px' }} ></i>
                        {auth.name}
                    </h4>
                    <div>
                        <ul className="nav__menu m-0 d-flex justify-content-between align-items-center">
                            <li className="nav__menu-item" style={{ cursor: 'pointer' }}>
                                <i className="fas fa-sign-out-alt" style={{ color: '#fff', fontSize: '25px' }} onClick={logoutOne}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;
