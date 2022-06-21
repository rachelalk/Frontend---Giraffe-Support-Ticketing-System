import React from "react";
import CardDisplay from "../CardDisplay";

function CardContainer({ array, time }) {
	return (
		<div>
			<CardDisplay time={time} array={array}></CardDisplay>
		</div>
	);
}

export default CardContainer;
