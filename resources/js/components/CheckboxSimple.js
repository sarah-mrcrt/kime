import React from 'react';

function CheckboxSimple(props) {

    const handleClick = e => {
        e.preventDefault();
        
        let parent = e.currentTarget;

        // Toggle checkbox
        let checkbox = parent.children[0];
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true;

        // Toggle className
        let check = parent.children[1];
        check.classList.toggle('selected');

        props.checkboxOnChange();
    }

    return (
        <div className="conditions__accept red-check" onClick={handleClick}>
            <input type="checkbox" name={props.checkboxName} onChange={props.checkboxOnChange} />
            <div className="red-check__check"></div>
            <label className="red-check__label" htmlFor={props.checkboxName}>{props.text}</label>
        </div>
    ) 
}

export default CheckboxSimple;