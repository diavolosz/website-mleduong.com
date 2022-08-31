import './Home.scss';
import SideNavBar from './components/SideNavBar'
import ArticleNavBar from './components/ArticleNavBar'
import FooterSection from './components/Footer';
import MainIntroBlock from './components/ContentBlocks/01_MainIntro'
import SkillsBlock from './components/ContentBlocks/02_Skills'
import AboutMeBlock from './components/ContentBlocks/03_AboutMe'
import PastProjectbBlock from './components/ContentBlocks/04_PastProject'
import Resume from './components/ContentBlocks/05_Resume'
import Contact from './components/ContentBlocks/06_Contact'
import Offer from './components/ContentBlocks/07_Offer';

import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  const { theme } = useContext(ThemeContext)
  const [display, setDisplay] = useState('intro')
  
  //scroll up upon refresh
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [display])
  
  //keep display component when refreshed
  useEffect(() => {
    if (window.sessionStorage.getItem("display") === null) {
      window.sessionStorage.setItem("display", "intro")
    }
    setDisplay(window.sessionStorage.getItem("display"))
  }, [])

  useEffect(() => {
    window.sessionStorage.setItem("display", display)
  }, [display])


  return (
    <div className={`homepage-wrapper ${theme}`}>
      {display === 'intro' && <div className='main-cover background-reverse'></div>}
      {display === 'resume' && <div className='resume-cover background-reverse'></div>}
      <div className="homepage-container background-secondary">
        <div className='main-wrapper background'>
          <SideNavBar setDisplay={setDisplay} />

          <article className='main-body-article'>
            <ArticleNavBar setDisplay={setDisplay} />
            {display === 'intro' && <MainIntroBlock />}
            {display === 'intro' && <Offer setDisplay={setDisplay} />}
            {display === 'about' && <AboutMeBlock />}
            {display === 'project' && <PastProjectbBlock />}
            {display === 'resume' && <SkillsBlock />}
            {display === 'resume' && <Resume setDisplay={setDisplay}/>}
            {display === 'contact' && <Contact />}
          </article>

        </div>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
