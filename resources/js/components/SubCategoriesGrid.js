import React, { useState, useEffect } from 'react';

function SubCategoriesGrid(props) {

    const [subCats, setSubCats] = useState([]);

    useEffect(() => {
        axios.get('/api/subcategories/all')
        .then(json => {
            if(json.data.data) {
                setSubCats(json.data.data);
            }
        }).catch(error => {
            console.log(error);
        });

    }, []);

    const filters = (e,category_slug) => {
        e.preventDefault();
        
        // Recherche des activités selon category_slug

        // Changement de l'affichage
        let categ = e.currentTarget;
        categ.classList.add('selected');
        $('.categories-filters__option.filter.selected').removeClass('selected');
    }

    console.log(subCats);

    if(Object.keys(subCats).length > 0) {
        return (
            <>
                <section className="categories-filters">
                    <p className="categories-filters__option">Choisis une <br />catégorie</p>
                    <p className="categories-filters__option filter selected" onClick={(e) => {() => filters(e,'tout')}}>Tout</p>
                    <p className="categories-filters__option filter" onClick={(e) => {() => filters(e,'cuisine')}}>Cuisine</p>
                    <p className="categories-filters__option filter" onClick={(e) => {() => filters(e,'creativite')}}>Créativité</p>
                    <p className="categories-filters__option filter" onClick={(e) => {() => filters(e,'jeux-dexterieurs')}}>Jeux d'extérieurs</p>
                    <p className="categories-filters__option filter" onClick={(e) => {() => filters(e,'jeux-dinterieurs')}}>Jeux d'intérieurs</p>
                </section>
                <section className="activities-grid">
                    {subCats.map((subCat,index) => {
                        
                        return (
                            <a className="activities-grid__activity" href={"/activity-choice/" + subCat.category_slug + '/' + subCat.slug} key={index}>
                                <p className="activities-grid__activity__name">{subCat.name}</p>
                                <img className="activities-grid__activity__img" src={'/img/sub_categories/'+subCat.img} alt={subCat.name} />
                                <div className={"activities-grid__activity__background "/* + activity.color */}></div>
                            </a>
        
                            
                        )
                    })
                    }
                </section>
            </>
        ) 
    } else {
        return (
            <div>Loading...</div>
        )
    }


}

export default SubCategoriesGrid;