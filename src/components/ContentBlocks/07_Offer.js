import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import '../../styles/component_styles/Offer.scss';
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Offer(props) {
  const { theme } = useContext(ThemeContext)

  Aos.init()

  return (
    <div className={`article-block-7-container ${theme}`}>
      <span className='title text'> SKILLS TO OFFER </span>
      <div className='intro-container text'>
        <div data-aos="zoom-out-left" className='skills-container'>
          <p className='skill-title'>FRONTEND</p>
          <p className='skill-body'>
            Use modern popular technologies such as SCSS, TailwindCSS, React.js, and Vue.js to build user-friendly client-side applications while maintaining good practices using semantic coding styles for team based projects.
          </p>
        </div>
        <div className='center-image'>
          <img src='img/computer.png' alt='computer-image' />
        </div>
        <div data-aos="zoom-out-right" className='skills-container text'>
          <p className='skill-title'>BACKEND</p>
          <p className='skill-body'>
            Able to build server application with proper routes to databases using common industrial technologies such as Express.js, Node.js, Rails, and Postgresql.
          </p>
        </div>
      </div>
      <div className='button-wrapper background-reverse text-reverse'>
        <span className='button-to-project' onClick={() => props.setDisplay('project')}> My Work </span>
      </div>
    </div>
  )
}