import axios from 'axios';
// 创建axios实例
const service = axios.create({
    baseURL: "http://192.168.1.71:1199/api/v1", // api的base_url
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
            return next([err, err[1], request])
        })
    })
}
