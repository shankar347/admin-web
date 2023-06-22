import React from 'react';
import { Checkbox, Table } from 'antd';
import Link from 'next/link';
import Moment from "moment";
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
      title: 'Start Date',
      dataIndex: 'start',
    },
    {
      title: 'End Date',
      dataIndex: 'end',
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
    let obj = {
      key: a.product_id,
      sno: `${currentPage > 1 ? ((currentPage - 1) * pageSizeTotal) + index + 1 : index + 1}`,
      title: a.product_name,
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      start: Moment(a.start_date).format("DD-MM-YYYY"),
      end:  Moment(a.end_date).format("DD-MM-YYYY"),
    
      check: (
        <Checkbox
          onClick={() => onSelectOne(a.product_id)}
          checked={selectedCatIds.indexOf(a.product_id) >= 0}
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