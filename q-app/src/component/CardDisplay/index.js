import React from "react";
import Timer from "../Timer";
import Button from "../Button/";

function CardDisplay(props) {
	const array = props.array;

	if (array === undefined) { 
    return <div>Loading...</div>;
  }

	if (array) { 
    return (
      <div>
        {array
          .filter((object) => object.status === "waiting")
          .map((filteredArray) => (
            <div className="w500" key={filteredArray.ticket_id}>
              <p className="small-grey">{filteredArray.ticket_id}</p>
              <div className="flex-container">
                <Timer />
                <p>{filteredArray.name}</p>
                <p>Room: {filteredArray.roomnumber}</p>
                <div className="w100">
                <p>Question: {filteredArray.message}</p>
                </div>
                <Button
                  buttonText={"Accept"}
                  handleClick={props.onUpdateInProgTicket}
					        id={filteredArray.ticket_id}
				          ></Button>
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

export default CardDisplay;
