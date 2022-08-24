import '../styles/ArticleNavBar.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudMoon, faCloudSun } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'

export default function ArticleNavBar() {

  const [lightMode, setLightMode] = useState(true)

  const handleInvert = () => {
    document.querySelectorAll('.inverted').forEach((result) => {
      result.classList.toggle('inverted')
    })
  }

  const handleModeChange = () => {
    window.sessionStorage.setItem("lightMode", !lightMode)
    setLightMode(JSON.parse(window.sessionStorage.getItem("lightMode")))
    document.documentElement.classList.toggle('darkMode')
    handleInvert()
  }
  useEffect(() => {
    setLightMode(JSON.parse(window.sessionStorage.getItem("lightMode")))
    if (JSON.parse(window.sessionStorage.getItem("lightMode")) === false) {
      document.documentElement.classList.add('darkMode')
      handleInvert()
    } else {
      document.documentElement.classList.remove('darkMode')
    }
  }, [])




  return (
    <nav className='article-nav-container'>
      {lightMode === true &&
        <FontAwesomeIcon
          icon={faCloudSun}
          className='mode-switch'
          onClick={handleModeChange}
        />}
      {lightMode === false &&
        <FontAwesomeIcon
          icon={faCloudMoon}
          className='mode-switch'
          onClick={handleModeChange}
        />}
      <div className='item-wrapper'>
        <div className='article-nav-item'>ABOUT</div>
        <div className='article-nav-item'>PROJECTS</div>
        <div className='article-nav-item'>RESUME</div>
        <div className='article-nav-item'>CONTACT</div>
      </div>
    </nav>
  )
}