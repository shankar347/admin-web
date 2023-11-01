import React, { useState } from 'react';
import Moment from "moment"
const TableOverAllReport = ({ reports, startDate, endDate }) => {


  const [colorId] = useState(0)

  let count = reports && reports.map((c, index) => {
    let data =
      (c.CR0?.length ? c.CR0?.length : 0) +
      (c.CR1?.length ? c.CR1?.length : 0) +
      (c.CR2?.length ? c.CR2?.length : 0) +
      (c.CR3?.length ? c.CR3?.length : 0) +
      (c.CR4?.length ? c.CR4?.length : 0) +
      (c.CR5?.length ? c.CR5?.length : 0) +
      (c.CR6?.length ? c.CR6?.length : 0)


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
            <th colspan="7">Case-Run Processing Rooms</th>
            <th rowspan="2">Room Count</th>
          </tr>
          <tr>
            <th>CR0</th>
            <th>CR1</th>
            <th>CR2</th>
            <th>CR3</th>
            <th>CR4</th>
            <th>CR5</th>
            <th>CR6</th>

          </tr>
        </thead> : <></>}
        {
          reports && reports.map((c, index) => {
            let d = c
            let date = d.CR0 ? d.CR0[0].date : d.CR1 ? d.CR1[0].date : d.CR2 ? d.CR2[0].date : d.CR3 ? d.CR3[0].date : d.CR4 ? d.CR4[0].date :
              d.CR5 ? d.CR5[0].date : d.CR6 ? d.CR6[0].date : ''
            return (
              <>
                <tbody key={index} >
                  <tr>
                    <td>
                      {date} </td>
                    <td>
                      {c.CR0 ? c.CR0.sort((a, b) => a.date - b.date).map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>
                    <td>

                      {c.CR1 ? c.CR1.sort((a, b) => a.date - b.date).map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>

                    <td>
                      {c.CR2 ? c.CR2.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>
                    <td>
                      {c.CR3?.length ? c.CR3.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.CR4?.length ? c.CR4.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>}  </td>
                    <td>
                      {c.CR5?.length ? c.CR5.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }) : <>Nil</>} </td>
                    <td>
                      {c.CR6?.length ? c.CR6.map((a, index) => {
                        return (<>
                          <i className="fal fa-home"></i>{`${(a.room_name).replace(/Room No/g, "")}`} {<hr />}
                        </>)
                      }
                      ) : <>Nil</>}  </td>


                    <th rowspan="2">
                      {(c.CR0?.length ? c.CR0?.length : 0) +
                        (c.CR1?.length ? c.CR1?.length : 0) +
                        (c.CR2?.length ? c.CR2?.length : 0) +
                        (c.CR3?.length ? c.CR3?.length : 0) +
                        (c.CR4?.length ? c.CR4?.length : 0) +
                        (c.CR5?.length ? c.CR5?.length : 0) +
                        (c.CR6?.length ? c.CR6?.length : 0)
                      }
                    </th>
                  </tr>

                  <tr>
                    <th>Total</th>
                    <th> {c.CR0?.length ? c.CR0?.length : 0}</th>
                    <th> {c.CR1?.length ? c.CR1?.length : 0}</th>
                    <th> {c.CR2?.length ? c.CR2?.length : 0}</th>
                    <th> {c.CR3?.length ? c.CR3?.length : 0}</th>
                    <th> {c.CR4?.length ? c.CR4?.length : 0}</th>
                    <th> {c.CR5?.length ? c.CR5?.length : 0}</th>
                    <th> {c.CR6?.length ? c.CR6?.length : 0}</th>

                  </tr>
                </tbody>

              </>
            )
          })}
        {total ? <tfoot>
          <tr>
            <th colspan="13">Total Rooms:</th>
            <th>  {total} </th>
          </tr>
        </tfoot> : <></>}

      </table>
      {!total ? <h2> Click Search Button After Select Date </h2> : <></>}
    </div>

  );
};


export default TableOverAllReport;
