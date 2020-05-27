import React, { useState } from 'react';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';

import RoundBackground from '../../components/RoundBackground';

const SetChildrenNumber = props => {

    const [selectedNb, setSelectedNb] = useState(3);

    const handleSwipe = evt => {

        // setSelectedNb depending on swipe (code below is not supposed to be in handleSwipe)
        // When swiping distance is approximately number width+spaceBetweenNumbers, increment or decrement selectedNb

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
        
        // then in jsx: item prop: onTouchStart={this.onDragStartTouch}
    }

    return (
        <div className="children-number">
            <h1 className="children-number__title">Combien d'enfants avez-vous ?</h1>
            <img className="childre-number__img" alt="Enfants" src="/img/children_number.png" />
            <div className="children-number__selector">
                <span className="children-number__nb">1</span>
                <span className="children-number__nb">2</span>
                <span className="children-number__nb">3</span>
                <span className="children-number__nb">4</span>
                <span className="children-number__nb">5</span>
            </div>
            <Link to="/children/1" className="btn-primary btn-primary--blue--fill">Continuer</Link>
        </div>
    );
}

export default SetChildrenNumber;