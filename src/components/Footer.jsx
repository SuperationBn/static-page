import './Footer.css'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'

const Footer = () => {
  return (
    <footer className='footer_container'>
      <div className="footer_flex_container">
        <div className="footer_text_content">
          <h3>Lorem ipsum dolor sit.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis?</p>
          <button>see more</button>
        </div>
        <div className="footer_img_content">
          <a className='link' href="#"><img src={facebok} alt="facebook" /></a>
          <a className='link' href="#"><img src={instagram} alt="instagram" /></a>
          <a className='link' href="#"><img src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer