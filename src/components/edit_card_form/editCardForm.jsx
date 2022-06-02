import React from 'react';
import styles from './editCardForm.module.css';

const EditCardForm = ({count}) => {
  return (
    <>
      {count &&
        count.map((item, i) => (
          <div key={i} className={styles.content}>
            <input type="text" className={styles.name} placeholder="name" />
            <input
              type="text"
              className={styles.company}
              placeholder="Company"
            />
            <select className={styles.select} name="theme">
              <option>light</option>
              <option>dark</option>
              <option>colorful</option>
            </select>
            <input type="text" className={styles.job} placeholder="Job" />
            <input type="text" className={styles.email} placeholder="E-mail" />
            <textarea
              className={styles.message}
              placeholder="message"
            ></textarea>
            <button className={styles.deleteBtn}>Delete</button>
          </div>
        ))}
    </>
  );
};

export default EditCardForm;
