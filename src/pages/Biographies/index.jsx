import React, { Component } from 'react'

import { Meta } from '../../components'
import bios from './data.json'

import './style.css'

class Biographies extends Component {
  render () {
    return (
      <div>
        <Meta {...this.props} title='Biographies' />

        <h1>Biographies</h1>
        <div className="bios">
          {
            bios.map((bio, key) => {
              return (
                <div key={key} className={`bio-item person-${key}`}>
                  <h2>{bio.name}</h2>

                  <p>{bio.bio}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Biographies