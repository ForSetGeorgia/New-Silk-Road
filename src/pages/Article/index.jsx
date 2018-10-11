import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import articles from './data.json'

import './style.css'

class Article extends Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render () {
    console.log(this.props)

    const splitPath = this.props.match.params.article_id.split('/')
    const article_id = splitPath.slice(-1)[0]
    const article = article_id ? articles[article_id] : null

    return (
      <div>
        {
          article ? (
              <div>
                <h1>{article.title}</h1>

                <div>{article.content}</div>
              </div>
          ) : (
            <Redirect to='/' />
          )
        }
      </div>
    )
  }
}

export default Article