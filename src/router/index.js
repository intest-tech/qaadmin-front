import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Base = resolve => require(['../pages/base/base.vue'], resolve);
const Collaspe = resolve => require(['../pages/demo/collaspe.vue'], resolve);
const ProjectList = resolve => require(['../pages/project/list.vue'], resolve);
const VersionList = resolve => require(['../pages/version/list.vue'], resolve);

const routes = [
    {
        path: '/',
        component: Base,
        children: [
            {
                path: 'demo',
                component: Collaspe
            },
            {
                path: 'project',
                component: ProjectList
            },
            {
                path: 'project/:project',
                component: VersionList
            },
            {
                path: 'project/:project/version/:version',
                component: VersionList
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