import React, { useState } from 'react';
import Header from '../../components/Header';
import RegisterStepBar from '../../components/RegisterStepBar';
import { Redirect } from 'react-router-dom';

const Conditions = props => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    if(redirect) {
        return <Redirect to="/launch-registration" />;
    }

    const handleClick = () => {
        if(isAccepted) {
            setRedirect(true);
        } else {
            setError("Vous devez accepter les conditions d'utilisation avant de continuer.");
        }
    }

    const handleChange = () => {
        let tmp = isAccepted;
        isAccepted ? tmp = false : tmp = true;
        setIsAccepted(tmp);
    }

    return (
        <div className="conditions">
            <Header className="conditions__header" imageUrl="/img/login-img.png"/>

            <div className="conditions__body">
                <h1>Conditions d'utilisation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin nunc proin id amet, semper velit. Orci auctor leo nunc, tellus et in. Ridiculus nibh dignissim nulla elementum a non nunc adipiscing mi.</p>
                <div className="conditions__accept">
                    <input type="checkbox" name="accept_conditions" onChange={handleChange} />
                    <label htmlFor="accept_conditions">J'accepte les conditions d'utilisation</label>
                </div>
                {!error.length > 0 &&
                    <div className="error">{error}</div>
                }
                <div onClick={handleClick} className="btn-primary btn-primary--red--fill" to="/conditions">Continuer</div>
            </div>

            <RegisterStepBar/>
        </div>
    );
}

export default Conditions;