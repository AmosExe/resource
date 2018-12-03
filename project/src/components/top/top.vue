<template>
		<div  class="headerWrapper" >
        <header  class="header">
          <div class="homeTitle"><img src="https://raw.githubusercontent.com/AmosExe/resource/master/ASite.png"></div>
            <div  class="container" >
                <div class="topshow">
                  <el-row :gutter="1">
                  <el-col :span="60"><div class="grid-content bg-purple" style="width: 500px;"><el-input v-model="input" placeholder="搜索文档" ></el-input></div></el-col>
                  <el-col :span="500"><div class="grid-content bg-purple" style="float: left;"><el-button slot="append" icon="el-icon-search"></el-button></div></el-col>
                  <el-col :span="60"><div style="float: left">
                    <ul id="topul">
                      <li style="float: left;width: 50px">1</li>
                      <li  style="float: left;width: 50px">2</li>
                      <li  style="float: left;width:50px">3</li>
                    </ul>                  
                  </div>
                  </el-col>
                    <el-col :span="60"><div class="grid-content bg-purple" style="padding-left: 20px">
                      <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link" style="font-size: 22px;float: left;">
                      功 能<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" style="width: 140px">
                      <el-dropdown-item command="a" style="width: 100px">
                      	<router-link to='/testrouter'>
                     	 <div>
                     	 	写文章
                     	 </div>
                  		</router-link>
                      </el-dropdown-item>
                      <el-dropdown-item command="b"  style="width: 100px">
						<router-link to='/testrouter2'>
                   		 <div>
                   		 	博客
                   		 </div>
                      </router-link>
                      </el-dropdown-item>
                      <el-dropdown-item command="c"  style="width: 100px" >螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                    </div></el-col>
                  <el-col :span="2"><div class="grid-content bg-purple">
                    <router-link to='/login'>
                    <el-button type="warning" plain >登录</el-button></router-link></div></el-col>
                   <el-col :span="1"><div class="grid-content bg-purple"><el-button type="warning" plain >注册</el-button></div></el-col>
                  </el-row>
             </div>
            </div>
        </header>
    </div>
</template>
<script type="text/javascript">
  export default{
    methods:{
      loginMethod:{
        // this.$router.push({path:'/login'});
      }
    }
  }
</script>
<style type="text/css" scoped>
	.is-component {
    overflow-y: hidden;
}
h1{
    margin:0;
    float:left;
    font-size:32px;
    font-weight: 400;
}
.headerWrapper {
    height: 80px;
}
article, aside, footer, header, hgroup, main, nav, section {
    display: block;
}
.container{
    width: 1729px;
    padding: 0;
    margin: 0 auto;
    height:70px;
}
.homeTitle{
    float:left;
    padding-left: 50px;
    width:auto;
    height:0;
}
.topshow{
    float: left;
    width: 1324px;
    padding-left: 500px;
}
div #topul{
    float: left;
    list-style-type: none;
    line-height: 50px;
    width: 250px;
    margin-top: 0;
    text-align: top;
}
</style>