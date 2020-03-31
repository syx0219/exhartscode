import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Bimai extends Component{
	goItem =()=>{
		this.props.history.push('/item');
	}
	render(){
		let {bimaiList} = this.props;
		return (
			<ul className="bimai-con">
				{
					bimaiList.map(item=><li key={item.item_id}>
						<Link to={{pathname:'/item',state:item}}>
							<div className="bimai-img">
								<img src={item.over_image_url} alt={item.item_short_name}/>
								{item.promotions !== undefined ?<div className="bimai-you">{item.promotions[0]}</div>:""}	
							</div>
							<p>{item.item_short_name}</p>
							<div className="bimai-money">
								<span className="bimai-xian">￥{item.max_app_price/100}</span>
								{
									item.min_market_price !== 0 ?<span className="bimai-yuan">￥{item.min_market_price/100}</span>:""
								}	
							</div>
							<div className="bimai-go" onClick={this.goItem}>立即购买</div>
						</Link>
					</li>)
				}
			</ul>
		)
		
	}
}

export default Bimai;