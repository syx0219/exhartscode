<template>
  <div class="home">
    <!--订单销售额统计-->
    <div class="total-layout">
      <el-row>
        <el-col :span="8" class="total-box">
          <div class="grid-content bg-purple total-box1">
            <img :src="img1" alt="">
            <div>
              <div>今日订单总数</div>
              <div>200</div>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="total-box">
				  <div class="grid-content bg-purple total-box1 ">
					<img :src="img3"  />
					<div>
						<div>今日销售总额</div>
						<div>￥5000</div>
					</div>	
				  </div>
			</el-col>
			  <el-col :span="8" class="total-box">
				  <div class="grid-content bg-purple total-box1 ">
					<img :src="img2"  />
					<div>
					<div>昨日销售总额</div>
					<div>￥3000</div>
					</div>
				  </div>
			  </el-col>
    </el-row>
    </div>
    <!--待处理事务-->
    <div class="un-handle-layout">
      <div class="un-handle-title">待处理事务</div>
      <div class="un-handle-con">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item,index) in PendingArr" :key="index">
            <div class="grid-content bg-purple">
              <div class="un-handle-item">
                <span>{{item.name}}</span>
                <span class="font-red">({{item.count}})</span>
              </div>
            </div>
          </el-col>
      </el-row>
      </div>
    </div>
    <!-- 总览 -->
    <div class="zonglan">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple zonglan-con">
            <div class="zonglan-title">商品总览</div>
            <div class="zonglan-test">
              <el-row>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <p class="zonglan-num">100</p>
                    <p>已下架</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <p class="zonglan-num">400</p>
                    <p>已上架</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <p class="zonglan-num">50</p>
                    <p>库存紧张</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <p class="zonglan-num">500</p>
                    <p>全部商品</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light zonglan-con">
            <div class="zonglan-title">用户总览</div>
            <div class="zonglan-test">
              <el-row>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <p class="zonglan-num">100</p>
                    <p>今日新增</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <p class="zonglan-num">200</p>
                    <p>昨日新增</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <p class="zonglan-num">1000</p>
                    <p>本月新增</p>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple-light">
                    <p class="zonglan-num">5000</p>
                    <p>会员总数</p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
    </el-row>
    </div>
    <!-- 订单统计 -->
    <div class="tongji">
      <div class="tongji-title">订单统计</div>
      <div class="tongji-con">
        <el-row>
          <el-col :span="4" class="tongji-left">
            <div class="grid-content bg-purple">
              <div class="tongji-test" v-for="(item,index) in TongjiArr" :key="index">
                <p class="tongji-name">{{item.name}}</p>
                <p class="tongji-num">{{item.num}}</p>
                <p class="tongji-up"><span :style="item.up == '+10'? 'color:lightgreen;':'color:red;'">{{item.up}}</span>%{{item.type}}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple-light">
              <ve-line :data="chartData" :settings="chartSettings" :loading="loading"></ve-line>
            </div>
            </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import img1 from '@/assets/images/home_order.png';
