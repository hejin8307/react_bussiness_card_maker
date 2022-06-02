import React from 'react';
import AddCardForm from '../add_card_form/addCardForm';
import styles from './maker.module.css';

const Maker = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Card Maker</h1>
      <AddCardForm />
    </div>
  );
};

export default Maker;
