import React, { useState } from 'react'
import { apiUrl } from '~/repositories/Repository'

const Promptcomp = ({isopen,prompttype,setisopen,setprompttype,
    setpromptextquery,
    setpromptextresponse
}) => {
  
    const [prompt,setprompt]=useState('')
   

    const createprompt=async()=>{
            try{
                 
               if (!prompt || prompt === '')
               {
                return alert('Prompt should be given to update')
               }
    
                const res=await fetch(`${apiUrl}/aichat/aiprompt`,{
                  method:'POST',
                                 headers:{
                           'content-type':'application/json',
                           'authorization':`Bearer ${localStorage.getItem('usertoken')}`
                         },
                         body:JSON.stringify({
                          name:prompttype,
                          prompt:prompt
                         })
                      })
                      const data=await res.json()
                  if (data?.error)
                    {
                      alert(data?.error)
                    }    
                    setisopen(false)
                    setprompt('')
                    setprompttype(null)
                    if (prompttype === 'layer1')
                    {
                        setpromptextquery(data?.prompt)
                    }
                    else
                    {
                        setpromptextresponse(data?.prompt)
                    }
                    // window.location.reload() 
            }
            catch(err)
            {
              console.log(err)
            }
        } 
 
    
  return (
   <>
   {
    isopen &&  <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ dark transparent background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000, // keep it on top
        }}
      >
    
    <div 
    style={{
        position:'absolute',
        width:'40%',
        height:'450px',
        color:'gray',
         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor:'rgb(237, 237, 237)',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        borderRadius:'5px'
    }}
    >
   <div style={{
           color: 'rgb(44, 149, 82)',
                    fontSize:'17px',
                    fontWeight:'600',
                    padding:'5px 10px',
                    paddingTop:'20px'
   }}>
     {prompttype} prompt for llama model  
   </div>
       <div style={{
                      width:'100%',
                      display:'flex',
                      flexDirection:'column',
                      alignItems:'center'
                    }}>
                      <div style={{
                         width:'95%',
                      display:'flex',
                      flexDirection:'column',
                      }}>
                         <textarea name="" id=""
                    style={{
                      width:'100%',
                      margin:'auto',
                      height:'310px',
                      padding:'5px',
                      marginTop:'10px',
                      outline:'none',
                      border:'2px solid',
                      borderRadius:'10px',
                      resize:'none',
                      borderColor:'rgb(44, 149, 82)'
                     }}
                     className='custom-scroll'
                     value={prompt}
                     onChange={(e)=>setprompt(e.target.value)}
                     ></textarea> 
                    <div
                    style={{
                    display:'flex' , 
                    alignSelf:'end',
                    marginTop:'2px'
                    }}
                    >
                      <button 
                     style={{
                      width:'142px',
                      height:'50px',
                      outline:'none',
                      fontWeight:'600',
                      fontSize:'17px',
                      marginTop:'4px',
                      marginRight:'5px',
                      border:'none',
                      backgroundColor:'rgb(219, 63, 63)',
                      color:'white',
                      borderRadius:'10px',
                      cursor:'pointer'
                     }} 
                     onClick={()=>{
                      setisopen(false)
                      setprompttype(null)
                     }}
                     >
                      Cancel
                     </button>
                      <button 
                     style={{
                      width:'142px',
                      height:'50px',
                      outline:'none',
                      fontWeight:'600',
                      fontSize:'17px',
                      marginTop:'4px',
                      marginRight:'5px',
                      alignSelf:'end',
                      border:'none',
                      backgroundColor:'rgb(28, 108, 158)',
                      color:'white',
                      borderRadius:'5px',
                      cursor:'pointer'
                     }} 
                     onClick={createprompt}
                     >
                      Create
                     </button>

                    </div>
                      </div>
                    </div>
    </div>
    </div>
   }
   </>
  )
}

export default Promptcomp