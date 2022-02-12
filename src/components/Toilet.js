import React from "react";
import ToiletDetail from "./ToiletDetail";
import ToiletIconState from "./ToiletIconState";

const Toilet = (toilet) => {
   return (
      <div>
         <ToiletDetail
            toiletState={toilet.toiletState}
            time={toilet.timeStamp}
            estimateTime={toilet.estimateTime}
         ></ToiletDetail>
         <ToiletIconState toiletState={toilet.toiletState}></ToiletIconState>
      </div>
   );
};

export default Toilet;