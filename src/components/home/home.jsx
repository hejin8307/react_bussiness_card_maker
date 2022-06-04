import React from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

const Home = ({authService}) => {
  return (
    <div className={styles.content}>
      <Header authService={authService} />
      <section className={styles.main}>
        {/* 강의에서는 editor */}
        <Maker />
        <Preview />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
