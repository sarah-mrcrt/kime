import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Welcome from '../views/Welcome.js';
import Login from '../views/Login/Login.js';
import Register from '../views/Register/Register.js';
import Home from '../views/Home/Home.js';
import Profil from '../views/Profil/Profil.js';


function Index() {

    const [currentUser, setCurrentUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Login} />
              <Route exact={true} path="/connexion" component={Login} />
              <Route exact={true} path='/inscription' component={Register} />
              <Route exact={true} path="/accueil" component={Home} />
              <Route exact={true} path="/profil" component={Profil} />

              <Route path="*" component={() => <p>Page Not Found</p>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));