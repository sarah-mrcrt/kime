import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import FillChildInfo from './FillChildInfo';
import AvatarsGrid from '../../components/AvatarsGrid';
import CategoriesGrid from '../../components/CategoriesGrid';
import StepBar from '../../components/StepBar';
import SetChildrenNumber from './SetChildrenNumber';

function FillChildData(props) {
    
    const [currentPage, setCurrentPage]= useState(0);
    const [childrenNumber, setChildrenNumber] = useState(1);

    // State vars for all children
    const [children, setChildren] = useState({});
    const [childrenInfo, setChildrenInfo] = useState([]);
    const [avatars, setAvatars] = useState([]);

    // State vars for current child
    const [currentChild, setCurrentChild] = useState(0);
    const [childInfo, setChildInfo] = useState({});
    const [avatar, setAvatar] = useState('');

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

        console.log('childrenNumber: ' + childrenNumber + '\n');
    }

    // Store childInfo in childrenInfo,  go to next page
    const storeChildInfo = () => {
        let tmp = childrenInfo;
        tmp.push(childInfo);
        nextStep();

        console.log('childrenInfo:');
        console.log(tmp + '\n');
    }

    // Store current avatar in avatars, go to next page
    const storeAvatar = () => {
        let tmp = avatars;
        tmp.push(avatar);
        nextStep();

        console.log('avatars:');
        console.log(tmp + '\n');
    }

    /*
    *  PAGES SETUP
    */

    // Set array of pages components
    const pages = [
        <SetChildrenNumber setChildrenNumber={setChildrenNumber} nextStep={nextStep}/>,

        <FillChildInfo setChildInfo={setChildInfo} nextStep={storeChildInfo}/>,

        <AvatarsGrid avatars={availableAvatars} nextStep={storeAvatar}/>,

        <CategoriesGrid categories={categories}/>
    ];

    // Current page component
    let component = pages[currentPage];
    console.log("currentPage: " + currentPage);

    /*
    *  RENDER
    */
    
    // SetChildrenNumber component is rendered separately as layout is different
    if(currentPage < 1) {
        return (
            <div>
                {component}
            </div>
        );

    } else if (currentChild < childrenNumber) {
        return (
            <div className="fill-child-data">
                <div className="fill-child-data__header">
                    <h1 className="fill-child-data__title">Profil</h1>
                    <p className="fill-child-data__subtitle">Créez le profil de votre premier enfant</p>
                </div>
                <StepBar steps={steps} nbStep={3} />
                <div className="fill-child-data__body">
                    {component}
                </div>
                
            </div>
        );
    } else { // When all data is filled, redirect to /accueil
        return <Redirect to="/accueil" />
    }
}

export default FillChildData;
