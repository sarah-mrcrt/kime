import React from 'react';
import RegisterStepBar from '../../components/RegisterStepBar';

function ActivityStep(props) {

    let etape = {id:3, number:2, name:"Matériaux", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin nunc proin id amet, semper velit. Orci auctor leo nunc, tellus et in. Ridiculus nibh dignissim nulla elementum a non nunc adipiscing mi.", img:"/img/category.jpg"}
    // etape.number = le numéro de l'étape actuel

    let nbEtapesTotales = 5; // Le nombre total d'étape
    let idEtapeSuivante = 4;
    let idEtapePrecedente = 1;

    return (

        <div className="container yellow background activity-step">
            <a className="container__close" href="/">X</a>
            <div className="activity-step__img">
                <img src={etape.img} alt="Image de l'étape actuelle"/>
            </div>
            <div className="container__body">
                <div className="flex-y">
                    <div className="activity-step__titles">
                        <p className="activity-step__subtitle">Etape {etape.number}</p>
                        <h1 className="activity-step__title yellow">{etape.name}</h1>
                    </div>
                    <p className="activity-step__text">{etape.text}</p>
                </div>
                <RegisterStepBar nb={nbEtapesTotales} actualStep={etape.number} color="yellow"/>
                <a className="activity-step__next" href={"/activity-step/" + idEtapeSuivante}>Suivant</a>
                <a className="activity-step__prev" href={"/activity-step/" + idEtapePrecedente}>Retour</a>
            </div>
        </div>
    ) 
}

export default ActivityStep;