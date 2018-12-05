<template>
	<div>
      <div>
      	<top></top>
      </div>
    <div class="leftBody">
      <left></left>
    </div>
    <div class="contextBody" >
      <right></right>
    </div>
    </div>
</template>
<script>
	import left from '@/components/left/left'
	import top from '@/components/top/top'
	import right from '@/components/right/right'
	export default {
	  name: 'App',
	  components:{
	    left,
	    top,
	    right
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
