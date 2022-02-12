import React, { Fragment, useEffect, useState } from 'react';
import ToiletIconState from './ToiletIconState';

const ToiletDetail = (props) => {
  const [toiletState, setToiletState] = useState(0);
  const [startState, setStartState] = useState(false);
  const [timeState, setTimeState] = useState(0);
  useEffect(() => {
      const update = setInterval(() => {
        if (toiletState === 1){
          if (!startState) {
            setStartState(true);
            setTimeState(Math.round((props.estimateTime - (Date.now() - props.time))/1000));
          }
          if (startState) {
            setTimeState(timeState-1);
          }
          if(timeState < 0) {
            setStartState(false);
          }
        }
        if (!startState) {
          setToiletState(props.toiletState)
        }else {
          if (props.toiletState === 1) {
            setToiletState(1);
          }

        }
        
        
      }, 1000)
      return  () => {
        clearInterval(update);
      }
  })
  return (
    <div>
      {toiletState == 0 ? <h1>busy</h1> : <h1>open</h1>}
      <ToiletIconState state={toiletState}/>
      {startState && <h1>time {timeState}</h1>}
      
    </div>
  )
}

export default ToiletDetail;