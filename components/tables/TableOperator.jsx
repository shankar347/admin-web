import React from 'react';
import { Checkbox, Table } from 'antd';

const TableHomeCategory = ({ allOperator, editModalOnClick, openview, onSelectAll, onSelectOne, selectAll, selectedHomeCatIds, currentPage, pageSizeTotal }) => {
  let columns = [
    {
      title: 'S No',
      dataIndex: 'sno',

    },
    {
      title: 'Name',
      dataIndex: 'title',
    },
    {
      title: 'Username',
      dataIndex: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type'
    },
   
  
    {
      title: 'view',
      dataIndex: 'view',
      align: 'center',
      width: '3%',
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
console.log(allOperator,"clkjhoidjfhbj")
  let data =  allOperator.map((a, index) => {

    let obj = {
      key: a.op_id,
      sno: `${currentPage > 1 ? ((currentPage - 1) * pageSizeTotal) + index + 1 : index + 1}`,
      title: a.op_name,
      name: a.op_uname,
     pass :new Buffer.from(a.op_password),
      type: a.op_type === "O" ? (<p style={{ color: 'green' }}>Executive</p>) : (<p style={{ color: 'red' }}>Admin</p>),
      view: (<i className="fas fa-file" onClick={() => openview(a)} style={{ cursor: 'pointer' }}></i>),
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      check: (
        <Checkbox
          onClick={() => onSelectOne(a.op_id)}
          checked={selectedHomeCatIds.indexOf(a.op_id) >= 0}
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