import React, { Fragment, useEffect, useState } from 'react';
import ToiletDetail from './ToiletDetail';

const Toilet = (props) => {
  
  return (
    <Fragment>
      <ToiletDetail toiletState={props.toiletState} time={props.time} estimateTime={props.estimateTime}/>
    </Fragment>
    
  )
}

export default Toilet 