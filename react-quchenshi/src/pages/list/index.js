import React,{Component} from 'react';
import axios from 'axios';
import './index.scss';
//引入高级组件
import withBack from '../../components/hoc/withback.js';
class List extends Component{
    constructor(){
        super();
        this.state={
            listArr:[],
            page:1,
            end:false
        }
    }
    componentDidMount(){
        axios.get("/item/ws/group_list?current_page=1&page_size=24&group_id=28516&device_id=d667b580-6e63-11ea-bc08-f9000f2957ab").then(res=>{
            let listArr = res.data.data.item_list;
            this.setState ({
                listArr:listArr
            })
        })
        this.ListScroll();
    }
    ListScroll=()=>{
		window.onscroll=()=>{
			//滚动距离
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//获取窗口的可视高度
			let windowHeight = document.documentElement.clientHeight;
			let scrollHeight = document.body.scrollHeight;
			//console.log("scrollTop:"+scrollTop);
			//console.log("windowHeight:"+windowHeight);
			//console.log("scrollHeight:"+scrollHeight);
			if(scrollHeight - scrollTop <= windowHeight){//触底了,需要加载下一页的数据
				//将当前页加一
				this.setState({
					page:this.state.page+1
				})
				//获取新数据
				this.moreData(this.state.page);	
			}
		}	
	}
    moreData=(page)=>{
        if(!this.state.end){
            axios.get("/item/ws/group_list?current_page="+page+"&page_size=24&group_id=28516&device_id=d667b580-6e63-11ea-bc08-f9000f2957ab").then(res=>{
                let dataArr = res.data.data.item_list;
                if(dataArr === undefined){
                    console.log("到底了");
                    this.setState({
                        end:true
                    })
                }else{
                    let oldArr = this.state.listArr;
                    let newArr = oldArr.concat(dataArr);
                    console.log(newArr);
                    this.setState({
                        listArr:newArr
                    })
                }
            })
        }
    }

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }

	render(){
        let {listArr} = this.state;
		return (
            <div className="list-con">
			<h3> <span onClick={this.props.goBack}>{"<"}</span> <span className="list-title">护肤</span></h3>
			<ul >
				{
					listArr.map((item,index)=>{
						return (
						<li key={index}>
						<img src={item.over_image_url} alt={item.item_short_name}/>
						{item.item_short_name}
						</li>
						)
					})
				}
			</ul>
            <div className="end" style={this.state.end?{"display":"block"}:{"display":"none"}}>已经到底了,请不要再拉了!</div>
		</div>
		)
	}
}

export default withBack(List);