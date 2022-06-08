import React, {memo} from 'react';
import styles from './editCardForm.module.css';
import Button from '../button/button';

const EditCardForm = memo(({FileInput, card, onUpdate, onDelete}) => {
  const {name, company, title, email, message, theme, fileName} = card;

  const onSubmit = (event) => {
    event.preventDefault();
    onDelete(card);
  };

  const onFileChange = (file) => {
    onUpdate({...card, fileName: file.name, fileURL: file.url});
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return null;
    }
    event.preventDefault();
    onUpdate({...card, [event.target.name]: event.target.value});
  };

  console.log('editCardForm');

  return (
    <form className={styles.content}>
      <input
        type="text"
        className={styles.name}
        name="name"
        placeholder="Name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        type="text"
        className={styles.company}
        name="company"
        placeholder="Company"
        defaultValue={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue={theme}
        onChange={onChange}
      >
        <option defaultValue="light">light</option>
        <option defaultValue="middle">middle</option>
        <option defaultValue="dark">dark</option>
      </select>
      <input
        type="text"
        className={styles.title}
        name="title"
        placeholder="Title"
        defaultValue={title}
        onChange={onChange}
      />
      <input
        type="text"
        className={styles.email}
        name="email"
        placeholder="E-mail"
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        className={styles.message}
        name="message"
        placeholder="Message"
        defaultValue={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
});

export default EditCardForm;
