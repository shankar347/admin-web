import React from 'react';
import { Checkbox, Table } from 'antd';
import Moment from "moment";

const TableHomeCategory = ({ category, editModalOnClick, onSelectAll, onSelectOne, selectAll, selectedCatIds, currentPage, pageSizeTotal }) => {
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
      title: 'Start Date',
      dataIndex: 'start',
      align: 'center'
    },
    {
      title: 'End Date',
      dataIndex: 'end',
      align: 'center'
    },
    {
      title: 'Current Flow',
      dataIndex: 'flow',
      align: 'center'
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
      key: a._id,
      sno: `${currentPage > 1 ? ((currentPage - 1) * pageSizeTotal) + index + 1 : index + 1}`,
      title: a.name,
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      start: Moment(a.startDate).format("DD-MM-YYYY"),
      end: Moment(a.endDate).format("DD-MM-YYYY"),
      flow: a.details && a.details.length ? a.details[0].flow : <p className='text-success'>Comleted</p>,
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