import React, { useState } from 'react';
import FillChildInfo from './FillChildInfo';
import SetChildAvatar from './SetChildAvatar';
import AvatarsGrid from '../../components/AvatarsGrid';
import ActivitiesGrid from '../../components/ActivitiesGrid';
import StepBar from '../../components/StepBar';


function FillChildData(props) {
    
    const [currentPage, setCurrentPage]= useState(1);
    const [avatar, setAvatar] = useState();

    const pages = [FillChildInfo, AvatarsGrid, ActivitiesGrid];

    const steps = ["Informations", "Compagnon", "Activités"];

    const categories = [
        {id: 2,  name:"Cuisine",    img: "/img/category-03.svg"}, 
        {id: 7,  name:"Créativité", img: "/img/category-02.svg"}, 
        {id: 0,  name:"Jardin",     img: "/img/category-05.svg"},
        {id: 10, name:"Jeux",       img: "/img/category-04.svg"}
    ];

    const nextStep = () => {
        setCurrentPage(currentPage+1);
    }

    let component = pages[currentPage];

    return (
        <div className="fill-child-data">
            <div className="fill-child-data__header">
                <h1 className="fill-child-data__title">Profil</h1>
                <p className="fill-child-data__subtitle">Créez le profil de votre premier enfant</p>
            </div>
            <StepBar steps={steps} nbStep={3} />

            {component}
        </div>
    );
}

export default FillChildData;
