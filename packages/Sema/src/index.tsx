import React from 'react';
import ReactDOM from 'react-dom';
import store from '@store/index';
import App from '@components/App';
import history from '@router/history';
import { cosmosTheme } from '@styles/index';
import '@styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} theme={cosmosTheme} />
  </React.StrictMode>,
  document.getElementById('root'),
);
