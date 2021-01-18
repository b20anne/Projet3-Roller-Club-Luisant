import React from "react";
import { Player, ControlBar, PlayToggle, BigPlayButton } from "video-react";
// import HeaderVid from "./roller.mp4";
import "../../../../node_modules/video-react/styles/scss/video-react.scss";
import "./Video.scss";

const RollerVideo = () => {
  return (
    <Player className="PlayVid">
      <BigPlayButton position="center">
        <ControlBar disableDefaultControls>
          <PlayToggle />
        </ControlBar>
      </BigPlayButton>
    </Player>
  );
};

export default RollerVideo;
