import React, {useState, useContext} from 'react';
import Navigation from '../../components/Navigation';
import TrophiesGrid from '../../components/TrophiesGrid.js';
import InfoBubble from '../../components/InfoBubble.js';
import Header from '../../components/Header.js';

function Trophies(props) {
    let kidScore = 0;
    let trophies = [
        {id:2, name:"Créateur", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-11.svg", minScore: 0}, 
        {id:7, name:"Cuisinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-10.svg", minScore: 0}, 
        {id:0, name:"Jardinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-08.svg", minScore: 0},
        {id:7, name:"Stratège", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-03.svg", minScore: 2}, 
        {id:2, name:"Créateur", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-15.svg", minScore: 0}, 
        {id:7, name:"Cuisinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-12.svg", minScore: 0}, 
        {id:0, name:"Jardinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-06.svg", minScore: 0},
        {id:7, name:"Stratège", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-01.svg", minScore: 2}, 
        {id:7, name:"Stratège", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-03.svg", minScore: 2}, 
        {id:2, name:"Créateur", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-15.svg", minScore: 0}, 
        {id:7, name:"Cuisinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-12.svg", minScore: 0}, 
        {id:0, name:"Jardinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-06.svg", minScore: 0},
        {id:7, name:"Stratège", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-01.svg", minScore: 2}, 
        {id:7, name:"Stratège", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-03.svg", minScore: 2}, 
        {id:2, name:"Créateur", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-15.svg", minScore: 0}, 
        {id:7, name:"Cuisinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-12.svg", minScore: 0}, 
        {id:0, name:"Jardinier", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-06.svg", minScore: 0},
        {id:7, name:"Stratège", text:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-01.svg", minScore: 2}, 
        {id:10, name:"Aventurier", text:"Lorem aventurier ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ", img:"avatar-07.svg", minScore: 0}
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
