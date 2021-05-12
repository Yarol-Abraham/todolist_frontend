import { useDispatch } from 'react-redux';
import { 
    updateMe,
    updatePasswordMe
} from '../../redux/actions/user/userAction';

function useUser() {
  
    const dispatch = useDispatch(); 
    const _updateMe = (data, imagen)=> dispatch( updateMe(data, imagen) );
    const _updatePasswordMe = (data)=> dispatch( updatePasswordMe(data) );
    const handleUpdateMe = (data, imagen)=>{
        _updateMe(data, imagen);
    };

    const handleUpdatePasswordMe = (data)=>{
        _updatePasswordMe(data);
    };

    return {
        handleUpdateMe,
        handleUpdatePasswordMe
    };

};

export default useUser;