import React, {memo} from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import firebaseApp from './service/firebase';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/imageFileInput';
import CardRepository from './service/card_repository';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
// ImageFileInput 컴포넌트는 addCardForm과 editCardForm에서 각각 쓰이는데 이 컴포넌트는 제일 끝(말단)에 쓰이기 때문에 app.jsx에서부터 계속 값을 전달해주어야 함
// 이럴 경우 많은 값들을 props로 전달해주어야 하기 때문에 이는 좋지 않음
// 따라서 위와 같이 ImageFileInput 컴포넌트를 외부(index.js)에 만든 다음 전달해 나가면 좋다
// props를 전달해주는 이유 : <ImageFileInput imageUploader={imageUploader} />를 할 경우 확장성이 떨어짐
// 즉 <ImageFileInput imageUploader={imageUploader} /> 이 경우 ImageFileInput에서 받아올 다른 props(onChange와 같은)를 받아오지 못한다

ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      cardRepository={cardRepository}
    />
    {/* 컴포넌트가 prop인 경우 대문자로 시작해야 함 -> FileInput */}
  </React.StrictMode>,
  document.getElementById('root')
);
