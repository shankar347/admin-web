import React from 'react'

const Dashmidlastcomp = ({heading,readyForCaseRun,
    readyForHarvest,
    readyForPinning,
    raadyforventing,
    ismobile
}) => {
  
     const statusItems = [
    {
      label: 'Rooms ready for Case Run',
      value: readyForCaseRun,
      icon: 'fa-box-open',
    },
    {
      label: 'Rooms ready for Venting',
      value: raadyforventing ,
      icon: 'fa-thumbtack',
    },
    {
      label: 'Rooms ready for Pinning',
      value: readyForPinning,
      icon: 'fa-seedling',
    },
    {
      label: 'Rooms ready for Harvest',
      value: readyForHarvest,
      icon: 'fa-leaf',
    },
  ];
  
    return (
      <div 
   style={{
        width: ismobile
      }} 
   >
                 
                        <div className='dashboardcomp1' 
                      style={{
                        minHeight:"280px",
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
                         marginBottom:'30px'
                       }}>
                       </div>
  {statusItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              fontSize: '16px',
              alignItems: 'center',
              padding:'10px',
              // marginTop:'-20px',
              paddingInline:'25px'
            }}
          >
            <i
              className={`fa ${item.icon}`}
              style={{
                color: 'green',
                fontSize: '18px',
                marginRight: '10px',
                width:'20px'
              }}
            ></i>
            <span>
              <strong
              style={{
                width:'50px'
              }}
              >
                {item.value === 0 ? 'Nil' : item.value}</strong> {item.label}
            </span>
          </div>
        ))}
                      </div>

   </div>
  )
}

export default Dashmidlastcomp