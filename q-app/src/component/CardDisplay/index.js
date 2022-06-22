import React from "react";
<<<<<<< HEAD
import Button from "./Button/index.js"
=======
import Button from "../Button";
>>>>>>> fdea001a2329363ecc0e3e9f6478bf5bbda4bcc3

// function acceptQuery(clickedId) {
// 	console.log(clickedId);
// }

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


