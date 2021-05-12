import axios from 'axios';

const createAxios = axios.create({
    baseURL: "http://localhost:5000"
});

export default createAxios;