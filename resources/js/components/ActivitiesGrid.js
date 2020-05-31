import React, { useState, useEffect } from 'react';

function ActivitiesGrid(props) {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('/activities/all')
        .then(json => {
            if(json.data.success) {
                setActivities(json.data.data)
            }
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (

        <section className="activities-grid">
            {props.activities.map((activity,index) => {
                

                // à retirer quand la route /activity-choice comprendre les ids
                activity.id = "";


                return (
                    <a className="activities-grid__activity" href={"/activity-choice/" + activity.id} key={index}>
                        <p className="activities-grid__activity__name">{activity.name}</p>
                        <img className="activities-grid__activity__img" src={activity.img} alt={activity.name} />
                        <div className={"activities-grid__activity__background "/* + activity.color */}></div>
                    </a>

                    
                )
            })
            }
        </section>
    ) 
}

export default ActivitiesGrid;