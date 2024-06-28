import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Notifications } from './Notifications.js';

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);