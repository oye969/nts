import React from 'react';
import ReactPlayer from "react-player"

function Slider() {
  return (
    <div className="SliderContainer">
      <div className="Slider">
        <div className="SliderC">
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=_ynkzpwUEMQ" /> 
        </div>
        <div className="SliderC">
        <ReactPlayer
        url="https://www.youtube.com/watch?v=wOfm9WRFRxA"/>
        </div>
        <div className="SliderC">
        <ReactPlayer
        url="https://www.youtube.com/watch?v=tNkjMU4gWSY"/>
        </div>
      </div>
    <div className="SliderA">
    <div className="SliderC">
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=oToZfPGMMBY"/> 
        </div>
        <div className="SliderC">
        <ReactPlayer
        url="https://www.youtube.com/watch?v=O8tq3lEcYO0"/>
        </div>
        <div className="SliderC">
        <ReactPlayer
        url="https://www.youtube.com/watch?v=ERS6nzoihb0"/>
        </div>
      </div>
     
    </div>
  );
}

export default Slider;
