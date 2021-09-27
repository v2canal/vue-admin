<template>
  <div class="layout">
      <sidebar class="sidebar-container"/>
      <appmain/>
  </div>
</template>


<script>
import appmain from './components/AppMain.vue'
import sidebar from './components/SideBar'
export default {
  name:'layout',
  components:{
    sidebar,
    appmain
  }
}
</script>

<style lang="scss" scope>
.layout{
  position: relative;
  height: 100%;
  width:100%;
}

.sidebar-container{
  position: fixed;
}
</style>