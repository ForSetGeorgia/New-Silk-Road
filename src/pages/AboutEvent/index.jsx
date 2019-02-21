import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import { Meta, SocialLinks } from '../../components'

import './style.css'

class AboutEvent extends Component {
  render () {
    return (
      <div className='main-content'>
        <Meta {...this.props} title='About Event' bodyClass='about-event' />
        <SocialLinks {...this.props} key='sociallinks' title='About Event' />

        <h1>About Event</h1>

        <p>The Institute of Muslim Civilisations at The Aga Khan University in London convened a workshop, titled <b><em>Muslims on the Belt and Road: New Silk Road Social Transformations in Inner Asia</em></b>, with the aim of facilitating open dialogue on the effects of China’s Belt and Road Initiative on local Muslim communities in Xinjiang, Kyrgyzstan, Kazakhstan, Pakistan and Tajikistan. It aimed to blend empirical and local research perspectives with a broader understanding of the socio-economic trends, moral discourses and power dynamics between centres and peripheries. The workshop featured four presentations, followed by commentary and discussion among participants.</p>
        <p>China’s much-discussed $1-trillion USD development project, the Belt and Road Initiative (BRI), is planned to cut straight across Inner Asia. Many of these areas, from Xinjiang across Central and South Asia, have Muslim-majority populations. The initiative aims to boost trade and energy infrastructure and has garnered the support of more than 63 governments worldwide. The economic, political and security aspects of the initiative have been widely discussed in the international media and scholarly communities. Yet, the impact on local communities in the region is less discussed and less well-understood.</p>
        <p>The workshop, convened in late 2017, aimed to address this void. It explored ongoing social transformations and adaptions in a few Muslim-majority communities in the heartland of the Belt and Road Initiative – Kashgar, Bishkek, Almaty, southern Kyrgyzstan, eastern Pakistan and Tajik and Uighur trader networks. In these areas, there are spaces for negotiations among centres and peripheries. Inherent in these negotiations are lots of questions, including: who benefits from the development of the Belt and Road Initiative? Who loses out? How is success measured and by whom? During the workshop, participants mulled these important questions.</p>
        <p>The BRI is seen by many as the cornerstone of a new strategy to expand Chinese geopolitical involvement in the world. Yet, it also has its precedents within China’s western region, where the Develop Great the West campaign was launched in 1999 with very similar goals and rhetoric. That campaign was deemed a success on the basis of statistical increases in income and production in the western regions. But a closer look at on-the-ground conditions in those regions reveals that local populations were often marginalised by development. A similar fate may await Inner Asian communities on the Belt and Road.</p>
        <p>Such tendencies are already manifesting themselves, but are they inevitable?</p>
        <p>Like the ancient Silk Road, this “New Silk Road” embodied in the BRI’s vision can facilitate the exchange of ideas and ideologies. State narratives of modernisation and law-and-order, along with various discourses concerning Islam, are currently prominent. For many Muslims in Inner Asia, new ideas of piety, morality and inequality are immensely important. But in contrast to depictions in both Chinese and Western media, they are only rarely expressed openly and prominently. And when such concepts are discussed publicly, they are often cloaked in politically charged or religiously radical-extremist terms. Some of the more differentiated forms of religious and political opinion often receive less attention than radical-extremist rhetoric, but such viewpoints are widespread and important to keep in mind as the region develops economically. Different forms of rising religiosity can be a stabilizing element for individuals grappling with development, alienation and community disintegration. In this sense, these new Islamic discourses, far from being backwards or “medieval,” as they are often deemed in the media, must be seen as a distinctly modern phenomenon.</p>
        <p>And large-scale processes of modernisation, such as the Belt and Road Initiative, should be expected to exacerbate rather than weaken such discourses.</p>

      </div>
    )
  }
}

export default AboutEvent