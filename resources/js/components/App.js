import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Welcome from './Welcome.js';

function App() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Welcome} />

              <Route path="*" component={() => <p>Page Not Found</p>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));