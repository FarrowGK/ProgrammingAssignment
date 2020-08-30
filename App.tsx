import React, {Component} from 'react';
import { Provider } from 'react-redux';

import Store from './src/store/Store';
import Navigator from './src/routes/RootStack';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    )
  }
}
