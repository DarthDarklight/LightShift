import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faSpotify
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      {/* <h3>Social Follow</h3> */}
      <a href="https://www.youtube.com/channel/UCiVV1GQrnzR6QiyvKBxUtiA"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.instagram.com/maxusevac/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com/maxim.iuzvac"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://open.spotify.com/artist/6ibxUMLk8N5jhynsYMrV9L"
        className="spotify social">
        <FontAwesomeIcon icon={faSpotify} size="2x" />
      </a>
    </div>
  );
}