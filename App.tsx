import React from 'react';
import { Provider } from 'react-redux';

import ProgrammingAssignment from './src/index';
import { store } from './src/store/store'

const App = (props) => {
  return (
    <Provider store={store}>
      <ProgrammingAssignment />
    </Provider>
  )
}

export default App;
