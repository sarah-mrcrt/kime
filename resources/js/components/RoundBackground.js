import React from 'react';

function RoundBackground(props) {
    let colorClass = "red";


    switch (props.color) {
        case 'red':
            colorClass = "red";
            break;
        case 'yellow':
            colorClass = "yellow";
            break;
        case 'blue':
            colorClass = "blue";
            break;
        default:
            colorClass = "red";
    }
    return (
        <div className="round-background">
            <svg className={"round-background__img " + colorClass} enableBackground="new 0 0 240 240" version="1.1" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
                <style type="text/css">
                </style>
                <circle className="st0" cx="120" cy="120" r="120"/>
                <ellipse className="st1" cx="120" cy="120" rx="98.4" ry="98.4"/>
                <circle className="st2" cx="120" cy="120" r="79.8"/>
            </svg>
            {props.children}
        </div>
    );
}

export default RoundBackground;
