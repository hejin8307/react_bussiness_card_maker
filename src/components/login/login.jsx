import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './login.module.css';

const Login = ({authService}) => {
  const navigate = useNavigate();

  const socialLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      //   .then((result) => console.log(result))
      .then((result) => goHome(result.user.uid));
  };

  const goHome = (userId) => {
    navigate('/home', {state: {id: userId}});
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Business Card Maker</h1>
      <p className={styles.login}>- LOGIN -</p>
      <div className={styles.loginBtn}>
        <button onClick={socialLogin}>Google</button>
        <button onClick={socialLogin}>Github</button>
      </div>
    </div>
  );
};

export default Login;
