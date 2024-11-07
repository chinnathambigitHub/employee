import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div class="con">
      <div class="con1">
        <div class="con4">
          <h4>Partners </h4>
          <a href="/Partners">
            <p>Ajay M</p>
            <p>Adithyan M</p>
            <p>Chinnathambi C</p>
          </a>
        </div>
        <div class="con5">
          <h4>Company</h4>
          <a href="/Home">
            <p>Home</p>
          </a>
          <a href="/About">
            <p>About</p>
          </a>
          <a href="/Contact">
            <p>Contact</p>
          </a>
        </div>
        <div class="Con5">
          <h4>Coming Soon on</h4>
          <div class="Lin">
            <FaGithub />
            <FaLinkedinIn />
            <FaSquareXTwitter />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <hr></hr>
      <div class="below">
        <div class="copright">
          <p>@{new Date().getFullYear()}CodeInn.All right reserver.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
