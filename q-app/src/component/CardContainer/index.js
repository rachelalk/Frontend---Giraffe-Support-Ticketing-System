import React from "react";
import CardDisplay from "../CardDisplay";
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
		</div>
	);
}

export default CardContainer;
