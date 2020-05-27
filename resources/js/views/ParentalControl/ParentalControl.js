import React from 'react';
import Header from '../../components/Header';
import RegisterStepBar from '../../components/RegisterStepBar';
import {Link} from 'react-router-dom';

const ParentalControl = props => {
    return (
        <div className="parental-control">
            <Header className="parental-control__header" imageUrl="/img/login-img.png"/>

            <div className="parental-control__body">
                <h1>Contrôle Parental</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin nunc proin id amet, semper velit. Orci auctor leo nunc, tellus et in. Ridiculus nibh dignissim nulla elementum a non nunc adipiscing mi.</p>
                <Link className="btn-primary btn-primary--red--fill" to="/conditions">Continuer</Link>
            </div>

            <RegisterStepBar/>
        </div>
    );
}

export default ParentalControl;