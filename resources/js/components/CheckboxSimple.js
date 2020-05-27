import React from 'react';

function CheckboxSimple(props) {

    return (
        <div className="conditions__accept red-check">
            <input type="checkbox" name={props.checkboxName} onChange={props.checkboxOnChange} />
            <div className="red-check__check"></div>
            <label className="red-check__label" htmlFor={props.checkboxName}>{props.text}</label>
        </div>
    ) 
}

export default CheckboxSimple;