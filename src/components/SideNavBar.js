import '../styles/SideNavBar.scss'
import '../styles/animation/animation.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'



export default function SideNavBar(props) {

  const { theme } = useContext(ThemeContext)

  return (
    <nav className='side-nav-container'>
      <div className='nav-logo hvr-rotate '>
        <img src="img/logo.png" alt="logo" className="logo" onClick={() => props.setDisplay('intro')} />
      </div>
      <div className={`nav-connection-list ${theme}`}>
        <div className="side-nav-line line"></div>
        <a href='https://github.com/diavolosz'>
          <FontAwesomeIcon icon={faGithub} className='small-icon text hvr-buzz' />
        </a>
        <a href='https://www.linkedin.com/in/hienthong-leduong/'>
          <FontAwesomeIcon icon={faLinkedin} className='small-icon text hvr-buzz' />
        </a>
        <a href='mailto:htleduong529@gmail.com'>
          <FontAwesomeIcon icon={faAt} className='small-icon text hvr-buzz' />
        </a>
        <div className="side-nav-line line"></div>
      </div>
    </nav>
  )
}