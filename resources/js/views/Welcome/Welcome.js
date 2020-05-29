import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Welcome = props => {
    let familyName = "Kidzou";

    return (
        <div className="container background page-welcome">
            <div className="container__body none">
                <div className="content  flex-grow">
                    <img className="page-welcome__img" src="/img/welcome-img.svg" alt="Welcome"/>
                    <div className="page-welcome__text">
                        <h1 className="page-welcome__title black">Bonjour,</h1>
                        <p className="page-welcome__subtitle">la famille {familyName}</p>
                    </div>
                    <div className="page-welcome__choix">
                        <a className="page-welcome__section" href='/accueil'>
                            <img className="page-welcome__section__img" src="/img/welcome-child.png" alt="Enfants" />
                        </a>
                        <a className="page-welcome__section" href='/accueil'>
                            <img className="page-welcome__section__img" src="/img/welcome-parent.png" alt="Enfants" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;