import { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarCSS from './navbar.module.css';
import bars_solid from '../../../assets/images/bars-solid.svg';

const Navbar = () => {
    const [ open, setOpen ] = useState(false);
    function showMenu(state) {
        const nav = document.getElementById('nav');
        if(state){ 
            nav.style.display = "flex";
            setOpen(true); 
        }else{
            nav.style.display = "none";    
            setOpen(false);  
        };
    }

    return ( 
        <div className={navbarCSS.content_header}>
            <div className={navbarCSS.content_header_sub}>
                <h1>#TODO</h1>
                <button
                    onClick={ ()=> showMenu(!open) }
                >
                    <img src={bars_solid} alt="menu" />
                </button>
            </div>
            <nav id="nav">
                <Link 
                    to={"/"}
                    className={navbarCSS.link} 
                >All</Link>
                 <Link 
                    to={"/incomplete"}
                    className={navbarCSS.link} 
                >Incomplete</Link>
                 <Link 
                    to={"/completed"}
                    className={navbarCSS.link} 
                >Completed</Link>
          
            </nav>
        </div>
     );
}
 
export default Navbar;