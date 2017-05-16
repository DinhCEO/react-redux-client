import Config from '../config.jsx'
import Axios from 'axios'


import authService from './authService.jsx'
import {browserHistory} from 'react-router';

const config = new Config();

const axios = Axios.create();

axios.interceptors.request.use(axiosConfig => {
    axiosConfig.headers.common.Authorization = "Bearer " + config.getToken();
    return axiosConfig;
}, error => Promise.reject(error));

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.log('error 401 or 403');
            localStorage.removeItem('token');
            browserHistory.push('/');
        }

        return Promise.reject(error.response || {data: {message: 'not connected to the internet'}});
    }
);

export let AuthService = new authService(axios, config);