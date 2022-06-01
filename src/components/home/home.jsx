import React from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';

const Home = ({authService}) => {
  return (
    <>
      <Header authService={authService} />
      <section className={styles.main}>
        <div className={styles.maker}>
          <Maker />
        </div>
        <div className={styles.preview}>
          <Preview />
        </div>
      </section>
    </>
  );
};

export default Home;
