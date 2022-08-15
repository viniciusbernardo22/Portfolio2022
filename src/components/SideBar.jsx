import React from 'react'
import avatar from '../img/vini.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'
import CV from '../assets/CV-vinicius15-08-2022.pdf'
function SideBar() {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Vinicius" />
      <p className="title">Desenvolvedor FullStack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={CV} target="_blank" className="btn">
        Download CV
      </a>
    </aside>
  )
}

export default SideBar
