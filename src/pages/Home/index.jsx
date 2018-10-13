import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Meta } from '../../components'
import articles from '../Article/data.json'

import './style.css'

class Home extends Component {
  render () {
    return (
      <div>
        <Meta {...this.props} />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h1>Muslims on the Belt and Road: New Silk Road Social Transformation in Inner Asia</h1>

              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat mauris metus condimentum, pellentesque commodo tempor maecenas blandit facilisi fermentum ullamcorper lobortis et, quisque dictum lacinia vitae natoque ligula gravida diam nisl magnis. Eros magna taciti porta purus mi ridiculus sed augue, cum luctus sodales aliquet viverra suscipit ultrices mus egestas, dignissim tortor class platea condimentum ante aliquam. Sodales erat himenaeos aliquam imperdiet vehicula sollicitudin consequat, ridiculus nec etiam proin scelerisque sapien commodo blandit, at placerat conubia non ut odio.</p>
              <p>Condimentum dictum himenaeos fusce fringilla diam, facilisis nam maecenas feugiat class mollis, bibendum natoque purus nec. Viverra vel posuere aptent per habitasse praesent cubilia, ad duis vehicula nostra maecenas tincidunt, sagittis sociis ante etiam integer accumsan. Pellentesque per ad habitasse etiam taciti auctor purus orci, mi leo eleifend hendrerit fames curae est tempus duis, pretium dis quisque tincidunt vestibulum neque luctus.</p>            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <h2>Articles</h2>
              <ul className='articles'>
                {
                  Object.keys(articles).map((key, index) => {
                    return (
                      <li key={key} className={`article article-${index}`}  >
                        <div className='article-title'><Link to={`/article/${key}`}>{articles[key].title}</Link></div>
                        <div className='article-summary'>{articles[key].summary}</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Home