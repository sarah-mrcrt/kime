import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="page-header">
            <div className="page-header__text">
                <h1 className="page-header__title">{props.title}</h1>
                <div className="page-header__subtitle">{props.subtitle}</div>
            </div>
            <img className="page-header__img" src="/img/login-img.png"/>
        </div>
    );
}

export default Header;