import img2 from '@/assets/images/home_yesterday_amount.png';
import img3 from '@/assets/images/home_today_amount.png';
export default {
  name:'home',
  data:function(){
    return {
      img1,
      img2,
      img3,
      //待处理事务
      PendingArr:[
        {"name":"待付款订单","count":10},
        {"name":"已完成订单","count":5},
        {"name":"待确认收货订单","count":20},
        {"name":"待发货订单","count":30},
        {"name":"新缺货登记","count":6},
        {"name":"待处理退款申请","count":8},
        {"name":"已发货订单","count":12},
        {"name":"待处理退货订单","count":9},
        {"name":"广告位即将到期","count":10},
      ],
      //订单统计
      TongjiArr:[
        {"name":"本月订单统计","num":10000,"up":"+10","type":"同比上月"},
        {"name":"本周订单总数","num":1000,"up":"-10","type":"同比上周"},
        {"name":"本月销售总额","num":100000,"up":"+10","type":"同比上月"},
        {"name":"本周销售总额","num":50000,"up":"-10","type":"同比上周"},
      ],
      //图表的数据
      chartData:{
        columns: ['date', 'orderCount','orderAmount'],
        rows: [
          {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
          {date: '2018-11-02', orderCount: 20, orderAmount: 2230},
          {date: '2018-11-03', orderCount: 33, orderAmount: 3623},
          {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
          {date: '2018-11-05', orderCount: 80, orderAmount: 8492},
          {date: '2018-11-06', orderCount: 60, orderAmount: 6293},
          {date: '2018-11-07', orderCount: 20, orderAmount: 2293},
          {date: '2018-11-08', orderCount: 60, orderAmount: 6293},
          {date: '2018-11-09', orderCount: 50, orderAmount: 5293},
          {date: '2018-11-10', orderCount: 30, orderAmount: 3293},
          {date: '2018-11-11', orderCount: 20, orderAmount: 2293},
          {date: '2018-11-12', orderCount: 80, orderAmount: 8293},
          {date: '2018-11-13', orderCount: 100, orderAmount: 10293},
          {date: '2018-11-14', orderCount: 10, orderAmount: 1293},
          {date: '2018-11-15', orderCount: 40, orderAmount: 4293}
        ]
      },
      chartSettings:{
        xAxisType:'time',
        area:true,
        axisSite:{right:['orderAmount']},
        labelMap:{'orderCount':'订单数量','orderAmount':'订单金额'}
      },
      loading:true,
    }
  }
}
</script>
<style lang="scss" scoped="scoped">
  .home{
    margin: 20px 10px 0 10px;
    .total-layout{
      .total-box{
				width:30%;
				height:80px;
				border:1px solid #ccc;
				border-radius: 10px;
				margin-left:10px;
				margin-right:10px;
				.total-box1 {
					display: flex; 
					flex-wrap: nowrap; 
					flex-direction: row;
					justify-content: space-around;
					padding:10px;
					img{
						width:40px;
						height:40px;
					}
				}
			}
    }
    .un-handle-layout{
			border:1px solid #ccc; 
			margin-top:20px;
			margin-left:10px;
			margin-right:10px;
			.un-handle-title{
				padding-left:20px;
				background: lightblue;
				height:40px;
				line-height: 40px;
			}
			.un-handle-con{
				margin-left:20px;
				margin-right:20px;
				margin-bottom:20px;
				.un-handle-item{
					border-bottom:1px solid #ccc;
					height:40px;
					line-height:40px;
					margin-right:10px;
					display: flex;
					flex-wrap: nowrap; 
					flex-direction: row;
					justify-content: space-between;
          .font-red{
            color:red;
          }
				}
			}
		}
    .zonglan{
      .zonglan-con{
        border:1px solid #ccc; 
        margin-top:20px;
        margin-left:10px;
        margin-right:10px;
        .zonglan-title{
          padding-left:20px;
          background: lightblue;
          height:40px;
          line-height: 40px;
        }
        .zonglan-test{
          margin: 20px;
          p{
            text-align: center;
          }
          .zonglan-num{
            color: red;
          }
        }
      }
    }
    .tongji{
      border:1px solid #ccc; 
      margin-top:20px;
      margin-left:10px;
      margin-right:10px;
      .tongji-title{
        padding-left:20px;
        background: lightblue;
        height:40px;
        line-height: 40px;
      }
      .tongji-con{
        .tongji-left{
          border-right: 1px solid #ccc;
          .tongji-test{
            margin:15px; 
            line-height: 20px;
            .tongji-name{
              color: #909399;
              font-size: 14px;
            }
            .tongji-num{
              color:#606266;
              font-size: 24px;
              line-height: 30px;
            }
            .tongji-up{
              color: #909399;
              font-size: 14px;
            }
          }
        }

      }
    }
  }
</style>