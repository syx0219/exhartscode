<template>
  <div class="brand">
    <!-- 品牌管理列表 -->
    <el-card class="box-card">
        <span><i class="iconfont icon-dingdan1"></i> 品牌管理列表</span>
        <el-button class="product-btn" type="button" @click="goAddProduct">添加</el-button>
    </el-card>
    <!-- 数据表格 -->
    <div class="product-con">
			<template>
			  <el-table
				:data="list"
				border
				style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
				<el-table-column prop="id" label="编号" width="50px"></el-table-column>
				<el-table-column
				  prop="name"
				  label="品牌名称">
				</el-table-column>
				<el-table-column
				  label="品牌首字母">
				  <template slot-scope="scope">
					  <div>{{scope.row.first_letter}}</div>
				  </template>
				</el-table-column>
        <el-table-column label="排序" prop="sort"></el-table-column>
        <el-table-column label="品牌制造商" prop="sale">
          <template slot-scope="scope">
              <el-switch
                :value ="scope.row.factory_status|valueFilter"
                disabled>
              </el-switch>
          </template>
        </el-table-column>
				<el-table-column label="是否提示" prop="sale">
          <template slot-scope="scope">
              <el-switch
                :value ="scope.row.show_status|valueFilter"
                disabled>
              </el-switch>
          </template>
        </el-table-column>
        <el-table-column
				  label="相关">
				  <template slot-scope="scope">
					  <div>商品：{{scope.row.product_count}}</div>
            <div>评价：{{scope.row.product_comment_count}}0</div>
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
import {fetchBrandsProduct} from '../../../api/product';
export default {
  name:'brand',
  data:function(){
    return {
      list:[],
      listQuery:{
          pageNum:1,//商品显示的页码
          pageSize:5,//每页显示的数量
      },
      total:0,
    }
  },
  mounted:function(){
    this.getBrandList();
  },
  methods:{
    getBrandList:function(){
      //获取数据
      fetchBrandsProduct(this.listQuery).then(res=>{
          console.log(res);
          this.list =res.data; 
          this.total = res.total
      })
    },
    goAddProduct:function(){
      //跳转到添加商品页面
      this.$router.push("/pms/addproduct");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getBrandList();
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.listQuery.pageNum = val;
        this.getBrandList();
    },
  },
  filters:{
    valueFilter(value){
      if(value === 0){
          return false;
      }else{
        return true;
      };  
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
</style>