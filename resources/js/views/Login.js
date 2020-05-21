import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <div className="login__header">
                <div className="login__header-text">
                    <h1 className="login__title">Bienvenue!</h1>
                    <div className="login__subtitle">Content de vous retrouver</div>
                </div>
                <img className="login__img" src="/img/login-img.png"/>
            </div>
            <div className="login__body">
                <form action="#" className="form login__form">
                    <div className="form__row">
                        <label className="form__label" htmlFor="email">Adresse e-mail</label>
                        <input className="form__input" type="email" name="email" placeholder="adresse@mail.com"/>
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Mot de passe</label>
                        <input className="form__input" type="email" name="password" placeholder="Mot de passe"/>
                        <Link to="/forgot-password" className="login__forgot-pwd">Mot de passe oublié ?</Link>
                    </div>
                    <div className="form__row">
                        <input type="checkbox" name="remember_me" defaultChecked/>
                        <label htmlFor="remember_me">Se souvenir de moi</label>
                    </div>
                    <input className="btn-red btn-red--fill" type="submit" value="Connexion"/>
                </form>
                <div className="login__separator">ou</div>
                <Link className="btn-red btn-red--stroke" to="/inscription">Inscription</Link>
            </div>
            
        </div>
    )
}

export default Login;

