import React from 'react';

function RegisterStepBar(props) {
    return (
        <div className="register-step-bar">
            {(() => {
                const steps = [];

                for (let i = 1; i <= props.nb; i++) {
                    if(i === props.actualStep) {
                        steps.push(<div className="selected" key={i}></div>);
                    } else {
                        steps.push(<div></div>);
                    }
                }

                return steps;
            })()}
        </div>
    )
}

export default RegisterStepBar;