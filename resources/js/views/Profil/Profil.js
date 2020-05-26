import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthDataContext } from '../../components/AuthDataProvider.js';
import Navigation from '../../components/Navigation.js';

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
        <div>
            Hello from Profil
            <button onClick={logout}>Déconnexion</button>
            <Navigation page="home" />
        </div>
    )

}

export default Profil;
