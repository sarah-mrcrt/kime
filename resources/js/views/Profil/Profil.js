import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthDataContext } from '../../components/AuthDataProvider';
import Navigation from '../../components/Navigation';

function Profil(props) {

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
        <div className="container background">
            <div className="container__body">
                <div className="content">
                        Hello from Profil
                        <button className="btn-common noMargin btn-common__red__fill" onClick={logout}>Déconnexion</button>
                        <Navigation page="profile" />
                </div>
            </div>
        </div>
    )

}

export default Profil;
