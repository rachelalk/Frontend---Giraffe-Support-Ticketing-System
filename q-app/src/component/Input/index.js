import React from "react"

function Input({handleChange, placeHolder, value}){
  return (
    <Input type="text"
    onChange={handleChange} placeholder={placeHolder} value={value}>
       
    </Input>);
}

export default Input;