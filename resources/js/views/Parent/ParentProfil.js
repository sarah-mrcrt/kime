import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthDataContext } from '../../components/AuthDataProvider';
import Navigation from '../../components/Navigation';
import HeaderParent from '../../components/HeaderParent';

function ParentProfil(props) {

    let parent = {id:5, name:"Garry Trotter", email:"garry.trotter@kizou.com"}
    let options =[
        {name:"Informations personnelles", img:"/icons/icon-option-infos-perso.svg", href:"/parent-profil/"},
        {name:"Mes enfants", img:"/icons/icon-option-mes-enfants.svg", href:"/parent-profil/"},
        {name:"Notifications", img:"/icons/icon-option-notifications.svg", href:"/parent-profil/"},
        {name:"Paiements", img:"/icons/icon-option-mes-paiements.svg", href:"/parent-profil/"},
        {name:"Contrôle Parentale", img:"/icons/icon-option-controle-parental.svg", href:"/parent-profil/"},
        {name:"À propos de nous", img:"/icons/icon-option-a-propos.svg", href:"/parent-profil/"}
    ]

    // Déconnection de la section Parent + Redirection Welcome.js

    const [redirect, setRedirect] = useState(false);
    const { onLogout } = useContext(AuthDataContext);

    function logoutWelcome() {
        /*
        axios.post("/api/auth/logout",{})
        .then(json => {
            let authData = {};
            sessionStorage.setItem('authData', JSON.stringify(authData));
            console.log(json.data.message);

        }).then(onLogout)
        .catch(error => {
            console.log(error);
        });

        setRedirect(true);
        */
    }

    return (
        <div className="container background page-profile nav">                        
        <HeaderParent parent={parent} />
            <div className="container__body">
                    <div className="menu-parent-profil">
                        <div className="menu-parent-profil__options">
                        {options.map((option,index) => {
                            return (
                                <a className="menu-parent-profil__options__option" href={option.href} key={index}>
                                    <img className="menu-parent-profil__options__option__img" src={option.img} alt="Icon" />
                                    <p className="menu-parent-profil__options__option__title">{option.name}</p>
                                    <p className="menu-parent-profil__options__option__arrow"><i className="fas fa-chevron-right"></i></p>
                                </a>
                            )
                        })
                        }
                        
                        <a className="menu-parent-profil__options__option" href="/" onClick={logoutWelcome}>
                            <img className="menu-parent-profil__options__option__img" src="/icons/icon-option-deconnexion.svg" alt="Icon" />
                            <p className="menu-parent-profil__options__option__title">Déconnexion</p>
                        </a>
                        </div>
                    </div>
                        <Navigation page="profile" parent={true} />
            </div>
        </div>
    )

}

export default ParentProfil;
