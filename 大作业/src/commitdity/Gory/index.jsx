import React,{Component} from 'react';
import {Card,Button,Input,Table,Select} from 'antd';
import {PlusOutlined,UserOutlined,BellOutlined,SearchOutlined} from '@ant-design/icons';

import './index.css';
import { Link } from 'react-router-dom';


const {Option} =Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const {Search} = Input;
const onSearch = value => console.log(value);
const columns = [
    {
      title: '分类',
      dataIndex: 'name',
      
    },
    {
      title: '商品数量',
     align:"center",
      dataIndex: 'count',
    },
    {
      title: '操作',
      align:'right',
      dataIndex: 'condition',
    },
  ];
  
  
  const data = [
    {
      key: '1',
      name: '衣服',
      count: "50",
    condition: <Link to="/xin">编辑</Link>},
    {
      key: '2',
      name: '裤子',
      count: 50,
      condition: <Link to="/xin">编辑</Link>,
    },
    {
      key: '3',
      name: '鞋子',
      count: 45,
      condition: <Link to="/xin">编辑</Link>,
    },
    {
        key: '4',
        name: '衣服',
        count: 55,
        condition: <Link to="/xin">编辑</Link>,
      },
    
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    
  };

export default class Gory extends Component {
     state={data}
    search=()=>{
      const value2 = this.a.state.value
      console.log(value2)
      const dat = data.filter((value)=>{
             return value.name == value2
      })
      this.setState({data:dat}) 
    }
    reset=()=>{
      this.setState({data})
    }
    render( )
    {
        return (
          <div className="hearcy">
          <div className="div1"><Button icon={<UserOutlined />} type="link">admin</Button></div>
          <div className="div2"><BellOutlined /></div>
          <div className="div3"><SearchOutlined /></div>
          
    
          <div className="cody">
            <div>
                <h1 className="fen">分类列表</h1>
                <div> 
              
               <Link to="/zl"> <Button type="primary" 
                  className="button-left"
                 size="small"
                icon={<PlusOutlined />} >
                        添加分类
                  </Button>
                </Link> 
                  </div>
                <div>
                    <Card className="cardone">
                    <Input 
                    ref={c => this.a=c}
                    placeholder="请输入分类名称" 
                         className="In"
                        size="small"
                    />
                    <Button type="primary" onClick={this.search} size="small" >查询</Button>&nbsp;
                    <Button type="primary" onClick={this.reset}  size="small">重置</Button>
                   
                    <Table
                      rowSelection={{
                       ...rowSelection,
                       }}
                      className="Ta"
                      columns={columns}
                      dataSource={this.state.data}
                        pagination={{defaultPageSize:3,showQuickJumper:true}}
                        />
                    </Card>
                 </div>
                  </div>
                </div> 
                </div> 
        )
       
                      }
  }
