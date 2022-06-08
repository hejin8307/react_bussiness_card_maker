import React, {memo} from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  console.log('footer');

  return (
    <div className={styles.footer}>
      <p>Make Your Own Card on Here</p>
    </div>
  );
});

export default Footer;
