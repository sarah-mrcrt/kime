import React from 'react';
import RoundBackground from './RoundBackground.js';

function CreationsParent(props) {
    let kids = props.kids

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

                // Gestion du Bouton Partage L.114 className="creations-parent__creation__infos__share"

                // Récupérer l'activité de la dernière création
                let activity = {id:null, name:"",};
                switch (creation.id) {
                    case 1:
                        activity = {name:"Galet de mer"};
                        break;
                    case 2:
                        activity = {name:"Baguette classique"};
                        break;
                    case 3:
                        activity = {name:"Hotel à insectes"};
                        break;
                    case 4:
                        activity = {name:"Pâte à sel"};
                        break;
            
                }
                
                // Récupérer la subcats de la dernière création
                let sub_category = {id:null, name:"",};
                switch (creation.sub_category) {
                    case 2:
                        sub_category = {id:2, name:"Peinture"};
                        break;
                    case 4:
                        sub_category = {id:4, name:"Pains"};
                        break;
                    case 7:
                        sub_category = {id:7, name:"Nature & Découverte"};
                        break;

                }

                let kid = {id:0, name:"", avatar:''};
                kids.map((k) => {
                    if(k.id == creation.kid_id) {

                        kid.name = k.name;
                        kid.avatar = k.avatar;
                    }
                })

                return (
                    <div className="creations-parent__creation" key={index}>

                        <div className={"creations-parent__creation__body"}>
                            <div className={"creations-parent__creation__imgs"}>
                                <div className={"creations-parent__creation__body__imgs__img"}>
                                    <img src={"/img/creations/"+creation.img} key={index} />
                                </div>
                            </div>
                            <div className="creations-parent__creation__body__infos">
                                <div className="creations-parent__creation__body__infos__avatar">
                                    <img src={"/img/avatars/"+kid.avatar} />
                                    <RoundBackground color="yellow" shadow={true}/>
                                </div>
                                <p className="creations-parent__creation__body__infos__title">{kid.name}</p>
                                <p className="creations-parent__creation__body__infos__subtitle">{date}</p>
                            </div>
                        </div>

                        <div className="creations-parent__creation__infos">
                            <div className="creations-parent__creation__infos__text">
                                <p className="creations-parent__creation__infos__text__title">{activity.name}</p>
                                <p className="creations-parent__creation__infos__text__subtitle">{sub_category.name}</p>
                            </div>
                            <span className="creations-parent__creation__infos__share"><i className="fas fa-share-alt"></i></span>
                        </div>

                    </div>
                )
            })
            }

        </div>
    );
}

export default CreationsParent;