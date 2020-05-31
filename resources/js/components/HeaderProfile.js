import React from 'react';
import RoundBackground from './RoundBackground.js';
import {Link} from 'react-router-dom';

function HeaderProfile(props) {
    let kid = props.kid
    return (
        <div className="page-header-profile">
            <a className="container__logout" href="/"><i className="fas fa-power-off"></i></a>
            <div className="page-header-profile__identity">
                <div className="page-header-profile__identity__background ">
                    <img className="page-header-profile__identity__img" src={kid.avatar}/>
                    <RoundBackground color="yellow" shadow={true}/>
                </div>         
                <h1 className="page-header-profile__identity__title">{kid.name}</h1>

            </div>
            <div className="page-header-profile__infos">
                <div className="page-header-profile__infos__activities">
                    <h1 className="page-header-profile__infos_tittle">{props.nb_activities}</h1>
                    <p className="page-header-profile__infos__subtitle">Activités</p>
                </div>
                <div className="page-header-profile__infos__trophies">
                    <h1 className="page-header-profile__infos_tittle">{props.nb_trophies}</h1>
                    <p className="page-header-profile__infos__subtitle">Trophés</p>
                </div>
                <Link className="page-header-profile__infos__modify btn-common btn-common__white__stroke" to="/">Modifier</Link>
            </div>
        </div>
    );
}

export default HeaderProfile;