import '../../styles/component_styles/MainIntro.scss'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import ReactCardFlip from 'react-card-flip';

export default function MainIntroBlock() {
  const { theme } = useContext(ThemeContext)

  const [flip, setFlip] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    setFlip(!flip)
  }

  return (
    <div className={`article-block-1-container ${theme}`}>
      <div className="intro-container-1 text">
        <span className='large-title'>Hello.</span>
        <div className="intro-inner-container">
          <span className="intro-nickname">I'm Michael.</span>
          <span className="intro-one-liner"> A Full Stack Developer,</span>
          <span className="intro-one-liner"> problem solver, and design enthusiast.</span>
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
          <img className='card-body' src='img/card-front.png' onClick={handleClick}/>
        </div>
        <div className='card back border'>
          <img className='card-body' src='img/card-back.JPG' onClick={handleClick}/>
        </div>
      </ReactCardFlip>
    </div>
  )
}