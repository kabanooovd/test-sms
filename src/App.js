import React from "react";
import "./App.css"
import { Message } from "./components";
import { onHandleSms } from "./utils";

function App() {

  const [text, setText] = React.useState("");
  const [content, setContent] = React.useState([]);

  const onChangeHandler = (e) => {
    setText(e.currentTarget.value);
  }

  const onSetContentHandler = () => {
    if (text) {
      setContent(prev => [...prev, ...onHandleSms(text)]);
      setText("");
    }
  }

  return (
    <div className="app__wrapper">
      <div className="content__wrapper">
        <h3>Сообщения</h3>
        <div className="contact-screen__wrapper">
          <div className="screen">
            {content.length 
              ? content.map((_text, idx) => <Message key={idx} text={_text} />) 
              : "Ваше сообщение... " }
          </div>
        </div>
        <div className="field__wrapper">
          <span>Отправка сообщения</span>
          <textarea 
            value={text} 
            onChange={onChangeHandler} 
            placeholder={"Введите сообщение, затем нажмите \"Отправка\""} 
          />
        </div>
        <div className="button__container">
          <button onClick={onSetContentHandler}>Отправка</button>
        </div>
      </div>
    </div>
  );
}

export default App;
