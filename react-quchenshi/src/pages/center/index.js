import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {LeftOutlined,
	ShoppingCartOutlined,
	WalletOutlined,
	RightOutlined,
	GiftOutlined,
	CarOutlined,
	CrownOutlined,
	MoneyCollectOutlined,
	MessageTwoTone,
	RedEnvelopeTwoTone,
	TeamOutlined,
	EnvironmentOutlined,
	CustomerServiceTwoTone,
	CreditCardOutlined,
	MailOutlined,
	PoweroffOutlined,
	ExclamationCircleOutlined,
	FileTextOutlined,
	LockOutlined,
	GiftTwoTone} from '@ant-design/icons';
import './index.scss';
class Center extends Component{
	constructor() {
	    super();
		this.state = {
			tokenType:1//默认值1 表示成功
		}
	}
	componentDidMount(){
		axios.get("http://127.0.0.1:7001/center",{
			headers:{
				'Authorization':localStorage['token']
			}
		}).then(res=>{
			console.log(res);
			if(res.data.code === 0){//登录成功的
				this.setState({
					tokenType:true
				})
			}else{//失败
				this.setState({
					tokenType:false
				})
			}
		});
	}
	logout=()=>{
		localStorage['token'] = "";
		this.props.history.push("/");
	}
	render(){
		const {tokenType} = this.state;	
		if(tokenType){//已经登录了
			return <div className="center-con">
				<div className="center-user">
					<div className="center-header">
						<LeftOutlined />
						<ShoppingCartOutlined />
					</div>
					<div className="center-tree"></div>
					<div className="center-logo"></div>
				</div>
				<div className="center-ding">
					<h3>全部订单 <RightOutlined className="center-you"/></h3>
					<ul className="center-dai">
						<li>
							<WalletOutlined />
							<p>待付款</p>
						</li>
						<li>
							<GiftOutlined />
							<p>待发货</p>
						</li>
						<li>
							<CarOutlined />
							<p>待收货</p>
						</li>
						<li>
							<CrownOutlined />
							<p>待评价</p>
						</li>
						<li>
							<MoneyCollectOutlined />
							<p>退货</p>
						</li>
					</ul>
				</div>
				<div className="center-like">
					<h3>我猜你经常用</h3>
					<ul>
						<li>
						<MailOutlined />
							<p>消息</p>
						</li>
						<li>
							<RedEnvelopeTwoTone />
							<p>优惠券</p>
						</li>
						<li>
							<TeamOutlined />
							<p>我的拼团</p>
						</li>
						<li>
							<EnvironmentOutlined />
							<p>收货地址</p>
						</li>
						<li>
							<CustomerServiceTwoTone />
							<p>联系客服</p>
						</li>
						<li>
							<CreditCardOutlined />
							<p>会员卡</p>
						</li>
						<li>
							<MessageTwoTone />
							<p>建议反馈</p>
						</li>
						<li onClick={this.logout}>
							<PoweroffOutlined />
							<p>退出登录</p>
						</li>
						<li>
							<ExclamationCircleOutlined />
							<p>关于我们</p>
						</li>
						<li>
							<FileTextOutlined />
							<p>用户协议</p>
						</li>
						<li>
							<LockOutlined />
							<p>隐私政策</p>
						</li>
						<li>
							<GiftTwoTone />
							<p>免费福利</p>
						</li>
					</ul>
				</div>
				<div className>

				</div>
			</div>
		}else{//没有登录  ,跳转到登录页
			return <Redirect to = "/login" />
		}
	}
}

export default Center ;
