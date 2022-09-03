import '../../styles/component_styles/Contact.scss'

export default function Contact() {
  return (
    <div className="article-block-6-container">
      <div className='wrapper'>
        <div className='words text'>
          <span>GREETING</span>
          <br />
          <span>你好</span>
          <br />
          <span>안녕하세요</span>
          <br />
          <span>BONJOUR</span>
          <br />
          <span>こんにちは</span>
          <br />
          <span>HOLA</span>
          <br />
        </div>
      </div>
      <p className='quote-block-container'>
        <span className='quote-block text'>simplicity is the greatest adornment of art.</span>
        <span className='quote-author text'>- Albrecht Durer</span>
      </p>
      <p className='contact-details text'>
        <p>
          <strong>Email: </strong><a href="mailto:htleduong529@gmail.com" className='text'>htleduong529@gmail.com</a>
        </p>
        <div>
          <strong>Social: </strong>
          <a href="https://www.linkedin.com/in/hienthong-leduong/" className='text'>Linkedin</a> 
           /
          <a href="https://github.com/diavolosz" className='text'>Github</a>
        </div>
      </p>
    </div>
  )
}