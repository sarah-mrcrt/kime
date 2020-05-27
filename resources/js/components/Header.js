import React from 'react';
import { Link } from 'react-router-dom';
import RoundBackground from './RoundBackground.js';

function Header(props) {
    return (
        <div className="page-header">
            <div className="page-header__text">
                <h1 className="page-header__title">{props.title}</h1>
                <div className="page-header__subtitle">{props.subtitle}</div>
            </div>
            <RoundBackground color="red">
                <img className="page-header__img" src={props.imageUrl}/>
            </RoundBackground>
            
        </div>
    );
}

export default Header;