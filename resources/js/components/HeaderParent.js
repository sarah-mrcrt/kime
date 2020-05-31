import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthDataContext } from './AuthDataProvider';
import {Redirect} from 'react-router-dom';

function HeaderParent(props) {

    return (
        <div className="page-header-parent-profil">
            <div className="page-header-parent-profil__background ">
                <img className="page-header-parent-profil__img" src="/img/avatar-parent.svg"/>
            </div>
            <div className="page-header-parent-profil__text">
                <h1 className="page-header-parent-profil__title">{props.parent.name}</h1>
                <span className="page-header-parent-profil__subtitle">{props.parent.email}</span>            
            </div>
        </div>
    );
}

export default HeaderParent;