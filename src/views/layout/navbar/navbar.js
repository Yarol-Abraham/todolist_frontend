import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navbarCSS from './navbar.module.css';
import bars_solid from '../../../assets/images/bars-solid.svg';

const Navbar = () => {
    const location = useLocation();
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
  
    function currentPage(page) {
        const selectLink = document.getElementById(page);
        //selectLink.classList.remove(navbarCSS.active);
        selectLink.classList.add(navbarCSS.active);
    };
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
                    id="all"
                    to={{
                        pathname: "/",
                        state: "all"
                    }}
                    className={`${navbarCSS.link} ${location.state === "all" ? navbarCSS.active : ""}`} 
                >All</Link>
                <Link
                    id="active" 
                    to={{
                        pathname: "/",
                        state: "active"
                    }}
                    className={`${navbarCSS.link} ${location.state === "active" ? navbarCSS.active : ""}`} 
                >Active</Link>
                <Link
                    id="completed" 
                    to={{
                        pathname: "/",
                        state: "completed"
                    }}
                    className={`${navbarCSS.link} ${location.state === "completed" ? navbarCSS.active : ""}`} 
                >Completed</Link>
            </nav>
        </div>
     );
}
 
export default Navbar;