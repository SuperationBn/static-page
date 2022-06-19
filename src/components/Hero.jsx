import ilustration from '../img/ilustration.png'
import './Hero.css';

const Hero = () => {
	return (
		<section className="Hero_container">
			<div className="flex_hero">
				<div className="text_conteiner">
					<span>Lorem ipsum dolor sit amet consectetur.</span>
					<h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
						voluptatem quas. Fugit, maiores.
					</p>
					<button>see more</button>
				</div>
				<div className="img_container">
					<img src={ilustration} alt="imagen de hero" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
