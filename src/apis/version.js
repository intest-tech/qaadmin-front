import request from './request'

// 获取版本列表
export function getVersion(project_id, page) {
    return request({
        url: `/project/${project_id}/version`,
        method: 'get',
        params: {
            "p": page
        }
    });
}

// 创建一个版本
export function createVersion(project_id, data) {
    return request({
        url: `/project/${project_id}/version`,
        method: 'post',
        data: data,
    });
}

// 获取版本信息
export function getVersionDetails(project_id, version) {
    return request({
        url: `/project/${project_id}/version/${version}`,
        method: 'get',
    });
}