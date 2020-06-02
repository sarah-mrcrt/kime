import React from 'react';

function Loading(props) {
    return (
        <div className="loading-container container red background">
            <img src="kime-logo.svg" alt="Kime logo"></img>
            <h1 className="logotypo">Kime</h1>
            <p>Chargement</p>
        </div>
    );
}

export default Loading;