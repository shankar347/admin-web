import React from 'react';
import { Table } from 'antd';

const TableOverAllReport = ({ reports }) => {
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'no',
      width: '1%',
      sorter: (a, b) => a.no - b.no
    },
    {
      title: 'Main Category',
      dataIndex: 'maincategory',
    },
    {
      title: 'Sub Category',
      dataIndex: 'subcategory',
    },
    {
      title: 'Sub Category Code',
      dataIndex: 'subcategorycode',
    },
    {
      title: 'Total Questions Uploaded',
      dataIndex: 'uploaded',
    },
    {
      title: 'Total Questions Waiting',
      dataIndex: 'waiting',
    },
    {
      title: 'Total Questions Active',
      dataIndex: 'active',
    },
    {
      title: 'Total Questions Inactive',
      dataIndex: 'inactive',
    },
  ];

  let data = reports.map((a, index) => {
    let obj = { ...a };
    obj.key = index;
    obj.no = (index + 1);
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
