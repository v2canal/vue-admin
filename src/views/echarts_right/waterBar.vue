<template>
	<div id="bar2" class="waterBar2"></div>
</template>

<script>
export default {
	name: 'waterBar2',
	methods: {
		createBar() {
			var myChart = this.$echarts.init(document.getElementById('bar2'));
			let option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {
					data: ['Forest', 'Steppe', 'Desert', 'Wetland']
				},
				toolbox: {
					show: true,
					orient: 'vertical',
					left: 'right',
					top: 'center',
					feature: {
						mark: { show: true },
						dataView: { show: true, readOnly: false },
						magicType: { show: true, type: ['line', 'bar', 'stack'] },
						restore: { show: true },
						saveAsImage: { show: true }
					}
				},
				xAxis: [
					{
						type: 'category',
						axisTick: { show: false },
						data: ['2012', '2013', '2014', '2015', '2016']
					}
				],
				yAxis: [
					{
						type: 'value'
					}
				],
				series: [
					{
						name: 'Forest',
						type: 'bar',
						barGap: 0,

						emphasis: {
							focus: 'series'
						},
						data: [320, 332, 301, 334, 390]
					},
					{
						name: 'Steppe',
						type: 'bar',

						emphasis: {
							focus: 'series'
						},
						data: [220, 182, 191, 234, 290]
					},
					{
						name: 'Desert',
						type: 'bar',

						emphasis: {
							focus: 'series'
						},
						data: [150, 232, 201, 154, 190]
					},
					{
						name: 'Wetland',
						type: 'bar',

						emphasis: {
							focus: 'series'
						},
						data: [98, 77, 101, 99, 40]
					}
				]
			};
			myChart.setOption(option);

		}
	},
	mounted() {
		this.createBar()
	}
}
</script>

<style lang="scss">
.waterBar2 {
	display: inline-block;
	width: 225px;
	height: 225px;
}
</style>