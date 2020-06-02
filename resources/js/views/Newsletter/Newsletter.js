import React from 'react';
import {Link} from 'react-router-dom';

import RoundBackground from '../../components/RoundBackground';

const LaunchRegistration = props => {
    return (
        <div className="container yellow background launch-registration">
            <div className="container__body none">
                <div className="content">
                    <h1 className="launch-registration__title">La newsletter vous a été envoyée !</h1>
                    <Link className="launch-registration__img" to="/parent-accueil">
                        <img src="img/newsletter.svg" alt=""/>
                        <RoundBackground color="yellow" shadow={true}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LaunchRegistration;