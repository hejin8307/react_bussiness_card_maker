import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './header.module.css';

const Header = ({onLogout}) => {
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
