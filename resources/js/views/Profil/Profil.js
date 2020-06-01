import React from 'react';
import Navigation from '../../components/Navigation';
import HeaderProfile from '../../components/HeaderProfile';
import CreationsKid from '../../components/CreationsKid';

function Profil(props) {

    let kid = {id:2, name:"Jérôme", avatar:"avatar-07.svg"}
    let nb_trophies = 3;  // nb_trophies = nombre de trophée débloqué
    let nb_activities = 10;  // nb_activities = nombre d'activités réalisées

    let subcats = [ // Regroupement des creations par activité (plus récente à plus ancienne)
        {id: 2, name:"Peinture", img:"sub_category-13.svg", color:"blue", creations: [
            {id:1, img:"creation-04.jpg"},
            {id:3, img:"creation-05.jpg"}, // MAX 3 créations / catégorie -> seulement un aperçu
            {id:10, img:"creation-06.jpg"}
        ]},
        {id: 4, name:"Pains", img:"sub_category-04.svg", color:"red", creations: [
            {id:1, img:"creation-01.jpg"},
            {id:3, img:"creation-02.jpg"}
        ]},
        {id: 7, name:"Nature & Découverte", img:"sub_category-07.svg", color:"yellow", creations: [
            {id:1, img:"creation-03.jpg"}
        ]}
    ]

    return (
        <div className="container yellow background page-profile nav">                        
        <HeaderProfile kid={kid} nb_trophies={nb_trophies} nb_activities={nb_activities}/>
            <div className="container__body">
                <div className="content">
                        <CreationsKid activities={subcats} />
                        <Navigation page="profile" />
                </div>
            </div>
        </div>
    )

}

export default Profil;
