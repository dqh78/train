import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
export default class Menuo extends Component{
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      render() {
        return (
          <div style={{ width: 256 }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu  style={{height:800}}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
            
               <Link to='/index'>首页</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to='/orders'>订单</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title='商品'>
                 <Menu.Item key="6"><Link to='/shoplist'>商品列表</Link></Menu.Item>
                 <Menu.Item key="7"><Link to='/fenlei'>分类列表</Link></Menu.Item>
             </SubMenu>
              <Menu.Item key="4" icon={<ContainerOutlined />}>
              <Link to='/custom'>顾客</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<ContainerOutlined />}>
              <Link to='/set'>设置</Link>
              </Menu.Item>
            </Menu>
          </div>
        );
      }
    }