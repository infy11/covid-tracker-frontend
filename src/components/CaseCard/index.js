import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';

const { Meta } = Card;

export default ({img, description, title}) => (
    <Card
        style={{ width: 200 }}
        cover={
            <img
                alt="card-image"
                src={img}
            />
        }
    >
        <Meta
            title={title}
            description={description}
        />
    </Card>
);
