import { API_BASE_URL } from '../config';
import axios from 'axios';

axios.defaults.baseURL = API_BASE_URL;

export default {
    Post(link, body, token) {
        return axios.post(`${link}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'USER-KEY': `${token}`
            }
        });
    },
    Put(link, body, token) {
        return axios.put(`${link}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'USER-KEY': `${token}`
            }
        });
    },
    Get(link, token) {
        return axios.get(`${link}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'USER-KEY': `${token}`
            }
        });
    },
    Delete(link, token) {
        return axios.delete(`${link}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'USER-KEY': `${token}`
            }
        });
    },

}
