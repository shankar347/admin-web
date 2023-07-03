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
        title: 'SpawnRun',
      dataIndex: 'spawnRun',
    }
  ];

  let data = reports.map((a, index) => {
   
    let obj = {
        key: index,
        no: (index + 1),
        spawnRun: Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR0).format('DD-MM-YYYY')?`SR0 - ${Moment(a.SR1).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR1).format('DD-MM-YYYY')?`SR1 - ${Moment(a.SR1).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR2).format('DD-MM-YYYY')?`SR2 - ${Moment(a.SR2).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR3).format('DD-MM-YYYY')?`SR3 - ${Moment(a.SR3).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR4).format('DD-MM-YYYY')?`SR4 - ${Moment(a.SR4).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR5).format('DD-MM-YYYY')?`SR5 - ${Moment(a.SR5).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR6).format('DD-MM-YYYY')?`SR6 - ${Moment(a.SR6).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR7).format('DD-MM-YYYY')?`SR7 - ${Moment(a.SR7).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR8).format('DD-MM-YYYY')?`SR8 - ${Moment(a.SR8).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR9).format('DD-MM-YYYY')?`SR9 - ${Moment(a.SR9).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR10).format('DD-MM-YYYY')?`SR10 - ${Moment(a.SR10).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR11).format('DD-MM-YYYY')?`SR11 - ${Moment(a.SR11).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR12).format('DD-MM-YYYY')?`SR12 - ${Moment(a.SR12).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR13).format('DD-MM-YYYY')?`SR13 - ${Moment(a.SR13).format('DD-MM-YYYY')}`:
        Moment(startDate).format('DD-MM-YYYY')==Moment(a.SR14).format('DD-MM-YYYY')?`SR14 - ${Moment(a.SR14).format('DD-MM-YYYY')}`:'',
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
