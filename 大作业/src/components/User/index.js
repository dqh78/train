import React,{Component,Fragment} from 'react'
import {NavLink,Redirect,Route,Switch} from 'react-router-dom'
import Safe from './pages/Safe'
import Wuliu from './pages/Wuliu'
import Pay from './pages/Pay'
import  './index.css'


export default class User extends Component{
	render(){
		return(
	 <Fragment>
		   <div id="body1">
		   <span className="s1">设置</span>
		   		   	<div id="context">
						
		   		<div id="left">
		   			<ul className="ulself">
		   				<li><NavLink to="/set/safe">安全设置</NavLink></li>
		   				<li><NavLink to="/set/wuliu">物流设置</NavLink></li>
		   				<li><NavLink to="/set/pay">支付设置</NavLink></li>
		   			</ul>
		   		</div>
		   		<div id="right">
		   			<Switch>

					   <Route path='/set/safe' component ={Safe}/>
					   <Route path='/set/wuliu' component ={Wuliu}/>
					   <Route path='/set/pay' component ={Pay}/>
					   <Redirect to="/set/safe" />
					   </Switch>
					   	   	
		   		</div>
		   
		   	</div>
		   	&nbsp;
		   </div>
		   
		    </Fragment>
		)
	}
	
}