import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'


class Breadcrumb extends React.Component {
  render () {

    return (
      <div className="container">
          <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 BC-Margin-Content" id="Breadcrumb">
                  <div className="BreadcrumbMain breadcrumb-padding">
                      <ul className="BT-breadcrumb">
                          <li className="BT-breadcrumbLinkRoot">
                              <span className="s4-breadcrumb-arrowcont"></span>
                              <a className="BT-breadcrumbLinkRoot" href="/">Home</a>
                              <ul className="BT-breadcrumbLinkRoot">
                                  <li className="BT-breadcrumbLink">
                                      <span className="s4-breadcrumb-arrowcont">&nbsp;<i className="fa fa-angle-right"></i>&nbsp;</span>
                                      <a className="BT-breadcrumbLink" href="/ismc/Pages/home.aspx">Institute for the Study of Muslim Civilisations</a>
                                      <ul className="BT-breadcrumbLink">
                                          <li className="BT-breadcrumbLinkCurrent" style={{display: 'initial'}}>
                                            <span className="s4-breadcrumb-arrowcont">&nbsp;<i className="fa fa-angle-right"></i>&nbsp;</span>
                                            <Link to={'/'} className="BT-breadcrumbLinkCurrent" style={{display: 'initial'}}>Muslims on the Belt and Road</Link>
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                      <script type="text/javascript">
                      $('.s4-breadcrumb-arrowcont').html("&nbsp;<i className='fa fa-angle-right'></i>&nbsp;");
                      $('.s4-breadcrumb-arrowcont').first().html("");
                      </script>
                  </div>
              </div>
          </div>
          <div className="fullwidthrowline"></div>
      </div>

    )
  }

}

export default Breadcrumb