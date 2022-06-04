import React, {useState} from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

const Home = ({authService, repository}) => {
  const [infos, setInfos] = useState();
  const [userId, setUserId] = useState();
  return (
    <div className={styles.content}>
      <Header authService={authService} />
      <section className={styles.main}>
        <div className={styles.maker}>
          <Maker repository={repository} />
        </div>
        <div className={styles.preview}>
          <Preview />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
