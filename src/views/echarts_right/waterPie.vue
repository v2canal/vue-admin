<template>
	<div id="pie2" class="waterPie2"></div>
</template>

<script>

export default {
	name: 'waterPie2',
	methods: {
		myEcharts() {
			var myChart = this.$echarts.init(document.getElementById('pie2'));
			var option = {
				tooltip: {
					trigger: 'item'
				},
				legend: {
					orient: 'vertical',
					left: 'left'
				},
				series: [
					{
						name: 'Access From',
						type: 'pie',
						radius: '50%',
						data: [
							{ value: 1048, name: 'Search Engine' },
							{ value: 735, name: 'Direct' },
							{ value: 580, name: 'Email' },
							{ value: 484, name: 'Union Ads' },
							{ value: 300, name: 'Video Ads' }
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			};
			myChart.setOption(option);
		}
	},
	mounted() {
		this.myEcharts();
	}
}
</script>

<style lang="scss">
.waterPie2 {
	display: inline-block;
	width: 200px;
	height: 200px;
}
</style>