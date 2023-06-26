import React, {  useState } from 'react';
import { Table } from 'antd';
import Moment from "moment"
const TableOverAllReport = ({ reports, startDate, endDate }) => {


  const [colorId, setColorId] = useState(0)
 

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
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">Harvest Stage</th>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">Room No</th>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">total Room</th>

                </tr>
              </thead>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H1</th>
                  <td style={{ fontSize: 13, padding: 1}} >{c.h1.length ? c.h1.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td style={{ fontSize: 13, padding: 1}} >{c.h1.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H2</th>
                  <td>{c.h2.length ? c.h2.map(({ room_name }) => <>{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.h2.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H3</th>
                  <td>{c.h3.length ? c.h3.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h3.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H4</th>
                  <td>{c.h4.length ? c.h4.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h4.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H5</th>
                  <td>{c.h5.length ? c.h5.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h5.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H6</th>
                  <td>{c.h6.length ? c.h6.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h6.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H7</th>
                  <td>{c.h7.length ? c.h7.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h7.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H8</th>
                  <td>{c.h8.length ? c.h8.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h8.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H9</th>
                  <td>{c.h9.length ? c.h9.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h9.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H10</th>
                  <td>{c.h10.length ? c.h10.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h10.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H11</th>
                  <td>{c.h11.length ? c.h11.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h11.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">H12</th>
                  <td>{c.h12.length ? c.h12.map(({ room_name }) => < >{`${room_name}, `}</>) : <p>Nil</p>}</td>
                  <td>{c.h12.length}</td>
                </tr>
              </tbody>
              <h2 style={{textAlign:'right'}}>Total: {c.totalCount}</h2>
            </>)
        })}


      </table>
    </div>

  );
};


export default TableOverAllReport;
