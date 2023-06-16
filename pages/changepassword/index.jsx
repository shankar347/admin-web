import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, notification } from 'antd';
import Joi from 'joi-browser';

import HeaderDashboard from '../../components/header/HeaderDashboard';
import Sidebar from '../../components/sections/sidebar';

import { logout } from '../../store/auth/action';
import { getCurrentUser, getQuery } from '../../helper/auth';
import adminService from '../../repositories/AuthRepository';
import Password from 'antd/lib/input/Password';
import OperatorRepository from '../../repositories/OperatorRepository';

const Home = (props) => {

  const dispatch = useDispatch();
  const user = getCurrentUser();
  const { auth } = useSelector(({ auth }) => auth);
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [Username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState("");
  const [isActive, setActive] = useState(false);
  const [query, setQuery] = useState({});
  const [password1, setpassword1] = useState('');
  const [userData, setUserData] = useState([]);
  const schema = {
    OldPassword: Joi.string().required(),
    NewPassword: Joi.string().min(5).required(),
    ConfirmPassword: Joi.string().required(),
  }

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);

  const logoutOnClick = () => {
    dispatch(logout());
    if (user && user.logintype === 'I') {
      window.location.href = "/institutionlogin/";
    } else {
      window.location.href = "/";
    }
  }

  const UsernameOnChange = (Username) => {
    let errorObj = { ...errors };
    errorObj['Username'] = '';
    setUsername(Username);
    setErrors(errorObj);
  }

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

  useEffect(() => {
    handleRefresh()
  }, [])

  const handleRefresh = async () => {
    let ctr = {}
    ctr.id = user.id
    if (user.type == 'SA') {
      let admin = await adminService.getAdmin();
      if (admin && admin.data && admin.data ) {
        let pass = admin.data;
      setLoader(true);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setUsername('');
      setpassword1(new Buffer.from(pass.admin_pass, 'base64').toString())
      setUserType(user.type);
      setLoader(false);
    }
    } else {
    
      let operator = await OperatorRepository.getOperator(ctr);
      if (operator && operator.data && operator.data.data) {
        let pass= operator.data.data;
        setLoader(true);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setUsername('');
        setpassword1(new Buffer.from(pass[0].op_pass, 'base64').toString())
        setUserType(user.type);
        setLoader(false);
      }
    }
  }


  useEffect(() => {
    setLoader(true);
    let query = getQuery();
    setQuery(query)
    setLoader(false)
  }, []);
  const valiadateProperty = (e) => {
    let { name, value, className } = e.currentTarget;
    const obj = { [name]: value };
    const filedSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, filedSchema);
    let message = error ? error.details[0].message : null;
    setErrors({ ...errors, [name]: message, "errordetails": null })
  }
    ;

  const saveOnClick = async () => {

    if (Username === user.userName && user.type == 'SA') {
      if (oldPassword === password1) {
        
        if (newPassword != confirmPassword) {
          notification.error({
            message: 'Confirm Password Is Not Same As NewPassword',
            placement: 'top'
          });
          setErrors({ ...errors, ['ConfirmPassword']: 'Confirm Password must match New Password', "errordetails": null })
        } else {
          if (oldPassword && newPassword && confirmPassword && errors['ConfirmPassword'] === null &&
            errors['NewPassword'] === null && errors['OldPassword'] === null) {
            let obj = {
              admin_name: Username,
              old_pass: oldPassword,
              new_pass: newPassword
            };
            try {

              let result = await adminService.changePassword(obj);
              if (result && result.status === 200) {
                notification.success({
                  message: 'Password Changed Successfull',
                  placement: 'top'
                });
                setTimeout(() => {
                  logoutOnClick();
                }, 1000);
              }
            } catch (err) {
              notification.error({
                message: 'Password Changed Failed.',
                placement: 'top'
              });
            }
          } else {
            let errorObj = { ...errors };
            if (!oldPassword) errorObj['OldPassword'] = "Please Enter OldPassword";
            if (!newPassword) errorObj['NewPassword'] = "Please Enter newPassword";
            if (!confirmPassword) errorObj['ConfirmPassword'] = "Please Enter ConfirmPassword";
            setErrors(errorObj);
          }
        }
      } else {
        notification.error({
          message: 'Incorrect Old Password',
          placement: 'top'
        });
      }
    } else if (Username === auth.name && auth.type !== 'SA') {
      if (oldPassword === password1) {
        if (newPassword != confirmPassword) {
          notification.error({
            message: 'Confirm Password Is Not Same As NewPassword',
            placement: 'top'
          });
          setErrors({ ...errors, ['ConfirmPassword']: 'Confirm Password must match New Password', "errordetails": null })
        } else {
          if (oldPassword && newPassword && confirmPassword && errors['ConfirmPassword'] === null &&
            errors['NewPassword'] === null && errors['OldPassword'] === null) {
            let obj = {
              user_name: Username,
              old_pass: oldPassword,
              new_pass: newPassword
            };
            try {

              let result = await OperatorRepository.changePassword(obj);
              if (result && result.status === 200) {
                notification.success({
                  message: 'Password Changed Successfull',
                  placement: 'top'
                });
                setTimeout(() => {
                  logoutOnClick();
                }, 1000);
              }
            } catch (err) {
              notification.error({
                message: 'Password Changed Failed.',
                placement: 'top'
              });
            }
          } else {
            let errorObj = { ...errors };
            if (!oldPassword) errorObj['OldPassword'] = "Please Enter OldPassword";
            if (!newPassword) errorObj['NewPassword'] = "Please Enter newPassword";
            if (!confirmPassword) errorObj['ConfirmPassword'] = "Please Enter ConfirmPassword";
            setErrors(errorObj);
          }
        }
      } else {
        notification.error({
          message: 'Incorrect Old Password',
          placement: 'top'
        });
      }
    }
    else {
      notification.error({
        message: 'User Not Found',
        placement: 'top'
      });
    }

  }

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <Spin spinning={loader} tip={'Loading...'}>
        <HeaderDashboard />
        <div className="dashboard-container mt-5 pt-2">
          <div id="sidebar" className={isActive ? 'slide-show' : null}>
            <Sidebar active={isActive} page={'Change Password'} />
            <div className="slide-toggle" onClick={toggleClass}>
              <span className={auth.logintype === "I" ? "school-arrow" : "qc-arrow"}><i className="fas fa-angle-double-left"></i></span>
            </div>
          </div>
          <div className="content content-width mt-3" id={auth.logintype === 'I' ? 'style-3' : 'style-2'}>
            <h3 className='page_header py-3'>Change Password</h3>
            <div className='row' style={{ padding: 30 }}>
              <div className="col-md-12">
                <div className="form-group">
                  <label>User Name<span style={{ color: 'red' }}>*</span></label>
                  <input
                    className="form-control"
                    type="text"
                    value={Username}
                    placeholder=""
                    onChange={(e) => UsernameOnChange(e.target.value)}
                  />
                  {errors['Username'] &&
                    <span style={{ color: 'red' }}>{errors['Username']}</span>
                  }
                </div>
                <div className="form-group">
                  <label>Old Password <span style={{ color: 'red' }}>*</span></label>
                  <input
                    className="form-control"
                    type={'password'}
                    name={'OldPassword'}
                    value={oldPassword}
                    onBlur={valiadateProperty}
                    placeholder=""
                    onChange={(e) => OldPasswordOnChange(e.target.value)}
                  />
                  {errors['OldPassword'] &&
                    <span style={{ color: 'red' }}>{errors['OldPassword']}</span>
                  }
                </div>
                <div className="form-group">
                  <label>New Password <span style={{ color: 'red' }}>*</span></label>
                  <input
                    className="form-control"
                    type={'password'}
                    name={'NewPassword'}
                    value={newPassword}
                    onBlur={valiadateProperty}
                    placeholder=""
                    onChange={(e) => NewPasswordOnChange(e.target.value)}
                  />
                  {errors['NewPassword'] &&
                    <span style={{ color: 'red' }}>{errors['NewPassword']}</span>
                  }
                </div>
                <div className="form-group">
                  <label>Confirm Password<span style={{ color: 'red' }}>*</span></label>
                  <input
                    className="form-control"
                    type={'password'}
                    name={'ConfirmPassword'}
                    value={confirmPassword}
                    onBlur={valiadateProperty}
                    placeholder=""
                    onChange={(e) => ConfirmPasswordOnChange(e.target.value)}
                  />
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
