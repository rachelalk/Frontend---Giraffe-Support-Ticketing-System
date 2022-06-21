import React from "react"
import Keyword from "../Keyword";

function CardDisplay({id,time,firstName,roomNumber}){
  return (
      <div>
         <p>{id}</p>
          <div>
             <img src="#" alt="#"/>
             <p>{time}</p>
             <p>{firstName}</p>
             <p>Room {roomNumber}</p>
          </div>
          <Keyword/>
      </div>
  )
}

export default CardDisplay;