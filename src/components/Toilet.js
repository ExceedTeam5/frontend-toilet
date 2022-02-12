import React, { Fragment, useEffect, useState } from 'react';
import ToiletDetail from './ToiletDetail';
import classes from './Toilet.module.css'
const Toilet = (props) => {
  
  return (

    <div className={classes.toilet}>
      <ToiletDetail toiletState={props.toiletState} time={props.time} estimateTime={props.estimateTime}/>
    </div>
    
  )
}

export default Toilet 