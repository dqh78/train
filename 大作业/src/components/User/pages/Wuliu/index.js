import React,{Component,Fragment}  from 'react'

export default class Wuliu extends Component{
	
	render(){
		return (
		    <Fragment>
			    <span className="s1">物流方案</span>
			    <div id="ricon1">
			    	 <table  cellSpacing="0">
						 <tbody>
						 <tr><th>方案名称</th><th>运费</th><th>操作</th></tr>
			    	 	<tr><td>普通快递</td><td>￥2.00</td><td ><a href="#">编辑</a> <a href="#">删除</a></td></tr>
			    		<tr><td>顺丰快递</td><td>￥10.00</td><td><a href="#">编辑</a> <a href="#">删除</a></td></tr>
			    		<tr><td>韵达快递</td><td>￥8.00</td><td><a href="#">编辑</a> <a href="#">删除</a></td></tr>
						<tr ><td></td><td><a href="#">+新增方案</a> </td><td></td></tr>
					  </tbody>
			    	 	
			    	 </table>
			    </div>
			</Fragment>
		)
	}
	
}