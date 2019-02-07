import React, { Component } from 'react'

import { Meta, SocialLinks } from '../../components'
import './style.css'

class AboutOrganizers extends Component {
  render () {
    return (
      <div className='main-content'>
        <Meta {...this.props} title='About Organizers' bodyClass='about-organizers' />
        <SocialLinks {...this.props} key='sociallinks' title='About Organizers' />

        <h1>About Organizers</h1>

        <h2><a href="https://www.aku.edu/ismc/Pages/home.aspx" target="_blank">The Institute for the Study of Muslim Civilisations</a></h2>

        <p>The Aga Khan University established the <a href="https://www.aku.edu/ismc/Pages/home.aspx" target="_blank">Institute for the Study of Muslim Civilisations</a> in 2002. AKU-ISMC is a higher education institution with a focus on research, publications, graduate studies and outreach. It promotes scholarship that opens up new perspectives on Muslim heritage, modernity, culture, religion and society. AKU-ISMC students use critical thinking to conduct innovative research into Muslim civilisations and religious traditions from primarily the perspectives of the social sciences and humanities. The Institute aims to create opportunities for interaction among academics and other professionals so as to deepen understanding of the pressing issues of public life affecting Muslim societies.​</p>
        <p>ISMC’s publications address current trends of thought about Islam, Muslims and Muslim societies.​ By creating access to scholarship from Muslim contexts in the English language and on a global platform, ISMC publications foster intellectual exchange and dialogue about and between Muslim societies and cultures.​ ISMC’s <a href="https://www.aku.edu/ismc/publications/Documents/AKU-ISMC%20Publications%20Catalogue%204.pdf" target="_blank">Publications Catalogue​</a> lists our new and forthcoming books, as well as our backlist.</p>

        <div className='embed-container'>
          <iframe width="100%" src="https://www.youtube-nocookie.com/embed/WPWSh7k_nhA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>

        <h2><a href="https://www.eurasianet.org/" target="_blank">Eurasianet</a></h2>

        <p>The special feature, <b><em>Muslims on the Belt and Road: New Silk Road Social Transformations in
Inner Asia</em></b>, was created in collaboration with <a href="https://eurasianet.org/" target="_blank">Eurasianet</a>, an independent
news organization that covers news from and about the South Caucasus and Central Asia.
Eurasianet provides on-the-ground reporting and critical perspectives on the most important
developments in the region. It strives to provide information useful to policymakers, scholars,
and interested citizens both in and outside of Eurasia. Content is published in both English and
Russian. Eurasianet is a tax-exempt [501(c)3] organization based at Columbia University’s
Harriman Institute, one of the leading centers in North America of scholarship on Eurasia.</p>
      </div>
    )
  }
}

export default AboutOrganizers