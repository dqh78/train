import React,{Component,Fragment} from 'react'
import Menu from './components/Memu'
import Order from './components/Order'
import Details from './customer/Details'
import Xq from './customer/Xq'
import User from './components/User'
import Index from './Index1'
import Product from './commitdity/Product'
import Xin from './commitdity/Xin'
import Zlei from './commitdity/Zlei'
import Gory from './commitdity/Gory'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './App.css'


export default class App extends Component {
        state = {
            islogin:true
    }

   
    render() {
            const onFinish = (values) => {
                console.log('Received values of form: ', values);
                if (values.username === 'admin' && values.password === '123456') {
                    const { islogin } = this.state
                    this.setState({ islogin: !islogin })
                } else {
                    alert(' ‰»Î¥ÌŒÛ')
                }
            };
        return (<>{this.state.islogin ? (
            <div className="body">
               
                <div className="box">
                    <div className="box-top">
                        <h1> LOGIN  </h1>
                    </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                            </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
               </Button>
               
                </Form.Item>
                    </Form > </div>
                </div>) : (<div className='total'>
                <div className="left"><Menu /></div>
                <div className="context">
                    <Switch>
                        
                        <Route path="/orders" component={Order}></Route>
                        <Route path="/custom" component={Details}></Route>
                        <Route path="/set" component={User}></Route>
                        <Route path="/index" component={Index}></Route>
                        <Route path="/xq" component={Xq}></Route>
                        <Route path="/index" component={Index}></Route>
                        <Route path="/shoplist" component={Product}></Route>
                        <Route path="/xin" component={Xin}></Route>
                        <Route path="/fenlei" component={Gory}></Route>
                        <Route path="/zl" component={Zlei}></Route>
                        <Redirect to='/index' />
                    </Switch>
                </div>
            </div>)}</>)


        }
}

