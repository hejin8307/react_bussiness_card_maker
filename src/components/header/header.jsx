import React, {memo} from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout}) => {
  console.log('header');
  return (
    <div className={styles.header}>
      <h1>Business Card Maker</h1>
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
});

export default Header;
