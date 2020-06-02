import React from 'react';

const CategoriesFilters = props => {



    return (
        <section className="categories-filters">
            <p className="categories-filters__option">Choisis une <br />catégorie</p>
            <p className="categories-filters__option filtrer selected" onClick={(e) => props.filtrer(e,'tout')}>Tout</p>
            <p className="categories-filters__option filtrer" onClick={(e) => props.filtrer(e,'cuisine')}>Cuisine</p>
            <p className="categories-filters__option filtrer" onClick={(e) => props.filtrer(e,'creativite')}>Créativité</p>
            <p className="categories-filters__option filtrer" onClick={(e) => props.filtrer(e,'jeux-dexterieurs')}>Jeux d'extérieurs</p>
            <p className="categories-filters__option filtrer" onClick={(e) => props.filtrer(e,'jeux-dinterieurs')}>Jeux d'intérieurs</p>
        </section>
    );
}

export default CategoriesFilters;