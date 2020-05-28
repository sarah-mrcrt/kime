import React, { useState } from 'react';
import RoundBackground from './RoundBackground.js';

function AvatarsGrid(props) {

    const [avatar, setAvatar] = useState('');

    return (
        <form>
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
                            <div className={"avatars-grid__avatar " + unlockedClass} key={index}>
                                <img className="avatars-grid__avatar__img" src={avatar.img} alt={avatar.name} />
                                <div className="avatars-grid__avatar__background">
                                    <RoundBackground color="blue" />
                                </div>
                                <input className="avatars-grid__avatar__radio" type="radio" name="avatars[]" id={"avatar" + avatar.id} value={avatar.id}/>
                            </div>
                    )
                })
                }
            </section>
            <button type="submit" className="btn-common btn-common__blue__fill">Sélectionner</button>
        </form>
    ) 
}

export default AvatarsGrid;