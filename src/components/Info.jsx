import './Info.css'
import iconsUno from '../img/iconUno.png'
import iconsDos from '../img/iconsDos.png'
import iconsTres from '../img/iconTres.png'

const Info = () => {
  return (
    <section className='Info_container'>
      <div className="grid_info">
        <div className="info">
          <img src={iconsUno} alt="" />
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.</p>
        </div>
        <div className="info">
          <img src={iconsDos} alt="" />
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.</p>
        </div>
        <div className="info">
          <img src={iconsTres} alt="" />
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.</p>
        </div>
      </div>
    </section>
  )
}

export default Info