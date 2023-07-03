import React from 'react';
import { Table } from 'antd';
import Moment from "moment"
const TableVentingReport = ({ reports, startDate, endDate }) => {
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
            title: 'Venting',
            dataIndex: 'venting',
        }
    ];

    let data = reports.map((a, index) => {


        
        let obj = {

            key: index,
            no: (index + 1),
            venting: Moment(startDate).format('DD-MM-YYYY') == Moment(a.V1).format('DD-MM-YYYY') ? `V1 - ${Moment(a.V1).format('DD-MM-YYYY')}` :
                Moment(startDate).format('DD-MM-YYYY') == Moment(a.V2).format('DD-MM-YYYY') ? `V2 - ${Moment(a.V2).format('DD-MM-YYYY')}` : '',
            room: a.room_name,

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


export default TableVentingReport;
