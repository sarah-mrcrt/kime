import React from 'react';
import RoundBackground from '../../components/RoundBackground.js';
import StepBar from '../../components/StepBar.js';
import CategoriesGrid from '../../components/CategoriesGrid.js';
import ActivitiesGrid from '../../components/ActivitiesGrid.js';
import AvatarsGrid from '../../components/AvatarsGrid.js';
import Header from '../../components/Header.js';

function Test() {

    /* // STEP BAR

    let steps = ["Informations", "Compagnon", "Activités"];

    return (
        <div className="content">
            <StepBar steps={steps} nbStep={3} />
        </div>
    )
    */

    /* // ROUND BACKGROUND
    return (
        <div className="content">
            <RoundBackground color="yellow" />
        </div>
    )
    */
/*
    // CATEGORIES GRID

    let categories = [
        {id:2, name:"Cuisine", img:"/img/category-03.svg"}, 
        {id:7, name:"Créativité", img:"/img/category-02.svg"}, 
        {id:0, name:"Jardin", img:"/img/category-05.svg"},
        {id:10, name:"Jeux", img:"/img/category-04.svg"}
    ];

    // /!\ Penser à ajouter un formulaire autour du composant pour récupérer les valeurs des checkbox "categories[]"

    return (
        <div className="content">
            <CategoriesGrid categories={categories} />
        </div>
    )
*/
/*
    // ACTIVITIES GRID

    let activities = [
        {id:2, name:"Cuisine", img:"/icons/icon-activity-02.svg", color:"yellow"}, 
        {id:7, name:"Dessin", img:"/icons/icon-activity-03.svg", color:"blue"}, 
        {id:0, name:"Jeux d'équilibres", img:"/icons/icon-activity-02.svg", color:"red"},
        {id:10, name:"Jeux", img:"/icons/icon-activity-03.svg", color:"blue"}
    ];


    return (
        <div className="content">
            <ActivitiesGrid activities={activities} />
        </div>
    )
    */
   /*

    // AVATARS GRID

    let kidScore = 0;
    let avatars = [
        {id:2, img:"/img/avatar-11.svg", minScore: 0}, 
        {id:7, img:"/img/avatar-10.svg", minScore: 0}, 
        {id:0, img:"/img/avatar-08.svg", minScore: 0},
        {id:7, img:"/img/avatar-03.svg", minScore: 2}, 
        {id:10, img:"/img/avatar-07.svg", minScore: 0}
    ];

    // /!\ Penser à ajouter un formulaire autour du composant pour récupérer les valeurs des radios "avatars[]"

    // PROPS 
    // avatars : tableau comprenant les avatars de la BDD
    // score : score actuel de l'enfant (si nouveau = 0)
    // displayUnlocked : afficher (true) ou non (false) les avatars bloqués
    //
   
    return (
        <div className="content">
            <AvatarsGrid avatars={avatars} score={kidScore} displayUnlocked={true} />
        </div>
    )
    */

    // HEADER
    
    // PROPS 
    // title* : titre
    // subtitle* : souttitre
    // imageUrl : URL du png/SVG à afficher devant le fond
    // color : couleur du fond RoundBackground ("yellow", "red", "blue")
    // align* [si title & subtitle ne sont pas utilisé] : "left" ou "right" (centré par défaut)
    // * éléments facultatifs

    return (
        <>
        <Header align="left" color="blue" imageUrl="/img/login-img.png"/>
        </>
    )
    


}

export default Test;

