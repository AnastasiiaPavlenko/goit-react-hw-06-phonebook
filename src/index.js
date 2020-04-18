import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Theme from './hoc/withTheme';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Theme />
  </Provider>,
  document.getElementById('root'),
);
