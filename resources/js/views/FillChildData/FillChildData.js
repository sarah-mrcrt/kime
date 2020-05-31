import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import FillChildInfo from './FillChildInfo';
import AvatarsGrid from '../../components/AvatarsGrid';
import CategoriesGrid from '../../components/CategoriesGrid';
import StepBar from '../../components/StepBar';
import SetChildrenNumber from './SetChildrenNumber';
import axios from 'axios';

function FillChildData(props) {
    
    const [currentPage, setCurrentPage]= useState(0);
    const [childrenNumber, setChildrenNumber] = useState(1);

    // State vars for all children
    const [children, setChildren] = useState([]);
    const [childrenInfo, setChildrenInfo] = useState([]);
    const [avatars, setAvatars] = useState([]);
    const [childrenCats, setChildrenCats] = useState([]);

    // State vars for current child
    const [currentChildIndex, setCurrentChild] = useState(0);

    /*
    *  DATA PROPS 
    */

    // CategoriesGrid props
    const categories = [
        {id: 2,  name:"Cuisine",    img: "/img/category-03.svg"}, 
        {id: 7,  name:"Créativité", img: "/img/category-02.svg"}, 
        {id: 0,  name:"Jardin",     img: "/img/category-05.svg"},
        {id: 10, name:"Jeux",       img: "/img/category-04.svg"}
    ];

    // AvatarsGrid props
    let kidScore = 0;
    const availableAvatars = [
        {id:2, img:"/img/avatar-11.svg", minScore: 0}, 
        {id:7, img:"/img/avatar-10.svg", minScore: 0}, 
        {id:0, img:"/img/avatar-08.svg", minScore: 0},
        {id:7, img:"/img/avatar-03.svg", minScore: 2}, 
        {id:10, img:"/img/avatar-07.svg", minScore: 0}
    ];

    // StepBar props
    const steps = ["Informations", "Compagnon", "Activités"];


    /*
    *  FUNCTIONS 
    */

    // Go to next page
    const nextStep = () => {
        setCurrentPage(currentPage+1);
    }

    // Store childInfo in childrenInfo,  go to next page
    const storeChildInfo = info => {
        let tmp = childrenInfo;
        tmp.push(info);

        setChildrenInfo(tmp);

        nextStep();
    }

    // Store current avatar in avatars, go to next page
    const storeAvatar = avatar => {
        let tmp = avatars;
        tmp.push(avatar);
        setAvatars(tmp);

        nextStep();
    }

    // Store categories, increment currentChildIndex, reset currentPage
    const storeCategories = categories => {
        let tmp = childrenCats;
        tmp.push(categories);
        setChildrenCats(tmp);
        
        nextChild();
    }

    const storeCurrentChild = () => {
        let child = {
            name: childrenInfo[currentChildIndex].name,
            birthdate: childrenInfo[currentChildIndex].birthdate,
            avatar: avatars[currentChildIndex],
            categories: childrenCats[currentChildIndex]
        }

        let tmp = children;
        tmp.push(child);
        setChildren(tmp);
    }

    const storeChildrenData = () => {
        let data = {
            count: childrenNumber,
            children: children
        }

        // Insert each child in db. Insert children data in localStorage if everything went fine.
        children.forEach(child => {
            axios.post("/kid/create", child)

            .then(response => {
                return response;

            }).then(json => {
                if(json.data.success) {
                    localStorage.setItem('childrenData', JSON.stringify(data));
                } else if (json.data.error) {
                    console.log(json.data.error);
                }

            }).catch(error => {
                console.log(error);
            });
        });

        
    }

    const nextChild = () => {

        // Storing child in children array
        storeCurrentChild();

        setCurrentChild(currentChildIndex+1);

        // If all children data have been filled
        if(currentChildIndex == childrenNumber-1) {
            storeChildrenData();
        }

        setCurrentPage(1);
    }

    /*
    *  PAGES SETUP
    */

    // Set array of pages components
    const pages = [
        <SetChildrenNumber setChildrenNumber={setChildrenNumber} nextStep={nextStep}/>,

        <FillChildInfo nextStep={storeChildInfo}/>,

        <AvatarsGrid avatars={availableAvatars} score={kidScore} setAvatar={storeAvatar} displayUnlocked={false}/>,

        <CategoriesGrid categories={categories} setCategories={storeCategories} />
    ];

    // Current page component
    let component = pages[currentPage];
    console.log("currentPage: " + currentPage);

    /*
    *  RENDER
    */
    
    // SetChildrenNumber component is rendered separately as layout is different
    if(currentPage < 1 && currentChildIndex < childrenNumber) {
        return (
            <div>
                {component}
            </div>
        );

    } else if (currentChildIndex < childrenNumber) {
        return (
            <div className="container yellow background fill-child-data">
                <div className="container__body none content">

                    <div className="fill-child-data__header">
                        <h1 className="fill-child-data__title">Profil</h1>
                        <p className="fill-child-data__subtitle">Créez le profil de votre premier enfant</p>
                        <StepBar steps={steps} nbStep={currentPage} />
                    </div>
                    <div className="fill-child-data__body">
                        {component}
                    </div>
                
                </div>
            </div>
        );
    } else { // When all data is filled, redirect to /accueil
        return <Redirect to="/end-registration" />
    }
}

export default FillChildData;
