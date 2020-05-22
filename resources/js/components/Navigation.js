import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="menu-bar">
            <Link className="menu-bar__link" to="/">
                <img className="menu-bar__icon" src="/icons/icon-home.png" alt="Accueil"/>
            </Link>
            <Link className="menu-bar__link" to="/trophees">
                <img className="menu-bar__icon" src="/icons/icon-trophy.png" alt="Accueil"/>
            </Link>
            <Link className="menu-bar__link" to="/">
                <img className="menu-bar__icon" src="/icons/icon-profile.png" alt="Accueil"/>
            </Link>
        </div>
    )
}

export default Navigation;