import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { AuthDataContext, useAuthDataContext } from './AuthDataProvider.js';

import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import Home from '../views/Home/Home';
import Profil from '../views/Profil/Profil';
import Test from '../views/Test/Test';
import ParentalControl from '../views/ParentalControl/ParentalControl';
import Conditions from '../views/Conditions/Conditions';
import LaunchRegistration from '../views/LaunchRegistration/LaunchRegistration';
import SetChildrenNumber from '../views/FillChildData/SetChildrenNumber';
import FillChildData from '../views/FillChildData/FillChildData';
import Welcome from '../views/Welcome/Welcome';
import Trophies from '../views/Trophies/Trophies';



const PrivateRoute = ({ component, ...options }) => {
    const { authData } = useAuthDataContext();

    const finalComponent = Object.keys(authData).length > 0 ? component : Login;
  
    return <Route {...options} component={finalComponent} />;
  };
  
  const Router = () => (
    <Switch>
        <Redirect exact={true} from="/" to="/accueil"/>
        <PrivateRoute exact={true} path="/accueil" component={Home} />
        <PrivateRoute exact={true} path="/profil" component={Profil} />
        <PrivateRoute exact={true} path="/parental-control" component={ParentalControl} />
        <PrivateRoute exact={true} path="/conditions" component={Conditions} />
        <PrivateRoute exact={true} path="/launch-registration" component={LaunchRegistration} />
        <PrivateRoute path="/register-children" component={FillChildData} />
        <PrivateRoute path="/welcome" component={Welcome} />
        <PrivateRoute path="/trophies" component={Trophies} />

        <Route exact={true} path="/connexion" component={Login} />
        <Route exact={true} path='/inscription' component={Register} />
        <Route exact={true} path="/test" component={Test} />

        <Route path="*" component={() => <p>Page Not Found</p>} />
    </Switch>
  );

  export default Router;