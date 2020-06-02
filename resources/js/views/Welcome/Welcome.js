import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthDataContext } from '../../components/AuthDataProvider';
import {Redirect} from 'react-router-dom';


const Welcome = props => {

    const [kids, setKids] = useState({})
    const [avatar, setAvatar] = useState(0);
    const [childrenData, setChildrenData] = useState({});
    const { onLogout } = useContext(AuthDataContext);

    let familyName = "Kidzou";

    useEffect(() => {

        // Storing childrenData in localStorage

        axios.get('/api/kids/all')
        .then(json => {
            if(json.data.data) { 
    
                setChildrenData({
                    count: Object.keys(json.data.data).length,
                    children: json.data.data
                });
            
            }
        }).catch(error => {
            console.log(error)
        }).then(() => {
            
            let tmp = childrenData;
            for (let [index, child] of Object.entries(tmp.children)) {
                axios.get('/api/avatar/' + parseInt(child.avatar_id))
                .then(json => {
                    if(json.data.data)
                        child.avatar = json.data.data.img
                }).catch(error => {
                    console.log(error);
                })
            }
            setChildrenData(tmp);

        }).then(() => {
            console.log(childrenData);
            localStorage.setItem('childrenData', JSON.stringify(childrenData));
            console.log(JSON.parse(localStorage.getItem('childrenData')));
        })
    }, []);


    function logout() {
        axios.post("/api/auth/logout",{})
        .then(json => {
            let authData = {};
            sessionStorage.setItem('authData', JSON.stringify(authData));
            console.log(json.data.message);

        }).then(onLogout)
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="container background page-welcome">
            <div className="container__logout" onClick={logout}><i className="fas fa-power-off"></i></div>
            <div className="container__body none">
                <div className="content  flex-grow">
                    <img className="page-welcome__img" src="/img/welcome-img.svg" alt="Welcome"/>
                    <div className="page-welcome__text">
                        <h1 className="page-welcome__title black">Bonjour,</h1>
                        <p className="page-welcome__subtitle">la famille {familyName}</p>
                    </div>
                    <div className="page-welcome__choix">
                        <a className="page-welcome__section" href='/kid-choice'>
                            <img className="page-welcome__section__img" src="/img/welcome-child.png" alt="Enfants" />
                        </a>
                        <a className="page-welcome__section" href='/parent-password'>
                            <img className="page-welcome__section__img" src="/img/welcome-parent.png" alt="Parent" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;