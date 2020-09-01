// src/pages/SiteHeader.js
import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteHeader = () => {

  return (
    <nav className="nav" id="nav">
      <div className="w3-bar w3-blue">
        <NavLink to="/" className="w3-bar-item w3-button w3-indigo"><i className="fas fa-home"> Home</i></NavLink>
        <NavLink to="/services" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-book-open"> Services</i></NavLink>
        <NavLink to="/about"   className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-info-circle"> About</i></NavLink>

        <NavLink to="/contact" className="w3-bar-item w3-button w3-hide-small w3-right w3-black"><i className="fas fa-envelope"> Contact </i></NavLink>

        <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="myFunction()">&#9776;</a>
      </div>

      <div id="demo" className="w3-bar-block w3-sand w3-hide w3-hide-large w3-hide-medium">
        <NavLink to="/services" className="w3-bar-item w3-button"><i className="fas fa-book-open"> Services</i></NavLink>
        <NavLink to="/about" className="w3-bar-item w3-button"><i className="fas fa-info-circle"> About</i></NavLink>
        <NavLink to="/contact" className="w3-bar-item w3-button w3-black"><i className="fas fa-envelope"> Contact</i></NavLink>
      </div>
    </nav>
  )
}

export default SiteHeader
