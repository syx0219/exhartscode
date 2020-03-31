import React,{Component} from 'react';
import {NavLink,withRouter,Link} from 'react-router-dom';
import {Row,Col,Input} from 'antd';
import { UserOutlined,ShoppingCartOutlined,SearchOutlined} from '@ant-design/icons';
import './header.scss';
class Header extends Component{
    render(){
        // console.log(this.props);
        let {pathname} = this.props.location;
        return (
            <div>{
                pathname==='/' || pathname === '/mask' || pathname === '/good' || pathname === '/global'?
                    <div className="qcs-header">
                        <Row className="qcs-h-search">
                            <Col span={4}>
                                <Link to="/center">
                                    <UserOutlined className="header-font"/>
                                </Link>
                            </Col>
                            <Col span={16}>
                                <Input size="middle" className="header-input" placeholder="保湿面膜0.1元" prefix={<SearchOutlined />} />
                            </Col>
                            <Col span={4}>
                                <Link to="/cart">
                                    <ShoppingCartOutlined className="header-font"/>
                                </Link>
                            </Col>
                        </Row>
                        <nav className="qcs-h-nav">
                            <ul>
                                <li>
                                    <NavLink to="/" exact={true} activeClassName="active">今日推荐</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/mask">面膜中心</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/good">潮流好物</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/global">购全球</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>  
                    :""                
                }
            </div>
        )
    }
}
export default withRouter(Header);