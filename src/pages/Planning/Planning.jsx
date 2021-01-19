import React from "react";

import "./Planning.scss";
import CardUI from "./CardUI/CardUI";

function Planning() {
  return (
    <div className="planning__globalContainer">
      <h3 className="planning__titlePlanning">Nos Plannings</h3>
      <div className="planning__cardCourse">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://calendar.google.com/calendar/u/2?cid=bjByZmpyOTNkdWtyZXNoZTByYW9ydTN1ZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
        >
          <CardUI name="baby" />
        </a>
      </div>
    </div>
  );
}

export default Planning;
