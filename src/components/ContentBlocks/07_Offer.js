import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import '../../styles/component_styles/Offer.scss';

export default function Offer() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`article-block-7-container ${theme}`}>
      <span className='title text'> SKILLS TO OFFER </span>
      <div className='intro-container text'>
        <div className='skills-container'>
          <p className='skill-title'>FRONTEND</p>
          <p className='skill-body'>
            Use modern popular technologies such as SCSS, TailwindCSS, React.js, and Vue.js to build user-friendly client-side applications while maintaining good practices using semantic coding styles for team based projects.
          </p>
        </div>
        <div className='center-image'>
          <img src='img/computer.png' alt='computer-image' />
        </div>
        <div className='skills-container text'>
          <p className='skill-title'>BACKEND</p>
          <p className='skill-body'>
            Able to build server application with proper routes to databases using common industrial technologies such as Express.js, Node.js, Rails, and Postgresql.
          </p>
        </div>
      </div>
      <div className='button-wrapper background-reverse text-reverse'>
        <span className='button-to-project'> My Work </span>
      </div>
    </div>
  )
}