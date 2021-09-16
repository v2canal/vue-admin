import router from './router'
import {getToken} from './store'
// import {Message} from 'element-ui'
/**
 * 该文件用来管理网站权限
 * 若token中没有管理员信息，则指定跳转到登陆界面
 * 若存在管理员信息，则指定跳转
 */
router.beforeEach((to, from, next) => {
	let hasToken=getToken()
	if(!hasToken){
		// next('/login')
		if(to.path==='/login'){
			next()
		}else{
			next('/login')
		}
	}
	if(hasToken){
		if(to.path==='/login'){
			next('/dashboard')
		}
		next()
	}
})