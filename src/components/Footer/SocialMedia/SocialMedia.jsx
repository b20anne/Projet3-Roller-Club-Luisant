import React from "react";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { RiDiscordLine } from "react-icons/ri";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="color-container">
      <div className="social-container">
        <a href="https://www.gmail.com" className="mail social">
          <AiOutlineMail color="#20B82C" size="2em" />
        </a>
        <a
          href="https://www.facebook.com/Roller-Club-Luisant-105087177659148/"
          className="facebook social"
        >
          <AiFillFacebook color="#20B82C" size="2em" />
        </a>
        <a href="https://www.discord.com" className="discord social">
          <RiDiscordLine color="#20B82C" size="2em" />
        </a>
      </div>
    </div>
  );
}
