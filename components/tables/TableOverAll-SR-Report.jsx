import React, {  useState } from 'react';

const TableOverAllSRReport = ({ reports}) => {


  const [colorId] = useState(0)
 

  let colors = [
    "#1e7e34"
]

  return (
    <div className="row mt-5 px-4">
      <table class="table"  >{
        reports && reports.map((c, index) => {
          return (
            <>
              <thead key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SpawnRun  Stage</th>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">Room No</th>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">total Room</th>

                </tr>
              </thead>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR0</th>
                  <td >{c.sr0&&c.sr0.length ? c.sr0.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td >{c.sr0&&c.sr0.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR1</th>
                  <td>{c.sr1.length ? c.sr1.map(({ room_name }) => <>{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr1.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR2</th>
                  <td>{c.sr2.length ? c.sr2.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr2.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR3</th>
                  <td>{c.sr3.length ? c.sr3.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr3.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR4</th>
                  <td>{c.sr4.length ? c.sr4.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr4.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR5</th>
                  <td>{c.sr5.length ? c.sr5.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr5.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR6</th>
                  <td>{c.sr6.length ? c.sr6.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr6.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR7</th>
                  <td>{c.sr7.length ? c.sr7.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr7.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR8</th>
                  <td>{c.sr8.length ? c.sr8.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr8.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR9</th>
                  <td>{c.sr9.length ? c.sr9.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr9.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR10</th>
                  <td>{c.sr10.length ? c.sr10.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr10.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR11</th>
                  <td>{c.sr11.length ? c.sr11.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr11.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR12</th>
                  <td>{c.sr12.length ? c.sr12.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr12.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR13</th>
                  <td>{c.sr13.length ? c.sr13.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr13.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">SR14</th>
                  <td>{c.sr14.length ? c.sr14.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.sr14.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col"> </th>
                  <td>Total Rooms:</td>
                  <td> {c.totalCount}</td>
                </tr>
              </tbody>
             
            </>)
        })}


      </table>
    </div>

  );
};


export default TableOverAllSRReport;
