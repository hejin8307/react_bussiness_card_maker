import React, {useState} from 'react';
import AddCardForm from '../add_card_form/addCardForm';
import EditCardForm from '../edit_card_form/editCardForm';
import styles from './maker.module.css';

const Maker = ({cards, addCard, deleteCard, updateCard}) => {
  return (
    <section className={styles.content}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <EditCardForm
          key={key}
          card={cards[key]}
          onAdd={addCard}
          onDelete={deleteCard}
          onUpdate={updateCard}
        />
      ))}
      <AddCardForm onAdd={addCard} />
    </section>
  );
};

export default Maker;
