import '../styles/SideNavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'



export default function SideNavBar() {

  const { theme } = useContext(ThemeContext)

  return (
    <nav className='side-nav-container'>
      <div className='nav-logo'>
        <img src="img/logo.png" alt="logo" className="logo" />
      </div>
      <div className={`nav-connection-list ${theme}`}>
        <div className="side-nav-line line"></div>
        <FontAwesomeIcon icon={faGithub} className='small-icon text' />
        <FontAwesomeIcon icon={faLinkedin} className='small-icon text' />
        <FontAwesomeIcon icon={faAt} className='small-icon text' />
        <div className="side-nav-line line"></div>
      </div>
    </nav>
  )
}