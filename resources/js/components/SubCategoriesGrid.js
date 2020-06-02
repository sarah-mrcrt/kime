import React, { useState, useEffect } from 'react';
import CategoriesFilters from './CategoriesFilters';
import Loading from '../components/Loading';

function SubCategoriesGrid(props) {

    const [subCats, setSubCats] = useState([]);
    const [selectedCat, setSelectedCat] = useState('');

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

        axios.get('/api/category/'+category_slug)
        .then(json => {
            if(json.data.success) {
                setSubCats(json.data.subcats);
            }
        }).catch(error => {
            console.log(error);
        });

        // css

        let categ = e.currentTarget;

        $('.categories-filters__option').removeClass('selected');
        categ.classList.add('selected');
    }

    console.log(subCats);

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
       return <Loading />;
    }


}

export default SubCategoriesGrid;