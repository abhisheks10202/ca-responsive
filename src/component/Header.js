import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../images1/logo.png"
const Header = () => {
  return (
    <div>
      <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
        <a href="#" class="logo">
        <img src={logo} alt="" />

        </a>
        <ul class="main-nav" id="js-menu">
          <li>
            <a href="#" class="nav-links">HOME</a>
          </li>
          <li>
            <a href="#" class="nav-links">QUESTIONSARRE</a>
          </li>
          <li>
            <a href="#" class="nav-links">PROFILE</a>
          </li>
          <li>
            <a href="#" class="nav-links">LOGIN</a>
          </li>
          <li>
            <a href="#" class="nav-links">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
