import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/iview.min.js'
import 'iview/dist/styles/iview.css';
import axios from 'axios';

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

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
