import React, {  useState } from 'react';

const TableOverAllCRReport = ({ reports}) => {


  const [colorId] = useState(0)
 

  let colors = [
    "#1e7e34"
]

  return (
    <div className="row mt-5 px-4">
      <table class="table"  >{
        reports && reports.map((c, index) => {
          console.log(c,"dhfghsdfghdfg")
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
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">CR0</th>
                  <td >{c.cr0&&c.cr0.length ? c.cr0.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td >{c.cr0&&c.cr0.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">CR1</th>
                  <td>{c.cr1.length ? c.cr1.map(({ room_name }) => <>{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.cr1.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">CR2</th>
                  <td>{c.cr2.length ? c.cr2.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.cr2.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">CR3</th>
                  <td>{c.cr3.length ? c.cr3.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.cr3.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">CR4</th>
                  <td>{c.cr4.length ? c.cr4.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.cr4.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">CR5</th>
                  <td>{c.cr5.length ? c.cr5.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.cr5.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">CR6</th>
                  <td>{c.cr6.length ? c.cr6.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.cr6.length}</td>
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


export default TableOverAllCRReport;
