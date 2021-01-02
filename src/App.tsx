import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ReactGa from 'react-ga';
import Home from 'pages/Home';
import Auth from 'pages/Auth';
import StaticFileRedirect from 'components/StaticFileRedirect';

function App(): JSX.Element {
  // const notifyGA = (path: string) => {
  // switch (path) {
  // case "/":
  // ReactGa.pageview()
  // break;
  //   };
  // };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>

        <Route path="/sponsor" exact>
          <StaticFileRedirect to="/documents/sponsorship.pdf" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
