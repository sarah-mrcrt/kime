import React from 'react';
import Navigation from '../../components/Navigation';
import SubCategoriesGrid from '../../components/SubCategoriesGrid';
import HeaderKid from '../../components/HeaderKid.js';

function Home(props) {

    let kid = JSON.parse(sessionStorage.getItem('currentKid'))

    return (
        <div className="container yellow background nav">
            <HeaderKid kid={kid} />
            <div className="container__body">
                <div className="content">
                    <SubCategoriesGrid />
                    <Navigation page="home" />
                </div>
            </div>
        </div>
    )
}

export default Home;