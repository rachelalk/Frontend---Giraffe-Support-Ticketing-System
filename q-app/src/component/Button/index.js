import React from "react";

function Button({ handleClick, buttonText, id }) {
  return (
    <button id={id} className="q-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default Button;
