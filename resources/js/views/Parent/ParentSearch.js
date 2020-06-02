import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
import ActivitiesGrid from '../../components/ActivitiesGrid.js';


function ParentSearch() {
    const [recherche, setRecherche] = useState('');

    let activities = [
        {id:2, name:"Gâteaux", img:"/icons/icon-activity-01.svg", color:"blue"}, 
        {id:7, name:"Dessin", img:"/icons/icon-activity-03.svg", color:"yellow"}, 
        {id:0, name:"Jeux d'équilibres", img:"/icons/icon-activity-02.svg", color:"red"},
        {id:10, name:"Jeux", img:"/icons/icon-activity-03.svg", color:"blue"}
    ];
    console.log(JSON.parse(localStorage.getItem('childrenData')));

    return (
        <div className="container red background nav">            
            <div className="page-header-parent">
                <div className="page-header-parent__text">
                    <form method="post" className="form form-auth">  
                                
                        <div className={recherche === '' ? ("form-auth__input-div one") : ("form-auth__input-div one focus")}>
                            <div className="i">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="div">
                            <label className="form__label" htmlFor="search">Rechercher</label>
                            <input className="input" onChange={(e) => setAdminPassword(e.target.value)} type="text" name="search" value={recherche}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container__body">
                <div className="content">
                    Veuillez saisir une recherche..
                </div>
            </div>
            <Navigation page="search" parent={true} />
        </div>
    )
}

export default ParentSearch;