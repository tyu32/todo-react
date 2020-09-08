import axios from 'axios';
import qs from 'qs';
import {message} from 'antd';

axios.interceptors.request.use(function (config) {
    const {method, data} = config
    console.log(data);
    if (method.toLowerCase() === 'post' && typeof data === 'object') {
        config.data = qs.stringify(data)
    }

    return config;
});

axios.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    message.error('request error' + error.message);
    return new Promise(() => {})
})

export default axios