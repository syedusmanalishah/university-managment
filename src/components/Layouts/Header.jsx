import React from 'react'
import { Link } from 'react-router-dom'
import LLogo from './Logo.png'

const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg  bg-darkgray" style={{zIndex: '1',}} id="navbar_top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={LLogo}
              className="img-fluid "
              style={{width:'50%'}}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-2  mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  Sign Up/Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/build">
                  Build
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header