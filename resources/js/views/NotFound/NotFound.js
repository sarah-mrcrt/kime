import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = props => {
    return (
        <div className="notfound-container container background">
            <img src='/img/404-error.png' alt='Error 404'></img>
            <p>Il semble que la page que vous cherchez n'existe pas.</p>
            <Link to="/">
                <a className="btn-common btn-common__blue__fill">Retourner à l'accueil</a>
            </Link>
        </div>
    );
}

export default NotFound;