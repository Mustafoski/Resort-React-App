import React, { Component } from 'react';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <Rooms />
        <SingleRoom />
        <Error />
      </React.Fragment>
    );
  }
}
