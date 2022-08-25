import React, { useState, memo, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import './style.css';
import { PageSize } from '../../../globalConstants';

const TableComponent = ({
  columns,
  data,
  totalData,
  rowSelection,
  rowKey,
  fetchData,
  onRowClick,
  height,
  showTotal,
  cursor,
  hasMoreData,
}) => {
  const [paginationCount, setPaginationCount] = useState(false);
  const handlePagination = pagination => {
    const { current } = pagination;
    console.log({ current });
    setPaginationCount(current);
  };
  useEffect(() => {
    setPaginationCount(false);
  }, [totalData]);

  return (
    <Table
      onRow={onRowClick}
      rowSelection={rowSelection}
      rowKey={rowKey}
      columns={columns}
      dataSource={data}
      onChange={handlePagination}
      scroll={{
        y: `calc(100vh - ${height}px)`,
        // x: data && data.length > 0 ? 'auto' : null,
        x: hasMoreData ? 1800 : 'auto',
        // x: 1300,
      }}
      pagination={
        data && data.length
          ? {
              total: totalData,
              current: paginationCount || 1,
              pageSize: parseInt(PageSize),
              showSizeChanger: false,
              onChange: (page, pageSize) => {
                if (data.length < page * pageSize && data.length < totalData) {
                  fetchData();
                }
              },
              position: ['bottomLeft'],
              showTotal: (total, range) =>
                showTotal && `${range[0]}-${range[1]} of ${total}`,
            }
          : false
      }
    />
  );
};

TableComponent.propTypes = {
  columns: PropTypes.any,
  data: PropTypes.any,
  onChange: PropTypes.func,
};

export default memo(TableComponent);
