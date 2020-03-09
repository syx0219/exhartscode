<template>
  <div class="topfive">
      <div class="top5Con">
        <h2>本周最受欢迎TOP5</h2>
        <ul class="top5list">
            <li v-for="(item,index) in toplist" :key="index">
                <router-link :to="'/myitem/'+item.pro_id">
                    <div class="top5_img"><img :src="item.pro_img[0].url" /></div>
                    <div class="top5_text">
                        <div>{{item.pro_name}}</div>
                        <div>{{item.pro_Joiner}}人已参加</div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'TopFive',
    props:['toplist'],
}
</script>

<style lang="scss">
.topfive{
    width: 100%;
    background: #fff;
    padding: 10px 0;
    .top5Con{
        width: 90%; 
        height:400px; 
        background: #004b9e; 
        border-radius: 10px; 
        margin: 0 auto;
        margin-top:20px;
        h2{
            color:#fff; 
            padding:20px;
        }
        .top5list{
            background: #fff; 
            margin:10px; 
            height:300px;
            border-radius: 10px;
            a{
                display: flex; 
                flex-direction: row; 
                flex-wrap: nowrap; 
                height:60px;
                padding:6px ; 
                border-bottom:1px solid #ddd; 
                .top5_img{
                    width:30%;
                    img{
                        width: 80%; 
                        height: 50px;
                    }	
                }
                .top5_text{
                    width: 70%;
                }
            }
        }
	}
}

</style>