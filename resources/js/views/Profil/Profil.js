import React from 'react';
import Navigation from '../../components/Navigation';
import HeaderProfile from '../../components/HeaderProfile';
import CreationsKid from '../../components/CreationsKid';

function Profil(props) {

    let kid = {id:2, name:"Jérôme", avatar:"/img/avatar-07.svg"}
    let nb_trophies = 3;  // nb_trophies = nombre de trophée débloqué
    let nb_activities = 10;  // nb_activities = nombre d'activités réalisées

    let activities = [ // Regroupement des creations par activité (plus récente à plus ancienne)
        {id: 2, name:"Dessin", img:"/icons/icon-activity-03.svg", color:"blue", creations: [
            {id:1, img:"/img/category.jpg"},
            {id:3, img:"/img/category.jpg"}, // MAX 3 créations / catégorie -> seulement un aperçu
            {id:10, img:"/img/category.jpg"}
        ]},
        {id: 5, name:"Cuisine", img:"/icons/icon-activity-01.svg", color:"red", creations: [
            {id:1, img:"/img/category.jpg"},
            {id:3, img:"/img/category.jpg"}
        ]},
        {id: 5, name:"Jeux d'équilibre", img:"/icons/icon-activity-02.svg", color:"red", creations: [
            {id:1, img:"/img/category.jpg"}
        ]}
    ]

    return (
        <div className="container yellow background page-profile nav">                        
        <HeaderProfile kid={kid} nb_trophies={nb_trophies} nb_activities={nb_activities}/>
            <div className="container__body">
                <div className="content">
                        <CreationsKid activities={activities} />
                        <Navigation page="profile" />
                </div>
            </div>
        </div>
    )

}

export default Profil;
