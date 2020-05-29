import React from 'react';
import {Link} from 'react-router-dom';

import RoundBackground from '../../components/RoundBackground';

const EndRegistration = props => {
    return (
        <div className="container red background launch-registration">
            <div className="container__body none">
                <div className="content flex-grow">
                    <h1 className="launch-registration__title">Félicitations</h1>
                    <p className="launch-registration__subtitle">Les données sont enregistrées</p>
                    <Link className="launch-registration__img height" to="/welcome">
                        <img src="img/end_registration_img.png" alt="C'est terminé!"/>
                        <RoundBackground color="red" shadow={true}/>
                     </Link>
                </div>
            </div>
        </div>
    );
}

export default EndRegistration;