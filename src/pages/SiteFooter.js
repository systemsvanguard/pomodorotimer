// src/pages/SiteFooter.js
import React from 'react'
import { NavLink } from 'react-router-dom'
import Spacer from '../app/images/spacer.png'

const SiteFooter = () => {
  /* ending copyright year is current year */
  const GetCurrentYear = () => {
    const currDate = new Date();
    const currYear = currDate.getFullYear();
    return (
      <span><strong>{currYear}</strong> </span>
    );
  }

  return (
    <footer id="footer" className="w3-container w3-padding-64 w3-center w3-opacity w3-sand w3-xlarge">
      <p className="w3-medium">Copyright &copy; 2015 ~ <GetCurrentYear /> | All rights reserved.</p>
      <p>
        <NavLink to="/">Home</NavLink>	<img src={Spacer} alt="" />
        <NavLink to="/services">Services</NavLink> <img src={Spacer} alt="" />
        <NavLink to="/about">About</NavLink> <img src={Spacer} alt="" />
        <NavLink to="/contact">Contact</NavLink>
      </p>
      <div className="footer_social">
        <i className="fab fa-facebook-official w3-hover-opacity"></i>
        <i className="fab fa-instagram w3-hover-opacity"></i>
        <i className="fab fa-snapchat w3-hover-opacity"></i>
        <i className="fab fa-pinterest-p w3-hover-opacity"></i>
        <i className="fab fa-twitter w3-hover-opacity"></i>
        <i className="fab fa-linkedin w3-hover-opacity"></i>
      </div>
      <p className="w3-medium">Coding portfolio of
        <a href="http://ryanhunter.org/">RyanHunter.org</a>
      </p>
    </footer>
  )
}

export default SiteFooter;