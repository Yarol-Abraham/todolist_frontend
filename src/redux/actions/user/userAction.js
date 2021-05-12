import createAxios from '../../../config/axios';
import Cookies from 'js-cookie';
import tokenAuth from '../../../config/tokenAuth';
import { showAlert, hideAlert } from '../../../utils/alerts';
import { updateUser } from './userDispatch';

const errorMessage = (error)=>{
    const { response: { data: { message } } } = error;
    const msg = message || error.response.data;
    showAlert('error', msg);
    setTimeout(hideAlert, 5000);
}

export function updateMe(data, imagen) {
    return async ( dispatch )=>{
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("photo", imagen);
            tokenAuth(Cookies.get('jwt'));
            showAlert("loading", "Loading...");
            const { data: { data: { user } } } = await createAxios.patch('/api/v1/user/updateMe', formData);
            dispatch( updateUser(user) );
            showAlert("success", "information successfully updated");
            setTimeout(hideAlert, 3000);
        } catch (error) {
            errorMessage(error);           
        };
    };
};

export function updatePasswordMe(data) {
    return async()=>{
        try {
            tokenAuth(Cookies.get('jwt'));
            showAlert("loading", "Loading...");
            const { data: { token } } = await createAxios.patch('/api/v1/user/updatePassword', data);
            Cookies.set('jwt', token, { 
                expires: new Date( Date.now() + 30 * 24 * 60 * 60 * 1000 )
            });
            showAlert("success", "information successfully updated");
            setTimeout(hideAlert, 3000);
        } catch (error) {
            errorMessage(error);           
        };
    };
};