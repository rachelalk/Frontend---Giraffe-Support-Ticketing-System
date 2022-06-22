import React from "react";
import Button from "../Button/";
import { useState } from "react";

// function acceptQuery(clickedId) {
// 	console.log(clickedId);
// }

function CardDisplay(props, handleClick) {
	const array = props.array;

	if (array === undefined) {
		return <div>Loading...</div>;
	}

	if (array) {
		return (
			<div>
				{array.map(function (array) {
					return (
						<div key={array.id}>
							<p>{array.id}</p>
							<div className="flex-container">
								<div className="clockIcon"></div>
								<p>{props.time}</p>
								<p>{array.name}</p>
								<p>Room: {array.roomnumber}</p>
								<p>Question: {array.message}</p>
								<Button
									buttonText={"Accept"}
									handleClick={handleClick}
									// handleClick={acceptQuery(this.id)}
									id={array.ticket_id}
								></Button>
								<div>
									<p>{array.keywords}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default CardDisplay;
