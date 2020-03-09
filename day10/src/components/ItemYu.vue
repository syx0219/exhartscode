<template>
  <div class="itemyu">
      <h3>可预约场馆
          <span>{{yuyuearr.length}}</span>
      </h3>
      <div class="swiper-container1">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item,index) in yuyuearr" :key="index">
                <div class="yuyue-img">
                    <img :src="item.gym_headimg[0].url" alt="">
                </div>
                <div class="yuyue-msg">
                    <p>
                        <span>{{item.gym_name}}</span>
                        <i class="iconfont icon-shoucang"></i>
                    </p>
                    <p>{{item.gym_address}}</p>
                    <div class="yuyue-juli">
                        <span>{{item.gym_distance}}</span>
                        <div class="yuyue-daohang">
                            <span>导航</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'ItemYu',
    props:['kelist','yuyuearr'],
    mounted:function(){
        var mySwiper = new Swiper('.swiper-container1',{
           slidesPerView : 2,
            spaceBetween : 10,
        })
    }
}
</script>

<style lang="scss">
.itemyu{
    width: 95%;
    margin: 10px auto;
    h3{
       font-weight: normal;
       font-size: 18px;
       display: flex;
       flex-direction:row;
       flex-wrap: nowrap;
       justify-content: space-between; 
       span{
           font-size: 13px;
           color: #004b9e;
       }
    }
    ul{
        width: 100%;
        display: flex;
        margin: 10px 0;
        li{
            width: 50%;
            font-size: 14px;
            background: #ebebeb;
            border-radius: 5px;
            margin-right: 10px;
            .yuyue-img{
                height: 120px;
                border-radius: 5px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                }
            }
            .yuyue-msg{
                width: 90%;
                margin: 8px;
                p:nth-of-type(1){
                display: flex;
                flex-direction:row;
                flex-wrap: nowrap;
                justify-content: space-between;
                    span{
                        display: inline-block;
                        width: 80%;
                        line-height: 20px;
                    }
                }
                p:nth-of-type(2){
                    margin-top: 10px;
                    font-size: 12px;
                    line-height: 20px;
                    color: #555;
                }
                .yuyue-juli{
                    display: flex;
                    flex-direction:row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    margin-top: 10px;
                    font-size: 12px;
                    color: #555;
                    .yuyue-daohang{
                        background: #004b9e;
                        padding: 5px;
                        border-radius: 5px;
                        color: #ffffff;
                    }
                }
            }
            
        }
    }
}
</style>