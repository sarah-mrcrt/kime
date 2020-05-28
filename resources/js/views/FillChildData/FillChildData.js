import React, { useState } from 'react';
import FillChildInfo from './FillChildInfo';
import AvatarsGrid from '../../components/AvatarsGrid';
import CategoriesGrid from '../../components/CategoriesGrid';
import StepBar from '../../components/StepBar';
import SetChildrenNumber from './SetChildrenNumber';


function FillChildData(props) {
    
    const [currentPage, setCurrentPage]= useState(0);
    const [childrenNumber, setChildrenNumber] = useState(1);
    const [avatar, setAvatar] = useState();

    // Go to next page
    const nextStep = () => {
        setCurrentPage(currentPage+1);
    }

    // CategoriesGrid props
    const categories = [
        {id: 2,  name:"Cuisine",    img: "/img/category-03.svg"}, 
        {id: 7,  name:"Créativité", img: "/img/category-02.svg"}, 
        {id: 0,  name:"Jardin",     img: "/img/category-05.svg"},
        {id: 10, name:"Jeux",       img: "/img/category-04.svg"}
    ];

    // AvatarsGrid props
    let kidScore = 0;
    const avatars = [
        {id:2, img:"/img/avatar-11.svg", minScore: 0}, 
        {id:7, img:"/img/avatar-10.svg", minScore: 0}, 
        {id:0, img:"/img/avatar-08.svg", minScore: 0},
        {id:7, img:"/img/avatar-03.svg", minScore: 2}, 
        {id:10, img:"/img/avatar-07.svg", minScore: 0}
    ];

    // Pages
    const pages = [
        <SetChildrenNumber setChildrenNumber={setChildrenNumber} nextStep={nextStep}/>,

        <form action="#" method="post">
            <AvatarsGrid avatars={avatars}/>
        </form>,

        <FillChildInfo/>,

        <CategoriesGrid categories={categories}/>
    ];

    // StepBar props
    const steps = ["Informations", "Compagnon", "Activités"];

    // Current page component
    let component = pages[currentPage];
    console.log("currentPage: "+currentPage);
    
    if(currentPage <= 1) {
        {component}
    } else {

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
    }
}

export default FillChildData;
