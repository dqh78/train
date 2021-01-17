import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;
export default class Tableo extends Component {

    render() {
        const data = [
            {
              key: '1',
              firstName: 'John',
              lastName: 'Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              firstName: 'Jim',
              lastName: 'Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              firstName: 'Joe',
              lastName: 'Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
        return (
            <Table dataSource={data} >
                <Column title="订单编号" dataIndex="age" key="age" />
                <Column title="付款时间" dataIndex="age" key="age" />
                <Column title="订单状态" dataIndex="address" key="address" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <>
                            {tags.map(tag => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>
        )
    }

} 