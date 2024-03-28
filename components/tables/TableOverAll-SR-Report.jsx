import React, { useState } from 'react';
import Moment from "moment"
const TableOverAllReport = ({ reports, startDate, endDate }) => {


  const [colorId] = useState(0)
console.log( reports, 'reports')
  let count = reports && reports.map((c, index) => {
    let data =
      (c.SR0?.length ? c.SR0?.length : 0) +
      (c.SR1?.length ? c.SR1?.length : 0) +
      (c.SR2?.length ? c.SR2?.length : 0) +
      (c.SR3?.length ? c.SR3?.length : 0) +
      (c.SR4?.length ? c.SR4?.length : 0) +
      (c.SR5?.length ? c.SR5?.length : 0) +
      (c.SR6?.length ? c.SR6?.length : 0) +
      (c.SR7?.length ? c.SR7?.length : 0) +
      (c.SR8?.length ? c.SR8?.length : 0) +
      (c.SR9?.length ? c.SR9?.length : 0) +
      (c.SR10?.length ? c.SR10?.length : 0) +
      (c.SR11?.length ? c.SR11?.length : 0) +
      (c.SR812?.length ? c.SR12?.length : 0) +
      (c.SR13?.length ? c.SR13?.length : 0) +
      (c.SR14?.length ? c.SR14?.length : 0) +
      (c.SR15?.length ? c.SR15?.length : 0)

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
            <th colspan="16">SpawnRun processing Rooms</th>
            <th rowspan="2">Room Count</th>
          </tr>
          <tr>
            <th>SR0</th>
            <th>SR1</th>
            <th>SR2</th>
            <th>SR3</th>
            <th>SR4</th>
            <th>SR5</th>
            <th>SR6</th>
            <th>SR7</th>
            <th>SR8</th>
            <th>SR9</th>
            <th>SR10</th>
            <th>SR11</th>
            <th>SR12</th>
            <th>SR13</th>
            <th>SR14</th>
            <th>SR15</th>
          </tr>
        </thead>
        {
          reports && reports.map((c, index) => {
            console.log( c, "frfrfr")
            let d = c
            let date = d.SR0 ? d.SR0[0].date : d.SR1 ? d.SR1[0].date : d.SR2 ? d.SR2[0].date : d.SR3 ? d.SR3[0].date :
              d.SR4 ? d.SR4[0].date : d.SR5 ? d.SR5[0].date : d.SR6 ? d.SR6[0].date : d.SR7 ? d.SR7[0].date :
                d.SR8 ? d.SR8[0].date : d.SR9 ? d.SR9[0].date : d.SR10 ? d.SR10[0].date : d.SR11 ? d.SR11[0].date :
                  d.SR12 ? d.SR12[0].date : d.SR13 ? d.SR13[0].date : d.SR14 ? d.SR14[0].date : d.SR15 ? d.SR15[0].date :''
            return (
              <>
                <tbody key={index} >
                  <tr>
                    <td>
                      {date} </td>
                    <td>
                      {c.SR0 ? c.SR0.sort((a, b) => a.date - b.date).map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>

                    <td>
                      {c.SR1 ? c.SR1.sort((a, b) => a.date - b.date).map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>

                    <td>
                      {c.SR2 ? c.SR2.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>
                    <td>
                      {c.SR3?.length ? c.SR3.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.SR4?.length ? c.SR4.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.SR5?.length ? c.SR5.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>
                    <td>
                      {c.SR6?.length ? c.SR6.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}  </td>
                    <td>
                      {c.SR7?.length ? c.SR7.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.SR8?.length ? c.SR8.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.SR9?.length ? c.SR9.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>

                    <td>
                      {c.SR10?.length ? c.SR10.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}  </td>
                    <td>
                      {c.SR11?.length ? c.SR11.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.SR12?.length ? c.SR12.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.SR13?.length ? c.SR13.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>

                    <td>
                      {c.SR14?.length ? c.SR14.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}  </td>
                    <td>
                      {c.SR15?.length ? c.SR15.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}  </td>
                    <th rowspan="2">
                      {(c.SR0?.length ? c.SR0?.length : 0) +
                        (c.SR1?.length ? c.SR1?.length : 0) +
                        (c.SR2?.length ? c.SR2?.length : 0) +
                        (c.SR3?.length ? c.SR3?.length : 0) +
                        (c.SR4?.length ? c.SR4?.length : 0) +
                        (c.SR5?.length ? c.SR5?.length : 0) +
                        (c.SR6?.length ? c.SR6?.length : 0) +
                        (c.SR7?.length ? c.SR7?.length : 0) +
                        (c.SR8?.length ? c.SR8?.length : 0) +
                        (c.SR9?.length ? c.SR9?.length : 0) +
                        (c.SR10?.length ? c.SR10?.length : 0) +
                        (c.SR11?.length ? c.SR11?.length : 0) +
                        (c.SR12?.length ? c.SR12?.length : 0) +
                        (c.SR13?.length ? c.SR13?.length : 0) +
                        (c.SR14?.length ? c.SR14?.length : 0) +
                        (c.SR15?.length ? c.SR15?.length : 0)
                        }
                    </th>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <th> {c.SR0?.length ? c.SR0?.length : 0}</th>
                    <th> {c.SR1?.length ? c.SR1?.length : 0}</th>
                    <th> {c.SR2?.length ? c.SR2?.length : 0}</th>
                    <th> {c.SR3?.length ? c.SR3?.length : 0}</th>
                    <th> {c.SR4?.length ? c.SR4?.length : 0}</th>
                    <th> {c.SR5?.length ? c.SR5?.length : 0}</th>
                    <th> {c.SR6?.length ? c.SR6?.length : 0}</th>
                    <th> {c.SR7?.length ? c.SR7?.length : 0}</th>
                    <th> {c.SR8?.length ? c.SR8?.length : 0}</th>
                    <th> {c.SR9?.length ? c.SR9?.length : 0}</th>
                    <th> {c.SR10?.length ? c.SR10?.length : 0}</th>
                    <th> {c.SR11?.length ? c.SR11?.length : 0}</th>
                    <th> {c.SR12?.length ? c.SR12?.length : 0}</th>
                    <th> {c.SR13?.length ? c.SR13?.length : 0}</th>
                    <th> {c.SR14?.length ? c.SR14?.length : 0}</th>
                    <th> {c.SR15?.length ? c.SR15?.length : 0}</th>
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
