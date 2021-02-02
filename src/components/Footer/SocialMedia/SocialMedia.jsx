import React from "react";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="color-container">
      <div className="social-container">
        <a
          href="https://www.gmail.com"
          className="mail social"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineMail color="#20B82C" size="2em" />
        </a>
        <a
          href="https://www.facebook.com/Roller-Club-Luisant-105087177659148/"
          target="_blank"
          rel="noreferrer"
          className="facebook social"
        >
          <AiFillFacebook color="#20B82C" size="2em" />
        </a>
      </div>
    </div>
  );
}
