import request from './request'

// 获取任务列表
export function getJobList(project_id, version, stage) {
    return request({
        url: `/project/${project_id}/version/${version}/job?stage=${stage}`,
        method: 'get',
    });
}

// 获取任务具体信息
export function getJobDetails(job_id) {
    return request({
        url: `/job/${job_id}`,
        method: 'get',
    });
}
