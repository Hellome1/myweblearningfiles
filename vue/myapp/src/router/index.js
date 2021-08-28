import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Center from '@/views/Center'
import Detail from '@/views/Detail'
import Cinema from '@/views/Cinema'
import Login from '@/views/Login'
import City from '@/views/City'

Vue.use(VueRouter)

// var auth = {
//   isLogin() {
//     return false
//   }
// }

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/detail/:id', // 动态路由
    props: true,
    name: 'kerwindetail',
    component: Detail
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/center') {
//     console.log('盘查')
//     if (auth.isLogin()) {
//       next();
//     } else {
//       next('/login')
//     }
//   } else {
//     next();
//   }
// })

export default router
