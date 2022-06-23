import React from "react";

function DoneCard(props) {
	const array = props.array;

	if (array === undefined) {
		return <div>Loading...</div>;
	}

	if (array) {
		return (
			<div>
				{array
					.filter((object) => object.status === "done")
					.map((filteredArray) => (
						<div className="w500" key={filteredArray.ticket_id}>
							<p className="small-grey">{filteredArray.ticket_id}</p>
							<div className="flex-container done-bg">
								<p>{filteredArray.name}</p>
								<p>Room: {filteredArray.roomnumber}</p>
								<p>Done!</p>
								<div className="keyword-style">
									<p>{filteredArray.keywords}</p>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}
}

export default DoneCard;
