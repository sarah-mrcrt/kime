import React from 'react';
import Navigation from '../../components/Navigation.js';

function Home() {

    return (
        <div>
            <div className="content">Hello from Home page: liste des activités etc</div>
            <Navigation page="home" />
        </div>
    )
}

export default Home;