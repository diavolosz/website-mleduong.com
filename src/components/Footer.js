import '../styles/Footer.scss'

export default function FooterSection(props) {
  return (
    <footer>
      <span className='copyright text'>&copy;/2022 HIEN. ALL RIGHTS RESERVED</span>
      <div className='foooter-nav'>
        <div className="side-nav-line-L line text"></div>
        <div className='button text' onClick={() => props.setDisplay('intro')}>HOME</div>
      </div>
    </footer>
  )
}