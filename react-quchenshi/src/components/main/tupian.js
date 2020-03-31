import React,{Component} from 'react';

import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import './tupian.scss'
class Tupian extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    componentDidMount(){

        new Swiper('.swiper-container1',{
            slidesPerView : 3,
        })
    }
    render(){
        let {picList} = this.props;
        return (
            <div className="tupian">
                <div className="swiper-container1">
                    <div className="swiper-wrapper">
                        {   
                            picList.map((item,index)=>{
                                return (
                                    <div className="swiper-slide"  key={index}><img src={item.image_url} alt={item.id}/></div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Tupian