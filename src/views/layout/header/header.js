import headerCSS from './header.module.css';
import Navbar from '../navbar/navbar';
import defaultImage from '../../../assets/images/default.jpg';

const Header = () => {
    return ( 
        <header className={headerCSS.header}>
            <div className="container">
                <div className={headerCSS.perfil_user} >
                    <a href="#">Yarol Abraham</a>
                    <img src={defaultImage} alt="perfil" />
                </div>
                <Navbar />
            </div>
        </header>
     );
}
 
export default Header;