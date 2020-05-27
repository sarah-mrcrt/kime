import React from 'react';
import { Link } from 'react-router-dom';
import RoundBackground from './RoundBackground.js';

function Header(props) {
    return (
        <div className="page-header g2">
            <div className="page-header__text">
                <h1 className="page-header__title">{props.title}</h1>
                <div className="page-header__subtitle">{props.subtitle}</div>
            </div>
            <div class="page-header__background">
                <img className="page-header__img" src={props.imageUrl}/>
                <RoundBackground color="red" />
            </div>
            
        </div>
    );
}

export default Header;