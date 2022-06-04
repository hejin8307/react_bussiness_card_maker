import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';
import styles from './editCardForm.module.css';

const EditCardForm = ({card, count}) => {
  const {name, company, title, email, message, theme, fileName, fileURL} = card;

  const onSubmit = () => {};
  return (
    // <>
    //   {count &&
    //     count.map((item, i) => (
    //       <form key={i} className={styles.content}>
    //         <input type="text" className={styles.name} placeholder="name" />
    //         <input
    //           type="text"
    //           className={styles.company}
    //           placeholder="Company"
    //         />
    //         <select className={styles.select} name="theme">
    //           <option>light</option>
    //           <option>middle</option>
    //           <option>dark</option>
    //         </select>
    //         <input type="text" className={styles.job} placeholder="Job" />
    //         <input type="text" className={styles.email} placeholder="E-mail" />
    //         <textarea
    //           className={styles.message}
    //           placeholder="message"
    //         ></textarea>
    //         <Button name="Delete" onClick={onSubmit} />
    //       </form>
    //     ))}
    // </>
    <form className={styles.content}>
      <input type="text" className={styles.name} placeholder="name" />
      <input type="text" className={styles.company} placeholder="Company" />
      <select className={styles.select} name="theme">
        <option>light</option>
        <option>middle</option>
        <option>dark</option>
      </select>
      <input type="text" className={styles.job} placeholder="Job" />
      <input type="text" className={styles.email} placeholder="E-mail" />
      <textarea className={styles.message} placeholder="message"></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput class />
      </div>

      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default EditCardForm;
