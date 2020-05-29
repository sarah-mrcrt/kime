import React from 'react';

function RegisterStepBar(props) {
    let colorClass="";
    
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
        <div className="register-step-bar">
            {(() => {
                const steps = [];

                for (let i = 1; i <= props.nb; i++) {
                    if(i === props.actualStep) {
                        steps.push(<div className={"selected " + colorClass} key={i}></div>);
                    } else {
                        steps.push(<div className={colorClass} key={i}></div>);
                    }
                }

                return steps;
            })()}
        </div>
    )
}

export default RegisterStepBar;