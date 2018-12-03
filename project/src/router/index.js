import Vue from 'vue'
import Router from 'vue-router'
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
  		     path: '/portal',
			  component: () => import('@/components/portal/portal')
			},
			{
				path:'/login',
				component:()=>import('@/views/login/login')
			},
			{
				path:'/',
				redirect:'/portal'
			}
    ]
})
