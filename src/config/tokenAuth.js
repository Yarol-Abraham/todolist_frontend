import createAxios from './axios';

function tokenAuth(token) {
    if(token){
        createAxios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    }else{
        delete createAxios.defaults.headers.common['authorization'];
    }
};

export default tokenAuth;