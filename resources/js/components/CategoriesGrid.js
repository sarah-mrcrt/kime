import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoriesGrid(props) {

    const [selected, setSelected] = useState([]);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/activities')
        .then(response => { return response; })
        .then(json => {
            if(json.data.success) {
                setCategories(json.data.data);
                console.log(json.data.message);
                console.log(categories);
            }
        }).catch(error => {
            console.log(error);
        })
    });

    const handleClick = e => {
        e.preventDefault();
        let category = e.currentTarget;

        let checkbox = category.children[4];
        let background = category.children[3];
        let check = category.children[2];

        let id = parseInt(category.getAttribute('id'));
        let tmp = selected;

        if(checkbox.checked === true) {
            checkbox.checked = false;
            background.classList.remove("selected");
            check.classList.remove("selected");

            // Removing id from array
            const index = tmp.indexOf(id);
            tmp.splice(index, 1);
            
        } else if (checkbox.checked === false) {
            checkbox.checked = true;
            background.classList.add("selected");
            check.classList.add("selected");

            tmp.push(id);
        }

        // Storing img url 
        setSelected(tmp);
    }

    const handleSubmit = () => {
        props.setCategories(selected);
    }

    return (

        <form onSubmit={handleSubmit}>
            <section className="categories-grid">
                {props.categories.map((category,index) => {

                    return (
                        <div className="categories-grid__category" key={index} onClick={handleClick} id={category.id}>
                            <p className="categories-grid__category__name">{category.name}</p>
                            <img className="categories-grid__category__img" src={category.img} alt={category.name} />
                            
                            <svg id={"step" + index} className="categories-grid__category__check svg__blue-check" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                <path className="st0" d="M32,16c0,8.8-7.2,16-16,16S0,24.8,0,16S7.2,0,16,0S32,7.2,32,16z"/>
                                <path className="st1" d="m20.7 11.3c0.1 0.1 0.2 0.2 0.2 0.3s0.1 0.3 0.1 0.4 0 0.3-0.1 0.4c0 0.1-0.1 0.2-0.2 0.3l-7.3 10c-0.1 0.1-0.2 0.2-0.3 0.2-0.1 0.1-0.2 0.1-0.3 0.1s-0.2 0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2l-4.8-5.3c-0.2-0.2-0.3-0.4-0.3-0.7s0.1-0.5 0.3-0.7 0.4-0.3 0.6-0.3 0.5 0.1 0.6 0.3l4.2 4.6 6.7-9.3c0.1-0.1 0.2-0.2 0.3-0.2 0.1-0.1 0.3-0.1 0.4-0.1s0.2 0 0.4 0.1l0.2 0.2z"/>
                            </svg>

                            <div className="categories-grid__category__background"></div>
                            <input className="categories-grid__category__checkbox" type="checkbox" name="categories[]" id={"category" + category.id} value={category.id}/>
                        </div>
                    )
                })
                }
            </section>
            <button type="submit" className="btn-common btn-common__blue__fill">Valider</button>
        </form>
    ) 
}

export default CategoriesGrid;