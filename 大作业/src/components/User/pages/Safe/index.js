import React,{Component,Fragment}  from 'react'

export default class Safe extends Component{
	
	render(){
		return (
		    <Fragment>
			    <span className="s1">修改密码</span>
			    <div id="ricon">
			    	
			    	&nbsp; &nbsp;当前密码:<input type="text" placeholder="请输入当前密码"  /><br/><br/>
			    	&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;新密码:<input type="text" placeholder="请输入新密码"   /> 
			    	<br/><br/>确认新密码:<input type="text" placeholder="请再次输入新密码"   /><br/><br/>
			    	<button type="button"  >保存</button>
			    </div>
			</Fragment>
		)
	}
	
} 