<template>
	<el-carousel  type="card" :interval="1000" height="200px">
		<el-carousel-item v-for="item in 6" :key="item">
			<h3>{{ item }}</h3>
		</el-carousel-item>
	</el-carousel>
</template>


<script>
export default {
	name: 'videos',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scope>
.el-carousel{
  padding: 20px;
  width: 600px;
  border: 1px solid black
}
.el-carousel__item {
	h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
    text-align: center;
		line-height: 200px;
		margin: 0;
	}
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>