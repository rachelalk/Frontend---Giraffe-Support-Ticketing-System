import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "../CardContainer";
import PopupBox from "../PopUp";

function App() {
  // const [question, setQuestion] = useState("");
  // const [name, setName] = useState("");
  const [id, setId] = useState(1);
  // const [roomNumber, setRoomNumber] = useState("");
  const [keyword, setKeyword] = useState("");
  const [backendData, setBackendData] = useState([]);
	// const [status, setStatus] = useState("waiting");
  const [stateCount, setStateCount] = useState(0)

  const [questionData, setQuestionData] = useState({
    name: "",
    roomnumber: "",
    message: "",
    keywords: keyword, 
    status: "waiting",
  });

   function storeKeyword(event) {
     setKeyword(event.value);
    //  setKeyword(keyword.value);
     console.log(keyword);
   }

  const handleChangeFor = (propertyName) => (event) => {
    setQuestionData((questionData) => ({
      ...questionData,
      [propertyName]: event.target.value,
    }));
    console.log(questionData);
  };

  function clickSubmit() {
  //   const questionData = {
  //     name: name,
  //     roomnumber: roomNumber,
  //     message: question,
  //     keywords: keyword.value,
  //     status: status,
  //   };
    // setQuestion("");
    // setName("");
    // setRoomNumber("");
    setId(id + 1);

    // POST
    fetch("/tickets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(questionData),
    })
      .then((res) => res.json())
      .then((data) =>
        setBackendData(
          [...backendData, data.payload[0]],
          console.log(data.payload)
        )
      );
  }
    // function storeQuestion(event) {
    //   setQuestion(event.target.value);
    //   console.log(event.target.value);
    // }
    // function storeName(event) {
    //   setName(event.target.value);
    // }
    // function storeRoomNumber(event) {
    //   setRoomNumber(event.target.value);
    // }
    // function storeStatus(event) {
    //   setStatus(event.target.value);
    // }
    // function storeKeyword(event) {
    //   setKeyword(event);
    //   console.log(keyword)
    // }

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

  // PATCH
  // useEffect(() => {
  //  fetch(`/tickets/${id}`, {
  //      method: "PATCH",
  //      headers: {
  //          "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify()
  //  })
  //      .then((res) => res.json)
  //      .then(/*something*/)
  // }, [/*something*/] )


  return (
    <div className="App">
      <header className="App-header">
        <div className="q-logo"></div>
        <CardContainer
          array={backendData}
          onUpdateInProgTicket={onUpdateInProgTicket}
          onUpdateDoneTicket={onUpdateDoneTicket}></CardContainer>

        <PopupBox
          // nameValue={name}
          nameHandleChange={handleChangeFor("name")}
          // roomValue={roomNumber}
          roomHandleChange={handleChangeFor("roomnumber")}
          // questionValue={question}
          questionHandleChange={handleChangeFor("message")}
          keywordsHandleChange={storeKeyword}
          buttonHandleClick={clickSubmit}
          // statusValue={status}
        // statusHandleChange={storeStatus}
        ></PopupBox>
      </header>
    </div>
  );
}
export default App;
