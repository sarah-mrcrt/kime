import React, { useState, useEffect } from 'react';
import CategoriesFilters from './CategoriesFilters';

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

    const filtrer = (e,category_slug) => {
        e.preventDefault();
        
        // Recherche des activités selon category_slug

        // Changement de l'affichage
        console.log(category_slug);

        let categ = e.currentTarget;
        axios.get('/api/subcategory/'+categ)
        .then(json => {
            if(json.data.data) {
                setSubCats(json.data.data);
            }
        }).catch(error => {
            console.log(error);
        });

        $('.categories-filters__option').removeClass('selected');
        categ.classList.add('selected');
    }

    if(Object.keys(subCats).length > 0) {
        return (
            <>
                <CategoriesFilters filtrer={filtrer}/>
                <section className="activities-grid">
                    {subCats.map((subCat,index) => {
                        
                        return (
                            <a className="activities-grid__activity" href={"/activity-choice/" + subCat.category_slug + '/' + subCat.slug} key={index}>
                                <p className="activities-grid__activity__name">{subCat.name}</p>
                                <img className="activities-grid__activity__img" src={'/img/sub_categories/'+subCat.img} alt={subCat.name} />
                                <div className={"activities-grid__activity__background " + subCat.color}></div>
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