import React, { useState } from 'react';
import Moment from "moment"
const TableOverAllReport = ({ reports, startDate, endDate }) => {


  const [colorId] = useState(0)

  let count = reports && reports.map((c, index) => {
    let data =
      (c.P1?.length ? c.P1?.length : 0) +
      (c.P2?.length ? c.P2?.length : 0) +
      (c.P3?.length ? c.P3?.length : 0) +
      (c.P4?.length ? c.P4?.length : 0) +
      (c.P5?.length ? c.P5?.length : 0) +
      (c.P6?.length ? c.P6?.length : 0) +
      (c.P7?.length ? c.P7?.length : 0) +
      (c.P8?.length ? c.P8?.length : 0) +
      (c.P9?.length ? c.P9?.length : 0) +
      (c.P10?.length ? c.P10?.length : 0)

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

        <thead>
          <tr>
            <th rowspan="2">Date</th>
            <th colspan="10">Pinning Processing Rooms</th>
            <th rowspan="2">Room Count</th>
          </tr>
          <tr>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>P4</th>
            <th>P5</th>
            <th>P6</th>
            <th>P7</th>
            <th>P8</th>
            <th>P9</th>
            <th>P10</th>
          </tr>
        </thead>
        {
          reports && reports.map((c, index) => {
            let d = c
            let date = d.P1 ? d.P1[0].date : d.P2 ? d.P2[0].date : d.P3 ? d.P3[0].date : d.P4 ? d.P4[0].date :
              d.P5 ? d.P5[0].date : d.P6 ? d.P6[0].date : d.P7 ? d.P7[0].date : d.P8 ? d.P8[0].date :
                d.P9 ? d.P9[0].date : d.P10 ? d.P10[0].date : ''
            return (
              <>
                <tbody key={index} >
                  <tr>
                    <td>
                      {c.P1 ? c.P1 && <>{`${(c.P1[0].date)}`}</> : <> {c.P2 ? c.P2 && <>{`${(c.P2[0].date)}`}</> :
                        <> {c.P3 ? c.P3 && <>{`${(c.P3[0].date)}`}</> : <> {c.P4 ? c.P4 && <>{`${(c.P4[0].date)}`}</> :
                          <> {c.P5 ? c.P5 && <>{`${(c.P5[0].date)}`}</> : <> {c.P6 ? c.P6 && <>{`${(c.P6[0].date)}`}</> :
                            <>{c.P7 ? c.P7 && <>{`${(c.P7[0].date)}`}</> : <> {c.P8 ? c.P8 && <>{`${(c.P8[0].date)}`}</> :
                              <> {c.P9 ? c.P9 && <>{`${(c.P9[0].date)}`}</> : <>{c.P10 ? c.P10 && <>{`${(c.P10[0].date)}`}</> :
                                <> </>} </>}</>}</>} </>}</>}</>}</>}</>}</>} </td>
                    <td>
                      {c.P1 ? c.P1.sort((a, b) => a.date - b.date).map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>

                    <td>
                      {c.P2 ? c.P2.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>
                    <td>
                      {c.P3?.length ? c.P3.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.P4?.length ? c.P4.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.P5?.length ? c.P5.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>
                    <td>
                      {c.P6?.length ? c.P6.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}  </td>
                    <td>
                      {c.P7?.length ? c.P7.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.P8?.length ? c.P8.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.P9?.length ? c.P9.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>

                    <td>
                      {c.P10?.length ? c.P10.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}  </td>

                    <th rowspan="2">
                      {(c.P1?.length ? c.P1?.length : 0) +
                        (c.P2?.length ? c.P2?.length : 0) +
                        (c.P3?.length ? c.P3?.length : 0) +
                        (c.P4?.length ? c.P4?.length : 0) +
                        (c.P5?.length ? c.P5?.length : 0) +
                        (c.P6?.length ? c.P6?.length : 0) +
                        (c.P7?.length ? c.P7?.length : 0) +
                        (c.P8?.length ? c.P8?.length : 0) +
                        (c.P9?.length ? c.P9?.length : 0) +
                        (c.P10?.length ? c.P10?.length : 0)}
                    </th>
                  </tr>

                  <tr>
                    <th>Total</th>
                    <th> {c.P1?.length ? c.P1?.length : 0}</th>
                    <th> {c.P2?.length ? c.P2?.length : 0}</th>
                    <th> {c.P3?.length ? c.P3?.length : 0}</th>
                    <th> {c.P4?.length ? c.P4?.length : 0}</th>
                    <th> {c.P5?.length ? c.P5?.length : 0}</th>
                    <th> {c.P6?.length ? c.P6?.length : 0}</th>
                    <th> {c.P7?.length ? c.P7?.length : 0}</th>
                    <th> {c.P8?.length ? c.P8?.length : 0}</th>
                    <th> {c.P9?.length ? c.P9?.length : 0}</th>
                    <th> {c.P10?.length ? c.P10?.length : 0}</th>
                  </tr>
                </tbody>

              </>
            )
          })}
        <tfoot>
          <tr>
            <th colspan="13">Total Rooms:</th>
            <th>
              {total}
            </th>
          </tr>
        </tfoot>
      </table>

    </div>

  );
};


export default TableOverAllReport;
