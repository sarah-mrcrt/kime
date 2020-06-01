import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AuthDataContext } from '../../components/AuthDataProvider';

import Header from '../../components/Header';
import axios from 'axios';

function ParentPassword(props) {

    const [password, setPassword] = useState('');

    const { authData } = useContext(AuthDataContext);
    console.log(authData);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get('/api/adminpassword/', {'password': password})
        .then(json => {
            if(json.data.success) {
                return <Redirect to="/parent-home" />
            } else {
                alert('Le mot de passe est erroné');
            }
        }).catch(error => {
            console.log(error)
        })
    }

    

    return (
        <div className="container red background">
            <Header title="Section parentale" subtitle="Content de vous revoir" color="red" imageUrl="/img/login-img-01.svg"/>
            <div className="container__body">
                <div className="content flex-grow">
                    <form method="post" onSubmit={handleSubmit} className="form form-auth">  
                        
                    <div className={password === '' ? ("form-auth__input-div pass") : ("form-auth__input-div pass focus")}>
                            <div className="i">
                                <i className="fas fa-user-lock"></i>
                            </div>
                            <div className="div">
                            <label className="form__label" htmlFor="password">Mot de passe parental</label>
                            <input className="input" onChange={(e) => setPassword(e.target.value)} type="password" name="admin_password" value={password}/>
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

