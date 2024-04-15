import React from 'react';
import { Table } from 'antd';

const TableRoomWiseReport = ({ reports }) => {
    const columns = [
        {
            title: 'S.No',
            dataIndex: 'no',
            width: '1%',
            sorter: (a, b) => a.no - b.no
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

    let data = reports.map((a, index) => {
        let obj = {
            key: index,
            no: (index + 1),
            room: a.roomName,
            flow: a.stage
        }
        return (obj);
    });

    return (
        <div>
            <div>
                <Table columns={columns} dataSource={data} pagination={true} bordered />
            </div>
        </div>
    );
};

export default TableRoomWiseReport;
