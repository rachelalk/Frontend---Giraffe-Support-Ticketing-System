import React from "react";
import CardDisplay from "../CardDisplay";

function CardContainer({ array, time, handleClick }) {
  return (
    <div>
      <CardDisplay
        time={time}
        array={array}
        handleClick={handleClick}></CardDisplay>
    </div>
  );
}

export default CardContainer;
