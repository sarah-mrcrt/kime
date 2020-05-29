import React, { useState, useEffect } from 'react';
import RoundBackground from './RoundBackground.js';

function AvatarsGrid(props) {

    // Props: score, avatars, setAvatar()

    const [avatar, setAvatar] = useState('');
    const [avatars, setAvatars] = useState({})

    useEffect(() => {
        
    });

    const handleClick = e => {
        e.preventDefault();
        
        let avatar = e.currentTarget;
        let background = avatar.children[1];
        let radio = avatar.children[2];
        let id = parseInt(avatar.getAttribute('id'));

        if($(avatar).hasClass('unlocked')); {

            if (radio.checked === false) {
                radio.checked = true;
                $('.avatars-grid__avatar__background.selected').removeClass("selected");
                background.classList.add("selected");
            }

            setAvatar(id);
        }
    }

    const handleSubmit = e => {
        props.setAvatar(avatar);
    }

    return (
        <form className="flex-grow flex-y" onSubmit={handleSubmit}>
            <section className="avatars-grid">
                {props.avatars.map((avatar,index) => {

                    let unlockedClass = "locked";
                    if(avatar.minScore <= props.score) {
                        unlockedClass = "unlocked";
                    } else if (props.displayUnlocked == false){
                        unlockedClass = "deleted"
                    }

                    return (
                        <div className={"avatars-grid__avatar " + unlockedClass} key={index} onClick={handleClick} id={avatar.id}>
                            <img className="avatars-grid__avatar__img" src={avatar.img} alt={avatar.name} />
                            <div className="avatars-grid__avatar__background">
                                <RoundBackground color="blue" />
                            </div>
                            <input className="avatars-grid__avatar__radio" type="radio" name="avatars[]" id={"avatar" + avatar.id} value={avatar.id}/>
                        </div>
                    );
                })}
            </section>
            <button type="submit" className="btn-common btn-common__blue__fill">Valider</button>
        </form>
    ) 
}

export default AvatarsGrid;