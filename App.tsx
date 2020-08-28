import React, {Component} from 'react';
import { Provider } from 'react-redux';

import ProgrammingAssignment from './src/index';
import Store from './src/store/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <ProgrammingAssignment />
      </Provider>
    )
  }
}
