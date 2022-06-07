import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styles from './app.module.css';
import Home from './components/home/home';
import Login from './components/login/login';

function App({FileInput, authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login authService={authService} />} />
          <Route
            path="/home"
            element={<Home authService={authService} FileInput={FileInput} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
