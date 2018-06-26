import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '@/components/home';
import Follow from '@/components/follow';
import Add from '@/components/add';
import Message from '@/components/message';
import Me from '@/components/me';

class Routers extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/follow" component={Follow} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/me" component={Me} />
        </Switch>
      </Router>
    )
  }
}

export default Routers;
