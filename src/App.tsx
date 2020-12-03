import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Auth from 'pages/Auth';
import Registration from 'pages/Registration';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Route path="/registration" exact>
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
