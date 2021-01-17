import React,{Component} from 'react';
import {Card,Table,Select,Input,Button,Tag,Space} from 'antd';
import { AudioOutlined,PlusOutlined,SearchOutlined,BellOutlined
  ,UserOutlined 
} from '@ant-design/icons';
import './index.css';
import {BrowerRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';


const { Column, ColumnGroup } = Table;
const {Option} =Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const {Search} = Input;

const columns = [
    {
      title: '商品',
      dataIndex: 'name',
      
    },
    {
      title: '分类',
      dataIndex: 'classify',
      align:"right",
    },
    {
      title: '状态',
      dataIndex: 'tags',
      align:"right",
      render: tags =>(
        <>
        {tags && tags.map(tag => {
          let color = tag.length < 3 ? 'geekblue' :'red';
          if (tag == 'loser'){
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
        );}
      ) }
       </>),
    },
    {
      title: '操作',
      dataIndex: 'act',
      align:"right",
    },
  ]  
  
  const data = [
    {
      key: '1',
      name: '冬季上衣',
      classify: "衣服",
      tags:['上架'],
      act:<Link to="/xin">编辑</Link>
    },
    {
      key: '2',
      name: '冬季裤子',
      classify: "裤子",
      tags:['已下架'],
      act:<Link to="/xin">编辑</Link>
    },
    {
      key: '3',
      name: '冬季鞋',
      classify: "鞋子",
      tags:['上架'],
      act:<Link to="/xin">编辑</Link>
    },
    {
      key: '4',
      name: '冬季棉袄',
      classify: "衣服",
      tags:['已下架'],
      act:<Link to="/xin">编辑</Link>
    },
  ];
 for (let index = 5; index < 50; index++) {
    data.push({
        key:`${index}`,
        name:index%2===0?'冬季棉袄':(index%3===0?'冬季裤子':'冬季鞋'),
        classify:index%2===0?'衣服':(index%3===0?'裤子':'鞋子'),
        tags:index%2 === 0 ?['上架']:['已下架'],
        act:<Link to="/xin">编辑</Link>
    })
    
  }


  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    
  };
  
  export default class Product extends Component {

    state = {data}
    onSearch = value2 => {
      console.log(this.fen);
      console.log(this.status);
      console.log(value2);
      const dat = data.filter((value)=>{
        if ((value.name == value2)&&(value.classify == this.fen)&&(value.tags[0] == this.status)) {
          return true
        } 
        
    })
      if (dat.length === 0) {
          alert('暂无订单信息')
         return this.setState({data})
      }
      this.setState({data:dat}) 
    }
    render( )
     
    {
        return (
          <div className="headere">
            <div className="div1"><Button icon={<UserOutlined />} type="link">admin</Button></div>
            <div className="div2"><BellOutlined /></div>
            <div className="div3"><SearchOutlined /></div>
           
          <div className="body">
                <div>
                    <p className="shang">商品列表</p>
            <Link to="/xin">    <Button type="primary" 
                  className="button-left"
                 size="small"
                icon={<PlusOutlined />}
                 >
                        添加商品
                  </Button>   </Link>
            <Card className="card">
            <Select 
            
                    onSelect ={value=>this.fen = value}
                    className="biao"
                    size="small"
                    defaultValue="全部分类"
                    onChange={handleChange}>
         <Option value="全部分类">全部分类</Option>
         <Option value="衣服">衣服</Option>
         <Option value="鞋子">鞋子</Option>
         <Option value="裤子">裤子</Option>
                    </Select>
            
            <Select className="biao-1"
            size="small"
            defaultValue="全部标签"
            onChange={handleChange}>
         <Option value="全部标签">全部标签</Option>
         <Option value="1">标签1</Option>
         <Option value="2">标签2</Option>
         <Option value="3">标签3</Option>
            </Select>
            <Select 
                onSelect ={value=>this.status = value}
               className="biao-2"
               size="small"
              defaultValue="全部状态"
              onChange={handleChange}> 
         <Option value="全部状态">全部状态</Option>
         <Option value="上架">已上架</Option>
         <Option value="已下架">已下架</Option>
              </Select>
            
            <Search
            size="small"
            placeholder="请输入商品名" 
            onSearch={this.onSearch} 
            enterButton 
            className="search-1"
            />


            <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={this.state.data}
        pagination={{defaultPageSize:3,showQuickJumper:true}}
      />
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
        </Card>
</div>
</div>
          
</div>
            
                
        )
    }
}

