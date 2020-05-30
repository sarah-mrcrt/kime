import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props) {
    let homeClass = "";
    let tropheeClass = "";
    let profileClass = "";


    switch (props.page) {
        case 'home':
            homeClass = "selected";
            break;
        case 'trophies':
            tropheeClass = "selected";
            break;
        case 'profile':
            profileClass = "selected";
            break;
        default:
            homeClass = "selected";
    }

    return (
        <div className="menu-bar">
            <Link className={"menu-bar__link " + homeClass } to="/accueil">
            <i className="fas fa-home menu-bar__icon"></i>
                <p className="menu-bar__text">Accueil</p>
            </Link>
            <Link className={"menu-bar__link " + tropheeClass } to="/trophies">
                <i className="fas fa-trophy menu-bar__icon"></i>
                <p className="menu-bar__text">Trophés</p>
            </Link>
            <Link className={"menu-bar__link " + profileClass } to="/profil">
                <i className="fas fa-user menu-bar__icon"></i>
                <p className="menu-bar__text">Profil</p>
            </Link>
        </div>
    ) 
}

export default Navigation;