import React, { Component } from 'react'
import {Helmet} from "react-helmet";

// import getEnvBaseURL from '../../utils/get_env_base_url'
import getEnvAppURL from '../../utils/get_env_app_url'

class Meta extends Component {

  render () {
    // const baseUrl = getEnvBaseURL(process.env.REACT_APP_ENV)
    const appUrl = getEnvAppURL(process.env.REACT_APP_ENV)
    const pageUrl = this.props.match.url === '/' ? appUrl : appUrl + this.props.match.url

    const shareImage = require('../../images/AKU_logo.gif')
    const siteName = 'Muslims on the Belt and Road: New Silk Road Social Transformation in Inner Asia'
    const defaultTitle = `${siteName} | ISMC | Aga Khan University`
    const titleTemplate = 'Muslims on the Belt and Road | ISMC | Aga Khan University'
    const pageTitle = this.props.title ? this.props.title : null
    const pageDesc = this.props.desc ? this.props.desc :'this is the meta description'

    return (
      <Helmet defaultTitle={defaultTitle} titleTemplate={`%s | ${titleTemplate}`}>

        <title>{pageTitle}</title>

        <link rel="canonical" href={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AKUGlobal" />
        <meta name="twitter:creator" content="@AKUGlobal" />
        <meta name="twitter:title" content={pageTitle ? pageTitle : siteName} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={appUrl + '/' + shareImage} />

        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle ? pageTitle : siteName} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={appUrl + '/' + shareImage}  />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />

        <body className={`page-${this.props.bodyClass}`} />
      </Helmet>

    )
  }
}

export default Meta