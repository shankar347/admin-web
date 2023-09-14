import React, {  useState } from 'react';
import Moment from "moment"

const TableOverAllPReport = ({ reports}) => {


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

                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">Pinning Stage</th>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} colSpan='2' scope="col">Room Number</th>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col"> Room Count</th>

                </tr>
              </thead>
            
              <tbody key={index}>
              <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P1</th>
                  <td class='border-1'>{c.p1.length && c.p1.map((c,ind) => <>
                  {`${Moment(c.P1).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p1.length ? c.p1.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p1 && c.p1.length}</td>
                </tr>

              </tbody>

              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P2</th>
                  <td class='border-1'>{c.p2.length && c.p2.map((c,ind) => <>
                  {`${Moment(c.P2).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p2.length ? c.p2.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p2 && c.p2.length}</td>
                </tr>
              </tbody>

              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P3</th>
                  <td class='border-1'>{c.p3.length && c.p3.map((c,ind) => <>
                  {`${Moment(c.P3).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p3.length ? c.p3.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p3 && c.p3.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P4</th>
                  <td class='border-1'>{c.p4.length && c.p4.map((c,ind) => <>
                  {`${Moment(c.P4).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p4.length ? c.p4.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p4 && c.p4.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P5</th>
                  <td class='border-1'>{c.p5.length && c.p5.map((c,ind) => <>
                  {`${Moment(c.P5).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p5.length ? c.p5.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p5 && c.p5.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P6</th>
                  <td class='border-1'>{c.p6.length && c.p6.map((c,ind) => <>
                  {`${Moment(c.P6).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p6.length ? c.p6.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p6 && c.p6.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P7</th>
                  <td class='border-1'>{c.p7.length && c.p7.map((c,ind) => <>
                  {`${Moment(c.P7).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p7.length ? c.p7.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p7 && c.p7.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P8</th>
                  <td class='border-1'>{c.p8.length && c.p8.map((c,ind) => <>
                  {`${Moment(c.P8).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p8.length ? c.p8.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p8 && c.p8.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">P9</th>
                  <td class='border-1'>{c.p9.length && c.p9.map((c,ind) => <>
                  {`${Moment(c.P9).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.p9.length ? c.p9.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.p9 && c.p9.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">P9</th>
                  <td>{c.p9.length ? c.p9.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.p9.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                   <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125  }} scope="col">P10</th>
                  <td>{c.p10.length ? c.p9.map(({ room_name }) => < >{`${room_name}, `}</>) : <>Nil</>}</td>
                  <td>{c.p10.length}</td>
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


export default TableOverAllPReport;
