import React from 'react';
import { Link } from 'react-router-dom';
import RoundBackground from './RoundBackground.js';

function Header(props) {
    let grid = false;
    let gridClass = '';
    let align = props.align;

    if(props.title != undefined || props.subtitle != undefined){
        grid = true;
        gridClass = "g2";
    }

    if(align != 'right') {
        if(align != 'left') {
            align = '';
        }
    }
    return (
        <div className={"page-header " + gridClass}>
            { grid &&
                <div className="page-header__text">
                    { props.title &&
                    <  h1 className="page-header__title">{props.title}</h1>
                    }
                    { props.title &&
                        <div className="page-header__subtitle">{props.subtitle}</div>
                    }
                </div>
            }

            <div className={"page-header__background " + align}>
                <img className="page-header__img" src={props.imageUrl}/>
                <RoundBackground color={props.color} />
            </div>
            
        </div>
    );
}

export default Header;