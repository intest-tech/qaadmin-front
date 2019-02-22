import request from './request'

// 获取项目列表
export function getProject() {
    return request({
        url: '/project',
        method: 'get',
    });
}