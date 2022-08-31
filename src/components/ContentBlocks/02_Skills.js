import '../../styles/component_styles/Skills.scss'

export default function SkillsBlock() {
  return (
    <div className="article-block-2-container">
      <p className='section-title text'>SKILLS & HISTORY</p>
      <div className='skill-block-container'>

        <div className='skill-set-container frontend background-tertiary'>
          <div className='skill-set-title'>
            FRONTEND TECH
          </div>
          <div className='tech-icons-container'>
            <img src='img/TechIcons/Front/JS.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/HTML5.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/CSS.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/REACT.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/RUBY.svg' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/JQ.svg' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/SASS.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/BS.svg' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/VUE.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Front/TWind.png' alt='tech-icons' className='tech-icons' />
          </div>
        </div>

        <div className='skill-set-container backend background-tertiary'>
          <div className='skill-set-title'>
            BACKEND TECH
          </div>
          <div className='tech-icons-container'>
            <img src='img/TechIcons/Back/NODE.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Back/EX.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Back/PSQL.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Back/Rails.svg' alt='tech-icons' className='tech-icons' />
          </div>
        </div>

        <div className='skill-set-container workflow background-tertiary'>
          <div className='skill-set-title'>
            TESTING TECH
          </div>
          <div className='tech-icons-container'>
            <img src='img/TechIcons/Testing/MC.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Testing/chai.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Testing/JEST.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Testing/cypress.svg' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Testing/STRYBK.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/Testing/ES.svg' alt='tech-icons' className='tech-icons' />
          </div>
        </div>

        <div className='skill-set-container testing background-tertiary'>
          <div className='skill-set-title'>
            WORKFLOW CONTROL TECH
          </div>
          <div className='tech-icons-container'>
            <img src='img/TechIcons/WorkFlow/GITP.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/WorkFlow/GITH.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/WorkFlow/NET.png' alt='tech-icons' className='tech-icons' />
            <img src='img/TechIcons/WorkFlow/NPM.png' alt='tech-icons' className='tech-icons' />
          </div>
        </div>

      </div>
    </div>
  )
}