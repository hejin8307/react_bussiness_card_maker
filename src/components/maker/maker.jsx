import React from 'react';
import styles from './maker.module.css';

const Maker = (props) => {
  const onAddCard = () => {};
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      <button className={styles.addBtn} onClick={onAddCard}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Maker;
