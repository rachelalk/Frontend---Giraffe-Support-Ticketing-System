import React from "react";
import Button from "./Button/index.js"


function CardDisplay(props, handleClick) {
	const array = props.array;
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
							<p>Room: {array.room_number}</p>
							<p>Question: {array.message}</p>
							<Button
								buttonText={"Accept"}
								handleClick={handleClick}
								// handleClick={acceptQuery(this.id)}
								id={array.id}
							></Button>
							<div>
								<p>{array.keyword}</p>
						</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CardDisplay;


