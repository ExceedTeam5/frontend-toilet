import React, { Fragment, useEffect, useState } from 'react';
import ToiletIconState from './ToiletIconState';

const ToiletDetail = (props) => {
  const [toiletState, setToiletState] = useState(props.toiletState);
  const [startState, setStartState] = useState(false);
  const [inTimeState, setTimeState] = useState(props.time);
  console.log(props.toiletState)
  return (
    <div>
      {!toiletState == 0 ? <h2>busy</h2> : <h2>Available</h2>}
      <ToiletIconState state={toiletState}/>
      {!toiletState == 0 && <p> In used: 20s Since: 12:34</p>}
      {startState && <h2>time {inTimeState} sec</h2>}
    </div>
  )
}

export default ToiletDetail;