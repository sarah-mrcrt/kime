import React, {useState, useContext} from 'react';
import Navigation from '../../components/Navigation';
import TrophiesGrid from '../../components/TrophiesGrid.js';
import InfoBubble from '../../components/InfoBubble.js';
import Header from '../../components/Header.js';

function Trophies(props) {
    let kidScore = 0;
    let trophies = [
        {id:2, name:"Créateur", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"trophy-01.svg", color:"blue"}, 
        {id:7, name:"Cuisinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"trophy-02.svg", color:"red"}, 
        {id:0, name:"Jardinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"trophy-03.svg", color:"blue"},
        {id:7, name:"Stratège", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"trophy-04.svg", color:"yellow"}, 
        {id:2, name:"Créateur", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"trophy-05.svg", color:"yellow"}, 
    ];

    return (
        <div className="container yellow background nav">
            <Header title="Trophées" subtitle="Toutes tes victoires !" color="yellow" imageUrl="/img/trophies-img-01.svg"/>

            <div className="container__body">
                <div className="content">
                    <TrophiesGrid trophies={trophies} score={kidScore} displayUnlocked={true} />
                    <Navigation page="trophies" />
                </div>
            </div>
            <InfoBubble />
        </div>
    )

}

export default Trophies;
