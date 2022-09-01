import '../../styles/component_styles/AboutMe.scss'
import PictureSlider from '../PictureSlider'
import InfiniteRollTag from '../InfiniteRollTag'

export default function AboutMeBlock() {
  return (
    <div className="article-block-3-container">

      <div className='personal-description'>
        <div className='text-body-container text'>
          <p className='text-body-title'>ME, MYSELF & I</p>
          <p className='text-body'>
            <span className='body-paragraph-intro'>
              I am a Full-Stack Developer with experience in building small projects that has eye-catching animations and effects with an extensive amount of utilities that interact with backend databases.
            </span>
            <br />
            <br />
            <span className='body-paragraph'>
              Coming from a traditional Asian family where art has been viewed as a forbidden path of career to peruse, I have always been admiring people who are allowed to utilize and express their artistic minds at their workplace to create intriguing designs and products. The fascinating process of generating an imagination into a real-life product has encouraged me to jump into some of the most common art technologies such as Photoshop, CSS, Procreate, and Music Mixing Software.
            </span>
            <br />
            <br />
            <span className='body-paragraph'>
              Fast forward to 2022, I have completed my degree majoring in Biochemistry and Biotechnology. However, I soon realized that being in research and experiment-heavy environment was not something I would like to aim for. Soon after that, I had a random encounter with an invitation to a coding boot camp which completely changed my life goal.
            </span>
            <br />
            <br />
            <span className='body-paragraph'>
              Never have I ever viewed programming as an art until I took my time to research and console log my first “Hello World” in the color red using JavaScript and CSS. What excites me the most is being able to further manifest my imagination into an interactive webpage. Accompanied by my research ability and problem-solving skills obtained through my 4 years in university, I was able to quickly learn and adapt to various coding languages to design and build ideas and products that are user-friendly and could potentially impose a positive impact on users.
            </span>
            <br />
            <br />
            <span className='body-paragraph'>
              Here is one of the most memorable quotes that resonated with me so deeply and got me into programming:
            </span>
            <br />
            <br />
            <p className='body-quote'>
              “Programming is the art of algorithm design and the craft of debugging errant code.”
            </p>
            <p className='body-quote-author'>- Ellen Ullman</p>
            <br />
            <br />
            <span className='body-paragraph'>
              Not only do I want to express my artistic side and build designs, but being able to apply my programming knowledge across different projects to identify and solve problems in creative ways has further fuelled my passion to keep doing what I love.
            </span>
            <br />
            <br />
          </p>
        </div>

        <div className='right-container'>

          <div className='picture-sets'>
            <PictureSlider />
          </div>
          <div className='personal-hobbies'>
            <div className='tags-container'>
              <p className='section-title text'>THINGS I'M INTERESTED IN</p>
              <div className='tag1 tag'>
                <InfiniteRollTag content='WEBFLOW DEVELOPMENT' />
              </div>
              <div className='tag2 tag'>
                <InfiniteRollTag content='UI/UX DESIGN' />
              </div>
              <div className='tag3 tag'>
                <InfiniteRollTag content='FRONTENT DEVELOPMENT' />
              </div>
              <div className='tag4 tag'>
                <InfiniteRollTag content='ABSTRACT DESIGNS' />
              </div>
              <div className='tag5 tag'>
                <InfiniteRollTag content='STARTUPS BUSINESS' />
              </div>
              <div className='tag6 tag'>
                <InfiniteRollTag content='USER-FRIENDLY DESIGNS' />
              </div>
              <div className='tag7 tag'>
                <InfiniteRollTag content='DRAWING' />
              </div>
              <div className='tag8 tag'>
                <InfiniteRollTag content='ACOUSTIC MUSICS' />
              </div>
              <div className='tag9 tag'>
                <InfiniteRollTag content='UNHEALTHY BURGERS' />
              </div>

            </div>
          </div>
        </div>

      </div>



    </div>
  )
}