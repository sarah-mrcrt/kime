import React from 'react';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';

import RoundBackground from '../../components/RoundBackground';

const LaunchRegistration = props => {
    return (
        <div className="launch-registration">
            <h1>C'est parti !</h1>
            <Link to="/children-number">
                <RoundBackground color="red">
                    <img className="launch-registration__img" src="img/launch_img.png" alt="C'est parti"/>
                </RoundBackground>
            </Link>
        </div>
    );
}

export default LaunchRegistration;