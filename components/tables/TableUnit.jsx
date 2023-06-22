import React from 'react';
import { Checkbox, Table } from 'antd';
import Link from 'next/link';

const TableHomeCategory = ({ category, editModalOnClick,mainPositionOnChange,posotionChangeCategorys, onSelectAll, onSelectOne, selectAll, selectedCatIds, currentPage, pageSizeTotal }) => {
  let columns = [
    {
      title: 'S No',
      dataIndex: 'sno',
    },
    {
      title: 'Unit',
      dataIndex: 'title',
    },
    {
      title: 'UnitCode',
      dataIndex: 'code',
    },
    {
      title: 'Position',
      dataIndex: 'position',
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
    let position = posotionChangeCategorys.filter(p => p.catId === a.unit_id);
    let obj = {
      key: a.unit_id,
      sno: `${currentPage > 1 ? ((currentPage - 1) * pageSizeTotal) + index + 1 : index + 1}`,
      title: a.unit_name,
      code:a.unit_code,
      edit: (<i className="fas fa-pen" onClick={() => editModalOnClick(a)} style={{ cursor: 'pointer' }}></i>),
      position: (
        <input
          type="text"
          onChange={event => mainPositionOnChange(a.unrst_jid, event.target.value)}
          style={{ width: '50px', textAlign: 'center', padding: '0px', height: 'calc(0.5em + 1rem + 2px)' }}
          value={position && position.length > 0 ? position[0].position : a.unit_pos}
          className="form-control form-control-lg"
        />
      ),
      check: (
        <Checkbox
          onClick={() => onSelectOne(a.unit_id)}
          checked={selectedCatIds.indexOf(a.unit_id) >= 0}
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