import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './header.module.css';

const Header = ({authService}) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && navigate('/');
    });
  });

  return (
    <div className={styles.header}>
      <h1>Business Card Maker</h1>
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
