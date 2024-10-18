import '../../styles/component_styles/Resume.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import StyledButton from '../StyledButton'

export default function Resume(props) {

  const [timeline, setTimeline] = useState("s6")
  const [displayClick, setDisplayClick] = useState(true)

  const handleDotClick = (e) => {
    setTimeline(e)
    setDisplayClick(false)
  }

  return (
    <div className="article-block-5-container">
      <p className='section-title text'>MY JOURNEY</p>
      <div className='timeline-resume-wrapper'>
        <div className='timeline-container' data-aos="fade-right">
          <div className='dot-container'>
          {displayClick && <span className="click-me-sign text" text>Click the Dot !</span>}

            <div className='line background-reverse'></div>
            <div className='arrow border'></div>

            <div className='dot-inner-wrapper'>
              <div className='dot background-reverse' onClick={() => handleDotClick("s1")}>
                {timeline === 's1' &&
                  <div className='timeline-content-wrapper-up'>
                    <div className='timeline-content-up border background-secondary text'>
                      <span className='timeline-date'>September, 2017</span>
                      <span className='timeline-location'>University of Waterloo</span>
                      <span className='timeline-event'>Enrolled and majored in Biochemistry & Biotechnology</span>
                      <img className='timeline-img' src='img/UW.png' alt='timeline-img' />
                    </div>
                    <div className='dot-connect-line background-reverse'></div>
                  </div>
                }
              </div>
            </div>


            <div className='dot-inner-wrapper'>
              <div className='dot background-reverse' onClick={() => handleDotClick("s2")}>
                {timeline === 's2' &&
                  <div className='timeline-content-wrapper-down'>
                    <div className='dot-connect-line background-reverse'></div>
                    <div className='timeline-content-down border background-secondary text'>
                      <img className='timeline-img' src='img/Apotex.png' alt='timeline-img' />
                      <span className='timeline-date'>September - December, 2019</span>
                      <span className='timeline-location'>Apotex Inc.</span>
                      <span className='timeline-event'>Worked as a Cleaning Validation Coordinator - QA</span>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className='dot-inner-wrapper'>
              <div className='dot background-reverse' onClick={() => handleDotClick("s3")}>
                {timeline === 's3' &&
                  <div className='timeline-content-wrapper-up'>
                    <div className='timeline-content-up border background-secondary text'>
                      <span className='timeline-date'>January - August, 2021</span>
                      <span className='timeline-location'>Apotex Inc.</span>
                      <span className='timeline-event'>Worked as a Quality Control Chemist - QC</span>
                      <img className='timeline-img' src='img/Apotex.png' alt='timeline-img' />
                    </div>
                    <div className='dot-connect-line background-reverse'></div>
                  </div>
                }
              </div>
            </div>


            <div className='dot-inner-wrapper'>
              <div className='dot background-reverse' onClick={() => handleDotClick("s4")}>
                {timeline === 's4' &&
                  <div className='timeline-content-wrapper-down'>
                    <div className='dot-connect-line background-reverse'></div>
                    <div className='timeline-content-down border background-secondary text'>
                      <img className='timeline-img' src='img/UW.png' alt='timeline-img' />
                      <span className='timeline-date'>April, 2022</span>
                      <span className='timeline-location'>University of Waterloo</span>
                      <span className='timeline-event'>Graduated with Dean's Honours
                        <FontAwesomeIcon className='svg' icon={faGraduationCap} />
                      </span>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className='dot-inner-wrapper'>
              <div className='dot background-reverse' onClick={() => handleDotClick("s5")}>
                {timeline === 's5' &&
                  <div className='timeline-content-wrapper-up'>
                    <div className='timeline-content-up border background-secondary text'>
                      <span className='timeline-date'>May - August, 2022</span>
                      <span className='timeline-location'>Lighthouse Labs</span>
                      <span className='timeline-event'>Enrolled in a Full Stack Web Development program</span>
                      <img className='timeline-img' src='img/LHL.png' alt='timeline-img' />
                    </div>
                    <div className='dot-connect-line background-reverse'></div>
                  </div>
                }
              </div>
            </div>


            <div className='dot-inner-wrapper'>
              <div className='dot background-reverse' onClick={() => handleDotClick("s6")}>
                {timeline === 's6' &&
                  <div className='timeline-content-wrapper-down'>
                    <div className='dot-connect-line background-reverse'></div>
                    <div className='timeline-content-down border background-secondary text'>
                      <img className='timeline-img' src='img/LHL.png' alt='timeline-img' />
                      <span className='timeline-date'>August - Present, 2024</span>
                      <span className='timeline-location'>Lighthouse Labs</span>
                      <span className='timeline-event'>Graduated and continously learning and exploring</span>
                    </div>
                  </div>
                }
              </div>
            </div>


          </div>
          
        </div>
        <div className='resume-container' data-aos="fade-left" data-aos-delay="200">
          <StyledButton content={"DOWNLOAD MY RESUME"} link='https://resume.creddle.io/resume/c61f41ah7ax'/>
          <StyledButton content={"KNOW ME BETTER"} setDisplay={props.setDisplay}/>
        </div>
      </div>
    </div>
  )
}