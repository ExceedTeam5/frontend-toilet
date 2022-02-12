import React, { Fragment, useEffect, useState } from 'react';
import ToiletDetail from './ToiletDetail';
import classes from './Toilet.module.css'
import axios from 'axios';
const Toilet = (props) => {
  const [currentState, setCurrentState] = useState(async() => {await axios.get(`https://ecourse.cpe.ku.ac.th/exceed05/api/toilet/${props.id}`)})
  const [toiletCom, setToiletCom] = useState();

  useEffect(() => {
    const interval = setInterval(async() => {
      const newState = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed05/api/toilet/${props.id}`);
      if (newState.data.state != currentState) {
        setCurrentState(newState)
        const newData = <ToiletDetail toiletState={newState.data.state} time={newState.data.time} estimateTime={newState.data.estimateTime}/>
        setToiletCom(newData);
      }
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  })


  return (

    <div className={classes.toilet}>
      {toiletCom}
    </div>
    
  )
}

export default Toilet 