import React from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from '../../components/Navigation.js';

function Home() {

    let appState = localStorage.getItem('appState');
    if(appState == null || (appState != null && appState.isLoggedIn == false)) {
        return <Redirect to="/connexion" />;
    }

    return (
        <div>
            <div class="content">Hello from Home page: liste des activités etc</div>
            <Navigation />
        </div>
    )
}

export default Home;