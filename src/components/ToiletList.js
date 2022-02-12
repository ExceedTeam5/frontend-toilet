import React, { useEffect } from 'react';
import Toilet from './Toilet';
import classes from './ToiletList.module.css';

const DUMMY_DATA = {state:[{toiletState: true, timeStamp: 12341},{toiletState: true, timeStamp: 12342},
  {toiletState: true, timeStamp: 12346}], estimateTime: 123456};

const ToiletList = () => {

  const listToilet = DUMMY_DATA.state.map((toilet) => <Toilet toiletState={toilet.toiletState} time={toilet.timeStamp} estimateTime={DUMMY_DATA.estimateTime}/>);
  return (
    <div>{ listToilet }</div>
    
  )
}

export default ToiletList