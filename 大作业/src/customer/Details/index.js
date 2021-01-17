import React, { Component } from 'react'
import { Table, DatePicker, Space } from 'antd';
import './index.css'
import axios from 'axios'



/*function showTotal(total) {
	return `Total ${total} items`;
}*/
function onChange(date, dateString) {
	console.log(date, dateString);
}
const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
		width: 150,
	},
	{
		title: '地区',
		dataIndex: 'address',
		width: 150,
	},
	{
		title: '订阅状态',
		dataIndex: 'order',
	},
	{
		title: '订单数',
		dataIndex: 'age',
	},
	{
		title: '订单总金额',
		dataIndex: 'age',
	},
];
const data = [];

for (let i = 0; i < 100; i++) {
	let o = Math.pow(-1, i)
	data.push({
		key: i,
		name: `张三 ${i}`,
		age: 32,
		address: `福建 ${i}`,
		order:o>0?"订阅":"未订阅"
	});
}
export default class Details extends Component {
	state = { data }

	search = () => {
		const { c: { value: val } } = this
		const { a: { value: val1 } } = this
		const { b: { value: val2 } } = this
		console.log(val,val1,val2)
		console.log(data)
		const data1 =data.filter((value) => {
			if (value.address == val2 && value.name == val && value.order ==val1 ) return true
		})
		console.log(data1)
		this.setState({data:data1})
	}
	reset = () => {
		this.setState({data})
    }

	render() {
		
		
        return (
            <>
				<div id="heard">
					<div className="right"></div>
				</div>

				<div id="center">
					<div className="center-top">
						<p>顾客列表</p>
					</div>
					<div className="center-body">
						<div className="center-body-top">
							<select ref={(current) => { this.a = current }} className="s1">
								<option value="">全部订阅状态</option>
								<option value="订阅">订阅</option>
								<option value="未订阅">未订阅</option>
								
							</select>
							<select ref={(current) => { this.b = current }} className="s1">
								<option value="">全部地区</option>
								<option value="福建 1">福建 1</option>
								<option value="opel">Opel</option>
								<option value="audi">Audi</option>
							</select>
							<Space className="space" direction="vertical">
								<DatePicker onChange={onChange} />
							</Space>
							<input className="input2" type="text" placeholder="请输入姓名/邮箱/手机" ref={(current) => {this.c =current } } />
							<button className="but1" type="button" onClick={ this.search}>搜索</button>
							<button className="but2" type="button" onClick={this.reset}>重置</button>
						</div>
						<div className="center-body-center">

							<Table onRow={record => {
								return {
									onClick: event => {
										

										window.location.href = `/xq?address=${record.address}&age=${record.age}&name=${record.name}`
									}
								}
							}} columns={columns} dataSource={this.state.data} pagination={{ pageSize: 8 }} scroll={{ y: 240 }} />
                                
						</div>
			
						</div>
					</div>
            </>    
            
     )
}
}
