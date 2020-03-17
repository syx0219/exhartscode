<template>
  <div class="productattr">
      <!-- 商品类型数据列表 -->
      <el-card class="box-card">
        <span><i class="iconfont icon-dingdan1"></i> 商品类型数据列表</span>
        <el-button class="product-btn" type="button" @click="goAddProduct">添加</el-button>
    </el-card>
    <!-- 数据表格 -->
    <div class="product-con">
			<template>
			  <el-table
				:data="list"
				border
				style="width: 100%">
				<el-table-column prop="id" label="编号" width="50px"></el-table-column>
				<el-table-column
				  prop="name"
				  label="类型名称">
				</el-table-column>
				<el-table-column
				  label="属性数量">
				  <template slot-scope="scope">
					  <div>{{scope.row.attribute_count}}</div>
				  </template>
				</el-table-column>
				<el-table-column label="参数数量">
          <template slot-scope="scope">
              <div>{{scope.row.param_count}}</div>
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
        :current-page="list.length"
        :page-sizes="[10, 15,20]"
        :page-size="list.length"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
import {fetchTypeList} from '../../../api/product';
export default {
  name:'productattr',
  data:function(){
    return {
      list:[],
      total:0,
      listQuery:{
          pageNum:1,//商品显示的页码
          pageSize:5,//每页显示的数量
      },
    }
  },
  mounted:function(){
    this.getTypeList();
  },
  methods:{
    getTypeList:function(){
      //获取数据
      fetchTypeList(this.listQuery).then(res=>{
          console.log(res);
          this.total = res.total;
          this.list =res.data; 
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
      this.getTypeList();
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.listQuery.pageNum = val;
        this.getTypeList();
    },
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