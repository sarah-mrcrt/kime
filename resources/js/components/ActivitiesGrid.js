import React from 'react';

function ActivitiesGrid(props) {

    console.log(props.activities);

    return (

        <section className="activities-grid">
            {props.activities.map((activity,index) => {

                return (
                    <a className="activities-grid__activity" href={"/activity/" + activity.id} key={index}>
                        <p className="activities-grid__activity__name">{activity.name}</p>
                        <img className="activities-grid__activity__img" src={activity.img} alt={activity.name} />
                        <div className={"activities-grid__activity__background " + activity.color}></div>
                    </a>

                    
                )
            })
            }
        </section>
    ) 
}

export default ActivitiesGrid;