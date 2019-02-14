import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/iview.min.js'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
import { Avatar } from 'iview';
Vue.component(Avatar);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
