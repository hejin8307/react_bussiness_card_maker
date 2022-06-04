import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './login.module.css';

const Login = ({authService}) => {
  const navigate = useNavigate();
  const goHome = (userId) => {
    navigate('/home', {state: {id: userId}});
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((result) => goHome(result.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goHome(user.uid);
    });
  });

  return (
    <section className={styles.content}>
      <h1 className={styles.title}>Business Card Maker</h1>
      <p className={styles.login}>- LOGIN -</p>
      <div className={styles.loginBtn}>
        <button onClick={onLogin}>Google</button>
        <button onClick={onLogin}>Github</button>
      </div>
    </section>
  );
};

export default Login;
