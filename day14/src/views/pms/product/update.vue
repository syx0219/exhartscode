<template>
  <div class="addproduct">
    <!-- 修改商品信息 -->
    <el-card class="box-card">
      <span><i class="iconfont icon-dingdan1"></i> 修改商品信息</span>
  </el-card>
  <!-- 表单验证 -->
  <el-form :model="productValue" :rules="rules" ref="productValue" label-width="120px" class="add-product-form">
    <el-form-item label="商品分类" prop="product_category_id">
      <el-cascader class="input-width" v-model="selectProductCateValue" :options="productCateOptions"  placeholder="请选择" clearable></el-cascader>
    </el-form-item>
    <el-form-item label="商品名称" prop="name">
      <el-input class="input-width" v-model="productValue.name"></el-input>
    </el-form-item>
    <el-form-item label="副标题" prop="sub_title">
      <el-input class="input-width" v-model="productValue.sub_title"></el-input>
    </el-form-item>
    <el-form-item label="商品品牌" prop="brand_id">
      <el-select v-model="productValue.brand_id" placeholder="请选择品牌"  class="input-width" >
        <el-option v-for="item in brandOptions" :key = "item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="商品介绍" prop="description">
      <el-input class="text input-width" type="textarea" v-model="productValue.description" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="图片链接地址" prop="pic">
      <el-input class="input-width" v-model="productValue.pic"></el-input>
    </el-form-item>
    <el-form-item label="商品货号">
      <el-input class="input-width" v-model="productValue.product_sn"></el-input>
    </el-form-item>
    <el-form-item label="商品售价">
      <el-input class="input-width" v-model="productValue.price"></el-input>
    </el-form-item>
    <el-form-item label="市场价">
      <el-input class="input-width" v-model="productValue.original_price"></el-input>
    </el-form-item>
    <el-form-item label="商品库存">
      <el-input class="input-width" v-model="productValue.stock"></el-input>
    </el-form-item>
    <el-form-item label="计量单价">
      <el-input class="input-width" v-model="productValue.unit"></el-input>
    </el-form-item>
    <el-form-item  label="商品重量">
      <el-input class="input-width" v-model="productValue.weight"></el-input>
      克
    </el-form-item>
    <el-form-item label="排序">
      <el-input class="input-width" v-model="productValue.sort"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('productValue')">提交</el-button>
      <el-button @click="resetForm('productValue')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import {fetchCateList,fetchBrandList,updateProduct,getOneProduct,getParentProductCate} from '../../../api/product'
export default {
  name:'addpoduct',
  data:function(){
      return {
        List:[],
        //商品的默认数据
        productValue:{
            brand_id: null,//商品品牌id
            brand_name: '',//商品品牌名称
            delete_status: 0,//删除标志位，默认填0，表示未删除
            description: '',//商品介绍
            name: '',//商品名称
            original_price: 0,//市场价
            pic: '',//商品图片的url地址
            price: 0,//商品售价
            product_category_id: null,//分类id
            product_category_name: '',//分类名称
            product_sn: '',//商品货号
            sort: 0,//排序
            stock: 0,//商品库存
            sub_title: '',//副标题
            unit: '',//计量单位
            weight: 0,//商品重量
            sale:0,//商品销量
            publish_status:0,//上架
            new_status:0,//新品
            recommand_status:0,//推荐
            verify_status:0,//审核状态  默认是未审核
          },
        rules: {
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' }
          ],
          product_category_id: [
            { required: true, message: '请选择商品分类', trigger: 'blur' }
          ],
          sub_title: [
            { required: true, message: '请输入商品标题', trigger: 'blur' }
          ],
          brand_name: [
            { required: true, message: '请选择商品品牌', trigger: 'blur' }
          ],
          description: [
            { required: true, message: '请输入商品介绍', trigger: 'blur' }
          ],
          pic: [
            { required: true, message: '请输入图片地址', trigger: 'blur' }
          ],
        },
        //商品分类
        productCateOptions:[],
        selectProductCateValue:[],
        brandOptions:[],
      };
    },
    watch:{
      //监听选择器选项
      selectProductCateValue:function(newValue){
          console.log(newValue);
          if(newValue !== null && newValue.length == 2){
              this.productValue.product_category_id = newValue[1];
          }else{
              this.productValue.product_category_id = null;
          }
      }
    },
    mounted:function(){
      //通过id获取商品信息
      getOneProduct({id:this.$route.query.id}).then(res=>{
        console.log(res);
        this.productValue = res.data;
        //商品分类
        getParentProductCate({id:this.productValue.product_category_id}).then(res=>{
          console.log(res);
          console.log(res.data.parent_id);
          this.selectProductCateValue.push(res.data.parent_id);
          this.selectProductCateValue.push(this.productValue.product_category_id);
        })
      })
      this.getCateList();
      this.getBrandList();
    },
    methods: {
      submitForm:function(formName) {
        console.log(formName);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //选中名称
            for(var i = 0; i < this.brandOptions.length; i++){
              if(this.brandOptions[i].id == this.productValue.brand_id){
                this.productValue.brand_name = this.brandOptions[i].name;  
                break;
                }
            }
            //查找分类名称
            for(var i = 0; i < this.productCateOptions.length; i++){
              for(var j = 0; j < this.productCateOptions[i].children.length;j++){
                if(this.productCateOptions[i].children[j].value == this.productValue.product_category_id){
                  this.productValue.product_category_name = this.productCateOptions[i].children[j].label;  
                  break;
                }
              } 
            }
            //传到后台数据
            console.log(this.productValue);
            //调用后台接口
            updateProduct(this.productValue).then(res=>{
              console.log(res);
              if(res.type == 'success'){
                this.$message({
                  message:'成功添加商品',
                  duration:1000,
                  type:'success'
                })
                //跳转到列表页
                this.$router.push('/pms/product');
              }
            })
          } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
              this.brandOptions = res.data;
          })
      },
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .addproduct{
		margin:10px;
    .box-card{
      margin:10px;
    }
		.add-product-form{
			margin:50px 0px;
		}
		.input-width{width:400px;}
	}
</style>