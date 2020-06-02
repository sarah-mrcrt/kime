import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import RoundBackground from '../../components/RoundBackground.js';
import Header from '../../components/Header.js';
import Loading from '../../components/Loading';

const KidChoice = props => {
    const [kids, setKids] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        let childrenData = JSON.parse(localStorage.getItem('childrenData'));
        setKids(childrenData.children);

    }, [])

    if(redirect) {
        return <Redirect to='/accueil' />;
    }

    const handleClick = e => {
        e.preventDefault();

        let id = event.target.getAttribute('kid');
        
        let children = JSON.parse(localStorage.getItem('childrenData')).children;

        let array = Object.values(children);
        let kid = array.find(kid => kid.id == id);

        sessionStorage.setItem('currentKid', JSON.stringify(kid));

        setRedirect(true);
    }

    let jsxKids = [];

    let kidsArray = Object.values(kids);
    for(const [index, kid] of kidsArray.entries()) {
        jsxKids.push(
            <a onClick={handleClick} className="page-kid-choice__choix__kid" href='/accueil' key={index}>
                <div className="page-kid-choice__choix__kid__background">
                    <img className="page-kid-choice__choix__kid__background__img" src={'/img/avatars/'+ kid.avatar_id} kid={kid.id} alt="Avatar de l'enfant" />
                    <RoundBackground color="yellow" shadow={true}/>
                </div>
                <div className="page-kid-choice__choix__kid__text">
                    <h1 className="page-kid-choice__choix__kid__text__title">{kid.name}</h1>
                </div>
            </a>
        );
    }

    if(Object.keys(kids).length > 0) {
        return (
            <div className="container yellow background page-kid-choice">
                <Header title="Qui es-tu ?" subtitle="Choisis ton compte !" color="yellow" imageUrl="/img/kid-choice-img-01.svg"/>
                <div className="container__body">
                    <div className="content flex-grow">
                        <div className="page-kid-choice__choix">
                            {jsxKids}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loading />;
    }
}

export default KidChoice;