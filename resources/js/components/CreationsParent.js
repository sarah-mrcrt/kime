import React from 'react';

function CreationsParent(props) {
    let kids = props.kids
    /*
    let kids = [
        {id:2, name:"Jérôme", avatar:"/img/avatar-07.svg"},
        {id:8, name:"Marie", avatar:"/img/avatar-12.svg"}
    ]
    
    // Récupérer les creations (+ rérentes à + anciennes) de tous les "kids"
    let creations = [ // Regroupement des creations par activité (plus récente à plus ancienne)
        {id: 2, kid_id:2, activity_id:3, img:"/img/category.jpg", created_at:'2020-05-30 11:08:13'},
        {id: 2, kid_id:2, activity_id:3, img:"/img/category.jpg", created_at:'2020-05-30 11:08:13'},
        {id: 2, kid_id:2, activity_id:8, img:"/img/category.jpg", created_at:'2020-05-30 11:08:13'},
        {id: 2, kid_id:2, activity_id:3, img:"/img/category.jpg", created_at:'2020-05-30 11:08:13'}
    ]
    */
    return (
        <div className="creations-parent">

            {props.creations.map((creation,index) => {

                // Récupérer l'activité de la dernière création
                let activity = {id:3, name:"Grenouille",};
                
                // Récupérer la subcats de la dernière création
                let sub_category = {id:1, name:"Dessin"};

                let kid = {id:0, name:"", avatar:''};
                kids.map((k) => {
                    if(k.id == creation.kid_id) {
            
                        //Récupérer l'avatar selon k.avatar_id
                        let avatar = {id:k.id, img:"img/avatar-01.svg"};

                        kid.name = k.name;
                        kid.avatar = avatar.img;
                    }
                })

                return (
                    <div className="creations-parent__creation" key={index}>

                        <div className={"creations-parent__creation__body"}>
                            <div className={"creations-parent__creation__body__img" + index}>
                                <img src={creation.img} key={index} />
                            </div>
                            <div className="creations-parent__creation__body__infos">
                                <img className="creations-parent__creation__body__infos__img" src={kid.avatar} />
                                <p className="creations-parent__creation__body__infos__title">{kid.name}</p>
                            </div>
                        </div>

                        <div className="creations-parent__creation__infos">
                            <p className="creations-parent__creation__infos__subtitle">{sub_category.name}</p>
                            <p className="creations-parent__creation__infos__title">{activity.name}</p>
                            <span className="creations-parent__creation__infos__subtitle">Share</span>
                        </div>

                    </div>
                )
            })
            }

        </div>
    );
}

export default CreationsParent;