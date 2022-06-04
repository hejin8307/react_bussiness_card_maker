import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import firebaseApp from './service/firebase';
import Repository from './service/repository';

const authService = new AuthService(firebaseApp);
const repository = new Repository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} repository={repository} />
  </React.StrictMode>,
  document.getElementById('root')
);
