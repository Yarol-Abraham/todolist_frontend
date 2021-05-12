import { useState, useEffect } from 'react';
import authCSS from '../auth.module.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/authRedux/useAuth';

const Login = () => {
    const history = useHistory();
    const [ data, setData ] = useState({
        name: "",
        password: ""
    });
    const { handleLogin, auth } = useAuth();
   
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleForm = (e)=>{
        e.preventDefault();
        handleLogin(data);
    };

    function authSesion(ok) {
        if(ok) history.push("/");
    }

    useEffect(() => { 
        authSesion(auth.success);
         // eslint-disable-next-line
    }, [auth.success]);
    return ( 
            <main className={`${authCSS.main} container html_app`}>
                <form
                    className={authCSS.form}
                    onSubmit={handleForm}
                >
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        onChange={ handleChange }
                        required
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="••••••••" 
                        onChange={ handleChange }
                        required
                    />
                    <input 
                        type="submit"
                        value="Login"
                    />
                </form>
                <Link to={"/signup"} className={authCSS.linkAuth} >Create your account!</Link>
            </main>
     );
}
 
export default Login;