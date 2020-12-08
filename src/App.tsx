import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Auth from 'pages/Auth';
import Registration from 'pages/Registration';
import StaticFileRedirect from 'components/StaticFileRedirect';

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

        <Route path="/sponsor" exact>
          <StaticFileRedirect to="/documents/sponsorship.pdf" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
