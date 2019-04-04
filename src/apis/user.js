import request from './request'

// 登录
export function logIn() {
    return request({
        url: '/login',
        method: 'get',
    });
}

// 注销
export function logOut() {
    return request({
        url: '/logout',
        method: 'get',
    });
}

// 获取用户信息
export function getProfile() {
    return request({
        url: '/profile',
        method: 'get',
    });
}