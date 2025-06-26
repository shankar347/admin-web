// import React from 'react';
// import { Table } from 'antd';

// const TableRoomWiseReport = ({ reports }) => {
//     const columns = [
//         {
//             title: 'S.No',
//             dataIndex: 'no',
//             width: '1%',
//             sorter: (a, b) => a.no - b.no
//         },
//         {
//             title: 'Room',
//             dataIndex: 'room',
//         },
//         {
//             title: 'Flow',
//             dataIndex: 'flow',
//         }
//     ];

//     let data = reports.map((a, index) => {
//         let obj = {
//             key: index,
//             no: (index + 1),
//             room:  (
//   <span>
//     <i className="fas fa-home" style={{ color: 'green', marginRight: '5px' }}></i>
//     {a.roomName}
//   </span>
// ),
//             flow: a.stage
//         }
//         return (obj);
//     });

//     return (
//         <div>
//             <div>
//                 <Table columns={columns} dataSource={data} pagination={true} bordered />
//             </div>
//         </div>
//     );
// };

// export default TableRoomWiseReport;


import React, { useState } from 'react';
import { Table } from 'antd';

const TableRoomWiseReport = ({ reports }) => {
    const [pageSize, setPageSize] = useState(50); // default page size
    const [currentPage, setCurrentPage] = useState(1);

    const columns = [
        {
            title: 'S.No',
            dataIndex: 'no',
            width: '1%',
            sorter: (a, b) => a.no - b.no,
        },
        {
            title: 'Room',
            dataIndex: 'room',
        },
        {
            title: 'Flow',
            dataIndex: 'flow',
        }
    ];

    const data = reports?.map((a, index) => ({
        key: index,
        no: index + 1,
        room: (
            <span>
                <i className="fas fa-home" style={{ color: 'green', marginRight: '5px' }}></i>
                {a.roomName}
            </span>
        ),
        flow: a.stage,
    }));

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    onChange: (page, pageSize) => {
                        setCurrentPage(page);
                        setPageSize(pageSize);
                    },
                    showSizeChanger: true,
                    pageSizeOptions: ['5','10', '25', '50', '100', '200', '500', '1000'],
                }}
            />
        </div>
    );
};

export default TableRoomWiseReport;
