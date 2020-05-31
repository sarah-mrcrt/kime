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
        axios.get('/api/category/' + catSlug + '/' + subCatSlug)
        .then(json => {
            if(json.data.name) {
                setSubCat(json.data);
            }
        }).catch(error => {
            console.log(error);
        })
    }, [])

    console.log(subCat);

    if(Object.keys(subCat).length > 0) {
        return (

            <div className="container yellow background">
                <div className="container__body none">
                    <HeaderActivity img={'/img/'+subCat.img} name={subCat.name} color="blue" />
                    <div className="content">
                        <ActivitiesGrid choices={subCat.activities} />
                    </div>
                </div>
                <InfoBubble />
            </div>
        ) 
    } else {
        return (
            <div>Loading...</div>
        )
    }

}

export default ActivityChoice;