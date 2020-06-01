import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import axios from 'axios';

function ParentPassword(props) {

    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();

        // check password

        return <Redirect to="/parent-home" />
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
                            <input className="input" onChange={(e) => setPassword(e.target.value)} type="password" name="admin_password" value={adminPassword}/>
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

