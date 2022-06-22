import React from "react";
import Button from "../Button/";
import { useState } from "react";

function completeQuery(event) {
	console.log(event.currentTarget.id);
	// console.log(clickedId);
}

function InProgressCard(props) {
	const array = props.array;

	if (array === undefined) {
		return <div>Loading...</div>;
	}

	if (array) {
		return (
			<div>
				{array
					.filter((object) => object.status === "in progress")
					.map((filteredArray) => (
						<div key={filteredArray.ticket_id}>
							<p>{filteredArray.ticket_id}</p>
							<div className="flex-container">
								<p>{filteredArray.name}</p>
								<p>Room: {filteredArray.roomnumber}</p>
								<p>In progress...</p>
								<Button
									buttonText={"Complete"}
									handleClick={completeQuery}
									id={filteredArray.ticket_id}
								></Button>
								<div>
									<p>{filteredArray.keywords}</p>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}
}

export default InProgressCard;
