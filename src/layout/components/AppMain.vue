<template>
  <div class="app-main">
      <router-view :key="key" />
  </div>
</template>

<script>
export default {
    name:'AppMain',
    computed:{
        key(){
            return this.$route.path
        }
    }
}
</script>

<style scope>
.app-main{
  width: calc(100% - 200px);
  display: block;
  float: right;
}
</style>