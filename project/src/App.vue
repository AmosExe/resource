<template>
  <div id="app" >
    <router-view></router-view>
  </div>
</template>

<script>
import portal from '@/components/portal/portal'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components:{
    portal
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
