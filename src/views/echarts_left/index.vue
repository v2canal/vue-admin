<template>
	<div class="SideBar">
		<h3>显示系统通知与咨询</h3>
		<waterPie />
		<waterBar />
	</div>
</template>

<script>
import waterPie from './waterPie'
import waterBar from './waterBar'
export default {
	name: 'SideBar',
	components: {
		waterPie,
		waterBar
	}
}
</script>
<style lang="scss">
.SideBar {
	h3 {
		color: white;
	}
	padding: 10px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: max-content;
	height: max-content;
}
</style>