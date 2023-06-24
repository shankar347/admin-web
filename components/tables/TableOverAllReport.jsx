import React from 'react';
import { Table } from 'antd';
import Moment from "moment"
const TableOverAllReport = ({ reports,startDate,endDate }) => {
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'no',
      width: '1%',
      sorter: (a, b) => a.no - b.no
    },
    {
        title: 'Harvest',
      dataIndex: 'harvest',
    },
    {
      title: 'Room',
      dataIndex: 'room',
    },
    {
        title: 'Total Room',
        dataIndex: 'count',
      },
  ];

  let data = reports.map((a, index) => {

    console.log(a,"dfghdhdfshgidsh")

    let obj = {
        
        key: index,
        no: (index + 1),
        harvest: Moment(startDate).format('DD-MM-YYYY')==Moment(a.H1).format('DD-MM-YYYY')?`H1`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H2).format('DD-MM-YYYY')?`H2 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H3).format('DD-MM-YYYY')?`H3 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H4).format('DD-MM-YYYY')?`H4 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H5).format('DD-MM-YYYY')?`H5 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H6).format('DD-MM-YYYY')?`H6 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H7).format('DD-MM-YYYY')?`H7 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H8).format('DD-MM-YYYY')?`H8`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H9).format('DD-MM-YYYY')?`H9 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H10).format('DD-MM-YYYY')?`H10 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H11).format('DD-MM-YYYY')?`H11 `:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H12).format('DD-MM-YYYY')?`H12 `:'',
        room: a.room_name,
        count:2
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


export default TableOverAllReport;
