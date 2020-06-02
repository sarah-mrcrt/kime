import React from 'react';
import RoundBackground from './RoundBackground.js';

function HeaderKid(props) {
    let kid = props.kid

    return (
        <div className="page-header-kid g2">
            <div className="page-header-kid__background ">
                <img className="page-header-kid__img" src={'/img/avatars/'+kid.avatar_id}/>
                <RoundBackground color="yellow" shadow={true}/>
            </div>
            <div className="page-header-kid__text">
                <span className="page-header-kid__subtitle">Salut,</span>            
                <h1 className="page-header-kid__title">{kid.name}</h1>
            </div>
        </div>
    );
}

export default HeaderKid;