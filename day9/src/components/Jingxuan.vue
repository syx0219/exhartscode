<template>
  <div class="jingxuan">
        <div class="xuanze">
            <h1>为你精选</h1>
            <ul>
                <li v-for="(item,index) in jinglist" :key="index">
                    <img :src="item.pro_img[0].url" alt="">
                    <h3>{{item.pro_name}}</h3>
                    <span>{{item.pro_Joiner}}人已参加</span>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name:'Jingxuan',
    props:['jinglist']
}
</script>

<style lang="scss">
.jingxuan{
    background: #ffffff;
    .xuanze{
        width: 90%;
        margin: 10px auto;
        h1{
            font-weight: normal;
            padding: 10px 0;
        }
        ul{
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        li{
            width: 47%;
            margin: 10px 0;
            img{
                width: 100%;
                height: 110px;
                border: none;
                border-radius: 10px;
            }
            h3{
                font-size: 17px;
            }
            span{
                font-size: 12px;
                color: #999;
            }
        }
    }
}
</style>