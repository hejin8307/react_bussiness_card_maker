import React, {useRef} from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/imageFileInput';
import styles from './addCardForm.module.css';

const AddCardForm = ({onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    console.log(card);
    onAdd(card);
  };

  return (
    <>
      <form ref={formRef} className={styles.content}>
        <input
          ref={nameRef}
          type="text"
          className={styles.name}
          name="name"
          placeholder="Name"
        />
        <input
          ref={companyRef}
          type="text"
          className={styles.company}
          name="company"
          placeholder="Company"
        />
        <select
          ref={themeRef}
          className={styles.select}
          name="theme"
          placeholder="Theme"
        >
          <option placeholder="light">light</option>
          <option placeholder="middle">middle</option>
          <option placeholder="dark">dark</option>
        </select>
        <input
          ref={titleRef}
          type="text"
          className={styles.job}
          name="title"
          placeholder="Title"
        />
        <input
          ref={emailRef}
          type="text"
          className={styles.email}
          name="email"
          placeholder="E-mail"
        />
        <textarea
          ref={messageRef}
          className={styles.message}
          name="message"
          placeholder="Message"
        ></textarea>
        <div className={styles.fileInput}>
          <ImageFileInput class />
        </div>
        <Button name="Add" onClick={onSubmit} />
      </form>
      <button className={styles.addBtn}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </>
  );
};

export default AddCardForm;
