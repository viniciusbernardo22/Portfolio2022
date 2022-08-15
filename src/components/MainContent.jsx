import React from 'react'
import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import Projects from './Projects'
import Tecnologies from './Tecnologies'
function MainContent() {
  return (
    <main id="main-content">
      <AboutContainer />
      <Projects />
      <Tecnologies />
    </main>
  )
}

export default MainContent
