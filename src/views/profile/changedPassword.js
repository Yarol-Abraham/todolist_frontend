import { useState } from 'react';
import profileCSS from './profile.module.css';
import Aside from './aside';
import useUser from '../../hooks/userRedux/useUser';

const ChangedPassword = () => {
    const [ data, setData ] = useState({
        password: "",
        newPassword: "",
        passwordConfirm: ""
    });
    const { handleUpdatePasswordMe } = useUser();

    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleUpdatePasswordMe(data);
        setData({
            password: "",
            newPassword: "",
            passwordConfirm: ""
         });
    };

    return (  
        <main className={`${profileCSS.main} container html_app`}>
            <Aside nameOption="Profile" urlOption="/profile" />
            <div className={profileCSS.Profile}>
            <form
                    className={profileCSS.form}
                    onSubmit={handleSubmit}
                >
                    <label>Current Password</label>
                    <input 
                        type="password" 
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required 
                    />
                    <label>New Password</label>
                    <input 
                        type="password" 
                        name="newPassword"
                        placeholder="••••••••"
                        value={data.newPassword}
                        onChange={handleChange}
                        required
                    />
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        name="passwordConfirm"
                        placeholder="••••••••"
                        value={data.passwordConfirm}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        type="submit"
                        value="Save settings"
                    />
                </form>          
            </div>
        </main>
    );
}
 
export default ChangedPassword;