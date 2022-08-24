import './Home.scss';
import SideNavBar from './components/SideNavBar'
import ArticleNavBar from './components/ArticleNavBar'
import FooterSection from './components/Footer';
import MainIntroBlock from './components/ContentBlocks/01_MainIntro'
import SkillsBlock from './components/ContentBlocks/02_Skills'
import AboutMeBlock from './components/ContentBlocks/03_AboutMe'
import PastProjectbBlock from './components/ContentBlocks/04_PastProject'


import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'


function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`homepage-wrapper ${theme}`}>
      <div className="homepage-container background-secondary">
        <div className='main-wrapper background'>
          <SideNavBar />

          <article className='main-body-article'>
            <ArticleNavBar />
            <MainIntroBlock />
            <SkillsBlock />
            <AboutMeBlock />
            <PastProjectbBlock />
          </article>

        </div>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
