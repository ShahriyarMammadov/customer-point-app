import React from "react";
import { Space, Spin } from "antd";
import "./index.scss";

const Loading = () => {
  return (
    <div id="loading">
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loading;
