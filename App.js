import React, { Component } from 'react';
import AppNavigator from './src/navigator';
import {createAppContainer} from 'react-navigation';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppNavigator />
    )
  }
}

export default App;
