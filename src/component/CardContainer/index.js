import React from "react";
import WaitingCard from "../WaitingCard";
import DoneCard from "../DoneCard";
import InProgressCard from "../InProgressCard";

// Renders cards and orders by completion status
function CardContainer({ array, time, handleClick, onUpdateInProgTicket,
          onUpdateDoneTicket }) {
	return (
    <div className="setWidth">
      <InProgressCard
        array={array}
        handleClick={handleClick}
        onUpdateDoneTicket={onUpdateDoneTicket}></InProgressCard>
      <WaitingCard
        time={time}
        array={array}
        handleClick={handleClick}
        onUpdateInProgTicket={onUpdateInProgTicket}></WaitingCard>
      <DoneCard array={array}></DoneCard>
    </div>
  );
}

export default CardContainer;
