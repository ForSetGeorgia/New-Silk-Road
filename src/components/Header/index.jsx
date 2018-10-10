import React from 'react'

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
                              <a id="ctl00_onetidProjectPropertyTitleGraphic" className="ms-siteicon-a" href="/">
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
                                              <li className="dropdown">
                                                  <a className="dropdown-toggle" data-toggle="dropdown" href="https://www.aku.edu/about/Pages/home.aspx" aria-expanded="false">
                  <span className="AIMMClickable"> About Us </span>
                  </a>
                                              </li>
                                              <li className="dropdown">
                                                  <a className="dropdown-toggle" data-toggle="dropdown" href="https://www.aku.edu/academics/Pages/home.aspx">
                  <span className="AIMMClickable"> Academics </span>
                  </a>
                                              </li>
                                              <li className="dropdown">
                                                  <a className="dropdown-toggle" data-toggle="dropdown" href="https://www.aku.edu/admissions/Pages/home.aspx" aria-expanded="false">
                  <span className="AIMMClickable"> Admissions </span>
                  </a>
                                              </li>
                                              <li className="dropdown">
                                                  <a className="dropdown-toggle" data-toggle="dropdown" href="https://www.aku.edu/research/Pages/home.aspx">
                  <span className="AIMMClickable"> Research </span>
                  </a>
                                              </li>
                                              <li className="dropdown">
                                                  <a className="dropdown-toggle" data-toggle="dropdown" href="https://www.aku.edu/supportus/Pages/home.aspx">
                  <span className="AIMMClickable"> Support Us </span>
                  </a>
                                              </li>
                                              <li className="dropdown AIMMSecNavBkgInfo hidden-lg hidden-md ">
                                                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <span className="AIMMClickable"> Information for  </span>
                  </a>
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