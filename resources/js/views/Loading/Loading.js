import React from 'react';

const Loading = props => {
    return (
        <div className="loading-container container red background">
            <img src="kime-logo.svg" alt="kime logo"></img>
            <h1 class="logotypo">Kime</h1>
            <p>Chargement</p>
        </div>
    );
}

export default Loading;