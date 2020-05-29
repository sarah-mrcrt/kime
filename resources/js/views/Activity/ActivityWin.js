import React from 'react';
import RoundBackground from '../../components/RoundBackground';

function ActivityWin(props) {
    let kid = {name:"Jérôme", avatar:"/img/avatar-01.svg"}
    let activity = {name:"Dessin"}

    return (

        <div className="container yellow background activity-win">
            <div className="content">
                <h1 className="activity-win__title">Bravo {kid.name}</h1>
                <p className="activity-win__subtitle">Tu as finis l'activité "{activity.name}" !</p>
            </div>
            <div className="activity-win__img">
                <img src={kid.avatar} alt="Ton avatar"/>
                <RoundBackground color="yellow" shadow={true}/>
            </div>

            <a className="btn-common noMargin btn-common__blue__fill" href="/accueil">Retourner à l'accueil</a>
        </div>
    ) 
}

export default ActivityWin;