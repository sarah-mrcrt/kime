import React, { useState } from 'react';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom';

import LocalStorageManager from '../../util/localStorage';
import RoundBackground from '../../components/RoundBackground';

const SetChildrenNumber = props => {

    const [selectedNb, setSelectedNb] = useState(1);
    const [redirect, setRedirect] = useState(false);

    if(redirect) {
        return <Redirect to="/register-child/1" />;
    }

    const handleSubmit = evt => {
        
        // Storing children count. 
        // Can't select children number as of now, so we just store 1 by default
        console.log(selectedNb);
        props.setChildrenNumber(selectedNb)
        props.nextStep();
    }

    const handleSwipe = evt => {

        // setSelectedNb depending on swipe (code below is not supposed to be in handleSwipe)
        // When swiping distance is approximately number width+spaceBetweenNumbers, increment or decrement selectedNb

        /* 

        dragged = false;
        dragStartX = 0;

        const onDragStart = (clientX) => {
            dragged = true;
            dragStartX = clientX;
            requestAnimationFrame(this.updatePosition);
        }
        
        const onDragStartTouch = evt => {
                const touch = evt.targetTouches[0];
                onDragStart(touch.clientX);
                window.addEventListener("touchmove", this.onTouchMove);
        }

        */
        
        // then in jsx: item prop: onTouchStart={this.onDragStartTouch}
    }

    const toggleSelected = e => {
        e.preventDefault();

        // Moving selected number to center of the screen
        if(!$(e.target).hasClass('selected')); {
            let newNumber = e.currentTarget;
            let parent = $('.set-children-number__selector');
            let selected = $('.set-children-number__nb.selected');
            let radio = newNumber.children[1];

            // Setting state value
            setSelectedNb(parseInt(radio.value));
    
            let clicX = e.pageX;
            let xCenter = $(window).width() / 2;
    
            let left = parent.css("left")
            let step = newNumber.offsetWidth;

            left = left.split('px')[0];
            left = parseInt(left);
    
            if(clicX > xCenter) {
                parent.css( "left", left - step );
                console.log('Next number selected');
                
            } else if (clicX < xCenter) {
                parent.css( "left", left + step );
                console.log('Previous number selected');
            }

            selected.removeClass("selected");
            newNumber.classList.add("selected");
            radio.checked = true;
        }

    }

    return (
        <div className="container yellow background">
            <div className="container__body none">

                <div className="set-children-number content central-content">
                    <h1 className="set-children-number__title">Combien d'enfants avez-vous ?</h1>
                    <img className="set-childre-number__img" alt="Enfants" src="/img/children_number.png" />
                </div>

                <div className="set-children-number__selector">
                    <div className="set-children-number__nb selected" onClick={toggleSelected} >
                        <span>1</span>
                        <input type="radio" name="childrensNb[]" value={1}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>2</span>
                        <input type="radio" name="childrensNb[]" value={2}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>3</span>
                        <input type="radio" name="childrensNb[]" value={3}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>4</span>
                        <input type="radio" name="childrensNb[]" value={4}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>5</span>
                        <input type="radio" name="childrensNb[]" value={5}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>6</span>
                        <input type="radio" name="childrensNb[]" value={6}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>7</span>
                        <input type="radio" name="childrensNb[]" value={7}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>8</span>
                        <input type="radio" name="childrensNb[]" value={8}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>9</span>
                        <input type="radio" name="childrensNb[]" value={9}/>
                    </div>
                    <div className="set-children-number__nb" onClick={toggleSelected}>
                        <span>10</span>
                        <input type="radio" name="childrensNb[]" value={10}/>
                    </div>
                </div>
                    
                <span onClick={handleSubmit} to="/children/1" className="btn-common btn-common__blue__fill">Continuer</span>

            </div>
        </div>
    );
}

export default SetChildrenNumber;