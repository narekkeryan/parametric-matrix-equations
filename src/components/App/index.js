import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Matrix from '../Matrix';
import NotFound from '../NotFound';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/math/matrix" component={Matrix} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
