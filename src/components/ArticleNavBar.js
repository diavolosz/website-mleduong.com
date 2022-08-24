import '../styles/ArticleNavBar.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudMoon, faCloudSun } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ArticleNavBar() {

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
      {theme === "light" &&
        <FontAwesomeIcon
          icon={faCloudSun}
          className='mode-switch text'
          onClick={() => handleModeChange()}
        />}
      {theme === "dark" &&
        <FontAwesomeIcon
          icon={faCloudMoon}
          className='mode-switch text'
          onClick={() => handleModeChange()}
        />}
      <div className={`item-wrapper ${theme}`}>
        <div className='article-nav-item text'>ABOUT</div>
        <div className='article-nav-item text'>PROJECTS</div>
        <div className='article-nav-item text'>RESUME</div>
        <div className='article-nav-item text'>CONTACT</div>
      </div>
    </nav>
  )
}