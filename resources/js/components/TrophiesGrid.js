import React, { useState } from 'react';
import RoundBackground from './RoundBackground.js';

function TrophiesGrid(props) {

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
                    <div className={"trophies-grid__trophy " + unlockedClass} key={index}>
                    <img className="trophies-grid__trophy__img" src={trophy.img} alt={trophy.name} />
                        <div className="trophies-grid__trophy__background"></div>

                        <div className="trophies-grid__trophy__infos">
                            <h1 className="trophies-grid__trophy__title">Créateur</h1>
                            <p className="trophies-grid__trophy__subtitle">Lorem ipsum</p>
                        </div>
                    </div>
                )
            })
            }
        </section>
    ) 
}

export default TrophiesGrid;