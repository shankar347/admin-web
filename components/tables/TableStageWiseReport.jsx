// import React from 'react';

// const TableOverAllReport = ({ headers, reports, totolCount, stage }) => {
//     return (
//         <div className="row mt-5 px-4">
//             <h3>Count:{totolCount}</h3>
//             <table class="table table-bordered" >
//                 <thead>
//                     <tr>
//                         <th rowspan="2">Date</th>
//                         <th colspan={headers.length}>{`${stage.name} Processing Rooms`}</th>
//                         <th rowspan="2">Room Count</th>
//                     </tr>
//                     <tr>
//                         {headers.map(h => {
//                             return (<th>{h}</th>)
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Object.keys(reports).map((r, index) => {
//                         let obj = reports[r];
//                         let total = Object.keys(obj).reduce((a, b) => a + obj[b].length, 0);
//                         return (
//                             <React.Fragment key={index}>
//                                 <tr>
//                                     <td>{r}</td>
//                                     {headers.map(h => {
//                                         if (!obj[h]) return <td>Nil</td>;
//                                         return (
//                                             <td>{
//                                                 obj[h].map((a, index) => {
//                                                     return (
//                                                         <>
//                                                             <i className="fal fa-home"></i>
//                                                             <p>{`${(a).replace(/Room/g, "")}`} </p>
//                                                             {(obj[h].length - 1) !== index ? <hr /> : <></>}
//                                                         </>
//                                                     )
//                                                 })
//                                             }</td>
//                                         )
//                                     })}
//                                     <td rowSpan={2}>{total}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>{"Total"}</td>
//                                     {headers.map(h => {
//                                         if (!obj[h]) return <td>0</td>;
//                                         return (<td>{obj[h].length}</td>)
//                                     })}
//                                 </tr>
//                             </React.Fragment>
//                         )
//                     })}
//                     <tr>
//                         <td colSpan={headers.length + 1}>{"Total Rooms : "}</td>
//                         <td>{totolCount}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TableOverAllReport;



import React from 'react';

const TableOverAllReport = ({ headers, reports, totolCount, stage }) => {

    // Compute column-wise totals from all "Total" rows
    const overallColumnTotals = {};
    headers.forEach(h => {
        overallColumnTotals[h] = 0;
    });

    Object.values(reports).forEach(report => {
        headers.forEach(h => {
            if (report[h]) {
                overallColumnTotals[h] += report[h].length;
            }
        });
    });

    return (
        <div className="row mt-5 px-4"  style={{overflowX:'scroll'}}>
            <h3>Count: {totolCount}</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th rowSpan="2">Date</th>
                        <th colSpan={headers.length}>{`${stage.name} Processing Rooms`}</th>
                        <th rowSpan="2">Room Count</th>
                    </tr>
                    <tr>
                        {headers.map((h, i) => (
                            <th key={`header-${i}`}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(reports).map((date, index) => {
                        const obj = reports[date];
                        const total = headers.reduce((sum, h) => sum + (obj[h]?.length || 0), 0);

                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <td>{date}</td>
                                    {headers.map((h, i) => (
                                        <td key={`cell-${index}-${i}`}>
                                            {
                                                obj[h]?.length
                                                    ? obj[h].map((room, ridx) => (
                                                        <React.Fragment key={ridx}>
                                                            <i className="fal fa-home"></i>
                                                            <p>{room.replace(/Room/g, "")}</p>
                                                            {ridx !== obj[h].length - 1 && <hr />}
                                                        </React.Fragment>
                                                    ))
                                                    : 'Nil'
                                            }
                                        </td>
                                    ))}
                                    <td rowSpan={2}>{total}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    {headers.map((h, i) => (
                                        <td key={`total-${index}-${i}`}>{obj[h]?.length || 0}</td>
                                    ))}
                                </tr>
                            </React.Fragment>
                        );
                    })}

                    {/* Final row: overall column totals */}
                    <tr>
                        <td colSpan="1"><strong>Overall Total</strong></td>
                        {headers.map((h, i) => (
                            <td key={`overall-${i}`}><strong>{overallColumnTotals[h]}</strong></td>
                        ))}
                        <td><strong>{totolCount}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableOverAllReport;
