import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, notification } from 'antd';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';

import { logout } from '../../store/auth/action';
import AuthRepository from '~/repositories/AuthRepository';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

const Home = (props) => {

  const dispatch = useDispatch();
  const { auth } = useSelector(({ auth }) => auth);

  const [isActive, setActive] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);

  useEffect(() => {
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }, [])

  const toggleClass = () => {
    setActive(!isActive);
  };

  const OldPasswordOnChange = (oldPassword) => {
    let errorObj = { ...errors };
    errorObj['OldPassword'] = '';
    setOldPassword(oldPassword);
    setErrors(errorObj);
  }

  const NewPasswordOnChange = (newPassword) => {
    let errorObj = { ...errors };
    errorObj['NewPassword'] = '';
    setNewPassword(newPassword);
    setErrors(errorObj);
  }

  const ConfirmPasswordOnChange = (confirmPassword) => {
    let errorObj = { ...errors };
    errorObj['ConfirmPassword'] = '';
    setConfirmPassword(confirmPassword);
    setErrors(errorObj);
  }

  const saveOnClick = async () => {
    setLoader(true)
    let isNewPasswordValid = passwordRegex.test(newPassword);
    let isConfirmPasswordValid = passwordRegex.test(confirmPassword);
    let newAndOldPasswordsSame = newPassword === confirmPassword;
    if (oldPassword && newPassword && confirmPassword && isNewPasswordValid && isConfirmPasswordValid && newAndOldPasswordsSame) {
      let payload = {
        currentPassword: oldPassword,
        newPassword, confirmPassword
      }
      let result = await AuthRepository.changePassword(payload);
      if (result && result.status === 200) {
        notification.success({
          message: "Password Changed Succesfully."
        });
        setTimeout(() => {
          logoutOnClick()
        }, 2000)
      } else {
        notification.error({
          message: result.message
        });
      }
    } else {
      let errorObj = { ...errors };
      if (!oldPassword) errorObj['OldPassword'] = 'Please Enter Current Password';
      if (!isNewPasswordValid) errorObj['NewPassword'] = 'Please Enter Valid Password';
      if (!isConfirmPasswordValid) errorObj['ConfirmPassword'] = 'Please Enter Valid Password';
      if (!newAndOldPasswordsSame) errorObj['ConfirmPassword'] = 'New Password and Confirm Password should be same';
      setErrors(errorObj);
    }
    setLoader(false)
  }

  const logoutOnClick = () => {
    dispatch(logout());
    window.location.href = "/";
  }

  return (
    <div>
      <Spin spinning={loader} tip={'Loading...'}>
        <HeaderDashboard />
        <div className="dashboard-container mt-5 pt-2">
          <div id="sidebar" className={isActive ? 'slide-show' : null}>
            <Sidebar active={isActive} page={'changepassword'} />
            <div className="slide-toggle" onClick={toggleClass}>
              <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
            </div>
          </div>
          <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
            <h3 className='page_header py-3 text-white'>Change Password</h3>
            <div className='row' style={{ padding: 30 }}>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Current Password <span style={{ color: 'red' }}>*</span></label>
                  <input
                    className="form-control"
                    type={showOldPassword ? 'text' : 'password'}
                    name={'OldPassword'}
                    value={oldPassword}
                    placeholder=""
                    onChange={(e) => OldPasswordOnChange(e.target.value)}
                  />
                  <div style={{ position: 'absolute', marginTop: -30, right: 50 }}>
                    <i 
                      className={showOldPassword ? "fa fa-eye" : "fa fa-eye-slash"} 
                      onClick={() => setShowOldPassword(!showOldPassword)} 
                      style={{ cursor: 'pointer', fontSize: 20 }} 
                    />
                  </div>
                  {errors['OldPassword'] &&
                    <span style={{ color: 'red' }}>{errors['OldPassword']}</span>
                  }
                </div>
                <div className="form-group">
                  <label>New Password <span style={{ color: 'red' }}>*</span></label>
                  <input
                    className="form-control"
                    type={showNewPassword ? 'text' : 'password'}
                    name={'NewPassword'}
                    value={newPassword}
                    placeholder=""
                    onChange={(e) => NewPasswordOnChange(e.target.value)}
                  />
                  <div style={{ position: 'absolute', marginTop: -30, right: 50 }}>
                    <i 
                      className={showNewPassword ? "fa fa-eye" : "fa fa-eye-slash"} 
                      onClick={() => setShowNewPassword(!showNewPassword)} 
                      style={{ cursor: 'pointer', fontSize: 20 }} 
                    />
                  </div>
                  {errors['NewPassword'] &&
                    <span style={{ color: 'red' }}>{errors['NewPassword']}</span>
                  }
                </div>
                <div className="form-group">
                  <label>Confirm Password<span style={{ color: 'red' }}>*</span></label>
                  <input
                    className="form-control"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name={'ConfirmPassword'}
                    value={confirmPassword}
                    placeholder=""
                    onChange={(e) => ConfirmPasswordOnChange(e.target.value)}
                  />
                  <div style={{ position: 'absolute', marginTop: -30, right: 50 }}>
                    <i 
                      className={showConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"} 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                      style={{ cursor: 'pointer', fontSize: 20 }} 
                    />
                  </div>
                  {errors['ConfirmPassword'] &&
                    <span style={{ color: 'red' }}>{errors['ConfirmPassword']}</span>
                  }
                </div>
                <div className="form-group" style={{ textAlign: 'center' }}>
                  <button className="btn btn-primary" onClick={saveOnClick}>Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default Home;
