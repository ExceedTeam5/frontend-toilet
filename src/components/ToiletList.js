import React, { Fragment, useEffect, useState } from "react";
import Toilet from "./Toilet";
import classes from "./ToiletList.module.css";

const DUMMY_DATA = {
  state: [
    {id:0, toiletState: 0, timeStamp: 16446743741, startTime: 16446743741},
    {id:1, toiletState: 1, timeStamp: 1644670683741, startTime: 164467437411 },
    {id:2, toiletState: 1, timeStamp: 1644661880001, startTime: 164467437411 },
  ],
  estimateTime: 123456,
};

const ToiletList = () => {
  const [currentState, setCurrentState] = useState();

    

  return (
    <Fragment> 
    <div className={classes['grid-container']}>
      <Toilet id={1}/>
      <Toilet id={2}/>
      <Toilet id={3}/>
    </div>
    </Fragment>);
 ;
};

export default ToiletList;
