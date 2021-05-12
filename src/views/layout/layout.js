import './index.css';
import Header from './header/header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return ( 
        <> 
        <section className="html_app">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </section>
        </>
     );
}
 
export default Layout;