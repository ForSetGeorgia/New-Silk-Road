import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Meta, SocialLinks } from '../../components'
import articles from '../Article/data.json'

import './style.css'

class Home extends Component {
  render () {
    const map_img = require('../../images/map.png')

    return (
      <div className='main-content'>
        <Meta {...this.props} bodyClass='home' />
        <SocialLinks {...this.props} key='sociallinks' />

        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h1>Muslims on the Belt and Road: New Silk Road Social Transformation in Inner Asia</h1>

              <p>China’s $1-trillion infrastructure development project, widely known as the Belt and Road Initiative (BRI), is generating lots of headlines about its macro-economic potential. The Belt and Road vision, if fully implemented, could revolutionize global trade patterns. Much less has been written about the project’s micro-economic implications, including the potential ramifications of mega-infrastructure projects on local populations in Central Asia. Policy choices made in Beijing and elsewhere could cause wrenching change for millions of people living in areas where BRI-driven development is occurring.</p>
              <p>The Institute for the Study of Muslim Civilizations at Aga Khan University convened a conference in London dedicated to raising awareness about the risks and rewards of BRI development for local populations across Central Asia, including western China’s Xinjiang Province. Participating scholars and experts had the opportunity to discuss the latest academic research on shifting social and economic patterns in the region relating to the BRI.</p>
              <p>This special feature, Muslims of the Belt and Road: A New Silk Road Social Transformation in Inner Asia, recaps the conference proceedings, highlighting summaries prepared by four leading scholars. In spotlighting specific challenges faced by local communities across Central Asia, the conference hopes to promote informed policy debates as the Belt and Road takes shape.</p>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 aside-articles">
              <h2>Articles</h2>
              <ul className='articles'>
                {
                  Object.keys(articles).map((key, index) => {
                    return (
                      <li key={key} className={`article article-${index}`}  >
                        <div className='article-title'><Link to={`/article/${key}`}>{articles[key].short_title}</Link></div>
                        <div className='article-summary'>{articles[key].summary}</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-12 home-map">
              <img src={map_img} alt='map' />
            </div>
            <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 map-caption">
              Rail transport is a major component of China’s ambitious Belt and Road project, which is designed to ease the flow of Chinese exports across the Eurasian landmass. The project envisions lots of investment to build new infrastructure and rail links. It also seeks to utilize existing networks, including the fabled Trans-Siberian Railway. This map highlights the main railways and key hubs in the Belt and Road blueprint that traverse Central Asia.
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home