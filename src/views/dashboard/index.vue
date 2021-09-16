<template>
	<div>
		<el-button type="primary" @click="logout">log out</el-button>
	</div>
</template>

<script>
export default {
	name: 'DashBoard',
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
}
</script>

<style>
</style>