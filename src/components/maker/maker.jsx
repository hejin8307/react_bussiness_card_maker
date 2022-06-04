import React from 'react';
import AddCardForm from '../add_card_form/addCardForm';
import styles from './maker.module.css';

const Maker = () => {
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>Card Maker</h1>
      <AddCardForm />
    </section>
  );
};

export default Maker;
