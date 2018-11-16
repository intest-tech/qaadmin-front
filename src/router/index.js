import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Base = resolve => require(['../pages/base/base.vue'], resolve);
const Collaspe = resolve => require(['../pages/demo/collaspe.vue'], resolve);

const routes = [
    {
        path: '/',
        component: Base,
        children: [
            {
                path: 'demo',
                component: Collaspe
            }
        ]
    }
];

export default new Router({
    mode: 'history',
    srollBehavior: () => ({
        y: 0
    }),
    routes
})