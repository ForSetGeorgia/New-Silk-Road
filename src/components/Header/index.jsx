import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'


class Header extends React.Component {
  render () {
    const img = require('../../images/AKU_logo.gif')

    return (

      <header>
          <div className="navbar-right-hide top-main-linkbar" id="top-main-linkbar">
              <div className="container container-topmargin ">
              </div>
          </div>
          <div className="TopRow">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-12 LogoPane noindex" id="Logo">
                          <div id="DeltaSiteLogo">
                              <a id="ctl00_onetidProjectPropertyTitleGraphic" className="ms-siteicon-a" href="https://www.aku.edu/">
                                <img id="ctl00_onetidHeadbnnr2" className="ms-siteicon-img logo-left-space mainlogo-margin" name="onetidHeadbnnr0" src={img} alt="Institute for the Study of Muslim Civilisations" />
                              </a>
                          </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12 TopRightMainMM">
                          <div className="row NavBorderbar">
                              <nav className="navbar AIMM" id="mmNavbar">
                                  <div className="container-fluid">
                                      <div className="navbar-header">
                                          <button type="button" className="navbar-toggle AITesting" data-toggle="collapse" data-target="#myNavbar">
                                              <i className="fa fa-bars"></i>
                                          </button>
                                      </div>
                                      <div className="collapse navbar-collapse" id="myNavbar">
                                          <ul className="nav navbar-nav AINav ">
                                              <li>
                                                  <Link to={'/'}><span className="AIMMClickable"> Home </span></Link>
                                              </li>
                                              <li>
                                                  <Link to={'/biographies'}><span className="AIMMClickable"> Biographies </span></Link>
                                              </li>
                                              <li>
                                                  <Link to={'/about-event'}><span className="AIMMClickable"> About Event </span></Link>
                                              </li>
                                              <li>
                                                  <Link to={'/about-organizers'}><span className="AIMMClickable"> About Organizers </span></Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    )
  }

}

export default Header