<template>
    <div>
        <!-- 查询条件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span><i class="icon iconfont icon-sousuo-copy"></i>筛选搜索</span>
                <el-button class="product-btn margin-btn" type="button" @click="handlersetList()">重置</el-button>
                <el-button class="product-btn" type="primary" @click="handleSearchList()">查询</el-button>
            </div>
            <!-- 搜索表单项 -->
            <el-form class="product-form" ref='from' :model="listQuery" label-width="100px">
                <el-form-item label="输入搜索：">
                    <el-input class="input-width" v-model="listQuery.name" placeholder="商品名称"></el-input>
                </el-form-item>
                <el-form-item label="商品货号：">
                    <el-input class="input-width" v-model="listQuery.product_sn" placeholder="商品货号"></el-input>
                </el-form-item>
                <el-form-item label="商品分类：" clearable>
                    <el-cascader class="input-width" v-model="selectProductCateValue" :options="productCateOptions"  placeholder="请选择"></el-cascader>
                </el-form-item>
                <el-form-item label="商品品牌:">
                    <el-select v-model="listQuery.brand_id" placeholder="请选择品牌"  class="input-width" >
                        <el-option v-for="item in brandOptions" :key = "item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="上架状态：">
                    <el-select class="input-width" v-model="listQuery.publish_status" placeholder="全部" >
                        <el-option v-for="item in publishStatusOptions" :key = "item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="审核状态：">
                    <el-select class="input-width" v-model="listQuery.verify_status" placeholder="全部" >
                        <el-option v-for="item in verifyStatusOptions" :key = "item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="box-card">
            <span><i class="iconfont icon-dingdan1"></i> 数据列表</span>
            <el-button class="product-btn" type="primary" @click="goAddProduct">添加</el-button>
        </el-card>
        <!-- 数据表格 -->
        <div class="product-con">
			<template>
			  <el-table
				:data="list"
				border
				style="width: 100%">
				<el-table-column prop="id" label="编号" width="50px"></el-table-column>
				<el-table-column label="商品图片" >
				  <template slot-scope="scope">
					  <img class="list-img" :src="scope.row.pic" />
				  </template>
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="商品名称">
				</el-table-column>
				<el-table-column
				  label="价格/货号">
				  <template slot-scope="scope">
					  <div>价格：￥ {{scope.row.price}}</div>
					  <div>货号：{{scope.row.product_sn}}</div>
				  </template>
				</el-table-column>
				<el-table-column
				  label="标签">
				  <template slot-scope="scope">
					  <div>上架：{{scope.row.publish_status | statusFilter}}</div>
					  <div>新品：{{scope.row.new_status | statusFilter}}</div>
					  <div>推荐：{{scope.row.recommand_status | statusFilter}}</div>
				  </template>
				</el-table-column>
				<el-table-column label="排序" prop="sort"></el-table-column>
				<el-table-column label="销量" prop="sale"></el-table-column>
				<el-table-column label="审核状态" prop="verify_status">
                    <template slot-scope="scope">
					  <div>{{scope.row.verify_status | verifyFilter}}</div>
				  </template>
                </el-table-column>
				<el-table-column label="操作" >
					<template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleUpdateProduct(scope.row)"
                        >编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDeleteProduct(scope.row)"
                        >删除</el-button>
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
import {fetchList,fetchCateList,fetchBrandList,deletProduct} from '../../../api/product';
export default {
    name:'productList',
    data:function(){
        return {
            list:[],
            total:0,
            cateList:[],
            listQuery:{
                name:null,//商品名称
                pageNum:1,//商品显示的页码
                pageSize:10,//每页显示的数量
                publish_status:null,//上架状态
                verify_status:null,//审核状态
                product_sn:null,//商品货号
                product_category_id:null,//商品分类的id
                brand_id:null //品牌的id
            },
            publishStatusOptions:[
                {value:1,label:'上架'},
                {value:0,label:'下架'}
            ],
            brandOptions:[],
            verifyStatusOptions:[
                {value:1,label:'审核'},
                {value:0,label:'未审核'}
            ],
            //商品分类
            productCateOptions:[],
            selectProductCateValue:null,
        }
    },
    watch:{
        //监听选择器选项
        selectProductCateValue:function(newValue){
            console.log(newValue);
            if(newValue !== null && newValue.length == 2){
                this.listQuery.product_category_id = newValue[1];
            }else{
                this.listQuery.product_category_id = null;
            }
        }
    },
    mounted:function(){
        //获取列表数据
        this.getList();
        //获取分类列表数据
        this.getCateList();
        //获取品牌列表数据
        this.getBrandList();
    },
    methods:{
        getList:function(){
            console.log(this.listQuery);
            fetchList(this.listQuery).then(res=>{
                console.log(res);
                this.list = res.product;
                this.total = res.total;
            })
        },
        getCateList:function(){
            //获取数据
            fetchCateList().then(res=>{
                console.log(res);
                //重组数据
                let list = res.data;
                this.productCateOptions = [];
                for(var i = 0; i < list.length; i++){
                    let children = [];
                    if(list[i].children != null && list[i].children.length>0){
                        for(var j = 0; j < list[i].children.length; j++){
                            children.push({label:list[i].children[j].name,value:list[i].children[j].id});
                        }
                    }
                    this.productCateOptions.push({label:list[i].name,value:list[i].id,children:children})
                }
                console.log(this.productCateOptions);
            })
        },
        //获取品牌列表
        getBrandList:function(){
            fetchBrandList().then(res=>{
                console.log(res)
                this.brandOptions = res.data
            })
        },
        //查询
        handleSearchList:function(){
            this.getList();
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.listQuery.pageNum = 1;
            this.listQuery.pageSize = val;
            this.getList();
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.listQuery.pageNum = val;
            this.getList();
        },
        goAddProduct:function(){
            //跳转到添加商品页面
            this.$router.push("/pms/addproduct");
        },
        handlersetList:function(){
            this.listQuery={
                name:null,//商品名称
                pageNum:1,//商品显示的页码
                pageSize:10,//每页显示的数量
                publish_status:null,//上架状态
                verify_status:null,//审核状态
                product_sn:null,//商品货号
                product_category_id:null,//商品分类的id
                brand_id:null //品牌的id
            };
            this.selectProductCateValue = null;
            //重置后在获取数据
            this.getList();
        },
        //修改一条记录
        handleUpdateProduct:function(row){
            //跳转到修改页面
            this.$router.push({path:'/pms/updateproduct',query:{id:row.id}});
        },
        //删除一条记录
        handleDeleteProduct:function(row){
            this.$confirm('是否要进行删除操作？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                console.log(row.id);
                //调用后台删除
                deletProduct({'id':row.id}).then(res=>{
                    console.log(res);
                    if(res.type === 'success'){
                        this.getList();
                    }
                })
            })
        }
    },
    filters:{
        //上架、新品、推荐的状态
        statusFilter(value){
            if(value === 1){
                return "是";
            }else{
                return "否";
            }
        },
        //审核状态的过滤器，审核通过，未审核
        verifyFilter(value){
            if(value === 1){
                return "已审核";
            }else{
                return "未审核";
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
		.margin-btn{margin-left:10px;}
		.input-width{width: 160px;}
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