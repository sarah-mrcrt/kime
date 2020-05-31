import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthDataContext } from './AuthDataProvider';
import {Redirect} from 'react-router-dom';

function HeaderParent(props) {

    // Déconnection de la section Parent + Redirection Welcome.js

    const [redirect, setRedirect] = useState(false);
    const { onLogout } = useContext(AuthDataContext);

    function logoutWelcome() {
        /*
        axios.post("/api/auth/logout",{})
        .then(json => {
            let authData = {};
            sessionStorage.setItem('authData', JSON.stringify(authData));
            console.log(json.data.message);

        }).then(onLogout)
        .catch(error => {
            console.log(error);
        });

        setRedirect(true);
        */
    }

    return (
        <div className="page-header-parent-profil">
            <a className="container__logout" onClick={logoutWelcome} href="/"><i className="fas fa-power-off"></i></a>
            <div className="page-header-parent-profil__background ">
                <img className="page-header-parent-profil__img" src="/img/avatar-parent.svg"/>
            </div>
            <div className="page-header-parent-profil__text">
                <h1 className="page-header-parent-profil__title">{props.parent.name}</h1>
                <span className="page-header-parent-profil__subtitle">{props.parent.email}</span>            
            </div>
        </div>
    );
}

export default HeaderParent;