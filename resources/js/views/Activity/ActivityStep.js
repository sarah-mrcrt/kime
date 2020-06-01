import React, { useState, useEffect } from 'react';
import RegisterStepBar from '../../components/RegisterStepBar';

function ActivityStep(props) {

    let etape = props.step;
    let nbEtapesTotales = props.count; // Le nombre total d'étape

    if(props.step) {
        return (
            <div className="container yellow background activity-step">
                <a className="container__close" href="/accueil">X</a>
                <div className="activity-step__img">
                    <img src={'/img/'+etape.img} alt="Image de l'étape actuelle"/>
                </div>
                <div className="container__body">
                    <div className="flex-y">
                        <div className="activity-step__titles">
                            <p className="activity-step__subtitle">Etape {etape.position}</p>
                            <h1 className="activity-step__title yellow">{etape.name}</h1>
                        </div>
                        <p className="activity-step__text">{etape.text}</p>
                    </div>
                    <RegisterStepBar nb={nbEtapesTotales} actualStep={etape.position} color="yellow"/>
                    <a className="activity-step__next" onClick={props.next}>Suivant</a>
                    {etape.position > 1 &&
                        <a className="activity-step__prev" onClick={props.previous}>Précédent</a>
                    }
                    
                </div>
            </div>
        )
    } else {
        return (
            <div>Chargement...</div>
        )
    }

}

export default ActivityStep;