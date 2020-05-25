import React from 'react';
import {Link} from 'react-router-dom';

function StepBar(props) {

    let lineClass = "";
    let nb = props.nbStep;
    let n = 0;


    // /!\ Ne fonctionne qu'avec 3 étapes actuellement

    
    switch (nb) {
        case 2:
            lineClass = "half";
            break;
        case 3:
            lineClass = "whole";
            break;
        default:
            lineClass = "";
    }

    return (
        <div className="step-bar g3">
            {props.steps.map((step,index) => {
                let checkedClass = "";
                let selectedNameClass = "";
                
                // Si l'étape est celle actuelle ou une étape précédente
                if(index+1 <= nb) {
                    checkedClass = "selected";
                }

                // Si l'étape est celle actuelle uniquement
                if(index+1 == nb) {
                    selectedNameClass = "selected";
                }

                return (
                    <div className={"step-bar__step " + checkedClass} key={index}>
                        {index+1 <= nb ? (
                            <svg id={"step" + index} className="step-bar__step__svg" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                <path className="st0" d="M32,16c0,8.8-7.2,16-16,16S0,24.8,0,16S7.2,0,16,0S32,7.2,32,16z"/>
                                <path className="st1" d="m20.7 11.3c0.1 0.1 0.2 0.2 0.2 0.3s0.1 0.3 0.1 0.4 0 0.3-0.1 0.4c0 0.1-0.1 0.2-0.2 0.3l-7.3 10c-0.1 0.1-0.2 0.2-0.3 0.2-0.1 0.1-0.2 0.1-0.3 0.1s-0.2 0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2l-4.8-5.3c-0.2-0.2-0.3-0.4-0.3-0.7s0.1-0.5 0.3-0.7 0.4-0.3 0.6-0.3 0.5 0.1 0.6 0.3l4.2 4.6 6.7-9.3c0.1-0.1 0.2-0.2 0.3-0.2 0.1-0.1 0.3-0.1 0.4-0.1s0.2 0 0.4 0.1l0.2 0.2z"/>
                            </svg>
                        ) : (
                            <svg id={"step" + index} className="step-bar__step__svg" enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                <circle className="st0" cx="16" cy="16" r="15.3"/>
                                <path className="st1" d="M16,32C7.2,32,0,24.8,0,16S7.2,0,16,0s16,7.2,16,16S24.8,32,16,32z M16,1.5C8,1.5,1.5,8,1.5,16S8,30.5,16,30.5  S30.5,24,30.5,16S24,1.5,16,1.5z"/>
                            </svg>   
                        )}
                        <p className={"step-bar__step__name " + selectedNameClass }>{step}</p>
                    </div>
                )
            })
            }

            <div className="step-bar__line">
                <div className={"step-bar__line__progression " + lineClass}>
                </div>
            </div>
        </div>
    ) 
}

export default StepBar;