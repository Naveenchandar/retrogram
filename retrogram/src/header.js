import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react'

export function Header() {
    const { Header } = Layout;
    return (
        <Header className="header flex justify_spacebtw" style={{ backgroundColor: 'white', alignItems: 'baseline' }}>
            <h3>Retrogram</h3>
            <div>
                <span>Naveen chandar</span> &nbsp;
                <Avatar icon={<UserOutlined />} />
            </div>
        </Header>
    )
}