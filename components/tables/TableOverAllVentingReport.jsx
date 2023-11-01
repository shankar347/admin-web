import React, { useState } from 'react';
import Moment from "moment"
const TableOverAllReport = ({ reports, startDate, endDate }) => {


  const [colorId] = useState(0)

  let count = reports && reports.map((c, index) => {
    let data =
      (c.V1?.length ? c.V1?.length : 0) +
      (c.V2?.length ? c.V2?.length : 0)

    return data
  })
  let total = 0
  for (var i in count) {
    total += count[i];
  }
  return (
    <div className="row mt-5 px-4">
      {total ? <h3>count:{total}</h3> : <></>}
      <table class="table table-bordered "  >

        {total ? <thead>
          <tr>
            <th rowspan="2">Date</th>
            <th colspan="2">Venting Processing Rooms</th>
            <th rowspan="2">Room Count</th>
          </tr>
          <tr>
            <th>V1</th>
            <th>V2</th>

          </tr>
        </thead> : <></>}
        {
          reports && reports.map((c, index) => {
            let date = c.V1 ? c.V1[0].date : c.V2 ? c.V2[0].date : ''
            return (
              <>
                <tbody key={index} >
                  <tr>
                    <td>
                      {c.V1 ? c.V1 && <>{`${(c.V1[0].date)}`}</> : <> {c.V2 ? c.V2 && <>{`${(c.V2[0].date)}`}</> :
                        <> </>}</>} </td>
                    <td>
                      {c.V1 ? c.V1.sort((a, b) => a.date - b.date).map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>

                    <td>
                      {c.V2 ? c.V2.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>

                    <th rowspan="2">
                      {(c.V1?.length ? c.V1?.length : 0) +
                        (c.V2?.length ? c.V2?.length : 0)}
                    </th>
                  </tr>

                  <tr>
                    <th>Total</th>
                    <th> {c.V1?.length ? c.V1?.length : 0}</th>
                    <th> {c.V2?.length ? c.V2?.length : 0}</th>
                  </tr>
                </tbody>

              </>
            )
          })}
        {total ? <tfoot>
          <tr>

            <th colspan="13">Total Rooms:</th>
            <th>
              {total}
            </th>
          </tr>
        </tfoot> : <></>}
      </table>

    </div>

  );
};


export default TableOverAllReport;
