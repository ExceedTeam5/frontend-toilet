import React, { useEffect, useState } from "react";
import Toilet from "./Toilet";
import classes from "./ToiletList.module.css";

const DUMMY_DATA = {
  state: [
    {id:0, toiletState: 0, timeStamp: 164484743741 },
    {id:1, toiletState: 1, timeStamp: 1644664683741 },
    {id:2, toiletState: 1, timeStamp: 1644644683741 },
  ],
  estimateTime: 123456,
};

const ToiletList = () => {
  const [currentState, setCurrentState] = useState(DUMMY_DATA);

  useEffect(() => {
    // axios
    const newState = DUMMY_DATA;
    setCurrentState(newState);
  });

  const toiletList = currentState.state.map((toilet) => (
    <Toilet
      toiletState={toilet.toiletState}
      time={toilet.timeStamp}
      estimateTime={currentState.estimateTime}
    />
  ));
  return <div>{toiletList}</div>;
};

export default ToiletList;
