import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import login from '@/views/login/login'
import portal from '@/components/portal/portal'
Vue.use(Router)

export const constantRouterMap = [
	{
		// path:'',
		// component:portal,
	}
]
export default new Router({
  routes: [
  			{
  		     path: '/',
  		     name:'portal',
			  component:portal
			},
			{
				path:'/login',
				name:'login',
				component:login
			},
			{
				path:'/portal',
				redirect:'/'
			}
    ]
})
