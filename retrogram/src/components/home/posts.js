import React, { useEffect, useState } from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
    });
}

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { status, data: { posts: postsData } } = await axios.get('/api/posts');
                if (status === 200) {
                    setPosts(postsData);
                } else {
                    throw new Error('Some error occurred, Please try again');
                }
            } catch (error) {
                console.log('error:', error);
            }
        })()
    }, [])

    return (
        <List
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={posts}
            renderItem={item => {
                return (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={LikeOutlined} text={item?.likes?.likeCount} key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text={item?.comments?.length} key="list-vertical-message" />,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.username}>{item.username}</a>}
                            description={item?.updatedAt}
                        />
                        <span style={{ padding: '1rem' }}>{item.content}</span>
                    </List.Item>
                )
            }}
        />
    )
};