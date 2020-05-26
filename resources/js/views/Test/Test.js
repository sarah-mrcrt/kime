import React from 'react';
import RoundBackground from '../../components/RoundBackground.js';
import StepBar from '../../components/StepBar.js';
import CategoriesGrid from '../../components/CategoriesGrid.js';

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
    


}

export default Test;

