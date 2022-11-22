// import PropTypes from 'prop-types'
import React, { Component } from "react";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/Home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
