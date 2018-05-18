import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'


import BookList from '@/components/book/list'
import Student_test from '@/components/book/student_test'
import TodoList from '@/components/book/todo_list'


/*import Extend from '@/components/global/Extend'*/


import UserList from '@/components/user/list'
import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'


// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve);
Vue.use(Router);  //在vue中加载router插件的方法


let router = new Router({     //路由管理，实现页面之间的切换
// mode: 'history',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/dashboard',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/dashboard', component: Dashboard, name: '首页', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '用户管理',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/user/list', component: UserList, name: '用户列表', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '图书管理',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [
        {path: '/book/list', component: BookList, name: '图书列表', menuShow: true},
        {path: '/book/student_test', component:Student_test, name: '学生列表', menuShow: true},
        {path: '/book/todo_list', component:TodoList, name: 'TodoList', menuShow: true},
      ]
    },
   /* {
      path: '/',
      component: Home,
      name: '全局API',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [
        {path: '/global/Extend',component:Extend, name: '全局API-Extend', menuShow: true},
      ]
    },*/
    {
      path: '/',
      component: Home,
      name: '设置',
      menuShow: true,
      iconCls: 'iconfont icon-setting1',
      children: [
        {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
        {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
      ]
    }
  ]
});

/**
 * @date: 2018-05-17
 * @Desc: 路由跳转中要进行的逻辑判断；
*/
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login')){ //如果是登录页面，则将本地存储的账户信息删除掉
    window.localStorage.removeItem('access-user');
    next()
  } else {  //如果登录信息不存在这个标志位，则直接跳转到登录页面路由中去；
    let user = JSON.parse(window.localStorage.getItem('access-user'));
    if (!user) {
      next({path: '/login'})
    } else {
      next();  //如果存在登录的信息则直接进入下一个路由页面中去；
    }
  }
});

export default router
