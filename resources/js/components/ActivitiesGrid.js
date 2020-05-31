import React, { useState, useEffect } from 'react';

function ActivitiesGrid(props) {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('/api/activities/all')
        .then(json => {
            if(json.data.success) {
                setActivities(json.data.data)
            }
        }).catch(error => {
            console.log(error);
        });
    }, []);

    console.log(activities);

    if(Object.keys(activities).length > 0) {
        return (
            <section className="activities-grid">
                {activities.map((activity,index) => {
                    
                    return (
                        <a className="activities-grid__activity" href={"/activity-choice/" + activity.id} key={index}>
                            <p className="activities-grid__activity__name">{activity.name}</p>
                            <img className="activities-grid__activity__img" src={'/img/'+activity.img} alt={activity.name} />
                            <div className={"activities-grid__activity__background "/* + activity.color */}></div>
                        </a>
    
                        
                    )
                })
                }
            </section>
        ) 
    } else {
        return (
            <div>Loading...</div>
        )
    }


}

export default ActivitiesGrid;