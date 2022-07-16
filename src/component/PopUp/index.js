import React from "react";
import Popup from "reactjs-popup";
import Input from "../Input";
import Button from "../Button";
import Keywords from "../Keyword";

// Renders PopupBox for user input, facilitates submission of user input and closing of PopupBox
const PopupBox = ({
  nameValue,
  roomValue,
  questionValue,
  nameHandleChange,
  roomHandleChange,
  questionHandleChange,
  keywordsHandleChange,
  buttonHandleClick,
}) => (
  <Popup
    trigger={<button className="q-button ask-position">Ask</button>}
    position="top left">
    {(close) => {
     function closeAndComplete() {
       close()
       buttonHandleClick()
     }
      return (
      <div className="popUp-bg">
        <div>
          Name:
          <Input
            placeholder={"Name"}
            value={nameValue}
            handleChange={nameHandleChange}></Input>
        </div>
        <div>
          Room Number:
          <Input
            placeholder={"Room number"}
            value={roomValue}
            handleChange={roomHandleChange}></Input>
        </div>
        <div className="w80">
          Question:
          <Input
            placeholder={"Enter question..."}
            value={questionValue}
            handleChange={questionHandleChange}></Input>
        </div>
        <Keywords handleChange={keywordsHandleChange}></Keywords>
        <div className="center-row">
          <Button
            handleClick={closeAndComplete}
            buttonText={"Submit"}
			>
          </Button>
        </div>
        <a className="close closeBtn" onClick={close}>
          &times;
        </a>
      </div>
      )}
    }
  </Popup>
);

export default PopupBox;


//created with: https://react-popup.elazizi.com/getting-started