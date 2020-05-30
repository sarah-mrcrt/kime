import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthDataContext } from '../../components/AuthDataProvider';

import Header from '../../components/Header';

function ParentPassword(props) {

    // Fonctions à adapter à cette page
    let adminPassword = '';

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { authData, onLogin } = useContext(AuthDataContext);

    const emailField = useRef(null);
    const passwordField = useRef(null);
   
    useEffect(() => {
        // Fixing autofill problems by deactivating it:
        let interval = setInterval(() => {
          if (emailField.current) {
            setEmail(emailField.current.value)
            setPassword(passwordField.current.value);
            //do the same for all autofilled fields
            clearInterval(interval)
          }
        }, 100)
    })
    /*
    if(Object.keys(authData).length != 0 || authData.isLoggedIn == true) {
        return <Redirect to="/welcome"/>;
    }

    if(redirect) {
        return <Redirect to="/welcome"/>;
    }
      */

    function login(values) {

        axios.post("/api/auth/login", values)
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

                let newAuthData = {
                    isLoggedIn: true,
                    user: userData
                }

                // Storing authData in Local Storage
                localStorage.setItem('authData', JSON.stringify(newAuthData));

                console.log("succesfully logged in");

                setRedirect(true);
            } else {
                alert(`Connexion impossible: identifiants erronés`);
            }
        }).then(onLogin)
        .catch(error => {
            console.log(error);
        });
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        return <Redirect to="/parent-home" />

        /*
        let credentials = {
            'email': emailField.current.value,
            'password': passwordField.current.value
        }

        login(credentials);
        */
        
    }

    

    return (
        <div className="container red background">
            <Header title="Section parentale" subtitle="Content de vous revoir" color="red" imageUrl="/img/login-img-01.svg"/>
            <div className="container__body">
                <div className="content flex-grow">
                    <form method="post" onSubmit={handleSubmit} className="form form-auth">  
                        
                    <div className={adminPassword === '' ? ("form-auth__input-div pass") : ("form-auth__input-div pass focus")}>
                            <div className="i">
                                <i className="fas fa-user-lock"></i>
                            </div>
                            <div className="div">
                            <label className="form__label" htmlFor="password">Mot de passe parental</label>
                            <input className="input" onChange={(e) => setAdminPassword(e.target.value)} type="password" name="admin_password" value={adminPassword}/>
                            </div>
                        </div>
                        <div className="form__row">
                            <Link to="/forgot-password" className="form-auth__forgot-pwd">Mot de passe oublié ?</Link>
                        </div>
                        <div className="form-auth__submit-container">
                            <input className="btn-common btn-common__red__fill" type="submit" value="Connexion"/>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ParentPassword;

