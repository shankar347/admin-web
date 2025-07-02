import React, { useEffect, useRef } from 'react';

import  dynamic from 'next/dynamic'

const MarkdownViewer=dynamic(()=>import('./reactmarkdown'),{
  ssr:false
})


const Mainpagechart = ({ handlerequest, input, setinput, userchats, loading }) => {
 
      const chatEndRef = useRef(null);
      useEffect(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [userchats]);
  
  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      {/* Chat messages container */}
      <div
        style={{
          height: '75vh',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          overflowX: 'auto',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
        className='custom-scroll'

      >
        {userchats?.length !== 0 ? (
          userchats?.map((chat, i) => (
            <div
              key={i}
              style={{
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                alignSelf: chat?.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: chat?.sender === 'user' ? '80%' : '99%',
                backgroundColor: chat?.sender === 'user' ? '#22c55e' : 'transparent',
              }}
            >
              <div className='markdown-body '>
              <MarkdownViewer  content={chat?.text} />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div
              style={{
                paddingTop: '15rem',
                textAlign: 'center',
                fontSize: '1.25rem',
                fontWeight: '500',
                color: '#dc2626',
              }}
            >
              Welcome! to mushroom app
            </div>
            <div
              style={{
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Type to create a chat
            </div>
          </div>
        )}
          <div ref={chatEndRef} />
      </div>

      {/* Input and send button */}
      <div
        style={{
          border: '2px solid #16a34a',
          borderRadius:'10px',
          margin: '0.5rem',
          display: 'flex',
          height: '3.5rem',
          position: 'relative',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
          maxWidth: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <textarea
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyDown={(e)=>{
            if (e.key === 'Enter' && !e.shiftKey )
              {
                e.preventDefault()
                handlerequest()
              } 
          }}
          placeholder="Ask about mushroom data"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: '0.5rem',
            paddingTop: '0.25rem',
            border: 'none',
            outline: 'none',
            resize: 'none',
            fontSize: '1rem',
            borderRadius:'10px'
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.25rem',
            width: '2rem',
            height: '2rem',
            backgroundColor: '#22c55e',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {loading ? (
            <div
              style={{
                width: '1rem',
                height: '1rem',
                border: '2px solid #d1d5db',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          ) : (
            <i
              className="fa fa-arrow-up"
              style={{ color: 'green', fontSize: '1rem' }}
              onClick={handlerequest}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mainpagechart;
