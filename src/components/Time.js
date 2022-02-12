import React from 'react'
import { useEffect, useState } from "react";
import {FaClock} from "react-icons/fa"
const Time = () => {
    const [timeState, setTimeState] = useState("")

    useEffect(() => {
      const timeCount = setInterval(() => {
        const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes();
        setTimeState(`${hour}: ${minute}: ${time.getSeconds()}`)
      });
      return () => {
        clearInterval(timeCount)
      }
    })
  return (
    <div><FaClock/> current time: {timeState}</div>
  )
}

export default Time;