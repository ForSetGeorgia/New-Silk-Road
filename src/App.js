import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { Home, AboutEvent, AboutOrganizers, Article, Biographies } from './pages'
import { Header, Breadcrumb, Footer } from './components'

import './styles/app.css'

import $ from 'jquery'
window.jQuery = $
window.$ = $
global.jQuery = $
require('bootstrap')

class App extends Component {
  render() {
    return (
      <div className="App">

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
                          <a name="mainContent" tabIndex="-1"></a>
                          <div className="BG-CP-Neutral"></div>

                          <Breadcrumb key='breadcrumb' />

                          <div className="container">
                            <div className='row'>

                              <Switch>
                                <Route exact path='/' render={(props) => <Home {...props} />} />
                                <Route path='/about-event' render={(props) => <AboutEvent {...props} />} />
                                <Route path='/about-organizers' render={(props) => <AboutOrganizers {...props} />} />
                                <Route path='/biographies' render={(props) => <Biographies {...props} />} />
                                <Route path='/article/:article_id' render={(props) => <Article {...props} />} />
                                <Redirect to='/' />
                              </Switch>


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

export default withRouter(App)
