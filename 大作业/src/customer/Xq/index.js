import React,{Component,Fragment} from 'react'
import { Descriptions } from 'antd';
import qs from 'querystring'
export default class Xq extends Component{

    state = {}
    componentDidMount(){
        let params = this.props.location.search
        params = params.replace(/^\?/,"")
        const obj = qs.parse(params)
        this.setState(obj)
    }
     render(){
		return (
            <Fragment>
                <Descriptions title="User Info" layout='vertical' bordered={true} size='middle'>
                    <Descriptions.Item label="UserName">{this.state.name}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{ }</Descriptions.Item>
                    <Descriptions.Item label="age">{this.state.age }</Descriptions.Item>
                    <Descriptions.Item label="Remark">{ }</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        {this.state.address}
                    </Descriptions.Item>
                </Descriptions>
            </Fragment>
			    
            )

     }

}