import Vue from 'vue'
import Router from 'vue-router'
import Base from './views/Base.vue'
import ProjectList from './views/ProjectList'
import VersionList from './views/VersionList'
import JobDetail from './views/JobDetail'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/project',
            component: Base,
            children: [
                {
                    path: 'project',
                    component: ProjectList
                },
                {
                    path: 'project/:project_id',
                    component: VersionList
                },
                {
                    path: 'project/:project_id/v/:version',
                    component: JobDetail
                },
                {
                    path: 'project/:project_id/job/:job_id',
                    component: JobDetail
                }
            ]
        },
        // {
        //     path: '/debug',
        //     component: ListCard
        // }
    ]
})
