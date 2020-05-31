import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderActivity from '../../components/HeaderActivity.js';
import ActivitiesGrid from '../../components/ActivitiesGrid.js';
import InfoBubble from '../../components/InfoBubble.js';

function ActivityChoice(props) {

    const [subCat, setSubCat] = useState({})
    // Récupération de l'id dans l'URL
    let catSlug = props.match.params.catSlug;
    let subCatSlug = props.match.params.subCatSlug;

    // Get subcat from server

    useEffect(() => {
        axios.get('/subcategory/' + catSlug + '/' + subCatSlug)
        .then(json => {
            if(json.data.data) {
                setSubCat(json.data.data);
            }
        }).catch(error => {
            console.log(error);
        })
    }, [])

    console.log(subCat);

    // Récupération des infos et choix de l'activité selon l'id
    let subcat = {
        id:2, name: "Dessin", img: "/icons/icon-activity-03.svg", color: "blue", activities: [
            {id:1, name:"Lion", img:"/img/avatar-02.svg"},
            {id:3, name:"Grenouille", img:"/img/avatar-04.svg"},
            {id:4, name:"Paresseux", img:"/img/avatar-06.svg"},
            {id:6, name:"Chien", img:"/img/avatar-08.svg"},
            {id:8, name:"Chat", img:"/img/avatar-10.svg"},
            {id:3, name:"Grenouille", img:"/img/avatar-12.svg"},
            {id:4, name:"Paresseux", img:"/img/avatar-14.svg"},
            {id:6, name:"Chien", img:"/img/avatar-03.svg"},
            {id:8, name:"Chat", img:"/img/avatar-11.svg"}  
        ]
    };


    return (

        <div className="container yellow background">
            <div className="container__body none">
                <HeaderActivity img={subcat.img} name={subcat.name} color={subcat.color} />
                <div className="content">
                    <ActivitiesGrid choices={subcat.activities} />
                </div>
            </div>
            <InfoBubble />
        </div>
    ) 
}

export default ActivityChoice;