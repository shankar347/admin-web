import React, { useEffect, useState } from 'react';
import { Search, Users, MapPin, Mail, Phone, Eye, EyeOff, Box } from 'lucide-react';
import { Spin } from 'antd';
import HeaderDashboard from '../../components/header/HeaderDashboard'
import Sidebar from '~/components/sections/sidebar';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveridersrequest, getAllridersRequest } from '~/store/drivers/action';
import { getUserAllRoutesRequest } from '~/store/orders/action';

// User Table Component
const TableUserReport = ({ users, searchTerm }) => {
  const [showPasswords, setShowPasswords] = useState({});
  const [loader, setLoader] = useState(false);
  const [isActive, setActive] = useState(false);
  const { auth } = useSelector(({ auth }) => auth);


  const toggleClass = () => setActive(!isActive);
  const filteredUsers = users?.filter(user =>
    user.user_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.branch.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const togglePasswordVisibility = (userId) => {
    setShowPasswords(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };
  useEffect(() => {
    if (auth?.color) {
      document.documentElement.style.setProperty('--jl-primary', auth.color);
    }
  }, [auth?.color]);


  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden'
    }}>
      <div style={{
        background: 'linear-gradient(to right, #2563EB, #7C3AED)',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users style={{ height: '24px', width: '24px', color: 'white' }} />
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>Order Delivery Agents</h2>
          </div>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '4px 12px',
            borderRadius: '9999px'
          }}>
            <span style={{ color: 'white', fontWeight: '500' }}>
              {filteredUsers.length} {filteredUsers.length === 1 ? 'User' : 'Users'}
            </span>
          </div>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#F9FAFB' }}>
            <tr>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#4B5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                S.No
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#4B5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Name
              </th>

              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#4B5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Box style={{ height: '16px', width: '16px' }} />
                  <span>Branches</span>
                </div>
              </th>

              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#4B5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Phone style={{ height: '16px', width: '16px' }} />
                  <span>Phone</span>
                </div>
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#4B5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin style={{ height: '16px', width: '16px' }} />
                  <span>Address</span>
                </div>
              </th>
              <th style={{
                padding: '16px 24px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#4B5563',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>View Driver</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'white' }}>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ padding: '48px 24px', textAlign: 'center' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}>
                    <Users style={{ height: '48px', width: '48px', color: '#D1D5DB' }} />
                    <p style={{ color: '#6B7280', fontSize: '18px', margin: 0 }}>No users found</p>
                    <p style={{ color: '#9CA3AF', fontSize: '14px', margin: 0 }}>Try adjusting your search criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr
                  key={user._id}
                  style={{
                    transition: 'background-color 0.15s',
                    borderBottom: '1px solid #E5E7EB'
                  }}
                  onMouseEnter={(e) => e.target.parentNode.style.backgroundColor = '#F9FAFB'}
                  onMouseLeave={(e) => e.target.parentNode.style.backgroundColor = 'white'}
                >
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      background: 'linear-gradient(to bottom right, #3B82F6, #8B5CF6)',
                      borderRadius: '50%',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}>
                      {index + 1}
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px', whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(to bottom right, #10B981, #3B82F6)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {user.user_id.charAt(0).toUpperCase()}
                      </div>
                      <div style={{ marginLeft: '12px' }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#111827',
                          textTransform: 'capitalize'
                        }}>
                          {user.user_id}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6B7280' }}>
                          ID: {user._id.slice(-6)}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ maxWidth: '192px' }}>
                      {user.branch.name}
                    </div>
                  </td>

                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    color: '#6B7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{user.phoneno} </span>
                    </div>
                  </td>
                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    color: '#6B7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

                      <span>  {user?.address || "No address"} </span>
                    </div>
                  </td>
                  <td style={{
                    padding: '16px 24px',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    color: '#6B7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Link href={`/agentroutes/${user?._id}/`} >
                        <button style={{
                          width: '140px',
                          height: '40px',
                          background: 'linear-gradient(to bottom right, #10B981, #3B82F6)',
                          borderRadius: '5%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '19px',
                          fontWeight: 'bold'
                        }}

                        >View</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filteredUsers.length > 0 && (
        <div style={{ backgroundColor: '#F9FAFB', padding: '12px 24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: '#4B5563'
          }}>
            <span>
              Showing {filteredUsers.length} of {users?.length || 0} users
            </span>
            <span>
              Total branches: {filteredUsers.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Dashboard Component
const UserDashboard = () => {
  const [loader, setLoader] = useState(false);
  const [isActive, setActive] = useState(false);
  // const [allRiders, setAllRiders] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const allRiders = useSelector((state) => state.drivers.allRiders)
  const dispatch = useDispatch()
  const toggleClass = () => setActive(!isActive);
  console.log(allRiders, '')
  const { auth } = useSelector(({ auth }) => auth);


  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('persist:MushroomAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};
    if (localAuth && !localAuth.isLoggedIn) {
      window.location.href = "/";
    }
  }, [auth]);



  useEffect(() => {

    dispatch(getAllridersRequest())

  }, [dispatch])

  console.log(allRiders, 'af')
  return (
    <div>
      <Spin spinning={loader} tip={'Loading...'}>
        <HeaderDashboard />
        <div className="dashboard-container mt-5 pt-2" >
          <div id="sidebar" className={isActive ? 'slide-show' : null}>
            <Sidebar active={isActive} page={'dashboard'} />
            <div className="slide-toggle" onClick={toggleClass}>
              <span className={'qc-arrow'}>
                <i
                  className="fas fa-angle-double-left"
                  style={{
                    color: auth.color,
                  }}
                ></i>
              </span>
            </div>
          </div>
          <div
            className="content content-width mt-3"
            id="style-2"
            style={{
              border: `2px solid ${auth.color}`,
              overflowY: 'auto', // enable scrollbar
              // maxHeight: '80vh', // example height
            }}
          >
            {/* Dynamic scrollbar color style */}
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
            <div style={{ minHeight: '100vh', backgroundColor: '#F3F4F6' }}>
              {/* Header */}
              <div style={{
                // backgroundColor: 'white', 
                // boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
                // borderBottom: '1px solid #E5E7EB' 
              }}>
                <div style={{
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '0 16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '16px 0'
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      width: '100%',

                    }}>

                      <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#111827',
                        margin: 0,
                        width: '100%',
                        flex: 1,
                        flexGrow: 1,
                        textAlign: 'center'
                      }}>
                        Delivery guys
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '32px 16px'
              }}>
                {/* Search Bar */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ position: 'relative', maxWidth: '384px' }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      paddingLeft: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      pointerEvents: 'none'
                    }}>
                      <Search style={{ height: '20px', width: '20px', color: '#9CA3AF' }} />
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search users by name or branch..."
                      style={{
                        display: 'block',
                        width: '100%',
                        paddingLeft: '40px',
                        paddingRight: '12px',
                        paddingTop: '12px',
                        paddingBottom: '12px',
                        border: '1px solid #D1D5DB',
                        borderRadius: '8px',
                        fontSize: '16px',
                        backgroundColor: 'white',
                        outline: 'none',
                        transition: 'all 0.15s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#D1D5DB';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Loading State */}
                {loader && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '48px 0'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      border: '2px solid #E5E7EB',
                      borderTop: '2px solid #2563EB',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    <span style={{
                      marginLeft: '12px',
                      color: '#4B5563'
                    }}>
                      Loading users...
                    </span>
                    <style>
                      {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
                    </style>
                  </div>
                )}

                {/* Table */}
                {!loader && (
                  <TableUserReport users={allRiders} searchTerm={searchTerm} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </div>

  );
};

export default UserDashboard;