import Vue from 'vue'
import VueRouter from 'vue-router'
// 定义 (路由) 组件。
// 可以从其他文件 import 进来
import AppHeader from "./layout/AppHeader.vue";
import AppFooter from "./layout/AppFooter.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
 
Vue.use(VueRouter)
 
// 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// (缩写) 相当于 routes: routes
  routes: [
    {
      path: '/',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/about', components:
        {
          header: AppHeader,
          default: About,
          footer: AppFooter
        }
    },
    {
      path: '/contact', components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    }
  ]
})