import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props:24) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds < 59) {
                setSeconds(seconds + 1);
            }
            if (seconds === 59) {
                if (minutes === 59) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h3> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h3> 
        }
        </div>
    )
}

export default Timer;