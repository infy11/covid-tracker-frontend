import React from 'react';

import { Spin, Space } from 'antd';

export default () => (
    <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
    </Space>
);
