<template>
	<div class="sidebar">
		<!-- 暂时不加上，收放导航功能 -->
		<!-- <el-radio-group
			v-model="isCollapse"
			style="margin-bottom: 20px;"
		>
			<el-radio-button :label="false">展开</el-radio-button>
			<el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group> -->
		<el-menu
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			:collapse="isCollapse"
			default-openeds="1"
			active-text-color="#2F537D"
			router
		>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title" @click="main">雨水资源监控管理系统</span>
				</template>
				<el-menu-item-group>
					<!-- <span slot="title">分组一</span> -->
					<el-menu-item index="index">展示首页</el-menu-item>
					<el-menu-item index="data">数据统计</el-menu-item>
					<el-menu-item index="warnings">危情预警</el-menu-item>
					<el-menu-item index="remote">远程预警</el-menu-item>
					<el-menu-item index="charges">收费管理</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: false
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		},
		main(){
			this.$router.push("/")
		}
	}
}

</script>

<style lang='scss'>
.sidebar {
	display: inline-block;
	height: inherit;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	// min-height: inherit;
	height: 100%;
}
</style>