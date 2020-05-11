import React, { useState, useEffect } from "react";
import { A, usePath } from "hookrouter";

import anatolioPic from "../../assets/StefanBobrowski.png";

const Footer = () => {
  return (
    <footer id="site-footer">
      <div className="footer-content">
        <p>This be the footer</p>
        <p>&copy; Stefan Bobrowski 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
