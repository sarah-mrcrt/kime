import React from 'react';
import Navigation from '../../components/Navigation';
import ActivitiesGrid from '../../components/ActivitiesGrid.js';
import HeaderKid from '../../components/HeaderKid.js';


function Home() {

    let activities = [
        {id:2, name:"Gâteaux", img:"/icons/icon-activity-01.svg", color:"blue"}, 
        {id:7, name:"Dessin", img:"/icons/icon-activity-03.svg", color:"yellow"}, 
        {id:0, name:"Jeux d'équilibres", img:"/icons/icon-activity-02.svg", color:"red"},
        {id:10, name:"Jeux", img:"/icons/icon-activity-03.svg", color:"blue"}
    ];
    let kid = {id:2, name:"Jérôme", avatar:"/img/avatar-07.svg"}

    return (
        <div className="container yellow background">
            <HeaderKid kid={kid} />
            <div className="container__body">
                <div className="content">
                    <ActivitiesGrid activities={activities} />
                </div>
            </div>
            <Navigation page="home" />
        </div>
    )
}

export default Home;