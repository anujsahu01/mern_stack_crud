import React from "react";

const VideoComponent = () => {
  return (
    <div className="text-center">
      { <video width="600" height="400" controls autoPlay loop muted poster>
        <source src="./images/video/video4.mp4" type="video/mp4" />
        
      </video> }


    </div>
  );
};

export default VideoComponent;


export  const VideoComponent2 = () => {
  return (
    <div className="text-center">
      { <video width="600" height="400" controls autoPlay loop muted poster>
        <source src="./images/video/video5.mp4" type="video/mp4" />
        
      </video> }


    </div>
  );
};


