import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import styles from './home.module.css';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

// 강의에서는 home이 maker
const Home = ({FileInput, authService, cardRepository}) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]); // mount가 되거나 userId가 변경될때마다 사용

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService, userId, navigate]); // authService가 바뀔때마다 실행

  //   const addCard = (card) => {
  //     const update = [...cards, card];
  //     setCards(update);
  //   };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      // setCards를 부를때의 시점에 있는 cards 값들을 그대로 복사해와서
      const updated = {...cards}; // updated에 그대로 복사해 넣고
      updated[card.id] = card; // 업데이트한다
      return updated;
    });
    cardRepository.saveCard(userId, card);

    // const updated = {...cards}; // 기존의 cards들을 updated에 할당시켜주고
    // updated[card.id] = card; // 변경되는 card의 id를 updated에서 찾아 변경되는 card로 변경
    // setCards(updated);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  console.log('home');

  return (
    <div className={styles.content}>
      <Header onLogout={onLogout} />
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
