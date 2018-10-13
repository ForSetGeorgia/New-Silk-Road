import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Meta } from '../../components'
import articles from './data.json'
import bios from '../Biographies/data.json'

import './style.css'

class Article extends Component {
  constructor(props) {
    super(props)
  }

  getBio(author_id){
    let bio = null

    for(let i=0;i<bios.length;i++){
      if (bios[i].id === author_id){
        bio = bios[i]
        break
      }
    }

    return bio
  }

  render () {
    const splitPath = this.props.match.params.article_id.split('/')
    const article_id = splitPath.slice(-1)[0]
    const article = article_id ? articles[article_id] : null
    const bio = article && article.author_id && bios ? this.getBio(article.author_id) : null

    return (
      <div>
        {
          article ? (
              <div>
                <Meta {...this.props} title={article.title} desc={article.summary} />

                <h1>{article.title}</h1>

                <div dangerouslySetInnerHTML={{__html: article.content}} />
                {
                  article.footnotes ? (
                    <div>
                      <h2>Footnotes</h2>
                      <div dangerouslySetInnerHTML={{__html: article.footnotes}} />
                    </div>
                  ) : ''
                }
                {
                  bio ? (
                    <div>
                      <hr />
                      <div className='bio'>
                        <h2>{bio.name}</h2>
                        <p>{bio.bio}</p>
                      </div>
                    </div>
                  ) : ''
                }
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