import React from 'react';

function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__header">
                <img className="welcome__img" src="/img/welcome-illustration.png" alt="Welcome"/>
            </div>
            <div className="welcome__content">
                <h1 className="welcome__title">Bienvenue</h1>
                <div className="welcome__actions">
                    <a href="#" className="welcome__cta">
                        <img className="welcome__img" src="/img/welcome-child.png" alt="Child" />
                    </a>
                    <a href="#" className="welcome__cta">
                        <img className="welcome__img" src="/img/welcome-parent.png" alt="Parent" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Welcome;

