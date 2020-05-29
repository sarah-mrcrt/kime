import React from 'react';
import {Link} from 'react-router-dom';

function InfoBubble(props) {

    const handleClick = e => {
        e.preventDefault();

        $('#info-bubble').css('display','none');
        $('body').css('overflow-y','auto');
    }

    return (
        <div id="info-bubble">
            <div id="info-bubble__close"  onClick={handleClick}>X</div>
            <div id="info-bubble__background">
                <img id="info-bubble__img" src="/img/avatar-01.svg" alt="Image" />
                
                <div className="content container__body none">
                    <h1 id="info-bubble__title"></h1>
                    <p id="info-bubble__subtitle"></p>
                    <a id="info-bubble__btn" className="btn-common noMargin btn-common__white__fill" href="/"></a>
                </div>
            </div>
        </div>
    ) 
}

export default InfoBubble;