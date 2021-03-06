import React, { useState } from 'react';
import Header from '../../components/Header';
import RegisterStepBar from '../../components/RegisterStepBar';
import CheckboxSimple from '../../components/CheckboxSimple';
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
        <div className="container red background">
            <Header className="conditions__header" imageUrl="/img/conditions-img-01.svg"/>

            <div className="container__body">
                <div className="conditions__body">
                    <div className="content central-content">
                        <h1 className="red">Conditions d'utilisation</h1>
                        <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin nunc proin id amet, semper velit. Orci auctor leo nunc, tellus et in. Ridiculus nibh dignissim nulla elementum a non nunc adipiscing mi.</p>
                        <CheckboxSimple checkBoxName="accept_conditions" checkboxOnChange={handleChange} text="J'accepte les conditions d'utilisation"/>
                        {!error.length > 0 &&
                            <div className="error">{error}</div>
                        }
                    </div>
                </div>

                <a onClick={handleClick} className="btn-common btn-common__red__fill" to="/conditions">Continuer</a>
                <RegisterStepBar nb={3} actualStep={2}/>
            </div>
        </div>
    );
}

export default Conditions;