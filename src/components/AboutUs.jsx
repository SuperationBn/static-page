import './AboutUs.css'
import imgUno from '../img/slider-img-uno.jpg'
import imgDos from '../img/slider-img-dos.jpg'
import imgTres from '../img/slider-img-tres.jpg'

const AboutUs = () => {
  return (
    <section className='Aboutus_container'>
      <div className='flex_aboutus'>
        <div className="about_text_content">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus et nam molestiae officia, ducimus sed, est illum ipsa impedit iusto, corrupti saepe enim earum facere!</p>
          <button>buy now</button>
        </div>
        <div className="about_img_content">
          <img src={imgUno} alt="img slider" />
          <img src={imgDos} alt="img slider" />
          <img src={imgTres} alt="img slider" />
          <img src={imgUno} alt="img slider" />
          <img src={imgDos} alt="img slider" />
          <img src={imgTres} alt="img slider" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs