import React from 'react';
import Header from '../../components/Header';
import RegisterStepBar from '../../components/RegisterStepBar';
import {Link} from 'react-router-dom';

const ParentalControl = props => {
    return (
        <div className="container red background">
            <Header className="parental-control__header" imageUrl="/img/login-img.png"/>

            <div className="container__body">
                <div className="parental-control__body">
                    <div className="content central-content">
                        <h1 className="red">Contrôle Parental</h1>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin nunc proin id amet, semper velit. Orci auctor leo nunc, tellus et in. Ridiculus nibh dignissim nulla elementum a non nunc adipiscing mi.</p>
                    </div>
                </div>
                    <Link className="btn-common btn-common__red__fill" to="/conditions">Continuer</Link>
                    <RegisterStepBar nb={3} actualStep={1}/>
            </div>
        </div>
    );
}

export default ParentalControl;