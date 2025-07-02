import React from 'react'

const Smallcompt = ({stagename,stagerooms,ismobile
  ,height='215px'
}) => {
//  console.log(stagerooms)
  return (
      <div  
      style={{
        width: ismobile,
        // ma:'20px'
      }} 
      >
                     
                      <div className='dashboardcomp1' 
                      style={{
                        height:height
                      }}>
                      <div 
                       style={{
                        fontSize:'16px',
                        fontWeight:'600',
                        color:'rgb(232, 61, 9)',
                        textAlign:'center'
                       }}
                       >
                        {stagename}
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
                        
                        <div className='custom-scroll'
                        style={{
                          display:'flex',
                          flexWrap:'wrap',
                          paddingTop:'20px',
                          gap:'15px',
                          height:'70%',
                          overflow:'auto'
                        }} >
                          {
                          stagerooms?.length === 0 ? 
                          <div style={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            margin:'auto'
                          }} >
                              <i
        className="fa fa-warehouse"
        style={{ color: "gray", fontSize: "20px" }}
      ></i>
                            <div style={{
                                 fontSize:'16px' 
                            }
                            }>
                               No Rooms
                            </div>
                          </div>
                          : 
                          //  new Array(16)?.fill('5').
                           stagerooms.
                          map((room) => (
                                 <div style={{
                              display:'flex',
                              flexDirection:'column',
                              // background:'blue',
                              gap:'5px',
                              alignItems:'center',
                              height:'45px'
                             }}>
                          <i
        className="fa fa-warehouse"
        style={{ color: "green", fontSize: "18px" }}
      ></i>
                           <div 
                           style={{
                            fontWeight:'600'
                           }}>
                             {room}
                           </div>
                         </div>
                            ))
                          }

                        </div>
                         
                        <div className=''
                        style={{
                          display:'flex',
                          gap:'5px',
                          alignItems:'baseline',
                          fontSize:'15px',
                          paddingTop:'10px'
                        }}>
                        <div>
                          Total Rooms:
                        </div>
                        <strong>
                          {stagerooms?.length === 0 ? 'Nil' : stagerooms?.length}
                        </strong>
                        </div> 

                      </div> 
    </div>
  )
}


export default Smallcompt