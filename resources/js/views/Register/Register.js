import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    
    let state = localStorage.getItem('appState');

    if(state != null) {
        let appState = JSON.parse(state)
        if(appState.isLoggedIn || appState.isRegistered)
            return <Redirect to='/accueil'/>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("/api/auth/register", {
            'name': name,
            'email': email,
            'password': password,
            'c_password': passwordConfirm,
            'admin_password': adminPassword
        })
        .then(response => {
            return response;
        }).then(json => {
            if (json.data.success) {
                let userData = {
                    id: json.data.id,
                    name: json.data.name,
                    email: json.data.email,
                    activation_token: json.data.activation_tokon
                };

                let appState = {
                    isRegistered: true,
                    user: userData
                }

                localStorage.setItem('appState', JSON.stringify(appState));

                console.log("succesfully registered user");
                return <Redirect to='/accueil'/>;

            } else {
                console.log("Couldn't register: \n");
                console.log(json.data.error);
            }
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            alert('Cette adresse e-mail est déjà utilisée.');
        })
    }

    return (
        <div className="login">
            <div className="page-header">
                <div className="page-header__text">
                    <h1 className="page-header__title">Bienvenue!</h1>
                    <div className="page-header__subtitle">Content de vous rencontrer</div>
                </div>
                <img className="page-header__img" src="/img/login-img.png"/>
            </div>
            <div className="login__body">
                <form method="post" onSubmit={(e) => {handleSubmit(e)}} className="form login__form">
                    <div className="form__row">
                        <label className="form__label" htmlFor="email">Nom</label>
                        <input className="form__input" onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Votre nom"/>
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="email">Adresse e-mail</label>
                        <input className="form__input" onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="adresse@mail.com"/>
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Mot de passe</label>
                        <input className="form__input" onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Mot de passe"/>
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Confirmez le mot de passe</label>
                        <input className="form__input" onChange={(e) => setPasswordConfirm(e.target.value)} type="password" name="c_password" placeholder="Confirmez le mot de passe"/>
                    </div>
                    <div className="form__row">
                        <label className="form__label" htmlFor="password">Mot de passe de contrôle parental</label>
                        <input className="form__input" onChange={(e) => setAdminPassword(e.target.value)} type="password" name="admin_password" placeholder="Mot de passe de contrôle"/>
                    </div>
                    <div className="login__submit-container">
                        <input className="btn-red btn-red--fill" type="submit" value="Inscription"/>
                    </div>
                </form>
                <div className="login__bottom">
                    <div className="login__separator">ou</div>
                    <Link className="btn-red btn-red--stroke" to="/connexion">Connexion</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Register;
