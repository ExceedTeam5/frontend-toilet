import React from 'react'
import { FaToiletPaper, FaToiletPaperSlash} from 'react-icons/fa';




const ToiletIconState = (props) => {
  return (
    <div>
      
    {!props.state ? <FaToiletPaper size={100}/> :  <FaToiletPaperSlash size={100}/>}
    


    </div>
  )
}

export default ToiletIconState;