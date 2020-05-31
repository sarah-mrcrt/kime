import React from 'react';
import Navigation from '../../components/Navigation';
import ActivitiesGrid from '../../components/ActivitiesGrid.js';
import Header from '../../components/Header.js';


function ParentHome() {

    let activities = [
        {id:2, name:"Gâteaux", img:"/icons/icon-activity-01.svg", color:"blue"}, 
        {id:7, name:"Dessin", img:"/icons/icon-activity-03.svg", color:"yellow"}, 
        {id:0, name:"Jeux d'équilibres", img:"/icons/icon-activity-02.svg", color:"red"},
        {id:10, name:"Jeux", img:"/icons/icon-activity-03.svg", color:"blue"}
    ];
    let kid = {id:2, name:"Jérôme", avatar:"/img/avatar-07.svg"}
    console.log(JSON.parse(localStorage.getItem('childrenData')));

    return (
        <div className="container red background nav">
            <Header title="Créations" subtitle="de vos enfants" color="red" imageUrl="/img/parent-home-img-01.svg"/>
            <div className="container__body">
                <div className="content">
                    ParentHome
                </div>
            </div>
            <Navigation page="home" parent={true} />
        </div>
    )
}

export default ParentHome;