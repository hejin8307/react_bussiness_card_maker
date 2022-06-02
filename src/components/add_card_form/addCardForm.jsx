import React, {useState} from 'react';
import EditCardForm from '../edit_card_form/editCardForm';
import styles from './addCardForm.module.css';

const AddCardForm = () => {
  const [count, setCount] = useState([]);
  const onAddCard = () => {
    let countArr = [...count];
    let counter = countArr.slice(-1);
    counter += 1;
    countArr.push(counter);
    setCount(countArr);
  };
  return (
    <>
      {count && <EditCardForm count={count} />}
      <button className={styles.addBtn} onClick={onAddCard}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </>
  );
};

export default AddCardForm;
