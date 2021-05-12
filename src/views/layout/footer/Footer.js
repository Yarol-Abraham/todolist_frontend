import footerCSS from './footer.module.css';

const Footer = () => {
    return ( 
        <footer className={`${footerCSS.footer} container`}>
            <span>todolist&copy;</span>
            <span>Yarol Abraham</span>
        </footer>
    );
}
 
export default Footer;