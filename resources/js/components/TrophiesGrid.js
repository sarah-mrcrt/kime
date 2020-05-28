import React, { useState } from 'react';
import RoundBackground from './RoundBackground.js';

function TrophiesGrid(props) {

    const handleClick = e => {
        e.preventDefault();
        let info = e.currentTarget;
        let img = $('.info-bubble__img', info).attr('src');
        let title = $('.info-bubble__title', info).text();
        let subtitle = $('.info-bubble__subtitle', info).text();
        console.log(title)

        $('#info-bubble__img').attr('src', img);
        $('#info-bubble__title').text(title);
        $('#info-bubble__subtitle').text(subtitle);

        if (info.classList.contains('locked') == true) {
            $('#info-bubble').addClass('locked');
        } else if (info.classList.contains('unlocked') == true) {
            $('#info-bubble').addClass('unlocked');
        }

        $('#info-bubble__title').css('display', "block");
        $('#info-bubble__subtitle').css('display', "block");
        $('#info-bubble__img').css('display', "block");
        $('#info-bubble').css('display','flex');
    }

    return (
        <section className="trophies-grid">
            {props.trophies.map((trophy,index) => {

                let unlockedClass = "locked";
                if(trophy.minScore <= props.score) {
                    unlockedClass = "unlocked";
                } else if (props.displayUnlocked == false){
                    unlockedClass = "deleted"
                }
                console.log(unlockedClass);

                return (
                    <div className={"trophies-grid__trophy " + unlockedClass + " info-bubble__info"} key={index} onClick={handleClick}>
                        <img className="trophies-grid__trophy__img info-bubble__img" src={trophy.img} alt={trophy.name} />
                        <div className="trophies-grid__trophy__background"></div>

                        <div className="trophies-grid__trophy__infos">
                            <h1 className="trophies-grid__trophy__title info-bubble__title">{trophy.name}</h1>
                            <p className="trophies-grid__trophy__subtitle info-bubble__subtitle">{trophy.text}</p>
                        </div>
                    </div>
                )
            })
            }
        </section>
    ) 
}

export default TrophiesGrid;