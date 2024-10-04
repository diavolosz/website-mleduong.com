import '../../styles/component_styles/PastProject.scss'
import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function PastProjectbBlock() {
  const { theme } = useContext(ThemeContext)

  const [P1, setP1] = useState(null)
  const [P2, setP2] = useState(null)
  const [P3, setP3] = useState(null)
  const [P4, setP4] = useState(null)

  const handleHoverLeftP1 = () => {
    P1 ? setP1(null) : setP1("hover-left")
  }
  const handleHoverRightP2 = (e) => {
    P2 ? setP2(null) : setP2("hover-right")
  }
  const handleHoverLeftP3 = (e) => {
    P3 ? setP3(null) : setP3("hover-left")
  }
  const handleHoverRightP4 = (e) => {
    P4 ? setP4(null) : setP4("hover-right")
  }

  return (
    <div className={`article-block-4-container ${theme}`}>
      <p className='section-title text'>MY WORKS</p>

      {/* <div className="inner-container s1 border background-reverse">
        <div className={`image-card-left ${P1}`}>
          <img className="gif-showcase" src='img/gifs/MLD.gif' alt='testing' onClick={handleHoverLeftP1} />
        </div>
        <div className="description-card-right background-reverse">
          <div className='project-description-container'>
            <div className='project-title text-reverse'> Mleduong</div>
            <div className='project-description text-reverse'>
              My first personal website built with React.js. Incorporated an extensive varity of stylings, designs, and effects to enhance my front-end skills.
            </div>
            <div className='button-wrapper background text'>
              <a href='https://github.com/diavolosz/website-mleduong.com' className='button-to-project' target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="inner-container s1 border background-reverse">
        <div className={`image-card-left ${P1}`}>
          <img className="gif-showcase" src='img/gifs/VOI.gif' alt='testing' onClick={handleHoverLeftP1} />
        </div>
        <div className="description-card-right background-reverse">
          <div className='project-description-container'>
            <div className='project-title text-reverse'> Voithos Labs</div>
            <div className='project-description text-reverse'>
              Landing page for Voithos Labs that offers cutting-edge technology solutions, specializing in innovative software and digital services to boost productivity.
            </div>
            <div className='button-wrapper background text'>
              <a href='https://www.voithoslabs.com/' className='button-to-project' target="_blank">Link</a>
            </div>
          </div>
        </div>
      </div>


      <div className="inner-container s2 border background-reverse">
        <div className="description-card-left background-reverse">
          <div className='project-description-container'>
            <div className='project-title text-reverse'> Vnote </div>
            <div className='project-description text-reverse'>
              a sleek, user-friendly note-taking platform designed for effortless organization, perfect for individuals and teams looking to keep their ideas and tasks in one place.
            </div>
            <div className='button-wrapper background text'>
              <a href='https://notes.voithos.app/' className='button-to-project' target="_blank">Link</a>
            </div>
          </div>
        </div>
        <div className={`image-card-right ${P2}`}>
          <img className="gif-showcase" src='img/gifs/VNO.gif' alt='testing' onClick={handleHoverRightP2} />
        </div>
      </div>


      {/* <div className="inner-container s2 border background-reverse">
        <div className="description-card-left background-reverse">
          <div className='project-description-container'>
            <div className='project-title text-reverse'> BayStreetbets </div>
            <div className='project-description text-reverse'>
              A Stock Trading Platform that allow user to keep track of their stocks and portfolios. Has unique feature for trade competitions with peers to crown the winner.
            </div>
            <div className='button-wrapper background text'>
              <a href='https://github.com/diavolosz/BayStreetBets' className='button-to-project' target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        <div className={`image-card-right ${P2}`}>
          <img className="gif-showcase" src='img/gifs/BBS.gif' alt='testing' onClick={handleHoverRightP2} />
        </div>
      </div> */}


      <div className="inner-container s3 border background-reverse">
        <div className={`image-card-left ${P3}`}>
          <img className="gif-showcase" src='img/gifs/BBS.gif' alt='testing' onClick={handleHoverLeftP3} />
        </div>
        <div className="description-card-right background-reverse">
          <div className='project-description-container'>
            <div className='project-title text-reverse'> BayStreetbets </div>
            <div className='project-description text-reverse'>
              A Stock Trading Platform that allow user to keep track of their stocks and portfolios. Has unique feature for trade competitions with peers to crown the winner.
            </div>
            <div className='button-wrapper background text'>
              <a href='https://github.com/diavolosz/BayStreetBets' className='button-to-project' target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-container s4 border background-reverse">
        <div className="description-card-left background-reverse">
          <div className='project-description-container'>
            <div className='project-title text-reverse'> Jungle </div>
            <div className='project-description text-reverse'>
              A mini E-commerce. Built with Ruby on Rails, the application allows visitors to view, purchase plants while allowing seller to stock up inventory and sell.
            </div>
            <div className='button-wrapper background text'>
              <a href='https://github.com/diavolosz/RubyRails-jungle-project' className='button-to-project' target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        <div className={`image-card-right ${P4}`}>
          <img className="gif-showcase" src='img/gifs/JUN.gif' alt='testing' onClick={handleHoverRightP4} />
        </div>
      </div>

    </div>
  )
}