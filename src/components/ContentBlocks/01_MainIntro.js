import '../../styles/component_styles/MainIntro.scss'

import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import ReactCardFlip from 'react-card-flip';

export default function MainIntroBlock() {
  const { theme } = useContext(ThemeContext)

  const [flip, setFlip] = useState(false)
  const [displayClick, setDisplayClick] = useState(true)

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayClick(!displayClick);
    setFlip(!flip);
  }

  return (
    <div className={`article-block-1-container ${theme}`}>
      <div className="intro-container-1 text">
        <div className='large-title'>Hello.</div>
        <div className="intro-inner-container">
          <p className="intro-nickname">I'm Michael.</p>
          <br />
          <p className="intro-one-liner-1"> A Full Stack Developer,</p>
          <p className="intro-one-liner-2"> Problem Solver, and Design Enthusiast.</p>
        </div>


        <div className="intro-container-2">
          <span className="intro-fullname">Hien Thong Le Duong</span>
          <p className="detailed-discription">
            Has a background in quality assurance and quality control. I love being innovative and have the ability in designing user interfaces, testing codes and constructing databases and servers to develop intriguing and user-friendly web application.
          </p>
        </div>
      </div>


      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <div className='card front border'>
          <img className='card-body' src='img/card-front.png' onClick={handleClick} />
          {displayClick && <span className="click-me-sign text" text>Click Me</span>}
        </div>
        <div className='card back border background-reverse'>
          <img className='card-body' src='img/card-back.JPG' onClick={handleClick} />
        </div>
      </ReactCardFlip>

    </div>
  )
}