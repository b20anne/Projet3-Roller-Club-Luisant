import React from "react";
import { Player, ControlBar, PlayToggle } from "video-react";
import "../../../../node_modules/video-react/styles/scss/video-react.scss";
import "./Video.scss";

const HeaderVid = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

const RollerVideo = () => {
  return (
    <Player src={HeaderVid} className="PlayVid">
      <ControlBar disableDefaultControls>
        <PlayToggle />
      </ControlBar>
    </Player>
  );
};

export default RollerVideo;
