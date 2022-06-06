import React, {useState} from 'react';
import AddCardForm from '../add_card_form/addCardForm';
import EditCardForm from '../edit_card_form/editCardForm';
import styles from './maker.module.css';

const Maker = ({cards, addCard}) => {
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <EditCardForm key={card.id} card={card} />
      ))}
      <AddCardForm onAdd={addCard} />
    </section>
  );
};

export default Maker;
