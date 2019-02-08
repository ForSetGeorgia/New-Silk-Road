import React from 'react'

import './style.css'


class Footer extends React.Component {
  render () {

    return (
      <footer className="noindex">
          <div className="BottomMain">
              <div className="container">
                  <div id="bt-footer" className="ContentBottomPane">
                  </div>
                  <div className="row">
                      <div className="col-md-4 col-sm-4 BottomPane1">
                      </div>
                      <div className="col-md-4 col-sm-4 BottomPane2">
                      </div>
                      <div className="col-md-4 col-sm-4 BottomPane3">
                      </div>
                  </div>
              </div>
          </div>
          <center>
              <div className="FooterMain">
                  <div className="container">
                      <div className="ContentFooterPane">
                          <div className="container container-alignment" style={{backgroundColor: '#007134'}}>
                              <div className="row">
                                  <div className="col-md-12 col-sm-12 copyright">
                                      <span className="copyrightspan"> <a href="/Pages/copyright.aspx">© The Aga Khan University, {(new Date()).getFullYear()}</a></span>
                                      <br/>
                                  </div>
                                  <div className="col-md-8 col-sm-8 footerlinks footerlinksalignment">
                                      <a href="/pages/terms.aspx" className="Terms">Terms of Use</a> |
                                      <a href="/Pages/emergency-info.aspx" className="Terms">Emergency Info</a> |
                                      <a href="http://portal.aku.edu/ " className="Terms">Portal</a> |
                                      <a href="https://mail.aku.edu/owa/auth/logon.aspx?replaceCurrent=1&amp;url=https%3a%2f%2fmail.aku.edu%2fowa" className="Terms">Webmail</a> |
                                      <a id="ctl00_IdWelcomeSignIn_ExplicitLogin" className="ms-signInLink" href="https://www.aku.edu/ismc/ma/_layouts/15/Authenticate.aspx?Source=%2Fismc%2Fma%2FPages%2Fstudent%2Dlife%2Easpx" style={{display: 'inline-block'}}>Sign In</a>
                                      |
                                      <a href="/Pages/contact.aspx" className="Terms">Contact Us</a>
                                  </div>
                                  <div className="col-md-4 col-sm-4 FooterSMIcons">
                                      <div className="socialmediafooter">
                                          <a href="https://www.facebook.com/AKUGlobal">
            <i className="fa fa-facebook smicons-style-Facebook"></i></a>
                                          <a href="https://twitter.com/akuglobal">
            <i className="fa fa-twitter smicons-style"></i></a>
                                          <a href="https://www.instagram.com/akuglobal/">
            <i className="fa fa-instagram smicons-style"></i></a>
                                          <a href="https://www.youtube.com/channel/UCO-pBwoHl40sZFtRhKI-Blw">
            <i className="fa fa-youtube smicons-style"></i></a>
                                          <a href="https://www.linkedin.com/school/14725">
            <i className="fa fa-linkedin smicons-style"></i></a>
                                          <a href="http://plus.google.com/117999961020097186235">
            <i className="fa fa-google-plus smicons-style"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                              <div className="FooterLeftZone">
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6 FooterRightZone">
                          </div>
                      </div>
                  </div>
              </div>
          </center>
      </footer>
    )
  }

}

export default Footer