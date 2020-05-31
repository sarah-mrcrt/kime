import React, { useState, useEffect } from 'react';
import RegisterStepBar from '../../components/RegisterStepBar';
import axios from 'axios';

function ActivityStep(props) {

        // get activityId & stepId from url
        let activityId = props.match.params.activityid;
        let stepId = 1; // Default: 1
        if(props.match.params.stepId) {
            stepId = props.match.params.stepId;
        }
    
        useEffect(() => {
            axios.get('/api/activity/' + activityId + '/' + stepId)
            .then(json => {
                if(json.data.data) {
                    console.log(json.data.data);
                }
            }).catch(error => {
                console.log(error);
            });
        }, []);

    let activity = {id:2} // ...
    let choice = {id:5} // ...
    let etape = {id:2, position:5, name:"Matériaux", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin nunc proin id amet, semper velit. Orci auctor leo nunc, tellus et in. Ridiculus nibh dignissim nulla elementum a non nunc adipiscing mi.", img:"/img/category.jpg"}
    // etape.position = le numéro de l'étape actuel

    let nbEtapesTotales = 5; // Le nombre total d'étape
    let idEtapeSuivante = 4; 
    let idEtapePrecedente = 1;
    let redirectionSuivante = "/activity-step/" + idEtapeSuivante;
    let redirectionPrécédente = "/activity-step/" + idEtapePrecedente;

    if( etape.position === nbEtapesTotales) {
        redirectionSuivante = '/activity-upload';
    } else if (etape.position === 1) {
        redirectionPrécédente = '/activity-choice/'+ activity.id;
    }

    return (

        <div className="container yellow background activity-step">
            <a className="container__close" href="/accueil">X</a>
            <div className="activity-step__img">
                <img src={etape.img} alt="Image de l'étape actuelle"/>
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
                <a className="activity-step__next" href={redirectionSuivante}>Suivant</a>
                <a className="activity-step__prev" href={redirectionPrécédente}>Retour</a>
            </div>
        </div>
    ) 
}

export default ActivityStep;