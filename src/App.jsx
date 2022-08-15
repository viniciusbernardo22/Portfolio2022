import { useState } from 'react'
import MainContent from './components/MainContent'
import SideBar from './components/SideBar'
import './styles/components/app.sass'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="portfolio">
      <h1>Vinicius Bernardo</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
