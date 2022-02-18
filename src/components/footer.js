import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faSpotify
  } from "@fortawesome/free-brands-svg-icons";
// import SocialFollow from "./SocialFollow"
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import ReactDOM from "react-dom";

const FooterPage = () => {
  return (
    <MDBFooter  className="page-footer font-small pt-4 mt-4 text-white" >
      <MDBContainer fluid className="text-center text-md-left">
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
      </MDBContainer >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com" className="cpr"> ©Maxim Iuzvac </a> .All rights reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

// ReactDOM.render(
//     <BrowserRouter>
//       <FooterPage />
//     </BrowserRouter>,
//     document.getElementById("root")
//   );

export default FooterPage;