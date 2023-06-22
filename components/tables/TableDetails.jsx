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
      title: 'StartDate',
      dataIndex: 'StartDate',
      align: 'center'
    },
    {
      title: 'EndDate',
      dataIndex: 'EndDate',
      align: 'center'
    },
    
  ];

  let data = category.map((a, index) => {

    let obj = {
      key: a.product_id,
      sno: index + 1,
      title: a.product_name ,
      StartDate: a.start_date,
      EndDate:a.end_date
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