import React, { useEffect, useRef, useState } from 'react';
import { LuNotebookPen } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { apiUrl } from '~/repositories/Repository';

const Sidebarchart = ({ userconversation ,setuserconversation}) => {
  const [ismenuid, setismenuid] = useState(null);
  const [menuselect, setismenuselect] = useState(
    null
  );
  const menuRef = useRef(null);
  
    useEffect(() => {
    const storedMenu = localStorage.getItem('menu');
    if (storedMenu) {
      setismenuselect(JSON.parse(storedMenu));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setismenuid(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleconvchange = (convidvalue) => {
    localStorage.removeItem('convid');
    localStorage.setItem('convid', JSON.stringify({ _id: convidvalue }));
    window.location.reload();
  };

  const createnewchat = async () => {
    // console.log('hello')
    try {
      const res = await fetch(`${apiUrl}/aichat/create-conv`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
           'authorization':`Bearer ${localStorage.getItem('usertoken')}`
        },
        body: JSON.stringify({
          title: 'New chat'
        })
      });
      const data = await res.json();  
      if (data?.err) {
        console.log(data?.err);
        return;
      }
      console.log('data',data)
      localStorage.setItem('convid', JSON.stringify({ _id: data?._id }));
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const deletechat = async (convid) => {
    try {
      console.log('hello')
      const res = await fetch(`${apiUrl}/aichat/remove-conv`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' ,
          'authorization':`Bearer ${localStorage.getItem('usertoken')}`
        },
        body: JSON.stringify({ id: convid })
      });
      const data = await res.json();
      if (data?.err) {
        console.log(data?.err);
      }
      setuserconversation((prev)=>prev.filter((c)=>c?._id !== convid))
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
       <div style={{
      textAlign: 'center',
      width: '20%',
      height: '86.5vh',
      backgroundColor: 'rgb(58, 202, 111)'
    }}>
      {/* New Chat */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          paddingLeft: '1rem',
          alignItems: 'baseline',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#86efac')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
        onClick={createnewchat}
      >
        <LuNotebookPen size={17} color="red" />
        <div style={{
          fontWeight: 'bold',
          color: 'rgb(220 38 38)',
          fontSize: '1rem'
        }}>
          New chat
        </div>
      </div>

      {/* User Chats */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          paddingLeft: '1rem',
          alignItems: 'baseline',
          cursor: 'pointer'
        }}
        // onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#86efac')}
        // onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
      >
        <RiUserLine size={18} color="red" />
        <div 
        style={{
          fontWeight: 'bold',
          color: 'rgb(220 38 38)',
          fontSize: '1rem'
        }}>
          User chats
        </div>
      </div>

      {/* Chat List */}
      <div style={{ flexGrow: 1, overflowY: 'auto' ,
        height:'71vh'
      }} 
      className='custom-scroll1'>
        { userconversation?.length !== 0 ? userconversation?.map((conv) => (
          <div
            key={conv?._id}
            style={{
              display: 'flex',
              gap: '0.5rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              paddingLeft: '1rem',
              paddingRight: '0.5rem',
              marginTop:'2px',
              // alignItems: 'left',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
              backgroundColor: menuselect?.menu === conv?._id ? '#86efac' : ''
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#86efac')}
            onMouseOut={(e) => {
              if (menuselect?.menu !== conv?._id)
                e.currentTarget.style.backgroundColor = '';
            }}
          >
            <div
              onClick={() => {
                localStorage.setItem('menu', JSON.stringify({ menu: conv?._id }));
                setismenuselect({ menu: conv?._id });
                handleconvchange(conv?._id);
              }}
              // style={}
            >
              {conv?.title?.length > 20 ? conv?.title.substring(0,20) + '..' : conv?.title}
            </div>

            <div
              style={{
                paddingTop: '0.25rem',
                cursor: 'pointer',
                position: 'relative'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setismenuid(conv?._id);
              }}
            >
              <SlOptions />
            </div>

            {ismenuid === conv?._id && (
              <div
                ref={menuRef}
                className="chat-options-menu"
                style={{
                  width: '7rem',
                  backgroundColor: '#bbf7d0',
                  position: 'absolute',
                  top: '2.5rem',
                  right: '0.25rem',
                  borderRadius: '0.5rem',
                  zIndex: 50,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    textAlign: 'center',
                    borderTopLeftRadius: '0.5rem',
                    borderTopRightRadius: '0.5rem'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#dcfce7')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();        
                localStorage.setItem('menu', JSON.stringify({ menu: conv?._id }));
                setismenuselect({ menu: conv?._id });
                handleconvchange(conv?._id);
            
                  }}
                >
                  Open
                </div>
                <div
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    textAlign: 'center',
                    color: 'red',
                    borderBottomLeftRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#dcfce7')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    deletechat(conv?._id);
                    setismenuid(null);
                  }}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        )) 
        :    <div>
          <div style={{
            fontSize: '1rem',
            width: '100%',
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            No chats available
          </div>
          <div
            style={{
              fontSize: '0.875rem',
              cursor: 'pointer',
              backgroundColor: '#f87171',
              width: '7rem',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '500',
              margin: '1rem auto',
              borderRadius: '9999px',
              color: 'white'
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fca5a5')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f87171')}
            onClick={createnewchat}
          >
            Create chat
          </div>
        </div>
      }
      </div>

      {/* No Chats */}
   
     
     
    </div>
  );
};

export default Sidebarchart;
