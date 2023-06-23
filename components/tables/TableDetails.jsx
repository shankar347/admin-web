import React from 'react';
import { Checkbox, Table } from 'antd';
import Link from 'next/link';
import Moment from "moment"
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
      StartDate: Moment(a.start_date).format('DD-MM-YYYY'),
      EndDate:Moment(a.end_date).format('DD-MM-YYYY'),
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