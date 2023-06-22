import React from 'react';
import { Checkbox, Table } from 'antd';
import Link from 'next/link';

const TableHomeCategory = ({ category, editModalOnClick, onSelectAll, onSelectOne, selectAll, selectedCatIds, currentPage, pageSizeTotal }) => {
  let columns = [
    {
      title: 'S No',
      dataIndex: 'sno',
    },
    {
      title: 'Country Name',
      dataIndex: 'title',
    },

   
    {
      title: 'Edit',
      dataIndex: 'edit',
      align: 'center'
    },
   
    {
      title: <Checkbox checked={selectAll} onClick={(e) => onSelectAll(e.target.checked)}></Checkbox>,
      dataIndex: 'check'
    }
  ];

  let data = category.map((a, index) => {
      console.log(a,"fhgiudfhguihdsifh")
    let obj = {
      key: a._id,
      sno: `${currentPage > 1 ? ((currentPage - 1) * pageSizeTotal) + index + 1 : index + 1}`,
      title: a.room_name,
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
     
      check: (
        <Checkbox
          onClick={() => onSelectOne(a._id)}
          checked={selectedCatIds.indexOf(a._id) >= 0}
        />
      )
    }
    return (obj);
  });

  return (
    <div>
      <div>
        <Table columns={columns} dataSource={data} pagination={false} bordered />
      </div>
    </div>
  );
};

export default TableHomeCategory;