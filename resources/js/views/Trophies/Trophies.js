import React, {useState, useContext} from 'react';
import Navigation from '../../components/Navigation';
import TrophiesGrid from '../../components/TrophiesGrid.js';
import InfoBubble from '../../components/InfoBubble.js';
import Header from '../../components/Header.js';

function Trophies(props) {
    let kidScore = 0;
    return (
        <div className="container yellow background nav">
            <Header title="Trophées" subtitle="Toutes tes victoires !" color="yellow" imageUrl="/img/trophies-img-01.svg"/>

            <div className="container__body">
                <div className="content">
                    <TrophiesGrid score={kidScore} displayUnlocked={true} />
                    <Navigation page="trophies" />
                </div> 
            </div>
            <InfoBubble />
        </div>
    )

}

export default Trophies;
