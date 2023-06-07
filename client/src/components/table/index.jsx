import React from "react";
import { Table } from "antd";
import { uid } from "uid";

const TableComponent = ({ data }) => {

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} size="middle" rowKey="_id" />
    </>
  );
};

export default TableComponent;
