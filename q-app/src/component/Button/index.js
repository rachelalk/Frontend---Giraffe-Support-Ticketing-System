import React from "react"

function Button({handleClick,buttonText}){
  return (
    <button onclick={handleClick}>
        {buttonText}
    </button>);
}

export default Button;