import React from 'react'
import { FaToiletPaper, FaToiletPaperSlash} from 'react-icons/fa';




const ToiletIconState = (props) => {
  return (
    <div>
      
    {!props.state ? <FaToiletPaper/> :  <FaToiletPaperSlash/>}
    


    </div>
  )
}

export default ToiletIconState;