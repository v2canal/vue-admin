<template>
	<el-table :data="tableData" border size="mini" height="250px">
		<el-table-column prop="date" label="日期"> </el-table-column>
		<el-table-column prop="name" label="姓名"> </el-table-column>
		<el-table-column prop="address" label="地址"> </el-table-column>
	</el-table>
</template>

<script>
export default {
	data() {
		return {
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: ' 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: ' 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: ' 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: ' 1516 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: ' 1516 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: ' 1516 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: ' 1516 弄'
			}]
		}
	}
}
</script>
<style lang="scss">
.el-table {
	tbody {
		tr {
      &:hover{
        td{
          background-color:#3C4FFF !important;
        }
      }
			background-color: #3babff;
		}
	}

	td {
		background-color: #3babff;
		color: white;
	}

	th.is_self {
		background-color: transparent;
	}
}
</style>
<style lang="scss" scope>
.el-table {
	margin: 20px;
}
</style>