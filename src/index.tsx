import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import reducers from './redux/reducers';
import actions from './redux/actions/auth';

const store = createStore(reducers);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
