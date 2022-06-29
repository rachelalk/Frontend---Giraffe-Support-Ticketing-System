import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "../CardContainer";
import PopupBox from "../PopUp";

function App() {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(1);
  const [roomNumber, setRoomNumber] = useState("");
  const [keyword, setKeyword] = useState("");
  const [backendData, setBackendData] = useState([]); 
	const [status, setStatus] = useState("waiting");
  const [stateCount, setStateCount] = useState(0)

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
    const questionData = {
      name: name,
      roomnumber: roomNumber,
      message: question,
      keywords: keyword.value,
      status: status,
    };
    setQuestion("");
    setName("");
    setRoomNumber("");
    setId(id + 1);

    fetch("/tickets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(questionData),
    })
      .then((res) => res.json())
		.then((data) => setBackendData([...backendData, data.payload[0]],
		 console.log(data.payload)));

	}

	console.log(backendData);
	

  useEffect(() => {
    fetch("/tickets")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data.payload);
      });
  }, [stateCount]);
	
	
	function onUpdateInProgTicket(event) {
    console.log(event.currentTarget.id);
    const id = event.currentTarget.id;
    fetch(`/tickets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "in progress" }),
    })
      .then((res) => res.json)
		  .then((data) => console.log(data))
		  .then(() => {setStateCount(c => c+1)}) //if state is dependent on setstate use 'c' function
	}
	
	function onUpdateDoneTicket(event) {
    console.log(event.currentTarget.id);
    const id = event.currentTarget.id;
    fetch(`/tickets/${id}`, {
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
          statusValue={status}
          statusHandleChange={storeStatus}
        ></PopupBox>
      </header>
    </div>
  );
}
export default App;
