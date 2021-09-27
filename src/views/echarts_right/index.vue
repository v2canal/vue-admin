<template>
  <div class="SideBar">
      <h3>显示时间、天气等信息</h3>
      <waterPie2/>
      <waterBar2/>
  </div>
</template>

<script>
import waterPie2 from './waterPie'
import waterBar2 from './waterBar.vue'
export default {
    name:'SideBar',
    components:{
        waterPie2,
        waterBar2
    }
}
</script>
<style lang="scss">
.SideBar{
    h3{
        color:white;
    }
    padding: 10px;
    border:1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: max-content;
    height: max-content;
}
</style>