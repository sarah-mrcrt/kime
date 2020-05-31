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

    const convertirDate = (date) => {
        let tmp = date.split(' ');
        tmp = tmp[0].split('-');
        switch(tmp[1]) {
            case '01':
                tmp[1] = "Janvier"
                break;
            case '02':
                tmp[1] = "Février"
                break;
            case '03':
                tmp[1] = "Mars"
                break;
            case '04':
                tmp[1] = "Avril"
                break;
            case '05':
                tmp[1] = "Mai"
                break;
            case '06':
                tmp[1] = "Juin"
                break;
            case '07':
                tmp[1] = "Juillet"
                break;
            case '08':
                tmp[1] = "Août"
                break;
            case '09':
                tmp[1] = "Septembre"
                break;
            case '10':
                tmp[1] = "Octobre"
                break;
            case '11':
                tmp[1] = "Novembre"
                break;
            case '12':
                tmp[1] = "Décembre"
                break;
        }
        return tmp[2] + " " + tmp[1] +" " +tmp[0]
    }

    return (
        <div className="creations-parent">

            {props.creations.map((creation,index) => {

                let date = convertirDate(creation.created_at);

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
                            <div className={"creations-kid__creation__imgs"}>
                                <div className={"creations-parent__creation__body__imgs__img"}>
                                    <img src={creation.img} key={index} />
                                </div>
                            </div>
                            <div className="creations-parent__creation__body__infos">
                                <img className="creations-parent__creation__body__infos__img" src={kid.avatar} />
                                <p className="creations-parent__creation__body__infos__title">{kid.name}</p>
                                <p className="creations-parent__creation__body__infos__subtitle">{date}</p>
                            </div>
                        </div>

                        <div className="creations-parent__creation__infos">
                            <p className="creations-parent__creation__infos__subtitle">{sub_category.name}</p>
                            <p className="creations-parent__creation__infos__title">{activity.name}</p>
                            <span className="creations-parent__creation__infos__share">Share</span>
                        </div>

                    </div>
                )
            })
            }

        </div>
    );
}

export default CreationsParent;