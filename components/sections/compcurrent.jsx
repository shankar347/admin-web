import React from 'react'

const Compcurrent = ({srcount,crcount,hcount,vcount,
  pcount,tcount,troomcount,redfrhstcount,comphstcount,
  earstage,latestage
}) => {
  
  // console.log(pcount)

  
    
  return (
    <div className='' 
    style={{width:'100%'}} >
              
                      <div className='dashmaincomp'  >
                       <div 
                       style={{
                        fontSize:'16px',
                        fontWeight:'600',
                        color:'rgb(232, 61, 9)',
                        textAlign:'center'
                       }}
                       >
                        Summary Report
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
                        
                       <div style={{
                        paddingTop:'25px',
                        paddingLeft:'10px',
                        display:'flex',
                        flexDirection:'column',
                        gap:'12px',
                    
                        alignItems:'center'
                       }}>
                      <Stagecompt name={' Rooms in Spawn Run '} 
                      value={srcount} />
                      <Stagecompt name={' Rooms in Case Run '} 
                      value={crcount} />
                       <Stagecompt name={' Rooms in Venting '} 
                      value={vcount} />
                      <Stagecompt name={' Rooms in Pinning'} 
                      value={pcount} />
                     <Stagecompt name={' Rooms in Harvest'} 
                      value={hcount} />
                
                      </div> 
                      {/* <div style={{
                        width:'80%',
                        height:'1.5px',
                        background:'rgb(213, 211, 211)',
                        margin:'auto',
                        marginBlock:'5px'
                      }}>

                      </div> */}
                   <div 
                      style={{
                        display:'flex',  
                        paddingTop:"20px",
                        fontSize:'16px',
                        width:'100%',
                        alignItems:'baseline',
                        gap:'5px',
                      }}>
       <i
        className=" fas fa-store"
        style={{ color: "green", fontSize: "17px" }}
      ></i>
                          <div  style={{
                            paddingLeft:'5px'
                            //  width:'210px'
                          }}>
                        Rooms used for mushroom stages
                       </div>
                      </div>
                    <div style={{fontWeight:'600',
                        textAlign:'center',
                        fontSize:'15px'
                    }}>
                      {tcount === 0 ? 'Nil' :tcount} Rooms
                    </div>  
                         <div 
                      style={{
                        display:'flex',
                        paddingTop:"15px",
                        fontSize:'16px',
                        width:'100%',
                        alignItems:'baseline',
                        // marginInline:'10px',
                        gap:'5px',
                        // paddingTop:'5px'
                      }}>
       <i
        className="fa fa-door-open"
        style={{ color: "green", fontSize: "16px" }}
      ></i>
                          <div  style={{
                            paddingLeft:'5px'
                            //  width:'210px'
                          }}>
                         Rooms Remaining
                       </div>
                      </div>
                    <div 
                    style={{fontWeight:'600',
                        fontSize:'15px',
                        textAlign:'center'
                    }}>
                      {troomcount === 0 ? 'Nil' : 
                      troomcount - tcount } Rooms
                    </div>  
                   
                   <div style={{
                    fontSize:'18px',
                    color:'rgb(21, 120, 58)',
                    fontWeight:'600',
                    paddingTop:'10px',
                    // paddingBottom:'10px'
                   }}>
                    Early process
                   </div>
                   <div style={{
                      display:'flex',
                      flexDirection:'column',
                       minHeight:'125px',
                      paddingBottom:'10px'
                    }}>
                    { 
                    earstage?.length === 0 ? 
                    <div style={{
                      height:'125px',
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
                      earstage.slice(0,4).map((flow)=>(
                        <div style={{
                          display:'flex',
                          gap:'10px',
                          paddingTop:'7px',
                          alignItems:'baseline',
                          fontSize: "16px" 
                        }}>
                           <i
        className="fa fa-warehouse"
        style={{ color: "green", fontSize: "16px" }}
      ></i>
                         <span style={{fontSize: "16px" }}> Room <strong>{ flow?.roomname}</strong> from  <strong> {flow?.flow} </strong> to <strong>{flow?.currentflow}</strong> </span>
                        </div>
                      ))
                    }
</div>
                     <div style={{
                        color:'rgb(209, 151, 28)',
                    fontSize:'18px',
                    fontWeight:'600',
                    paddingTop:'10px'
                   }}>
                    Delayed Process
                   </div>   
                    
                    <div style={{
                      display:'flex',
                      flexDirection:'column',
                      paddingBottom:'10px',
                      minHeight:'125px'
                    }}>
                     { 
                    latestage?.length === 0 ? 
                    <div style={{
                      // height:'100%',
                        height:'125px',
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
                     latestage.slice(0,4).map((flow)=>(
                        <div style={{
                          display:'flex',
                          gap:'10px',
                          paddingTop:'7px',
                          alignItems:'baseline',
                          fontSize: "16px" 
                        }}>
                           <i
        className="fa fa-warehouse"
        style={{ color: "rgb(211, 150, 19)", fontSize: "16px" }}
      ></i>
                         <span style={{fontSize: "16px" }}> Room <strong>{ flow?.roomname}</strong> from  <strong> {flow?.flow} </strong> to <strong>{flow?.currentflow}</strong> </span>
                        </div>
                      ))
                    }

                    </div>

       </div>
       
            <div>
            </div>
    </div>
  )
}

export default Compcurrent


const Stagecompt=({name,value})=>{
  return     <div 
                      style={{
                        display:'flex',
                        gap:'3px',
                        fontSize:'16px',
                        width:'197px'
                      }}>
                          <div  style={{
                             width:'160px'
                          }}>
                         {name} 
                       </div>
                       <div 
                       style={{
                        fontWeight:'600'
                       }}
                       >
                       - {value === 0 ? 'Nil' : value  }
                       </div>
                      </div>
}