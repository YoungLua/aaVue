import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import News from './components/news.vue';

Vue.use(VueRouter);//创建路由之前必须注册到 Vue.use();

const router = new VueRouter();
console.log(Home);
router.map({
    '/home':{
        component : Home
    },
    '/news':{
        component : News
    }
});
console.log(router);
router.start(App,"#box");
router.redirect({
    '/' : '/Home'
});

// new Vue({
//     el:"#box",
//     components :{
//         app : App
//     }
// });
