import React, {  useState } from 'react';

const TableOverAllVentingReport = ({ reports}) => {


  const [colorId] = useState(0)
 

  let colors = [
    "#3d1ecd"
]

  return (
    <div className="row mt-5 px-4">
      <table class="table"  >{
        reports && reports.map((c, index) => {
          return (
            <>
              <thead key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">Venting Stage</th>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">Room Number/s</th>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col"> Room Count</th>

                </tr>
              </thead>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">V1</th>
                  <td >{c.v1&&c.v1.length ? c.v1.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td >{c.v1&&c.v1.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">V2</th>
                  <td>{c.v2.length ? c.v2.map(({ room_name }) => <>{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.v2.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col"></th>
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


export default TableOverAllVentingReport;
