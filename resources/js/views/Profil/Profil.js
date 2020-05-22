import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

function Profil() {

    let appState = localStorage.getItem('appState');
    if(appState == null || (appState != null && appState.isLoggedIn == false)) {
        return <Redirect to="/connexion" />;
    }

    function logout() {
        axios.post("/api/auth/logout",{})
        .then(json => {
            appState = JSON.parse(appState);
            appState.isLoggedIn = false;
            localStorage.setItem('appState', JSON.stringify(appState));
            console.log(json.data.message);
            return <Redirect to="/connexion"/>;
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            Hello from Profil
            <button onClick={logout}>Déconnexion</button>

        </div>
    )
}

export default Profil;