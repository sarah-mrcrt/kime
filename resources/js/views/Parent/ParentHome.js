import React from 'react';
import Navigation from '../../components/Navigation';
import CreationsParent from '../../components/CreationsParent.js';
import Header from '../../components/Header.js';


function ParentHome() {

    let kids = [
        {id:2, name:"Jérôme", avatar:"avatar-07.svg"},
        {id:8, name:"Marie", avatar:"avatar-12.svg"}
    ]
    
    // Récupérer les creations (+ rérentes à + anciennes) de tous les "kids"
    let creations = [ // Regroupement des creations par activité (plus récente à plus ancienne)
        {id: 1, kid_id:2, sub_category:2, img:"creation-04.jpg", created_at:'2020-06-01 11:08:13'},
        {id: 2, kid_id:8, sub_category:4, img:"creation-01.jpg", created_at:'2020-05-30 11:08:13'},
        {id: 3, kid_id:2, sub_category:7, img:"creation-03.jpg", created_at:'2020-05-25 11:08:13'},
        {id: 4, kid_id:8, sub_category:2, img:"creation-06.jpg", created_at:'2020-05-20 11:08:13'}
    ]
    // Récupération des activités/subcats & Fonctionnement du bouton Partage dans le composant CreationsParent.js

    console.log(JSON.parse(localStorage.getItem('childrenData')));

    return (
        <div className="container red background nav">
            <Header title="Créations" subtitle="de vos enfants" color="red" imageUrl="/img/parent-home-img-01.svg"/>
            <div className="container__body">
                <div className="content">
                    <CreationsParent creations={creations} kids={kids} />
                </div>
            </div>
            <Navigation page="home" parent={true} />
        </div>
    )
}

export default ParentHome;