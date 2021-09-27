<template>
	<div class="login-container">
		<el-form
			:model="loginForm"
			status-icon
			:rules="rules"
			ref="loginForm"
			label-width="100px"
			class="login-form"
			label-position="left"
		>
			<el-form-item label="用户名" prop="username">
				<el-input
					v-model="loginForm.username"
					autocomplete="off"
					name="username"
					text="text"
				></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="passwd">
				<el-input
					type="password"
					v-model="loginForm.passwd"
					autocomplete="off"
					name="passwd"
				></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm()">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import {Message} from 'element-ui'
export default {
	name: "login",
	data() {
		var validateUsername = (rule, value, callback) => {
			if (value == "") {
				callback(new Error("请输入用户名!"));
			} else {
				callback()
			}
		};
		var validatePasswd = (rule, value, callback) => {
			if (value == "") {
				callback(new Error("密码不能为空!"));
			} else {
				callback()
			}
		}
		return {
			loginForm: {
				username: "admin",
				passwd: "111111",
			},
			rules: {
				username: [{ validator: validateUsername, trigger: "blur" }],
				passwd: [{ validator: validatePasswd, trigger: "blur" }],
			},
		}
	},
	methods: {
		submitForm() {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					// console.log(this.$store);
					this.$store.dispatch("login", this.loginForm).then(() => {
						Message.success("登陆成功！")
						setTimeout(()=>{
							this.$router.push('/')
						},1000)
					}).catch((err) => {
						Message.error(new Error(err))
					})
				} else {
					console.log("error submit!!")
					return false
				}
			})
		},
	},
};
</script>



<style lang="scss" >
$bg: #283443;

@supports (-webkit-mask: none) and (not (cater-color: white)) {
	.login-container .el-input input {
		color: white;
	}
}
// 重置element-ui的样式
.login-container {
	.el-form-item {
		border-radius: 5px;
		// border:1px solid red;
		background-color: rgba(0, 0, 0, 0.1);

		.el-input {
			display: inline-block;
			height: 47px;
			width: 85%;
			input {
				background: transparent;
				border: 0;
			}
		}
	}
}
</style>

<style lang="scss">
body {
	height: 100%;
	position: relative;
}
#app {
	height: 100%;
}
html {
	height: 100%;
	box-sizing: border-box;
}
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
	min-height: 100%;
	width: 100%;
	background-color: $bg;
	overflow: hidden;

	.login-form {
		position: relative;
		width: 520px;
		max-width: 100%;
		padding-top: 160px;
		margin: 0 auto;
		overflow: hidden;
	}
}
</style>