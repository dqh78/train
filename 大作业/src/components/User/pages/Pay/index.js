 import React,{Component,Fragment}  from 'react'
 
 export default class Pay extends Component{
 	
 	render(){
 		return (
 		    <Fragment>
 			    <span className="s1">支付方式</span>
 			  
 			    		<div id="rile">
 			    		 <span className="s1">快速结账</span>
						 
 			    		 <hr/>
 			    		  			    		 
							 <form className="f1">
 			    	           <table>
							       <tbody>
								       <tr><td>Username：<input type="text" placeholder="请输入" /> </td></tr>
								       <tr><td>Password： <input type="text" placeholder="请输入" /></td></tr>
								       <tr><td>Signature： <input type="text" placeholder="请输入" /></td></tr>
								       <tr><td><button type="button">绑定</button></td></tr>
								   </tbody>
							   </table>
							 </form>
							 
							       
							 
 			    		</div>
						
							
						
						
						
						  
 			</Fragment>
 		)
 	}
 	
 }