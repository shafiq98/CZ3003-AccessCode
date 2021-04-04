import React from 'react'
import {useEffect, useState} from 'react';
import {getAccessCode} from '../functions/accessCodeHandler';

const MainPage =() => {

    const [accessCode, setAccessCode] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    useEffect(()=>{
        getAccessCode().then(
            (result)=>{
                console.log(result);
                setAccessCode(result.message.AccessCode);
                setStartTime(result.message.StartTime);
                setEndTime(result.message.EndTime);
            }
        )
    },[])

    return (
        <div className = "mainpage">
            <h1>Hydra Defence</h1>
            <h2>Access Code : {accessCode}</h2>
            {/* <h2>Assignment will be available between {startTime} and {endTime}</h2> */}
            <p>Assignment Start Date : <span>{startTime}</span></p>
            <p>Assignment End Date : <span>{endTime}</span></p>
        </div>
    )
}

export default MainPage
