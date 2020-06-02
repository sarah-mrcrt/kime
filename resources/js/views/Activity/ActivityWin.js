import React, { useState, useEffect } from 'react';
import RoundBackground from '../../components/RoundBackground';
import Loading from '../../components/Loading';

function ActivityWin(props) {

    const kid = props.kid;

    let hardcoded_kid = {name:"Jérôme", avatar:"avatar-01.svg"}
    let activity = {name:"Dessin"}
    console.log(props.kid);
    if(Object.keys(kid).length > 0) {
        
        axios.get('/api/winTrophy/'+ kid.id + '/' + props.trophy_id)
        .then(json => {
            if(json.data.success)
                console.log('Trophy unlocked successfully');
        })

        return (

            <div className="container yellow background activity-win">
                <div className="content">
                    <h1 className="activity-win__title">Bravo {kid.name}</h1>
                    <p className="activity-win__subtitle">Tu as finis l'activité "{activity.name}" !</p>
                </div>
                <div className="activity-win__img">
                    <img src={'/img/avatars/'+kid.avatar_id} alt="Ton avatar"/>
                    <RoundBackground color="yellow" shadow={true}/>
                </div>
    
                <a className="btn-common noMargin btn-common__blue__fill" href="/accueil">Retourner à l'accueil</a>
            </div>
        ) 
    } else {
        return <Loading />;
    }
    
}

export default ActivityWin;