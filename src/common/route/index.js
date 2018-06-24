import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@/components/home';
import Data from '@/components/data';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/data" component={Data} />
        </Switch>
      </Router>
    )
  }
}

export default Routers;
