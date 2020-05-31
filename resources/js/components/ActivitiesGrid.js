import React from 'react';

function Activities(props) {

    console.log(props.choices);

    const handleClick = e => {
        e.preventDefault();
        let info = e.currentTarget;
        let img = $('.info-bubble__img', info).attr('src');
        let title = $('.info-bubble__title', info).text();
        let btnValue = $('.info-bubble__btn', info).text();
        let btnHref = $('.info-bubble__btn', info).attr('href');
        console.log(title)

        $('#info-bubble__img').attr('src', img);
        $('#info-bubble__title').text(title);
        $('#info-bubble__btn').attr('href', btnHref);
        $('#info-bubble__btn').text(btnValue);

        if (info.classList.contains('locked') == true) {
            $('#info-bubble').addClass('locked');
        } else if (info.classList.contains('unlocked') == true) {
            $('#info-bubble').addClass('unlocked');
        }

        $('body').css('overflow-y','hidden');
        $('#info-bubble__title').css('display', "block");
        $('#info-bubble__btn').css('display', "block");
        $('#info-bubble__img').css('display', "block");
        $('#info-bubble').css('display','flex');
    }

    return (
        <section className="activity-choice-grid">
            {props.choices.map((choice,index) => {
                

                // à retirer quand la route /activity-step comprendre les ids
                choice.id = "";
                

                return (
                    <div className="activity-choice-grid__choice info-bubble__info" key={index} onClick={handleClick}>
                        <p className="activity-choice-grid__choice__name info-bubble__title">{choice.name}</p>
                        <img className="activity-choice-grid__choice__img info-bubble__img" src={choice.img} alt={choice.name} />
                        <a className="activity-choice-grid__choice__btn info-bubble__btn" href={"/activity-step/" + choice.id}>Sélectionner</a>
                    </div>
                )
            })
            }
        </section>
    )
}

export default Activities;