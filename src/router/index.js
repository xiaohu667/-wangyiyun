import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = ()=>import('../views/main/Main.vue')
const Recommend = ()=>import('../views/recommend/Recommend.vue')
const Rank = ()=>import('../views/rank/Rank.vue')
const Sing = ()=>import('../views/sing/Sing.vue')
const Search = ()=>import('../views/search/Search.vue')
const Among = ()=>import('../views/among/Among.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
const Like = ()=>import('../views/like/Like.vue')
Vue.use(VueRouter)

const routes = [
  {
   path:'',
	 redirect:'/main',
	 meta:{
	 	showTabbar:true
	 }
  },
	{
		path:'/main',
		component : Main,
		meta:{
			showTabbar:true
		}
	},
	{
		path:'/recommend',
		component:Recommend,
		meta:{
			showTabbar:false
		}
	},
	{
		path:'/among/:index',
		component:Among,
		meta:{
			showTabbar:false
		}
	},
	{
		path:'/search',
		component:Search,
		meta:{
			showTabbar:false
		}
	},
	{
		path:'/sing',
		component:Sing,
		meta:{
			showTabbar:false
		}
	},
	{
		path:'/profile',
		component:Profile,
		meta:{
			showTabbar:true
		}
	},
	{
		path:'/like/:index',
		component:Like,
		meta:{
			showTabbar:true
		}
	}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
