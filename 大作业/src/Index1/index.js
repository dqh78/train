import React, { Component } from 'react'
import { Statistic, Row, Col, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';

import './index.css'
export default class Index extends Component {
    

    componentDidMount(){
        const Myecharts = echarts.init(document.getElementById('main'))
        const Myecharts1 = echarts.init(document.querySelector(".user"))
        const Myecharts2 = echarts.init(document.querySelector('.sail'))
        Myecharts.setOption(
             {
                title: {
                    text: '订单增长趋势'
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            }
        )
        Myecharts1.setOption({
            title: {
                text: '用户日增长'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        })
        Myecharts2.setOption({
            title: {
                text: '销售额日增长'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        })
    }
    render() {
        return (
            <div className="qh">
                <div className="itemlist">
                    <Row gutter={16} style={{ height:200, width:280 }} className="item">
                        <Col span={15} style={{ marginLeft: 90,height:60}}>
                            <Statistic title="总销售额" value={112893} />
                        </Col>
                        <Col span={10} style={{ marginLeft: 30 }}>
                            <Statistic
                                style={{ fontSize: '16px'}}
                                title="周同比"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined  />}
                                suffix="%"
                                valueStyle ={{fontSize:'20px'}}
                            />
                        </Col>
                        <Col span={10} style={{ marginLeft: 10 }}>
                            <Statistic
                                title="日同比"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined style={{ fontSize: '16px'}} />}
                                suffix="%"
                                valueStyle ={{fontSize:'20px'}}
                            />
                        </Col>
                        <Col span={24} >
                            <p style={{marginLeft:'70px',marginTop:'10px',width:'150px'}}>日均销售额:<span>$20.00</span></p>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ height:200, width:280 }} className="item">
                        <Col span={15} style={{ marginLeft: 90,height:60}}>
                            <Statistic title="订单数量" value={112893} />
                        </Col>
                        <Col span={10} style={{ marginLeft: 30 }}>
                            <Statistic
                                style={{ fontSize: '16px'}}
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined  />}
                                suffix="%"
                                valueStyle ={{fontSize:'20px'}}
                            />
                        </Col>
                        <Col span={10} style={{ marginLeft: 10 }}>
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined style={{ fontSize: '16px'}} />}
                                suffix="%"
                                valueStyle ={{fontSize:'20px'}}
                            />
                        </Col>
                        <Col span={24} >
                            <p style={{marginLeft:'70px',marginTop:'10px',width:'150px'}}>日均销售额:<span>$20.00</span></p>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{ height:200, width:280 }} className="item">
                        <Col span={15} style={{ marginLeft: 90,height:60}}>
                            <Statistic title="用户总数" value={112893} />
                        </Col>
                        <Col span={10} style={{ marginLeft: 30 }}>
                            <Statistic
                                style={{ fontSize: '16px'}}
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined  />}
                                suffix="%"
                                valueStyle ={{fontSize:'20px'}}
                            />
                        </Col>
                        <Col span={10} style={{ marginLeft: 10 }}>
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<ArrowDownOutlined style={{ fontSize: '16px'}} />}
                                suffix="%"
                                valueStyle ={{fontSize:'20px'}}
                            />
                        </Col>
                        <Col span={24} >
                            <p style={{marginLeft:'70px',marginTop:'10px',width:'150px'}}>日均销售额:<span>$20.00</span></p>
                        </Col>
                    </Row>
                </div>
                <div id="main"></div>
                <div id="footer">
                    <div className="user"></div>
                    <div className="sail"></div>
                </div>
            </div>
        )
    }

}