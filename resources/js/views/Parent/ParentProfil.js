import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthDataContext } from '../../components/AuthDataProvider';
import Navigation from '../../components/Navigation';
import HeaderParent from '../../components/HeaderParent';

function ParentProfil(props) {

    let parent = {id:5, name:"Garry Trotter", email:"garry.trotter@kizou.com"}

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
        <div className="container background page-profile nav">                        
        <HeaderParent parent={parent} />
            <div className="container__body">
                <div className="content">
                    <div className="menu-parent">
                        <div className="menu-parent__options">
                            ParentProfil
                        </div>
                    </div>
                        <Navigation page="profile" parent={true} />
                </div>
            </div>
        </div>
    )

}

export default ParentProfil;
