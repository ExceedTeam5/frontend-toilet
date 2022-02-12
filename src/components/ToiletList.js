import React from 'react'
import Toilet from './Toilet'

const ToiletList = () => {
  const DUMMY_DATA = {toiletState: [{toilet1: true}], estimateTime: 12345}
  return (
    {DUMMY_DATA['toiletState'].map()}
  );
}

export default ToiletList