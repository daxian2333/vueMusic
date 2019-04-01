import Vue from 'vue'
import Router from 'vue-router'
import Billboard from '../components/Billboards/Billboard'
import Home from '../components/Home/Home'
import RankList from '../components/Home/RankList'
import Singer from '../components/Sinsers/Singer'

Vue.use(Router)

export default new Router({
    linkExactActiveClass:'active',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/billboards',
            name: 'billboard',
            component: Billboard
        },
        {
            path: '/home',
            name: 'rankList',
            component: RankList
        },
        {
            path:'/sinsers',
            name:'singer',
            component:Singer
        },
    ]
})
