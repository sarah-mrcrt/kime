import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirection, setRedirection] = useState(false);

    let appState = localStorage.getItem('appState');

    if(appState && appState.isLoggedIn) {
        setRedirection(true);
    }

    if(redirection) {
        return <Redirect to='/accueil'/>
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("/api/auth/login", {
            'email': email,
            'password': password
        })
        .then(response => {
            return response;
        }).then(json => {
            if (json.data.success) {

                let userData = {
                    id: json.data.id,
                    name: json.data.name,
                    email: json.data.email,
                    activation_token: json.data.activation_token
                };

                let appState = {
                    isLoggedIn: true,
                    user: userData
                }

                localStorage.setItem('appState', JSON.stringify(appState));
                console.log(localStorage.getItem('appState'));

                console.log("succesfully logged in");
                setRedirection(true);
            } 
            else {
                alert(`Connexion impossible: identifiants erronés`);
            }
        }).catch(error => {
            console.log(error);
        });

    }

    return (
        <div className="login">
            <div className="page-header">
                <div className="page-header__text">
                    <h1 className="page-header__title">Bienvenue!</h1>
                    <div className="page-header__subtitle">Content de vous retrouver</div>
                </div>
                <img className="page-header__img" src="/img/login-img.png"/>
            </div>
            <div className="login__body">
                <form method="post" onSubmit={(e) => {handleSubmit(e)}} className="form login__form">
                    <div className="form__row">
                        <label className="form__label" htmlFor="email">Adresse e-mail</label>
                        <input className="form__input" onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="adresse@mail.com"/>
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Mot de passe</label>
                        <input className="form__input" onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Mot de passe"/>
                        <Link to="/forgot-password" className="login__forgot-pwd">Mot de passe oublié ?</Link>
                    </div>
                    <div className="form__row login__remember">
                        <input className="form__checkbox" type="checkbox" name="remember_me" defaultChecked/>
                        <label htmlFor="remember_me">Se souvenir de moi</label>
                    </div>
                    <div className="login__submit-container">
                        <input className="btn-red btn-red--fill" type="submit" value="Connexion"/>
                    </div>
                </form>
                <div className="login__bottom">
                    <div className="login__separator">ou</div>
                    <Link className="btn-red btn-red--stroke" to="/inscription">Inscription</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Login;

