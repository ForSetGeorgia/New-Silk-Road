import React, { Component } from 'react'
import {Helmet} from "react-helmet";

class Meta extends Component {

  render () {
    return (
      <Helmet defaultTitle='Muslims on the Belt and Road: New Silk Road Social Transformation in Inner Asia | ISMC | Aga Khan University'
              titleTemplate={`%s | Muslims on the Belt and Road | ISMC | Aga Khan University`}>
      </Helmet>

    )
  }
}

export default Meta