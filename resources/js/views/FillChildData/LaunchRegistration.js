import React from 'react';
import {Link} from 'react-router-dom';

import RoundBackground from '../../components/RoundBackground';

const LaunchRegistration = props => {
    return (
        <div className="container red background launch-registration">
            <div className="container__body none">
                <div className="content">
                    <h1 className="launch-registration__title">C'est parti !</h1>
                    <Link className="launch-registration__img" to="/register-children">
                        <img src="img/launch_img.png" alt="C'est parti"/>
                        <RoundBackground color="red" shadow={true}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LaunchRegistration;