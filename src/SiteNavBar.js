// src/SiteNavBar
import React from 'react'
import { NavLink } from 'react-router-dom'
// import './NavBarJS.js'


const SiteNavBar = () => {
  return (
    <nav className="nav" id="nav">
      <div className="w3-bar w3-blue">
        <a href="#home" className="w3-bar-item w3-button w3-indigo"><i className="fas fa-home"> Home</i></a>
        <a href="#courses" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-chalkboard-teacher"> Courses</i></a>
        <a href="#articles" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-book-open"> Articles</i></a>
        <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fas fa-info-circle"> About</i></a>
        <a href="#testimonials" className="w3-bar-item w3-button w3-hide-small"><i className="far fa-comment-dots"> Testimonials</i></a>
        <a href="#contact" className="w3-bar-item w3-button w3-hide-small w3-right w3-black"><i className="fas fa-envelope"> Contact</i></a>

        <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="myFunction()">&#9776;</a>
      </div>

      <div id="demo" className="w3-bar-block w3-sand w3-hide w3-hide-large w3-hide-medium">
        <a href="#courses" className="w3-bar-item w3-button"><i className="fas fa-chalkboard-teacher"> Courses</i></a>
        <a href="#articles" className="w3-bar-item w3-button"><i className="fas fa-book-open"> Articles</i></a>
        <a href="#about" className="w3-bar-item w3-button"><i className="fas fa-info-circle"> About</i></a>
        <a href="#testimonials" className="w3-bar-item w3-button"><i className="far fa-comment-dots"> Testimonials</i></a>
        <a href="#contact" className="w3-bar-item w3-button w3-black"><i className="fas fa-envelope"> Contact</i></a>
      </div>
    </nav>
  )
}

export default SiteNavBar