import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import { Meta, SocialLinks } from '../../components'
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

  createSlideshowCode(article) {
    if (article && article.slideshow){
      return (
        <Carousel useKeyboardArrows
                  ref={(ref) => (this.carousel = ref)}
                  showThumbs={false} showStatus={false}
                  infiniteLoop={true} selectedItem={0}>
          {
            article.slideshow.map((image, key) => {
              return (
                <div key={key}>
                  <img src={require(`../../images/${image.file}`)}/>
                  {
                    image.caption ? (
                      <p className="legend">{image.caption}</p>
                    ) : ''
                  }
                 </div>
              )
            })
          }
        </Carousel>
      )
    }
  }

  createVideoCode(article) {
    if (article && article.video_id && article.video_type){
      if (article.video_type === 'vimeo'){
        return (
          <div className='embed-container'>
            <iframe src={`https://player.vimeo.com/video/${article.video_id}?color=ff000d`} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        )
      }else if (article.video_type === 'youtube'){
        return (
          <div className='embed-container'>
            <iframe width="100%" src={`https://www.youtube-nocookie.com/embed/${article.video_id}?rel=0`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        )
      }
    }
  }

  render () {
    const splitPath = this.props.match.params.article_id.split('/')
    const article_id = splitPath.slice(-1)[0]
    const article = article_id ? articles[article_id] : null
    const bio = article && article.author_id && bios ? this.getBio(article.author_id) : null
    // const contents = this.generateContent(article)

    return (
      <div className='main-content'>
        {
          article ? (
              <div>
                <Meta {...this.props} title={article.title} desc={article.summary} bodyClass='article' />
                <SocialLinks {...this.props} key='sociallinks' title={article.title} />

                <h1>{article.title}</h1>

                {
                  article.content.map((item) => {
                    return(
                      item === '[video]' ? (
                        this.createVideoCode(article)
                      ) : item === '[slideshow]' ? (
                        this.createSlideshowCode(article)
                      ) : item.includes('</') ? (
                        <div dangerouslySetInnerHTML={{__html: item}} />
                      ) : (
                        <p>{item}</p>
                      )
                    )
                  })

                }

                {
                  article.footnotes ? (
                    <div>
                      <hr />
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