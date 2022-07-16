import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "../CardContainer";
import PopupBox from "../PopUp";

function App() {
	const [question, setQuestion] = useState("");
	const [name, setName] = useState("");
	const [roomNumber, setRoomNumber] = useState("");
	const [keyword, setKeyword] = useState("");
	const [backendData, setBackendData] = useState([]);
	const [stateCount, setStateCount] = useState(0);

	const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

	// To track question typed by user and store in question state
	function storeQuestion(event) {
		setQuestion(event.target.value);
		console.log(event.target.value);
	}
	// To track name typed by user and store in name state
	function storeName(event) {
		setName(event.target.value);
	}
	// To track room-number typed by user and store in roomNumber state
	function storeRoomNumber(event) {
		setRoomNumber(event.target.value);
	}
	// To track keyword selected by user and store in keyword state
	function storeKeyword(event) {
		setKeyword(event);
	}

	// Called when user click submit button
	function clickSubmit() {
		// Prepares request body
		const questionData = {
			name: name,
			roomnumber: roomNumber,
			message: question,
			keywords: keyword.value,
			status: "waiting",
		};
		// Resets input boxes after submission
		setQuestion("");
		setName("");
		setRoomNumber("");

		// Submit user data to database
		fetch(`${url}/tickets`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(questionData),
		})
			.then((res) => res.json())
			.then((data) => setBackendData([...backendData, data.payload[0]]));
	}

	// GET request that rerenders page after ticket status is updated
	useEffect(() => {
		fetch(`${url}/tickets`)
			.then((res) => res.json())
			.then((data) => {
				setBackendData(data.payload);
			});
	}, [stateCount]);

	// PATCH request to update 'waiting' ticket to 'in progress'
	function onUpdateInProgTicket(event) {
		console.log(event.currentTarget.id);
		const id = event.currentTarget.id;
		fetch(`${url}/tickets/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: "in progress" }),
		})
			.then((res) => res.json)
			.then((data) => console.log(data))
			.then(() => {
				setStateCount((count) => count + 1);
			}); //if state is dependent on setstate use 'c' function
	}
	// PATCH request to update 'in progress' ticket to 'done'
	function onUpdateDoneTicket(event) {
		console.log(event.currentTarget.id);
		const id = event.currentTarget.id;
		fetch(`${url}/tickets/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: "done" }),
		})
			.then((res) => res.json)
			.then((data) => console.log(data))
			.then(() => {
				setStateCount((c) => c + 1);
			}); //if state is dependent on setstate use 'c' function
	}

	return (
		<div className="App">
			<header className="App-header">
				<div className="q-logo"></div>
				<CardContainer
					array={backendData}
					onUpdateInProgTicket={onUpdateInProgTicket}
					onUpdateDoneTicket={onUpdateDoneTicket}
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
