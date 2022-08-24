import '../styles/SideNavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SideNavBar() {
  return (
    <nav className='side-nav-container'>
      <div className='nav-logo inverted'>
        <img src="img/logo.png" alt="logo" className="logo" />
      </div>
      <div className='nav-connection-list'>
        <div className="side-nav-line"></div>
        <FontAwesomeIcon icon={faGithub} className='small-icon' />
        <FontAwesomeIcon icon={faLinkedin} className='small-icon' />
        <FontAwesomeIcon icon={faAt} className='small-icon' />
        <div className="side-nav-line"></div>
      </div>
    </nav>
  )
}