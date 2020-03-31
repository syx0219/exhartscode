import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './index.scss';
import Bimai from '../../components/main/bimai.js';
import MainSwiper from '../../components/main/mainswiper.js';
import JinRiMiaoSha from '../../components/main/jinrimiaosha.js';
import Tupian from '../../components/main/tupian.js';
import {lunboData,miaoshaData} from '../../http/api.js';
class Main extends Component{
    constructor(){
        super();
        this.state ={
            bimaiList:[],
            bimaiNav:[//必买爆款的变量
				{"id":1,"group_id":28797,"name":"畅销尖货",activeType:true},
				{"id":2,"group_id":28798,"name":"春夏必备",activeType:false},
				{"id":3,"group_id":28799,"name":"低价精选",activeType:false},
				{"id":4,"group_id":28800,"name":"当季热卖",activeType:false}
            ],
            lunboList:[],
            miaoshaList:[],//秒杀列表
            nowTime:0,//现在的时间戳
            endTime:0,//结束的事件戳
            picList:[],
            pictureList:[]
        }
    }
    componentDidMount(){
        this.getBiMaiData(28797);
        this.getLunboData();
        this.getMiaoShaData();
        this.getPicData();
        this.getPictureData()
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }
    getMiaoShaData=()=>{
		miaoshaData().then(res=>{
			console.log(res);
			this.setState({
				miaoshaList:res.data.data.specials_item_v_o_s,
				nowTime:res.data.data.now,
				endTime:res.data.data.specials_time_ranges[0].end
			})
		})
	}
    getLunboData=()=>{
        lunboData().then(res=>{
            console.log(res);
            this.setState({
                lunboList:res.data.data.chajian.datas
            })
        })
    }
    getBiMaiData=(group_id)=>{
        console.log(group_id);
        let bimaiNav =this.state.bimaiNav;
        for(var i = 0;i<bimaiNav.length;i++){
            bimaiNav[i].activeType = false;
            if(bimaiNav[i].group_id === group_id){
                bimaiNav[i].activeType = true;
            }
        }
        this.setState({
            bimaiNav:bimaiNav
        })
        axios.get("item/ws/group_list?current_page=1&page_size=9&group_id="+group_id+"&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c")
        .then(res=>{
            console.log(res);
            this.setState({
                bimaiList:res.data.data.item_list
            })
        })
    } 
    getPicData =()=>{
        axios.get("/tms/aladdin/get?code=show_picture1&version=&app_channel=wap&plat=wap&access_token=&device_id=64575280-6f07-11ea-a398-f9014986531e").then(res=>{
            console.log(res);
            this.setState({
                picList : res.data.data.datas
            })
        })
    }
    getPictureData =()=>{
        axios.get("/tms/aladdin/get?code=show_picture2&version=&app_channel=wap&plat=wap&access_token=&device_id=64575280-6f07-11ea-a398-f9014986531e").then(res=>{
            console.log(res);
            this.setState({
                pictureList : res.data.data.datas
            })
        })
    }
    render(){
        const {bimaiList,bimaiNav,lunboList,miaoshaList,nowTime,endTime,picList,pictureList} = this.state;
        return (
            <div className="main-con">
                <div className="main-img"><img alt="攻略" src="https://image.watsons.com.cn//upload/d05b93ca.png"/></div>
				<div className="main-img"><img alt="美妆嘉年华" src="https://image.watsons.com.cn//upload/61fbcc3d.gif"/></div>
                <Tupian picList={picList}></Tupian>
                <Tupian picList={pictureList}></Tupian>
                <div className="main-img"><img alt="直播" src="https://image.watsons.com.cn//upload/1ec2308b.jpg"/></div>
                <div className="main-img"><img alt="狂欢购" src="https://image.watsons.com.cn//upload/e9b274cf.jpg"/></div>
                <div className="main-img"><img alt="抢" src="https://image.watsons.com.cn//upload/4c2a8464.gif"/></div>
                <div className="main-img"><img alt="新人礼包" src="https://image.watsons.com.cn//upload/d7074911.png"/></div>
                <div className="main-img"><img alt="新人" src="https://image.watsons.com.cn//upload/0562ea2e.gif"/></div>
                {
                    nowTime !==0 && endTime!==0?
                    <JinRiMiaoSha miaoshaList={miaoshaList} nowTime={nowTime} endTime={endTime}/>:""	
                }
                <div className="main-img"><img alt="榜单" src="https://image.watsons.com.cn//upload/4fa174fb.png"/></div>
                <div className="main-img"><img alt="趋势" src="https://image.watsons.com.cn//upload/8da8abb3.jpg"/></div>
                <div className="main-img"><img alt="热搜" src="https://image.watsons.com.cn//upload/3a8ad96d.jpg"/></div>
				<div className="main-img"><img alt="必买爆款" src="https://image.watsons.com.cn//upload/998a3a0c.jpg"/></div>
                <ul className="bimai-nav">
                    {
                        bimaiNav.map(item=>(<li key={item.id} 
                            className={item.activeType?"active":""}  
                            onClick={this.getBiMaiData.bind(this,item.group_id)}>
                            {item.name}
                            
                            </li>))
                    }
                </ul>
				<Bimai  bimaiList={bimaiList}/>
                {/*轮播*/}
                <MainSwiper lunboList={lunboList}/>
                <Link to="/list">
                    <img className="hufu" src="https://image.watsons.com.cn//upload/6b197213.jpg" alt="护肤会场"/>
                </Link>
            </div>
            
        )
    }
}
export default Main;