import React from 'react'

import './style.css'


class SocialLinks extends React.Component {

  openFacebook(shareUrl, e){
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    e.preventDefault()
    return false
  }

  openTwitter(shareUrl, shareVia, shareTitle, e){
    window.open(`https://twitter.com/share?url=${shareUrl}&amp;via=${shareVia}&amp;text=${shareTitle}`,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    e.preventDefault()
    return false
  }


  render () {
    const f = require('../../images/facebook.svg')
    const t = require('../../images/twitter.svg')
    const shareTitle = this.props.title ? this.props.title + ' | Muslims on the Belt and Road' : 'Muslims on the Belt and Road: New Silk Road Social Transformation in Inner Asia'
    const shareVia = '@AKUGlobal'
    const shareUrl = window.location.href

    return (
      <div className='aside-share-links'>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} onClick={ this.openFacebook.bind(this, shareUrl) } className="share-f" target="_blank" rel="noopener noreferrer" title="Share on Facebook">
          <img src={f} alt='facebook'/>
        </a>
        <a href={`https://twitter.com/share?url=${shareUrl}&amp;via=${shareVia}&amp;text=${shareTitle}`} onClick={ this.openTwitter.bind(this, shareUrl, shareVia, shareTitle) } className="share-t" target="_blank" rel="noopener noreferrer" title="Share on Twitter">
          <img src={t} alt='twitter'/>
        </a>
      </div>
    )
  }

}

export default SocialLinks