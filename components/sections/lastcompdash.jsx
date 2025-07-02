import React from 'react'

const Lastcompdash = ({heading,data,ismobile}) => {
  return (
     <div 
   style={{
        width:ismobile
      }} 
   >
                 
                        <div className='dashboardcomp1' 
                      style={{
                        height:"280px",
                        display:'flex',
                        flexDirection:'column',
                         justifyContent: 'flex-start',
          padding: '12px',
          boxSizing: 'border-box',
                        width:'100%',
                        // justifyContent:'center',
                        // alignItems:'center',
                      }}
                      >
                        <div 
                       style={{
                        fontSize:'16px',
                        fontWeight:'600',
                        width:'100%',
                        color:'rgb(232, 61, 9)',
                        textAlign:'center'
                       }}
                       >
                        {heading}
                       </div>   
                          <div 
                       style={{
                        width:'30px',
                        height:'5px',
                        backgroundColor:'rgb(36, 144, 76)',
                        borderRadius:'5px',
                        // alignSelf:'center',
                        // textAlign:'center',
                         margin:'auto',
                         marginTop:'3px',
                         marginBottom:'20px'

                       }}>
                       </div>
                        { 
                    data?.length === 0 ? 
                    <div style={{
                      height:'80%',
                      display:'flex',
                      flexDirection:'column',
                      alignItems:'center',
                      justifyContent:'center'
                    }}>
  <i
        className="fa fa-warehouse"
        style={{ color: "gray", fontSize: "16px" }}
      ></i>
                      <div style={{fontSize:'17px'}}>
No flow is changed 
                      </div>
                    </div>
                    : 
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        height:'85%',
                        overflow:'auto',
                        alignItems:'start',
                        justifyContent:'start'   
                        // background:'blue'
                    }} 
                    className='custom-scroll'>
                       { data.map((flow)=>(
                        <div style={{
                          display:'flex',
                          gap:'10px',
                          paddingTop:'7px',
                          alignItems:'baseline',
                          fontSize: "16px" ,
                        paddingLeft:'30px',
                        // marginBottom:'20px'
                        }}>
                           <i
        className="fa fa-warehouse"
        style={{ color: "green", fontSize: "16px" }}
      ></i>
                         <span style={{fontSize: "16px" }}> Room <strong>{ flow?.roomname}</strong> from  <strong> {flow?.flow} </strong> to <strong>{flow?.currentflow}</strong> </span>
                        </div>
                      )) }
                    </div>
                    }
                      </div>

   </div>
  )
}

export default Lastcompdash