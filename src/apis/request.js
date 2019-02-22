import axios from 'axios';
// 创建axios实例
const service = axios.create({
    baseURL: "http://0.0.0.0:5000/api/v1", // api的base_url
    //timeout: 5000                  // 请求超时时间
});
axios.defaults.headers.post['Content-Type'] = "application/x-www-from-urlencoded";
axios.defaults.withCredentials = true;
// axios.defaults.credentials = 'same-origin';
// axios.defaults.mode = 'no-cors';

var isAlert;

//export default service;
export default function (opt) {
    return new Promise(next => {
        service(opt).then(res => {
            var { status } = res, err;
            return next([err, res.data, res])
        }).catch(e => {
            var { response, request } = e, err = e.message;
            // if (typeof response === 'object' && response.status == 403) {
            //     if (!isAlert) {
            //         isAlert = 1
            //         alert('登录账户权限变更，强制退出');
            //     }
            //     CookieExpire()
            //     return location.replace('/login')
            // }
            // if (typeof request == 'object') {
            //     var resp = request.response;
            //     if (typeof resp === 'string') {
            //         try { resp = JSON.parse(resp) } catch (_e) { resp = 0; }
            //     }
            //     if (resp && typeof resp == 'object' && resp.detail) { err = resp.detail }
            // }
            return next([err, 0[1], request])
        })
    })
}
