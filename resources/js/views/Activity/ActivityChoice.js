import React from 'react';

import HeaderActivity from '../../components/HeaderActivity.js';
import ActivityChoiceGrid from '../../components/ActivityChoiceGrid.js';
import InfoBubble from '../../components/InfoBubble.js';

function ActivityChoice(props) {

    // Récupération de l'id dans l'URL
    let id = props.match.params;
    console.log(id);

    // Récupération des infos et choix de l'activité selon l'id
    let activity = {id:2, name: "Dessin", img: "/icons/icon-activity-03.svg", color: "blue", choices: [
        {id:1, name:"Lion", img:"/img/avatar-02.svg"},
        {id:3, name:"Grenouille", img:"/img/avatar-04.svg"},
        {id:4, name:"Paresseux", img:"/img/avatar-06.svg"},
        {id:6, name:"Chien", img:"/img/avatar-08.svg"},
        {id:8, name:"Chat", img:"/img/avatar-10.svg"},
        {id:3, name:"Grenouille", img:"/img/avatar-12.svg"},
        {id:4, name:"Paresseux", img:"/img/avatar-14.svg"},
        {id:6, name:"Chien", img:"/img/avatar-03.svg"},
        {id:8, name:"Chat", img:"/img/avatar-11.svg"}  
    ]}


    return (

        <div className="container yellow background">
            <div className="container__body none">
                <HeaderActivity img={activity.img} name={activity.name} color={activity.color} />
                <div className="content">
                    <ActivityChoiceGrid choices={activity.choices} />
                </div>
            </div>
            <InfoBubble />
        </div>
    ) 
}

export default ActivityChoice;