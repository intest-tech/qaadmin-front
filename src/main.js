import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/iview.min.js'
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import Cookies from 'js-cookie';

Vue.config.productionTip = false;
Vue.use(iView);

// Vue本身没有http client, 需要引入axios
const Post = axios.post;
axios.post = function (...args) {
    var [url, form, opt] = args;
    if (typeof form === 'object' && form.constructor !== URLSearchParams) {
        args[2] = opt || {};
        args[2].headers = {
            'Content-Type': 'multipart/form-data; charset=UTF-8'
        }
    }
    return Post.apply(this, args)
};

Vue.prototype.$http = axios;
router.beforeEach((to, from, next) => {
    var freedom = ['/'],
        // isLogined = Cookies.get('session'),
        // url = to.path.toLowerCase(),
        // isFreedom = freedom.find(x => url === x);
        isLogined = true
    if (isLogined) {
        // TODO: checkExpiry()
        // if (isLogin_url) {
        //     checkExpiry()
        //     return next({path: isSuper ? '/base/user' : '/base/overview'})
        // }
        // checkExpiry()
        // var refer = (from.path || '/').toLowerCase();
        // //从登录页跳转或页面刷新时不执行，否则会触发2次
        // if (['/', '/login'].every(x => x.indexOf(refer) != 0)) {// && !isAdmin_url
        //     // 通知header 检查是否修改了商户绑定列表
        //     SignCallback.emit('routerChange', url)
        // }
        next()
    } else {
        if (isFreedom) {
            return next()
        }
        // TODO: login required
        // return next({name: 'home'})
        return next()
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
