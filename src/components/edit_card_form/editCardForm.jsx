import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';
import styles from './editCardForm.module.css';

const EditCardForm = ({card}) => {
  const {name, company, title, email, message, theme, fileName, fileURL} = card;

  const onSubmit = () => {};
  return (
    <>
      <form className={styles.content}>
        <input
          type="text"
          className={styles.name}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          className={styles.company}
          name="company"
          placeholder="Company"
        />
        <select className={styles.select} name="theme">
          <option>light</option>
          <option>middle</option>
          <option>dark</option>
        </select>
        <input
          type="text"
          className={styles.job}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          className={styles.email}
          name="email"
          placeholder="E-mail"
        />
        <textarea
          className={styles.message}
          name="message"
          placeholder="Message"
        ></textarea>
        <div className={styles.fileInput}>
          <ImageFileInput class />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </form>
    </>
  );
};

export default EditCardForm;
