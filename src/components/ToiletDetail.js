import React, { Fragment, useEffect, useState } from 'react';
import ToiletIconState from './ToiletIconState';

const ToiletDetail = (props) => {
  const [toiletState, setToiletState] = useState(0);
  const [startState, setStartState] = useState(false);
  const [timeState, setTimeState] = useState(0);

  useEffect(() => {
      const update = setInterval(() => {
        console.log('hi')
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
  });

  return (
    <div>
      {!toiletState == 0 ? <h2>busy</h2> : <h2>Available</h2>}
      <ToiletIconState state={toiletState}/>
      {!toiletState == 0 && <p> In used: 20s Since: 12:34</p>}
      {startState && <h2>time {timeState} sec</h2>}
    </div>
  )
}

export default ToiletDetail;