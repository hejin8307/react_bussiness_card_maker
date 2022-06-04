import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styles from './app.module.css';
import Home from './components/home/home';
import Login from './components/login/login';

function App({authService, repository}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className={styles.login}>
              <Login authService={authService} />
            </div>
          }
        />
        <Route
          path="/home"
          element={<Home authService={authService} repository={repository} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
