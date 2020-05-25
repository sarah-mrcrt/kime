import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props) {
    let homeClass = "";
    let tropheeClass = "";
    let profileClass = "";
    let homeImg = "/icons/icon-home.png";
    let tropheeImg = "/icons/icon-trophy.png";
    let profileImg = "/icons/icon-profile.png";


    switch (props.page) {
        case 'home':
            homeClass = "selected";
            homeImg = "/icons/icon-home.png";
            break;
        case 'trophee':
            tropheeClass = "selected";
            tropheeImg = "/icons/icon-trophy.png";
            break;
        case 'profile':
            profileClass = "selected";
            profileImg = "/icons/icon-profile.png";
            break;
        default:
            homeClass = "selected";
            homeImg = "/icons/icon-home.png";
    }

    return (
        <div className="menu-bar">
            <Link className={"menu-bar__link " + homeClass } to="/">
                <img className="menu-bar__icon" src={homeImg} alt="Accueil"/>
                <p className="menu-bar__text">Accueil</p>
            </Link>
            <Link className={"menu-bar__link " + tropheeClass } to="/trophees">
                <img className="menu-bar__icon" src={tropheeImg} alt="Trophés"/>
                <p className="menu-bar__text">Trophés</p>
            </Link>
            <Link className={"menu-bar__link " + profileClass } to="/profil">
                <img className="menu-bar__icon" src={profileImg} alt="Profil"/>
                <p className="menu-bar__text">Profil</p>
            </Link>
        </div>
    ) 
}

export default Navigation;