import './App.css';

import React from 'react';
import Dashboard1 from './pages/Dashboard1';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeartAnimation from './pages/HeartEmit';
import Heart from './pages/Heart';
import SignPage from './pages/Signin';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/dashboard" render={() => <Dashboard1 />} />
            <Route exact path="/" render={() => <SignPage />} />
            <Route exact path="/heartanim" render={() => <HeartAnimation />} />
            <Route exact path="/heart" render={() => <Heart />} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
