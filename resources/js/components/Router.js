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
import LaunchRegistration from '../views/FillChildData/LaunchRegistration';
import EndRegistration from '../views/FillChildData/EndRegistration';
import FillChildData from '../views/FillChildData/FillChildData';
import Welcome from '../views/Welcome/Welcome';
import Trophies from '../views/Trophies/Trophies';
import ActivityChoice from '../views/Activity/ActivityChoice';
import ActivityStep from '../views/Activity/ActivityStep';
import ActivityUpload from '../views/Activity/ActivityUpload';
import ActivityWin from '../views/Activity/ActivityWin';
import ParentPassword from '../views/Parent/ParentPassword';
import ParentHome from '../views/Parent/ParentHome';
import ParentSearch from '../views/Parent/ParentSearch';
import ParentProfil from '../views/Parent/ParentProfil';
import NotFound from '../views/NotFound/NotFound';



const PrivateRoute = ({ component, ...options }) => {
    const { authData } = useAuthDataContext();

    const finalComponent = Object.keys(authData).length > 0 ? component : Login;
  
    return <Route {...options} component={finalComponent} />;
  };
  
  const Router = () => (
    <Switch>
        <Route exact={true} path="/connexion" component={Login} />
        <Route exact={true} path='/inscription' component={Register} />
        <Route exact={true} path='/NotFound' component={NotFound} />

        <Redirect exact={true} from="/" to="/welcome"/>
        <PrivateRoute exact={true} path="/accueil" component={Home} />
        <PrivateRoute exact={true} path="/profil" component={Profil} />
        <PrivateRoute exact={true} path="/parental-control" component={ParentalControl} />
        <PrivateRoute exact={true} path="/conditions" component={Conditions} />
        <PrivateRoute exact={true} path="/launch-registration" component={LaunchRegistration} />
        <PrivateRoute exact={true} path="/end-registration" component={EndRegistration} />

        <PrivateRoute path="/register-children" component={FillChildData} />
        <PrivateRoute path="/welcome" component={Welcome} />
        <PrivateRoute path="/trophies" component={Trophies} />

        <Route exact={true} path="/test" component={Test} />
        <PrivateRoute exact={true} path="/activity-choice/:id" component={ActivityChoice} />
        <Route exact={true} path="/activity-step" component={ActivityStep} />
        <Route exact={true} path="/activity-upload" component={ActivityUpload} />
        <Route exact={true} path="/activity-win" component={ActivityWin} />
        <Route exact={true} path="/parent-password" component={ParentPassword} />
        <Route exact={true} path="/parent-accueil" component={ParentHome} />
        <Route exact={true} path="/parent-profil" component={ParentProfil} />
        <Route exact={true} path="/parent-recherche" component={ParentSearch} />

        <Route path="*" component={() => <p>Page Not Found</p>} />
    </Switch>
  );

  export default Router;