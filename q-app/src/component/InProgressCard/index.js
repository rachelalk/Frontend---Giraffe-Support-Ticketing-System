import React from "react";
import Button from "../Button/";

function InProgressCard(props) {
	const array = props.array;
	console.log(array)
	if (array === undefined) {
		return <div>Loading...</div>;
	}

	if (array) {
		return (
      <div className="w500">
        {array
          .filter((object) => object.status === "in progress")
          .map((filteredArray) => (
            <div key={filteredArray.ticket_id}>
              <p className="small-grey">{filteredArray.ticket_id}</p>
              <div className="flex-container progress-bg">
                <p>{filteredArray.name}</p>
                <p>Room: {filteredArray.roomnumber}</p>
                <p>In progress...</p>
                <Button
                  buttonText={"Complete"}
                  handleClick={props.onUpdateDoneTicket}
                  id={filteredArray.ticket_id}></Button>
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

export default InProgressCard;
