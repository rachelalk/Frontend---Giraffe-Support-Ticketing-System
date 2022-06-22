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
	const [name, setName] = useState("");
	const [id, setId] = useState(1);
	const [roomNumber, setRoomNumber] = useState("");
	const [keyword, setKeyword] = useState("");

	const [backendData, setBackendData] = useState([{}]); //backendData useState
	const [status, setStatus] = useState("waiting");
	const [ticketData, setTicketData] = useState({
		name: "",
		roomnumber: "",
		message: "",
		keywords: keyword.value,
		status: status,
	});
	const [deleteStatus, setDeleteStatus] = useState("");

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

	function storeStatus(event) {
		setStatus(event.target.value);
	}

	function storeKeyword(event) {
		setKeyword(event);
	}

	function clickSubmit() {

		setQuestion("");
		setName("");
		setRoomNumber("");
		setId(id + 1);
		setTicketData({
			name: name,
			roomnumber: roomNumber,
			message: question,
			keywords: keyword.value,
			status: status,
		});
		console.log(backendData);
	}

	useEffect(() => {
		fetch("/tickets")
			.then((res) => res.json())
			.then((data) => {
				setBackendData(data.payload);
			});
	}, [ticketData]);

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
				<CardContainer array={backendData}></CardContainer>
				<PopupBox
					nameValue={name}
					nameHandleChange={storeName}
					roomValue={roomNumber}
					roomHandleChange={storeRoomNumber}
					questionValue={question}
					questionHandleChange={storeQuestion}
					keywordsHandleChange={storeKeyword}
					buttonHandleClick={clickSubmit}
					statusValue={status}
					statusHandleChange={storeStatus}
				></PopupBox>
			</header>
		</div>
	);
}

export default App;

