import React from "react";
import Popup from "reactjs-popup";
import Input from "../Input";
import Button from "../Button";
import Keywords from "../Keyword";

const PopupBox = ({
	nameValue,
	roomValue,
	questionValue,
	nameHandleChange,
	roomHandleChange,
	questionHandleChange,
	keywordsHandleChange,
	buttonHandleClick,
	statusHandleChange,
	statusValue
}) => (
	<Popup
		trigger={<button className="q-button ask-position">Ask</button>}
		position="top left"
	>
		{(close) => (
			<div className="popUp-bg">
			 <div>
				Name:
				<Input
					placeholder={"Name"}
					value={nameValue}
					handleChange={nameHandleChange}
				></Input>
				</div>
				<div>
				Room Number:
				<Input
					placeholder={"Room number"}
					value={roomValue}
					handleChange={roomHandleChange}
				></Input>
				</div>
				<div className="w80">
				Question:
				<Input
					placeholder={"Enter question..."}
					value={questionValue}
					handleChange={questionHandleChange}
					style={{width:"500px"}}
				></Input>
				</div>
				{/* Status:
				<Input
					placeholder={"Status"}
					value={statusValue}
					handleChange={statusHandleChange}
				></Input> */}
				<Keywords handleChange={keywordsHandleChange}></Keywords>
				<Button handleClick={buttonHandleClick} buttonText={"Submit"}></Button>
				<a className="close closeBtn" onClick={close}>
					&times;
				</a>
			</div>
		)}
	</Popup>
);

export default PopupBox;


//created with: https://react-popup.elazizi.com/getting-started