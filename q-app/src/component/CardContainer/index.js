import React from "react";
import CardDisplay from "../CardDisplay";
import DoneCard from "../DoneCard";
import InProgressCard from "../InProgressCard";

function CardContainer({ array, time, handleClick }) {
	return (
		<div>
			<InProgressCard array={array} handleClick={handleClick}></InProgressCard>
			<CardDisplay
				time={time}
				array={array}
				handleClick={handleClick}
			></CardDisplay>
			<DoneCard array={array}></DoneCard>
		</div>
	);
}

export default CardContainer;
