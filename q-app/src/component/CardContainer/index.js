import React from "react";
import CardDisplay from "../CardDisplay";
import DoneCard from "../DoneCard";
import InProgressCard from "../InProgressCard";


function CardContainer({ array, time, handleClick, onUpdateInProgTicket,
          onUpdateDoneTicket }) {
	return (
    <div className="setWidth">
      <InProgressCard
        array={array}
        handleClick={handleClick}
        onUpdateDoneTicket={onUpdateDoneTicket}></InProgressCard>
      <CardDisplay
        time={time}
        array={array}
        handleClick={handleClick}
        onUpdateInProgTicket={onUpdateInProgTicket}></CardDisplay>
      <DoneCard array={array}></DoneCard>
    </div>
  );
}

export default CardContainer;
