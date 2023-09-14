import React, { useState } from 'react';
import Moment from "moment"
const TableOverAllVentingReport = ({ reports }) => {


  const [colorId] = useState(0)


  let colors = [
    "#3d1ecd"
  ]
  console.log(reports, "gvhhghghgghh")
  return (
    <div className="row mt-5 px-4">
      <table class="table"  >{
        reports && reports.map((c, index) => {
          return (
            <>
              <thead key={index}>
                <tr>

                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">Venting Stage</th>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} colSpan='2' scope="col">Room Number</th>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col"> Room Count</th>

                </tr>
              </thead>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">V1</th>
                  <td class='border-1'>{c.v1.length && c.v1.map((c,ind) => <>
                  {`${Moment(c.V1).format('DD-MM-YYYY')}`}
                  {console.log(Object.values(ind)[Object.values(ind).length - 1],"hkhjkvfhjkch")}
                  {!ind[ind.length - 1] &&<hr />}</>)}</td>
                  <td>{c.v1.length ? c.v1.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} {<hr />}
                  </>) : <>Nil</>}</td>

                  <td >{c.v1 && c.v1.length}</td>
                </tr>




              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col">V2</th>
                  <td class='border-0'>{c.v2.length && c.v2.map(({ V2 }) => <>{`${Moment(V2).format('DD-MM-YYYY')}`} <hr /></>)}</td>
                  <td>{c.v2.length ? c.v2.map(({ room_name }) => <><i className="fal fa-home"></i>{`${(room_name).replace(/Room No/g, "")}`} <hr />
                  </>) : <>Nil</>}</td>
                  <td>{c.v2.length}</td>
                </tr>
              </tbody>
              <tbody key={index}>
                <tr>
                  <th style={{ borderColor: colors[colorId], color: colors[colorId], width: 125 }} scope="col"></th>
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
