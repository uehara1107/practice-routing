import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Routing from './views/Routing.vue'

Vue.use(Router)

export default new Router({
	mode:'history',

	routes:[
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/routing',
			name: 'routing',
			component: Routing
		}
	]
})