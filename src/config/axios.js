import axios from 'axios';

const createAxios = axios.create({
    baseURL: process.env.REACT_APP_PROD_URL
});

export default createAxios;