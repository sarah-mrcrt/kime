import React from 'react';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';

import RoundBackground from '../../components/RoundBackground';

const LaunchRegistration = props => {
    return (
        <div className="launch-registration">
            <h1>Félicitations</h1>
            <p>Les données sont enregistrées</p>
            <Link to="/register-children">
                <RoundBackground color="red">
                    <img className="launch-registration__img" src="img/end_registration_img.png" alt="C'est terminé!"/>
                </RoundBackground>
            </Link>
        </div>
    );
}

export default LaunchRegistration;