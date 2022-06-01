import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1>Business Card Maker</h1>
      <button className={styles.logout}>Logout</button>
    </div>
  );
};

export default Header;
