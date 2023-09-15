import React, { useState } from 'react';
import Moment from "moment"
const TableOverAllReport = ({ reports, startDate, endDate }) => {


  const [colorId] = useState(0)

  let count = reports && reports.map((c, index) => {
    let data =
      (c.H1?.length ? c.H1?.length : 0) +
      (c.H2?.length ? c.H2?.length : 0) +
      (c.H3?.length ? c.H3?.length : 0) +
      (c.H4?.length ? c.H4?.length : 0) +
      (c.H5?.length ? c.H5?.length : 0) +
      (c.H6?.length ? c.H6?.length : 0) +
      (c.H7?.length ? c.H7?.length : 0) +
      (c.H8?.length ? c.H8?.length : 0) +
      (c.H9?.length ? c.H9?.length : 0) +
      (c.H10?.length ? c.H10?.length : 0) +
      (c.H11?.length ? c.H11?.length : 0) +
      (c.H12?.length ? c.H12?.length : 0)
    return data
  })

  return (
    <div className="row mt-5 px-4">
      <table class="table table-bordered "  >

        <thead>
          <tr>
            <th rowspan="2">Date</th>
            <th colspan="12">Harvest Processing Rooms</th>
            <th rowspan="2">Room Count</th>
          </tr>
          <tr>
            <th>H1</th>
            <th>H2</th>
            <th>H3</th>
            <th>H4</th>
            <th>H5</th>
            <th>H6</th>
            <th>H7</th>
            <th>H8</th>
            <th>H9</th>
            <th>H10</th>
            <th>H11</th>
            <th>H12</th>
          </tr>
        </thead>
        {
          reports && reports.map((c, index) => {
            return (
              <>
                <tbody key={index} >
                  <tr>

                    <td>
                      {c.H1 ? c.H1 && <>{`${(c.H1[0].date)}`}</> : <> {c.H2 ? c.H2 && <>{`${(c.H2[0].date)}`}</> :
                        <> {c.H3 ? c.H3 && <>{`${(c.H3[0].date)}`}</> : <> {c.H4 ? c.H4 && <>{`${(c.H4[0].date)}`}</> :
                          <> {c.H5 ? c.H5 && <>{`${(c.H5[0].date)}`}</> : <> {c.H6 ? c.H6 && <>{`${(c.H6[0].date)}`}</> :
                            <>{c.H7 ? c.H7 && <>{`${(c.H7[0].date)}`}</> : <> {c.H8 ? c.H8 && <>{`${(c.H8[0].date)}`}</> :
                              <> {c.H9 ? c.H9 && <>{`${(c.H9[0].date)}`}</> : <>{c.H10 ? c.H10 && <>{`${(c.H10[0].date)}`}</> :
                                <>{c.H11 ? c.H11 && <>{`${(c.H11[0].date)}`}</> : <>{c.H12 ? c.H12 && <>{`${(c.H12[0].date)}`}</> :
                                  <> </>} </>} </>} </>}</>}</>} </>}</>}</>}</>}</>}</>}</td>
                    <td>
                      {c.H1 ? c.H1.sort((a, b) => a.date - b.date).map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>

                    <td>
                      {c.H2 ? c.H2.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}
                    </td>
                    <td>
                      {c.H3?.length ? c.H3.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.H4?.length ? c.H4.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}
                    </td>
                    <td>
                      {c.H5?.length ? c.H5.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}
                    </td>
                    <td>
                      {c.H6?.length ? c.H6.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}
                    </td>
                    <td>
                      {c.H7?.length ? c.H7.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}
                    </td>
                    <td>
                      {c.H8?.length ? c.H8.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}
                    </td>
                    <td>
                      {c.H9?.length ? c.H9.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}
                    </td>
                    <td>
                      {c.H10?.length ? c.H10.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}
                    </td>
                    <td>
                      {c.H11?.length ? c.H11.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}
                    </td>
                    <td>
                      {c.H12 ? c.H12.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}
                    </td>
                    <th rowspan="2">
                      {(c.H1?.length ? c.H1?.length : 0) +
                        (c.H2?.length ? c.H2?.length : 0) +
                        (c.H3?.length ? c.H3?.length : 0) +
                        (c.H4?.length ? c.H4?.length : 0) +
                        (c.H5?.length ? c.H5?.length : 0) +
                        (c.H6?.length ? c.H6?.length : 0) +
                        (c.H7?.length ? c.H7?.length : 0) +
                        (c.H8?.length ? c.H8?.length : 0) +
                        (c.H9?.length ? c.H9?.length : 0) +
                        (c.H10?.length ? c.H10?.length : 0) +
                        (c.H11?.length ? c.H11?.length : 0) +
                        (c.H12?.length ? c.H12?.length : 0)}
                    </th>
                  </tr>

                  <tr>
                    <th>Total</th>
                    <th> {c.H1?.length ? c.H1?.length : 0}</th>
                    <th> {c.H2?.length ? c.H2?.length : 0}</th>
                    <th> {c.H3?.length ? c.H3?.length : 0}</th>
                    <th> {c.H4?.length ? c.H4?.length : 0}</th>
                    <th> {c.H5?.length ? c.H5?.length : 0}</th>
                    <th> {c.H6?.length ? c.H6?.length : 0}</th>
                    <th> {c.H7?.length ? c.H7?.length : 0}</th>
                    <th> {c.H8?.length ? c.H8?.length : 0}</th>
                    <th> {c.H9?.length ? c.H9?.length : 0}</th>
                    <th> {c.H10?.length ? c.H10?.length : 0}</th>
                    <th> {c.H11?.length ? c.H11?.length : 0}</th>
                    <th> {c.H12?.length ? c.H12?.length : 0}</th>
                  </tr>
                </tbody>

              </>
            )
          })}
        {/* <tfoot>
          <tr>

            <th colspan="13">Total Rooms:</th>
            <th>
              {reports && reports.map((c, index) => {
                console.log(c, "xfgbnxgnm ")
                return (
                  <>
              {count}
              </>
                )
              })}
            </th>
          </tr>
        </tfoot> */}
      </table>

    </div>

  );
};


export default TableOverAllReport;
