<template>
  <div class="productcate">
    <!-- 数据列表 -->
    <el-card class="box-card">
        <span><i class="iconfont icon-dingdan1"></i> 数据列表</span>
        <el-button class="product-btn" type="button" @click="goAddProduct">添加</el-button>
        <el-button type="primary" class="product-btn margin-btn" v-if="parent_id" size="mini" @click="handleBack">返回上一级</el-button> 
    </el-card>
    <!-- 数据表格 -->
    <div class="product-con">
			<template>
			  <el-table
				:data="list"
				border
				style="width: 100%">
				<el-table-column prop="id" label="编号" width="50px">
        </el-table-column>
				<el-table-column
				  prop="name"
				  label="分类名称">
				</el-table-column>
				<el-table-column
				  label="级别">
				  <template slot-scope="scope">
					  <div>{{scope.row.level|jibieFilter}}</div>
				  </template>
				</el-table-column>
				<el-table-column label="商品数量" prop="product_count">
				</el-table-column>
				<el-table-column label="数量单位" prop="product_count">
        </el-table-column>
				<el-table-column label="是否显示" prop="show_status">
        </el-table-column>
        <el-table-column label="排序" prop="sort"></el-table-column>
        <el-table-column label="设置" >
          <template slot-scope="scope">
            <el-button plain 
            @click="handleShowNextLevel(scope.row)"
            :disabled="scope.row.level | disableNextLevel"
            >查看下级</el-button>
        </template>
        </el-table-column>
				<el-table-column label="操作" >
					<template slot-scope="scope">
            <el-button
              size="mini"
              >编辑</el-button>
            <el-button
              size="mini"
              type="danger">删除</el-button>
        </template>
				</el-table-column>
			</el-table>
			</template>
		</div>
    <div class="block">
        <el-pagination class="marginB"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="listQuery.pageNum"
        :page-sizes="[5, 10, 15]"
        :page-size="listQuery.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
import {fetchProductCatelor2} from '../../../api/product';
export default {
 name:'productCate',
 data:function(){
   return {
      list:[],
      parent_id:0, //初始显示的是一级节点
      listQuery:{
        pageNum:1,
        pageSize:5
      },
      total:0
   }
 },
 watch:{
   $route(route){
     //重新获取父级id
     this.resetParentId();
     this.getList();
   }
 },
 mounted:function(){
   this.getList();
   this.resetParentId();
 },
 methods:{
   //重置parent_id:如果 query传了parentid就赋值，如果没传就是赋值为0
    resetParentId:function(){
      if(this.$route.query.parentId != null){
        this.parent_id = this.$route.query.parentId;
      }else{
        this.parent_id = 0;
      }
    },
   getList:function(){
    //获取数据
    fetchProductCatelor2(this.parent_id,this.listQuery).then(res=>{
        console.log(res);
        this.list =res.data; 
        this.total = res.total;
    })
  },
  goAddProduct:function(){
    //跳转到添加商品页面
    // this.$router.push("/pms/addproduct");
  },
  //更改每页多少条数据
  handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
    this.listQuery.pageNum = 1;
    this.listQuery.pageSize = val;
    this.getList();		
  },
  //更改当前页
  handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
    this.listQuery.pageNum = val;
    this.getList();
  },
  //查看下级节点数据
  handleShowNextLevel:function(row){
    this.$router.push({path:'/pms/productCate',query:{parentId:row.id}});
  },
  //返回上一级
  handleBack:function(){
    this.$router.push({path:'/pms/productCate'});
  }
 },
 filters:{
   jibieFilter(value){
    if(value === 0){
        return "一级";
    };
  },
  valueFilter(value){
    if(value === 0){
        return false;
    }else{
      return true;
    };  
  },
  disableNextLevel:function(value){
    if(value == 0){
      return false;
    }else{
      return true;
    }
  }
 }
}
</script>

<style scoped="scoped" lang="scss">
  .box-card{
		margin:10px;
		.product-btn{
			float: right; 
			padding: 5px 10px;	
		}
	}
  .el-table{
    text-align: center;
  }
  .product-con{
		margin:10px;
		.list-img{width: 80px;}
	}
    .product-form{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
    .marginB{
        margin-bottom: 20px;
        text-align: right;
    }
    .cell{
        .caozuo{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
        }
        .el-button{
            padding: 5px 10px;
        }
    }
</style>