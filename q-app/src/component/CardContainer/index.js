import React from "react";
import CardDisplay from "../CardDisplay";

function CardContainer({ array }) {
	return (
		<div>
			<CardDisplay array={array}></CardDisplay>
		</div>
	);
}

export default CardContainer;
