import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Welcome from '../views/Welcome.js';
import Login from '../views/Login.js';

function Index() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Login} />

              <Route path="*" component={() => <p>Page Not Found</p>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));