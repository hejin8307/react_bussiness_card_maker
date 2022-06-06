import React, {useState} from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

// 강의에서는 home이 maker
const Home = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Jane',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'jane@gmail.com',
      message: 'go for it',
      fileName: 'jane',
      fileURL: 'jane.png',
    },
    {
      id: '2',
      name: 'Kelly',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'kelly@gmail.com',
      message: 'do it now',
      fileName: 'kelly',
      fileURL: null,
    },
  ]);

  const addCard = (card) => {
    const update = [...cards, card];
    setCards(update);
  };
  return (
    <div className={styles.content}>
      <Header authService={authService} />
      <section className={styles.main}>
        {/* 강의에서는 editor */}
        <Maker cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
