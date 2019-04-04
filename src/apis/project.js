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