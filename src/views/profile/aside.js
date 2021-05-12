import profileCSS from './profile.module.css';
import { Link } from 'react-router-dom';

function AsideProfile({ nameOption, urlOption }) {
    return (
        <aside className={profileCSS.aside}>
            <Link
                to={"/"}
                className={profileCSS.LinkBack}
            >
                Go back
            </Link>
            <Link
                to={urlOption}
                className={profileCSS.LinkPassword}
            >
                {nameOption}
            </Link>
        </aside>
    );
};

export default AsideProfile;