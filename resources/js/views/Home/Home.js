import React from 'react';
import {Redirect} from 'react-router-dom';

function Home() {

    let appState = localStorage.getItem('appState');
    if(appState == null || (appState != null && appState.isLoggedIn == false)) {
        return <Redirect to="/connexion" />;
    }

    return (
        <div>
            Hello from Home page: liste des activités etc
        </div>
    )
}

export default Home;