import React from 'react'

const Dashmidcomp = ({heading,active,inactive,ismobile}) => {
  return (
   <div 
   style={{
        width: ismobile
      }} 
   >
             
                        <div className='dashboardcomp1' 
                      style={{
                        height:"280px",
                        display:'flex',
                        flexDirection:'column',
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center',
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
                         marginTop:'3px'
                       }}>
                       </div>
                          <div 
                       style={{
                           display:'flex',
                            width:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        height:'90%',
                        marginTop:'20px'
                        // background:'blue'
                       }}
                       >    
                     <div 
                     style={{
                        display:'flex',
                        height:'100%',
                        // alignItems:'center'
                        justifyContent:'center',
                        width:'100%'
                     }}
                     >
                     <div 
                     style={{
                        width:'47%',
                        height:'100%',
                        // background:"blue"
                     }}
                     >
                        <div
                        style={{
                            fontSize:'24px',
                            color: 'rgb(40, 192, 96)',
                            fontWeight:'600',
                            textAlign:'center',
                            paddingTop:'30px'
                        }}
                        >
                            Active
                        </div>
                         <div 
                         style={{
                            fontSize:'59px',
                            fontWeight:'600',
                            textAlign:'center',
                            // color:'rgb(66, 66, 66)'
                            color: 'rgb(40, 192, 96)',
                           


                         }}
                         >
                            {active}
                         </div>
                     </div>
                     <div style={{
                        width:'10px',
                        height:'95%',
                        borderRadius:'5px',
                        margin:'auto',
                        marginTop:'5px',
                        background:'rgb(241, 238, 238)'
                     }}>

                     </div>
                      <div 
                     style={{
                        width:'47%',
                        height:'100%',
                        // background:"blue"
                     }}
                     >
                        <div
                        style={{
                            fontSize:'24px',
                            color: 'rgb(243, 104, 91)',
                            fontWeight:'600',
                            textAlign:'center',
                            paddingTop:'30px'
                        }}
                        >
                            Inactive
                        </div>
                         <div 
                         style={{
                            fontSize:'59px',
                            fontWeight:'600',
                            textAlign:'center',
                            // color:'rgb(66, 66, 66)'
                            color: 'rgb(243, 104, 91)',
                         }}
                         >
                           {inactive}
                         </div>
                     </div>

                     </div>
                     </div>       

                      </div>

   </div>
  )
}

export default Dashmidcomp