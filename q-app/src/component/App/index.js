import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "../Button";
import Input from "../Input";
import CardDisplay from "../CardDisplay";
import CardContainer from "../CardContainer";
import Keywords from "../Keyword";
import Popup from "reactjs-popup";
import PopupBox from "../PopUp";
import moment from 'moment';
moment().format();

function App() {
	const [question, setQuestion] = useState("");
	const [questionArray, setQuestionArray] = useState([
		// {
		// 	id: "test",
		// 	name: "test",
		// 	room_number: "test",
		// 	message: "test",
		// },
	]);
	const [name, setName] = useState("");
	const [id, setId] = useState(1);
	const [roomNumber, setRoomNumber] = useState("");
	const [keyword, setKeyword] = useState("");
  
  //Add time :
  let postTime = moment().format('MM-DD-YYYY hh:mm:ss');

	function storeQuestion(event) {
		setQuestion(event.target.value);
		console.log(event.target.value);
	}

	function storeName(event) {
		setName(event.target.value);
	}

	function storeRoomNumber(event) {
		setRoomNumber(event.target.value);
	}

	function storeKeyword(event) {
		setKeyword(event);
	}

	function clickSubmit() {
		const questionObject = {
			id: id,
			name: name,
			room_number: roomNumber,
			message: question,
			keyword: keyword.value,
      postTime: postTime,
		};

		setQuestionArray([...questionArray, questionObject]);
		console.log(questionArray);
		console.log(keyword);
		setQuestion("");
		setName("");
		setRoomNumber("");
		setId(id + 1);

		//Post request
	}

	return (
		<div className="App">
			<header className="App-header">
				{/* <Input
					placeholder={"Name"}
					value={name}
					handleChange={storeName}
				></Input>
				<Input
					placeholder={"Room number"}
					value={roomNumber}
					handleChange={storeRoomNumber}
				></Input>
				<Input
					placeholder={"Enter question..."}
					value={question}
					handleChange={storeQuestion}
				></Input>
				<Keywords handleChange={storeKeyword}></Keywords>
				<Button buttonText={"Submit"} handleClick={clickSubmit}></Button> */}
				<CardContainer array={questionArray}></CardContainer>
				{/* <Button buttonText={"Ask"} handleClick={PopupExample}></Button> */}
				<PopupBox
					nameValue={name}
					nameHandleChange={storeName}
					roomValue={roomNumber}
					roomHandleChange={storeRoomNumber}
					questionValue={question}
					questionHandleChange={storeQuestion}
					keywordsHandleChange={storeKeyword}
					buttonHandleClick={clickSubmit}
				></PopupBox>
			</header>
		</div>
	);
}

export default App;
