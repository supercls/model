import React from 'react'
import News from '@/pages/News/index'
import Footer from '@/pages/Footer/index'
import login from '@/pages/login/index'
import test from '@/pages/Home/Home'
import NotFound from '@/pages/NoFound/index'
import Fox from '@/pages/Form/index'
let routes = [
    {
        path: '/test',
        component: test,
        exact:true,
        meta:{
            title:'练习'
        }
    },
    {
      path: '/Index',
      component: News,
      exact:true,
      meta:{
        title:'商城首页'
      }
    },
    {
      path: '/user',
      free:true,
      component: login,
      exact:true,
      meta:{
        title:'Form'
      }
    },
    {
      path: '/Form',
      free:true,
      component: Fox,
      exact:true,
      meta:{
        title:'Form'
      }
    },
    {
      path:'/Footer',
      component:Footer,
      free:true,
      meta:{
        title:'footer'
      },
      routes:[
        {
          path:'/Footer/ops',
          free:true,
          exact:true,
          component:login,
          meta:{
            title:'登录页'
          },
        },
        {
          path: '/Footer/*',
          free:true,
          component: NotFound,
          meta:{
            title:'404'
          },
        },
      ]
    },
    {
      path: '/404',
      free:true,
      component: NotFound,
      meta:{
        title:'404'
      },
    },
  ]
  export default routes