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

import { useState, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'


function App() {
  const { theme } = useContext(ThemeContext)

  const [display, setDisplay] = useState('intro')

  return (
    <div className={`homepage-wrapper ${theme}`}>
      <div className="homepage-container background-secondary">
        <div className='main-wrapper background'>
          <SideNavBar setDisplay={setDisplay}/>

          <article className='main-body-article'>
            <ArticleNavBar setDisplay={setDisplay}/>

            { display === 'intro' && <MainIntroBlock />}
            { display === 'intro' && <Offer />}
            { display === 'about' && <AboutMeBlock />}
            { display === 'project' && <PastProjectbBlock />}
            { display === 'resume' && <Resume />}
            { display === 'resume' && <SkillsBlock />}
            { display === 'contact' && <Contact />}
          </article>

        </div>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
