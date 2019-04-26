import request from './request'

// 获取项目列表
export function getProject(page) {
    return request({
        url: '/project',
        method: 'get',
        params: {
            "p": page
        }
    });
}

// 创建项目
export function createProject(data) {
    return request({
        url: '/project',
        method: 'post',
        data: data,
    });
}

// 获取项目详情
export function getProjectDetail(project) {
    return request({
        url: '/project/' + project,
        method: 'get',
    });
}

// 更新项目
export function updateProject(project, data) {
    debugger
    return request({
        url: '/project/' + project,
        method: 'patch',
        data: data,
    });
}