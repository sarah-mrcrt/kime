import React, { useState, useEffect, useRef, useContext } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { AuthDataContext } from '../../components/AuthDataProvider';

import Header from '../../components/Header';

function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { authData, onLogin } = useContext(AuthDataContext);
    
    if(Object.keys(authData).length != 0 || authData.isLoggedIn == true) {
        return <Redirect to="/accueil"/>;
    }

    if(redirect) {
        return <Redirect to="/launch-registration"/>;
    }

    function register(formdata) {

        axios.post("/api/auth/register", formdata)
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

                let authData = {
                    isRegistered: true,
                    user: userData
                }

                localStorage.setItem('authData', JSON.stringify(authData));

                console.log("succesfully registered user");

                setRedirect(true);

            } else {
                console.log("Couldn't register: \n");
                console.log(json.data.error);
            }
        }).then(onLogin)
        .catch(error => {
            console.log(error);
            console.log(error.response);
            alert('Cette adresse e-mail est déjà utilisée.');
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let userData = {
            'name': name,
            'email': email,
            'password': password,
            'c_password': passwordConfirm,
            'admin_password': adminPassword
        }

        register(userData);     
    }

    return (
        <div className="container red background">
            <Header title="Bienvenue" subtitle="Content de vous rencontrer" imageUrl="/img/register-img-01.svg"/>
            <div className="container__body">
                <div className="content">

                    <form method="post" onSubmit={handleSubmit} className="form form-auth">
                        
                        <div className="form-auth__input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <label className="form__label" htmlFor="email">Nom</label>
                                <input className="input" onChange={(e) => setName(e.target.value)} type="text" name="name"/>
                            </div>
                        </div>
                        
                        <div className="form-auth__input-div pass">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <label className="form__label" htmlFor="email">Adresse e-mail</label>
                                <input className="input" onChange={(e) => setEmail(e.target.value)} type="email" name="email"/>
                            </div>
                        </div>
                        <div className="form-auth__input-div pass">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                            <label className="form__label" htmlFor="password">Mot de passe</label>
                            <input className="input" onChange={(e) => setPassword(e.target.value)} type="password" name="password"/>
                            </div>
                        </div>
                        <div className="form-auth__input-div pass">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                            <label className="form__label" htmlFor="password">Confirmez le mot de passe</label>
                            <input className="input" onChange={(e) => setPasswordConfirm(e.target.value)} type="password" name="c_password"/>
                            </div>
                        </div>
                        <div className="form-auth__input-div pass">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                            <label className="form__label" htmlFor="password">Mot de passe de sécurité</label>
                            <input className="input" onChange={(e) => setAdminPassword(e.target.value)} type="password" name="admin_password"/>
                            </div>
                        </div>
                        <div className="form-auth__submit-container">
                            <input className="btn-common btn-common__red__fill" type="submit" value="Inscription"/>
                        </div>

                    </form>
                    <div className="form-auth__bottom">
                        <div className="form-auth__separator">ou</div>
                        <Link className="btn-common btn-common__red__stroke" to="/connexion">Connexion</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register;

