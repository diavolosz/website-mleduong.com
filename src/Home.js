import './Home.scss';
import SideNavBar from './components/SideNavBar'
import ArticleNavBar from './components/ArticleNavBar'
import FooterSection from './components/Footer';
import MainIntroBlock from './components/ContentBlocks/01_MainIntro'
import SkillsBlock from './components/ContentBlocks/02_Skills'
import AboutMeBlock from './components/ContentBlocks/03_AboutMe'
import PastProjectbBlock from './components/ContentBlocks/04_PastProject'

function App() {
  return (
    <div className="homepage-container">
      <div className='main-wrapper'>
        <SideNavBar />

        <article>
          <ArticleNavBar />
          <MainIntroBlock />
          <SkillsBlock />
          <AboutMeBlock />
          <PastProjectbBlock />
        </article>

      </div>
        <FooterSection />
    </div>
  );
}

export default App;
