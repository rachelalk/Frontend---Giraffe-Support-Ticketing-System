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
}) => (
	<Popup trigger={<button>Ask</button>} position="top left">
		{(close) => (
			<div>
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
				<Keywords handleChange={keywordsHandleChange}></Keywords>
				<Button handleClick={buttonHandleClick}>Submit</Button>
				<a className="close" onClick={close}>
					&times;
				</a>
			</div>
		)}
	</Popup>
);

export default PopupBox;
