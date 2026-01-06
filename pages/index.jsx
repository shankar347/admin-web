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
  const [type1, setType] = useState('');
  const [isShowPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [superadmin, setsuperadmin] = useState('')
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
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
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, dispatch]);
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


  const adminOnChange = (user) => {
    setsuperadmin(user);
    let errorObj = { ...errors };
    errorObj['admin'] = '';
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

    if (user && password) {
      let result = await AuthRepository.login({ user_id: user, password });
      if (result && result.status === 200) {
        let user = jwtDecode(result.data);
        localStorage.setItem('usertoken', result.data);
        dispatch(loginSuccess({ auth: user, token: result.data.jwt_token }));
        notification.success({
          message: "Welcome Back!"
        });
        window.location.href = "/dashboard";
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

      setErrors(errorObj);
    }


  }

  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      if (!decoded.exp) return true;
      return decoded.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  };

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && localAuth.isLoggedIn) {
      let stored = localStorage.getItem('usertoken');

      if (stored && !isTokenExpired(stored)) {
        window.location.href = "/dashboard";
      } else {
        localStorage.removeItem("usertoken");
      }
    }
  }, [auth, token, dispatch]);


  useEffect(() => {
    if (auth?.color) {
      document.documentElement.style.setProperty('--jl-primary', auth.color);
    }
  }, [auth?.color]);

  return (
    <>
      <div className="loginscreen">
        <div className="login-card" >
          <div className="text-center login-logo">
            <img src={'/favicon.png'} alt="BA"
              className="text-center"
              title="BA" style={{
                width: '100px', height: '100px',
                borderRadius: '50px'
              }} />
          </div>


          <div className='form-div'>
            {/* <h2 className='text-center pb-4' style={{
              color: 'rgba(255, 230, 0, 0.833)'
            }}>Login</h2> */}
            <div className='text-center pb-4' style={{
              color: 'rgba(255, 230, 0, 0.833)',
              fontSize: '21px'
            }}>
              Sign in to access your account
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

            <div className="form-group"
            >
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    color: "rgba(255, 230, 0, 0.833)",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = "underline";
                    e.target.style.color = "rgba(255, 255, 100, 0.95)"; // Slightly brighter yellow
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = "none";
                    e.target.style.color = "rgba(255, 230, 0, 0.833)";
                  }}
                >
                  Forget password
                </span>
              </div>
            </div>



            <div className='row'>
              <div className="col-md-6" >
                <button variant="contained"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  style={{
                    width: isMobile ? '100%' : '320px',
                    height: "40px",
                    borderRadius: "50px",
                    outline: "none",
                    color: "white",
                    background: "linear-gradient(135deg, rgba(255, 223, 0, 0.7) 15%, rgba(138, 43, 226, 0.8) 85%)",
                    boxShadow: hover
                      ? "0 4px 12px rgba(0, 0, 0, 0.2)"
                      : "0 2px 6px rgba(0, 0, 0, 0.1)",
                    transform: hover ? "scale(1.03)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "15px",
                    margin: 'auto',
                    letterSpacing: "0.5px",
                  }} onClick={loginOnClick}>
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
