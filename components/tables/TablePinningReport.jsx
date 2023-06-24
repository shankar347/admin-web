import React from 'react';
import { Table } from 'antd';
import Moment from "moment"
const TablePinningReport = ({ reports,startDate,endDate }) => {
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

    console.log(a,"fghfghdfd")

    let obj = {
      
        key: index,
        no: (index + 1),
        harvest: Moment(startDate).format('DD-MM-YYYY')==Moment(a.P1).format('DD-MM-YYYY')?`P1 - ${Moment(a.P1).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P2).format('DD-MM-YYYY')?`P2 - ${Moment(a.P2).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P3).format('DD-MM-YYYY')?`P3 - ${Moment(a.P3).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P4).format('DD-MM-YYYY')?`P4 - ${Moment(a.P4).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P5).format('DD-MM-YYYY')?`P5 - ${Moment(a.P5).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P6).format('DD-MM-YYYY')?`P6 - ${Moment(a.P6).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P7).format('DD-MM-YYYY')?`P7 - ${Moment(a.P7).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P8).format('DD-MM-YYYY')?`P8 - ${Moment(a.P8).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P9).format('DD-MM-YYYY')?`P9 - ${Moment(a.P9).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P10).format('DD-MM-YYYY')?`P10 - ${Moment(a.P10).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P11).format('DD-MM-YYYY')?`P11 - ${Moment(a.P11).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.P12).format('DD-MM-YYYY')?`P12 - ${Moment(a.P12).format('DD-MM-YYYY')}`:'',
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


export default TablePinningReport;
