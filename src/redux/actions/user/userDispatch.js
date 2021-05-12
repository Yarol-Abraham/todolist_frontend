import {
    UPDATE_USER
} from '../../types/authTypes';

export const updateUser = (data)=>({
    type: UPDATE_USER,
    payload: data
});

