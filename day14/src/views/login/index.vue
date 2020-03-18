<template>
  <div class="login">
    <el-card class="box-card login-con">
      <div slot="header" class="clearfix login-title">
		    <span>mall后台管理系统</span>
		  </div>
      <el-form :model="loginForm" :rules="rules" ref="loginForm"  class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
		      <el-button type="primary" class="loginBtn" @click="submitForm('loginForm')">登录</el-button>
		    </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name:'login',
  data:function(){
    const validateUsername = (rule,value,callback)=>{
      const myvalue = value.trim();
      console.log(myvalue);
      if(myvalue !== 'admin' && myvalue !== 'test'){
        callback(new Error('请输入正确的用户名'));
      }else{
        callback();
      }
    }
    return {
      loginForm:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {required:true,trigger:'blur',validator:validateUsername}
        ],
        password:[
          {required:true,trigger:'blur',message:'请输入密码'},
          {min:3,max:8,trigger:'blur',message:'密码的长度在3-8个字符之间'},
        ]
      }
    }
  },
  watch:{
    $route(route){}	
  },
  created:function(){
    this.loginForm.username = getCookie("username");
    this.loginForm.password = "";
  },
   methods: {
    submitForm:function(formName){
				console.log(this.loginForm);
				this.$refs.loginForm.validate(valid=>{
					console.log(58);
					if(valid){//验证通过,修改 vuex里面相关的login的state内容
						this.$store.dispatch('Login',this.loginForm).then(res=>{
							this.$router.push({path:'/'});
						})
					}else{//验证不通过
						return false;
					}
				})
			},
  }
}
</script>

<style lang="scss" scoped="scoped">
  .login-con{
		position: absolute;
		left: 0;
		right: 0;
		width: 360px;
		margin: 140px auto;
		border-top: 10px solid #409EFF;
		text-align: center;
		.login-title{
			font-size:20px;
			text-align: center;
			font-weight: bold;
			color:#409EFF;
		}
		.loginBtn{
      width: 160px;
      margin: 0 auto;
    }

	}
</style>