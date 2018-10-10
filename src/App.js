import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { Meta, Header, Breadcrumb, Footer } from './components'

import './styles/app.css'

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
// const bootstrap = require('./scripts/bootstrap');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Meta {...this.props} />

        <div className='BGTable HomeSkin'>
          <Header key='header' />

          <div className="ContentMain">
              <div className="container-fluid Whitebg">
                  <div id="bt-content" role="main">
                      <div id="notificationArea" className="ms-notif-box"></div>
                      <div id="DeltaPageStatusBar">
                          <div id="pageStatusBar" className="ms-status-blue" style={{display: 'none'}}></div>
                      </div>
                      <div id="DeltaPlaceHolderMain">
                          <a name="mainContent" tabindex="-1"></a>
                          <div className="BG-CP-Neutral"></div>

                          <Breadcrumb key='breadcrumb' />

                          <div className="container">
                            <div className='row'>
                              <p>... insert content here</p>
                            </div>

                          </div>

                      </div>
                  </div>
              </div>
          </div>

          <Footer key='footer' />
        </div>
      </div>
    );
  }
}

export default App;
