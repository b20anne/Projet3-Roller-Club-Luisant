import React from "react";
import { Player, ControlBar, PlayToggle, BigPlayButton } from "video-react";
import "../../../../node_modules/video-react/styles/scss/video-react.scss";
import "./Video.scss";

const HeaderVid = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

const RollerVideo = () => {
  return (
    <Player src={HeaderVid} className="PlayVid">
      <BigPlayButton position="center">
        <ControlBar disableDefaultControls>
          <PlayToggle />
        </ControlBar>
      </BigPlayButton>
    </Player>
  );
};

export default RollerVideo;
