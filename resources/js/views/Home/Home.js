import React from 'react';
import Navigation from '../../components/Navigation';
import SubCategoriesGrid from '../../components/SubCategoriesGrid';
import HeaderKid from '../../components/HeaderKid.js';

function Home(props) {

    let kid = {id:2, name:"Jérôme", avatar:"/img/avatar-07.svg"}
    console.log(JSON.parse(localStorage.getItem('childrenData')));

    return (
        <div className="container yellow background nav">
            <HeaderKid kid={kid} />
            <div className="container__body">
                <div className="content">
                    <SubCategoriesGrid />
                </div>
            </div>
            <Navigation page="home" />
        </div>
    )
}

export default Home;