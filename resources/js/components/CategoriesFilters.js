import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesFilters = props => {

    const [cats, setCats] = useState([])

    useEffect(() => {

        // Get categories
        axios.get('/api/categories/all')
        .then(json => {
            if(json.data.success) {
                setCats(json.data.cats);
            }
        }).catch(error => {
            console.log(error);
        })
    }, [])

    let jsxFilters = cats.map((cat, index) => {
        return <p className="categories-filters__option filtrer" key={cat.id} onClick={(e) => props.filtrer(e, cat.slug)}>{cat.name}</p>;
    });

    //add for all cats: <p className="categories-filters__option filtrer selected" onClick={(e) => props.filtrer(e,'tout')}>Tout</p>


    return (
        <section className="categories-filters">
            <p className="categories-filters__option">Choisis une <br />catégorie</p>
            {jsxFilters}
        </section>
    );
}

export default CategoriesFilters;