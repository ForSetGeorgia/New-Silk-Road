import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import articles from '../Article/data.json'

import './style.css'

class Home extends Component {
  render () {
    return (
      <div>
        <p>home</p>

        <ul className='articles'>
          {
            Object.keys(articles).map((key) => {
              return <li key={key}>
                <div className='article-title'><Link to={`/article/${key}`}>{articles[key].title}</Link></div>
                <div className='article-summary'>{articles[key].summary}</div>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Home