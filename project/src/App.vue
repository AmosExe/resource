<template>
  <div id="app" >
    <div  class="headerWrapper">
        <header  class="header">
          <div class="homeTitle"><img src="https://raw.githubusercontent.com/AmosExe/resource/master/ASite.png"></div>
            <div  class="container">
               
                <div class="topshow">
                  <el-row :gutter="0">
                  <el-col :span="30"><div class="grid-content bg-purple"><el-input v-model="input" placeholder="搜索文档" ></el-input></div></el-col>
                  <el-col :span="1"><div class="grid-content bg-purple" style="padding-left: 0"><el-button slot="append" icon="el-icon-search"></el-button></div></el-col>
                  <el-col :span="30"><div>
                    <ul id="topul">
                      <li style="float: left;width: 50px">1</li>
                      <li  style="float: left;width: 50px">2</li>
                      <li  style="float: left;width:50px">3</li>
                    </ul>                  
                  </div>
                  </el-col>
                    <el-col :span="200"><div class="grid-content bg-purple" style="padding-left: 20px">
                      <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link" style="font-size: 22px">
                      功 能<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" style="width: 140px">
                      <el-dropdown-item command="a" style="width: 100px">黄金糕</el-dropdown-item>
                      <el-dropdown-item command="b"  style="width: 100px">狮子头</el-dropdown-item>
                      <el-dropdown-item command="c"  style="width: 100px" >螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                    </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  </el-row>
             </div>
            </div>
        </header>
    </div>
    <div>
    <div class="leftBody">
        <ul style="height: auto;" id="leftul">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
    <div class="contextBody" >
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
           <p>1</p>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
   methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
}
</script>

<style lang="css">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
