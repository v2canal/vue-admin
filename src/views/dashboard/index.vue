<template>
	<div class="dashboard">
		<el-button type="primary" @click="logout">log out</el-button>
		<div class="dashboard-body">
			<echartsLeft />
			<mapp />
			<echartsRight />
		</div>
		<div class="dashboard-footer">
			<videos />
			<tables />
		</div>
	</div>
</template>

<script>
import mapp from '@/views/map'
import echartsLeft from '@/views/echarts_left'
import echartsRight from '@/views/echarts_right'
import videos from '@/views/videos'
import tables from '@/views/tables'
export default {
	name: 'DashBoard',
	components: {
		mapp,
		echartsLeft,
		echartsRight,
		videos,
		tables
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
			this.$router.push('/login')
		}
	},
}
</script>

<style lang="scss">
.dashboard {
	width: inherit;
	.dashboard-body {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
  .dashboard-footer{
    display: flex;
		flex-direction: row;
		justify-content: space-evenly;
  }
}
</style>