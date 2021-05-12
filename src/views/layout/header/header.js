import headerCSS from './header.module.css';
import Navbar from '../navbar/navbar';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/authRedux/useAuth';
const Header = () => {
     const history = useHistory();
     const { handleLogout, auth } = useAuth();
    function handleLogoutButton() {
        handleLogout();
        history.push("/login");
    };
    return ( 
        <header className={headerCSS.header}>
            <div className="container">
                {
                    auth.user ? (
                        <div className={headerCSS.perfil_user} >
                            <Link 
                                to={"/profile"}
                                className={headerCSS.LinkProfile}
                            >{auth.user.name}</Link>
                            <img src={`${auth.user.urlPhoto}${auth.user.photo}`} alt="perfil" />
                            <button 
                                className={headerCSS.LinkCloseSesion}
                                onClick={handleLogoutButton}
                            >Cerrar sesion</button>
                        </div>
                    ): null
                }
                <Navbar />
            </div>
        </header>
     );
}
 
export default Header;