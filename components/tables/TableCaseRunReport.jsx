import React from 'react';
import { Table } from 'antd';
import Moment from "moment"
const TableCaseRunReport = ({ reports,startDate,endDate }) => {
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
        title: 'CaseRun',
      dataIndex: 'caseRun',
    }
  ];

  let data = reports.map((a, index) => {
    let obj = {
        key: index,
        no: (index + 1),
        caseRun: Moment(startDate).format('DD-MM-YYYY')==Moment(a.CR0).format('DD-MM-YYYY')?`CR0 - ${Moment(a.CR0).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.CR1).format('DD-MM-YYYY')?`CR1 - ${Moment(a.CR1).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.CR2).format('DD-MM-YYYY')?`CR2 - ${Moment(a.CR2).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.CR3).format('DD-MM-YYYY')?`CR3 - ${Moment(a.CR3).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.CR4).format('DD-MM-YYYY')?`CR4 - ${Moment(a.CR4).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.CR5).format('DD-MM-YYYY')?`CR5 - ${Moment(a.CR5).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.CR6).format('DD-MM-YYYY')?`CR6 - ${Moment(a.CR6).format('DD-MM-YYYY')}`: '',
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


export default TableCaseRunReport;
