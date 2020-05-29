import React, { useState } from 'react';
import RoundBackground from './RoundBackground.js';

function AvatarsGrid(props) {

    // Props: score, avatars, setAvatar()

    const [avatar, setAvatar] = useState('');

    const handleClick = e => {
        e.preventDefault();
        
        let avatar = e.currentTarget;
        let background = avatar.children[1];
        let imgUrl = avatar.children[0].src;
        let radio = avatar.children[2];

        if($(avatar).hasClass('unlocked')); {

            if (radio.checked === false) {
                radio.checked = true;
                $('.avatars-grid__avatar__background.selected').removeClass("selected");
                background.classList.add("selected");
            }

            console.log(imgUrl);
            setAvatar(imgUrl);
        }
    }

    const handleSubmit = e => {
        console.log("Selected avatar: ");
        console.log(avatar);

        props.setAvatar(avatar);
    }

    return (
        <form onSubmit={handleSubmit}>
            <section className="avatars-grid">
                {props.avatars.map((avatar,index) => {

                    let unlockedClass = "locked";
                    if(avatar.minScore <= props.score) {
                        unlockedClass = "unlocked";
                    } else if (props.displayUnlocked == false){
                        unlockedClass = "deleted"
                    }
                    console.log(unlockedClass);

                    return (
                        <div className={"avatars-grid__avatar " + unlockedClass} key={index} onClick={handleClick}>
                            <img className="avatars-grid__avatar__img" src={avatar.img} alt={avatar.name} />
                            <div className="avatars-grid__avatar__background">
                                <RoundBackground color="blue" />
                            </div>
                            <input className="avatars-grid__avatar__radio" type="radio" name="avatars[]" id={"avatar" + avatar.id} value={avatar.id}/>
                        </div>
                    );
                })}
            </section>
            <button type="submit" className="btn-common btn-common__blue__fill">Sélectionner</button>
        </form>
    ) 
}

export default AvatarsGrid;