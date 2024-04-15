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
      title: 'UserName',
      dataIndex: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type'
    },
    {
      title: 'View',
      dataIndex: 'view',
      align: 'center',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      align: 'center'
    },
    {
      title: <Checkbox checked={selectAll} onClick={(e) => onSelectAll(e.target.checked)}></Checkbox>,
      dataIndex: 'check',
      align: 'center'
    }
  ];

  let data = allOperator.map((a, index) => {
    let obj = {
      key: a._id,
      sno: `${currentPage > 1 ? ((currentPage - 1) * pageSizeTotal) + index + 1 : index + 1}`,
      title: a.name,
      name: a.userName,
      type: a.type === "O" ? (<p style={{ color: 'green' }}>Executive</p>) : (<p style={{ color: 'green' }}>Admin</p>),
      view: (<i className="fas fa-file" onClick={() => openview(a)} style={{ cursor: 'pointer' }}></i>),
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      check: (
        <Checkbox
          onClick={() => onSelectOne(a._id)}
          checked={selectedHomeCatIds.indexOf(a._id) >= 0}
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