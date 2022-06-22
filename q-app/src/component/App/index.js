import React from "react";
import { useEffect, useState } from "react"; //imported useEffect
import "./App.css";
import Button from "../Button";
import Input from "../Input";
import CardDisplay from "../CardDisplay";
import CardContainer from "../CardContainer";
import Keywords from "../Keyword";
import Popup from "reactjs-popup";
import PopupBox from "../PopUp";

function App() {

	const [question, setQuestion] = useState("");
	// const [questionArray, setQuestionArray] = useState([]);
	const [name, setName] = useState("");
	const [id, setId] = useState(1);
	const [roomNumber, setRoomNumber] = useState("");
	const [keyword, setKeyword] = useState("");
	const [backendData, setBackendData] = useState([{}]); //backendData useState
	const [ticketData, setTicketData] = useState({
			name: "",
			roomnumber: "",
			message: "",
			keywords: keyword.value,
  });
  const [deleteStatus, setDeleteStatus] = useState("");
	// const [waiting, setWaiting] = useState ([{}]);
	// const [inprogress, setInProgress] = useState([{}]);
	// const [done, setDone] = useState([{}]);

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
		// const questionObject = {
		// 	id: id,
		// 	name: name,
		// 	room_number: roomNumber,
		// 	message: question,
		// 	keyword: keyword.value,
		// };

		// setQuestionArray([...questionArray, questionObject]);
		// console.log(questionArray);
		// console.log(keyword);
		setQuestion("");
		setName("");
		setRoomNumber("");
		setId(id + 1);
		setTicketData({
			name: name,
			roomnumber: roomNumber,
			message: question,
			keywords: keyword.value,
			status: "waiting",
		});
		//Post request
		console.log(backendData);
	}

	// function acceptQuery(clickedId) {
	// 	console.log(clickedId);
	// }


	// function acceptQuery(event) {
	// 	console.log(event.currentTarget.id);
	// 	// console.log(clickedId);
	// }
	
	// setQuestionArray([...questionArray[id]])

	useEffect(() => {
		fetch("/tickets")
			.then((res) => res.json())
			.then((data) => {
				setBackendData(data.payload);
			});

	}, [ticketData]);


// 	setWaiting(backendData.filter(filterByWaiting));
// 	setInProgress(backendData.filter(filterByInProgress));
// 	setDone(backendData.filter(filterByDone));

// function filterByWaiting(object) {
//   if (object.status === "Waiting") {
//     return true
//   } else {
//   return false;
// }

// function filterByInProgress(object) {
//   if (object.status === "In progress") {
//     return true
//   } else {
//   return false;
// }

// function filterByDone(object) {
//   if (object.status === "Done") {
//     return true
//   } else {
//   return false;
// }



	useEffect(() => {
		fetch("/tickets", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(ticketData),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
  }, [ticketData]);
  
  useEffect(() => {
    fetch(`/tickets/${id}`, {
      method: "DELETE",
    }).then(() => setDeleteStatus("Delete successful"));
  }, [id]);


	return (
		<div className="App">
			<header className="App-header">
			
				<CardContainer
					// id={backendData.ticket_id}
					// handleClick={() => {
					// 	acceptQuery(backendData.ticket_id);
					// // }}
					// handleClick={acceptQuery}
					array={backendData}
					time={"12:00"}
				></CardContainer>
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



	// {
	// 	/* <Input
	// 				placeholder={"Name"}
	// 				value={name}
	// 				handleChange={storeName}
	// 			></Input>
	// 			<Input
	// 				placeholder={"Room number"}
	// 				value={roomNumber}
	// 				handleChange={storeRoomNumber}
	// 			></Input>
	// 			<Input
	// 				placeholder={"Enter question..."}
	// 				value={question}
	// 				handleChange={storeQuestion}
	// 			></Input>
	// 			<Keywords handleChange={storeKeyword}></Keywords>
	// 			<Button buttonText={"Submit"} handleClick={clickSubmit}></Button> */
	// }

		//console.log(event.currentTarget.id);
	// setQuestionArray([...questionArray[id]])

	// GET
	// useEffect(() => {
	// 	setLoading(true);
	// 	fetch("/tickets")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setBackendData(data);
	// 			setLoading(false);
	// 		});
	// }, []);

	// POST
	// const ticketData = {
	// name: name,
	// roomnumber: roomNumber,
	// message: question,
	// keywords: keyword.value,
	// };