import React, {useState} from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

// 강의에서는 home이 maker
const Home = ({authService, FileInput}) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
  });

  //   const addCard = (card) => {
  //     const update = [...cards, card];
  //     setCards(update);
  //   };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      // setCards를 부를때의 시점에 있는 cards 값들을 그대로 복사해와서
      const updated = {...cards}; // updated에 그대로 복사해 넣고
      updated[card.id] = card; // 업데이트한다
      return updated;
    });

    // const updated = {...cards}; // 기존의 cards들을 updated에 할당시켜주고
    // updated[card.id] = card; // 변경되는 card의 id를 updated에서 찾아 변경되는 card로 변경
    // setCards(updated);
  };

  const uploadImage = () => {};

  return (
    <div className={styles.content}>
      <Header authService={authService} />
      <section className={styles.main}>
        {/* 강의에서는 editor */}
        <Maker
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
