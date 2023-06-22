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
      title: 'Bags',
      dataIndex: 'title',
    },


    {
      title: 'Date',
      dataIndex: 'Date',
      align: 'center'
    },

  ];

  let data = category.map((a, index) => {
    let obj = {
      key: a.history_id,
      sno: index + 1,
      title: a.history_name,
      Date: a.end_date
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