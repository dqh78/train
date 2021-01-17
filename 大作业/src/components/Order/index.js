import React,{Component,Fragment} from 'react'
import './index.css'
import { Select,Input } from 'antd';
import { DatePicker,Space,Button, Menu, Dropdown, Col, Row,  InputNumber,  AutoComplete, Cascader,Table } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Column, ColumnGroup } = Table;


const data = [
  {
    key: '1',
    name: 'John',
    age: 32,
    order:'发货'
  },
  {
    key: '2',
    name: 'Jim',
    age: 42,
    order: '发货',
  },
  {
    key: '3',
    name: 'Joe',
    age: 32,
    order: '未发货',
  },
];
for (let i = 0; i < 100; i++) {
  let o = Math.pow(-1, i)
  data.push({
      key: i,
      name: `张三 ${i}`,
      age: 0+i,
      order:o>0?"发货":"未发货"
  }); 
}
export default class Order extends Component {

       state = {
           data
          }   

    search=()=>{
       const staus = this.status
       const value2 = this.order.state.value
       console.log(staus);
       const dat = data.filter((value)=>{
              return value.age == value2&&value.order==staus
       })
       this.setState({data:dat}) 
    }

    reset=()=>{
      this.setState({data})
    }
    render(){ 
      
         
          return (
            <Fragment>
              <h1>订单列表</h1>
              <Select
    showSearch
    style={{ width: 130 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">全部订单状态</Option>
    <Option value="2">进行中</Option>
    <Option value="3">已完成</Option>
    <Option value="4">已取消</Option>
  </Select>,
  <Select
    onSelect={value => this.status = value}
    showSearch
    style={{ width: 130 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
    ref={c=>this.status = c}>
    <Option value="发货">已发货</Option>
    <Option value="未发货">未发货</Option>
  </Select>,
  <Space direction="vertical" size={13}>
                    <RangePicker 
                    style={{width:200}}
                    renderExtraFooter={() => 'extra footer'} />
                </Space>
                <Input ref={c=>this.order = c} style={{width:210}} placeholder="请输入订单编号" />
                <>
    <Button onClick={this.search} type="primary">查询</Button>
    <Button onClick={this.reset}>重置</Button>
  
  </>,
    <br />
    <Input.Group compact>
      <Input style={{ width: '15%' }} defaultValue="最小金额" />——
      <Input style={{ width: '25%' }} defaultValue="最大金额" />
    </Input.Group>
    <br />
    <br />
    <Input.Group compact>
      <Input style={{ width: '15%' }} defaultValue="最小订单" />——
      <Input style={{ width: '25%' }} defaultValue="最大订单" />
    </Input.Group>
    <br />

    <Table dataSource={this.state.data} pagination={{ pageSize: 8 }} scroll={{ y: 240 }}  style={{width:1000}}>  
                <Column title="订单编号" dataIndex="age" key="1" />
                <Column title="付款时间" dataIndex="age" key="2" />
                <Column title="订单状态" dataIndex="order" key="3" />
            </Table>
            </Fragment>
            
        )
        
    }
    }