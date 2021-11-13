import React from "react";
import ReactPlayer from "react-player"
import "./VideoPlayer.styles.css"

const VideoPlayer = ({ liveUrl }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={liveUrl}
        width="100%"
        height="100%"
        playing
        controls
        pip
      />
    </div>
  );
};
export default VideoPlayer;