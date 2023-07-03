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
      title: 'Room',
      dataIndex: 'room',
    },
    {
        title: 'Harvest',
      dataIndex: 'harvest',
    }
  ];

  let data = reports.map((a, index) => {

    

    let obj = {
        
        key: index,
        no: (index + 1),
        harvest: Moment(startDate).format('DD-MM-YYYY')==Moment(a.H1).format('DD-MM-YYYY')?`H1 - ${Moment(a.H1).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H2).format('DD-MM-YYYY')?`H2 - ${Moment(a.H2).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H3).format('DD-MM-YYYY')?`H3 - ${Moment(a.H3).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H4).format('DD-MM-YYYY')?`H4 - ${Moment(a.H4).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H5).format('DD-MM-YYYY')?`H5 - ${Moment(a.H5).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H6).format('DD-MM-YYYY')?`H6 - ${Moment(a.H6).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H7).format('DD-MM-YYYY')?`H7 - ${Moment(a.H7).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H8).format('DD-MM-YYYY')?`H8 - ${Moment(a.H8).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H9).format('DD-MM-YYYY')?`H9 - ${Moment(a.H9).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H10).format('DD-MM-YYYY')?`H10 - ${Moment(a.H10).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H11).format('DD-MM-YYYY')?`H11 - ${Moment(a.H11).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.H12).format('DD-MM-YYYY')?`H12 - ${Moment(a.H12).format('DD-MM-YYYY')}`:'',
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


export default TableOverAllReport;
