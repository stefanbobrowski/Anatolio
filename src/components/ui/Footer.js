import React, { useState, useEffect } from "react";
import { A, usePath } from "hookrouter";

import anatolioPic from "../../assets/StefanBobrowski.png";
import githubIcon from "../../assets/social-links/github.svg";
import stackoverflowIcon from "../../assets/social-links/stackoverflow.svg";
import linkedinIcon from "../../assets/social-links/linkedin.svg";
import gmailIcon from "../../assets/social-links/gmail.svg";

const Footer = () => {
  return (
    <footer id="site-footer">
      <div className="footer-content">
        <A href="/">Stefan Bobrowski</A>
        <p>Full Stack Web Developer</p>
        <nav id="footer-nav">
          <a
            href="mailto:stefanbobrowski1@gmail.com"
            title="stefanbobrowski1@gmail.com"
          >
            <img src={gmailIcon} alt="Gmail"></img>
          </a>
          <a
            href="https://github.com/stefanbobrowski"
            title="Github - Stefan Bobrowski"
          >
            <img src={githubIcon} alt="Github"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/stefanbobrowski/"
            title="Linkedin - Stefan Bobrowski"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin"></img>
          </a>
          <a
            href="https://stackoverflow.com/users/3317728/stefanbob"
            title="Stack Overflow - Stefan Bobrowski"
            target="_blank"
          >
            <img src={stackoverflowIcon} alt="Stack Overflow"></img>
          </a>
        </nav>
        <p className="copy">&copy; Stefan Bobrowski 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
