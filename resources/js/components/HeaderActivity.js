import React from 'react';
import RoundBackground from './RoundBackground.js';

function HeaderActivity(props) {
    return (
        <div className="page-header-activity g2">
            <div className="page-header-activity__text">          
                <h1 className="page-header-activity__title">{props.name}</h1>
            </div>
            <div className="page-header-activity__background ">
                <img className="page-header-activity__img" src={props.img}/>
                <RoundBackground color={props.color} />
            </div>
        </div>
    );
}

export default HeaderActivity;