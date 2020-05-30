import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthDataContext } from '../../components/AuthDataProvider';
import Navigation from '../../components/Navigation';
import HeaderProfile from '../../components/HeaderProfile';

function Profil(props) {

    let kid = {id:2, name:"Jérôme", avatar:"/img/avatar-07.svg"}
    let nb_trophies = 3;
    // nb_trophies = nombre de trophée débloqué
    let nb_activities = 10;
    // nb_activities = nombre d'activités réalisées

    const [redirect, setRedirect] = useState(false);
    const { onLogout } = useContext(AuthDataContext);

    function logout() {
        axios.post("/api/auth/logout",{})
        .then(json => {
            let authData = {};
            localStorage.setItem('authData', JSON.stringify(authData));
            console.log(json.data.message);

        }).then(onLogout)
        .catch(error => {
            console.log(error);
        });

        setRedirect(true);
    }

    return (
        <div className="container yellow background">                        
        <HeaderProfile kid={kid} nb_trophies={nb_trophies} nb_activities={nb_activities} logout={logout} />
            <div className="container__body">
                <div className="content">
                        Hello from Profil
                        <Navigation page="profile" />
                </div>
            </div>
        </div>
    )

}

export default Profil;
