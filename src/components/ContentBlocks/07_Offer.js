import { useState, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


export default function Offer() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`article-block-7-container ${theme}`}>
      <span className='title text'>What I Can Offer </span>
    </div>
  )
}