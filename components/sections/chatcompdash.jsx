import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Chatcompdash = ({srrooms,
  ismobile,
  crrooms,ventigrooms,pinningrooms,harvstrooms}) => {
  console.log(harvstrooms)
   let data = [
    { name: 'Spawn Run', value: srrooms.length, rooms: srrooms },
    { name: 'Case Run', value: crrooms.length, rooms: crrooms },
    { name: 'Venting', value: ventigrooms.length, rooms: ventigrooms },
    { name: 'Pinning', value: pinningrooms.length, rooms: pinningrooms },
    { name: 'Harvest', value: harvstrooms.length, rooms: harvstrooms },
  ];
 
  data=data.filter( stage => stage.value > 0 )

  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#845EC2'];

  const CustomTooltip = ({ active, payload }) => {
 if (active && payload && payload.length) {
    const { payload: item } = payload[0];
    return (
      <div style={{ background: '#fff', padding: '8px', border: '1px solid #ccc', maxWidth: '250px' }}>
        <strong>Rooms:</strong>
        <p>{item.rooms.join(', ')}</p>
      </div>
    );
  }
  return null;
   
  };
  const renderCustomLabel = ({ name, value, percent }) => {
  const percentage = (percent * 100).toFixed(0);
  return `${name} (${percentage}%)`;
};
  return (
     <div className=''
     style={{
        // width:"90%"
     }}
     >

         <div className='dashboardcomp1'
         style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
         }} >
          <div 
                       style={{
                        fontSize:'16px',
                        fontWeight:'600',
                        color:'rgb(232, 61, 9)',
                        textAlign:'center'
                       }}
                       >
                        Stage - wise process
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
                           marginBottom:'15px'
                       }}>
                       </div>
             <PieChart width={ismobile ? 350 : 500} height={300}>
       <Pie
    data={data}
    cx="50%"
    cy="50%"
    labelLine={false}
    outerRadius={ismobile ? 70 : 100}
    dataKey="value"
    nameKey="name"
    label={renderCustomLabel}
  >
    {data.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip content={<CustomTooltip />} />
  {/* <Legend /> */}
      </PieChart>
         </div> 

     </div>
  )
}

export default Chatcompdash