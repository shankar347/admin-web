import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import jwtDecode from "jwt-decode";

import { loginSuccess } from '../store/auth/action';
import AuthRepository from '../repositories/AuthRepository';

const SignIn = (props) => {

  const dispatch = useDispatch();

  const { auth, token } = useSelector(({ auth }) => auth);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [isShowPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const typeOnChange = (e) => {
    setType(e.target.value);
    let errorObj = { ...errors };
    errorObj['type'] = '';
    setErrors(errorObj);
  };

  const userOnChange = (user) => {
    setUser(user);
    let errorObj = { ...errors };
    errorObj['user'] = '';
    setErrors(errorObj);
  }

  const passwordOnChange = (password) => {
    setPassword(password);
    let errorObj = { ...errors };
    errorObj['password'] = '';
    setErrors(errorObj);
  }

  const loginPressed = (e) => {
    var code = e.keyCode || e.which;
    if (code === 13) {
      loginOnClick();
    }
  }

  const loginOnClick = async () => {
    let errorObj = {};
    if (user && password && type) {
      let result = await AuthRepository.login({ userName: user, password, type });
      if (result && result.status === 200) {
        let user = jwtDecode(result.data.jwt_token);
        await localStorage.setItem('usertoken', result.data.jwt_token);
        await localStorage.setItem('menus', JSON.stringify(result.data.menus));
        dispatch(loginSuccess({ auth: user, token: result.data.jwt_token }));
        notification.success({
          message: "Welcome Back!"
        });
        window.location.href = "/home";
      } else if (result && result.status) {
        notification.error({
          message: result.message
        });
      } else {
        notification.error({
          message: 'Something Wrong'
        });
      }
    } else {
      if (!user) errorObj['user'] = 'Please Enter User';
      if (!password) errorObj['password'] = 'Please Enter Password';
      if (!type) errorObj['type'] = 'Please Select Type';
      setErrors(errorObj);
    }
  }

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && localAuth.isLoggedIn) {
      window.location.href = "/home";
    }
  }, [auth, token, dispatch]);

  return (
    <>
      <div className="loginscreen">
        <div className="login-card">
          <div className="text-center login-logo">
            <img src={"/img/logo_12.png"} alt="BA" className="text-center" title="BA" />
          </div>
          <div className='form-div'>
            <h2 className='text-center pb-4'>Login</h2>
            <div className="d-flex justify-content-between mb-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name='exampleRadios1'
                  id='exampleRadios1'
                  value={'SA'}
                  onClick={(e) => typeOnChange(e)}
                  onKeyDown={loginPressed}
                />
                <label className="form-check-label" for="exampleRadios1">
                  Super Admin
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name='exampleRadios1'
                  id='exampleRadios2'
                  value={'A'}
                  onClick={(e) => typeOnChange(e)}
                  onKeyDown={loginPressed}
                />
                <label className="form-check-label" for="exampleRadios2">
                  Admin
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name='exampleRadios1'
                  id='exampleRadios3'
                  value={'O'}
                  onClick={(e) => typeOnChange(e)}
                  onKeyDown={loginPressed}
                />
                <label className="form-check-label" for="exampleRadios3">
                  Executive
                </label>
              </div>
            </div>
            <div style={{ paddingLeft: 20 }} className="mb-4">
              <h6 style={{ color: 'red', paddingTop: '1%' }}>{errors['type']}</h6>
            </div>
            <div className="form-group">
              <input
                onKeyDown={loginPressed}
                onChange={(event) => userOnChange(event.target.value)}
                margin="normal"
                className="form-control"
                placeholder="User Name"
              />
              <i className="fa fa-user icon"></i>
              <div><h6 style={{ color: 'red', paddingTop: '1%' }}>{errors['user']}</h6></div>
            </div>
            <div className="form-group">
              <input
                onKeyDown={loginPressed}
                type={isShowPassword ? "text" : "password"}
                onChange={(event) => passwordOnChange(event.target.value)}
                margin="normal" className="form-control"
                placeholder='Password'
              />
              {isShowPassword ?
                <i className="fa fa-eye icon1" onClick={() => setShowPassword(false)} style={{ cursor: 'pointer' }} /> :
                <i className="fa fa-eye-slash icon1" onClick={() => setShowPassword(true)} style={{ cursor: 'pointer' }} />
              }
              <div><h6 style={{ color: 'red', paddingTop: '1%' }}>{errors['password']}</h6></div>
            </div>
            <div className='row'>
              <div className="col-md-6">
                <button variant="contained" className="btn-signin" onClick={loginOnClick}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default SignIn;
