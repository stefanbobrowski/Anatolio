import React, { useState, useEffect } from "react";
import { A, usePath } from "hookrouter";

import anatolioPic from "../../assets/StefanBobrowski.png";
import githubIcon from "../../assets/social-links/github.svg";
import stackoverflowIcon from "../../assets/social-links/stackoverflow.svg";
import linkedinIcon from "../../assets/social-links/linkedin.svg"

const Header = () => {
  // const path = usePath();

  // const [activeLink, setActiveLink] = useState("/");
  // useEffect(() => {
  //   console.log(path);
  //   setActiveLink(path);
  // }, [path]);

  return (
    <header id="site-header">
      <div className="header-container">
        <a href="#" className="site-logo-container">
          <div className="site-logo">
            <img src={anatolioPic}></img>
          </div>

          <div className="site-title">
            <h3>Stefan Bobrowski</h3>
          </div>
        </a>

        <nav id="header-nav">
          <a
            href="github.com"
            title="Github - Stefan Bobrowski"
          >
            <img src={githubIcon} alt="Github"></img>
          </a>
          <a href="stackoverflow.com" title="Linkedin - Stefan Bobrowski" target="_blank">
            <img src={linkedinIcon} alt="Linkedin"></img>
          </a>
          <a href="stackoverflow.com" title="Stack Overflow - Stefan Bobrowski" target="_blank">
            <img src={stackoverflowIcon} alt="Stack Overflow"></img>
          </a>
       
        </nav>
      </div>
    </header>
  );
};

export default Header;
