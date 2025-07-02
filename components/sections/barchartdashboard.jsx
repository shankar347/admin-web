import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ResponsiveContainer } from 'recharts';

const Chatcompdashbar = ({ srrooms,
  ismobile, crrooms, ventigrooms, pinningrooms, harvstrooms }) => {
  const data = [
    { name: 'Spawn Run', value: srrooms.length, rooms: srrooms },
    { name: 'Case Run', value: crrooms.length, rooms: crrooms },
    { name: 'Venting', value: ventigrooms.length, rooms: ventigrooms },
    { name: 'Pinning', value: pinningrooms.length, rooms: pinningrooms },
    { name: 'Harvest', value: harvstrooms.length, rooms: harvstrooms },
  ].filter(stage => stage.value > 0); // Filter out 0 values

  const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#845EC2'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { payload: item } = payload[0];
      return (
        <div style={{ background: '#fff', padding: '8px', border: '1px solid #ccc', maxWidth: '250px' }}>
          <strong>{item.name}</strong>
          <p><strong>Rooms:</strong> {item.rooms.join(', ')}</p>
          <p><strong>Total:</strong> {item.value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{
      width:'100%'
    }}>
     
      <div className='dashboardcomp1'
         style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            width:'100%'
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
          <BarChart
          style={{
          
          }}
          data={data} width={ismobile ? 200    :400  } 
          height={300}
          margin={'auto'}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} label={{
    value: 'No of Rooms',
    angle: -90,
    // position: 'insideLeft',
    style: { textAnchor: 'middle' }
  }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default Chatcompdashbar;