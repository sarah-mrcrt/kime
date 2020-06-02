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

    console.log(cats);

    let jsxFilters = cats.map((cat, index) => {
        return <p className="categories-filters__option filtrer" onClick={(e) => props.filtrer(e, cat.slug)}>{cat.name}</p>;
    });

    return (
        <section className="categories-filters">
            <p className="categories-filters__option">Choisis une <br />catégorie</p>
            <p className="categories-filters__option filtrer selected" onClick={(e) => props.filtrer(e,'tout')}>Tout</p>
            {jsxFilters}
        </section>
    );
}

export default CategoriesFilters;