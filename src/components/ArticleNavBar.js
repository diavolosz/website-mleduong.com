import '../styles/ArticleNavBar.scss'
import '../styles/animation/animation.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudMoon, faCloudSun } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ArticleNavBar(props) {

  const { theme, setTheme } = useContext(ThemeContext)

  const handleModeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (window.sessionStorage.getItem("mode") === null) {
      window.sessionStorage.setItem("mode", "light")
    }
    setTheme(window.sessionStorage.getItem("mode"))
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem("mode", theme)
  }, [theme])


  return (
    <nav className={`article-nav-container ${theme}`}>
      <div className='mode-button'>
        {theme === "light" &&
          <FontAwesomeIcon
            icon={faCloudSun}
            className='mode-switch text hvr-buzz '
            onClick={() => handleModeChange()}
          />}
        {theme === "dark" &&
          <FontAwesomeIcon
            icon={faCloudMoon}
            className='mode-switch text hvr-buzz '
            onClick={() => handleModeChange()}
          />}
      </div>

      <div className={`item-wrapper ${theme}`}>
        <div className='article-nav-item text' onClick={() => props.setDisplay('about')}>ABOUT</div>
        <div className='article-nav-item text' onClick={() => props.setDisplay('project')}>PROJECTS</div>
        <div className='article-nav-item text' onClick={() => props.setDisplay('resume')}>RESUME</div>
        <div className='article-nav-item text' onClick={() => props.setDisplay('contact')}>CONTACT</div>
      </div>
    </nav>
  )
}