import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import STORE from './store';

ReactDOM.render(
  <React.StrictMode>
    <App store={STORE} />
  </React.StrictMode>,
  document.getElementById('root')
);
