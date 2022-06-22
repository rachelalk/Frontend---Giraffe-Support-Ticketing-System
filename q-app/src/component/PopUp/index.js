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
		trigger={<button className="q-button">Ask</button>}
		position="top left"
	>
		{(close) => (
			<div className="popUp-bg">
				Name:
				<Input
					placeholder={"Name"}
					value={nameValue}
					handleChange={nameHandleChange}
				></Input>
				Room Number:
				<Input
					placeholder={"Room number"}
					value={roomValue}
					handleChange={roomHandleChange}
				></Input>
				Question:
				<Input
					placeholder={"Enter question..."}
					value={questionValue}
					handleChange={questionHandleChange}
				></Input>
				Status:
				<Input
					placeholder={"Status"}
					value={statusValue}
					handleChange={statusHandleChange}
				></Input>
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