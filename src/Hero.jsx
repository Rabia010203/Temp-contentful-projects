
import heroImg from "./assets/hero.svg"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center"> 
      <div className="hero-title">
        <h1>Contentful CMS</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam inventore sapiente ipsam iure porro nostrum debitis aperiam molestiae tempora accusantium, cum dolorem, maiores dolorum. Enim at repellendus blanditiis atque rem.
        </p>
      </div>
      <div className="img-container">
        <img src={heroImg} alt="woman and the browser" />
      </div>
      </div>
    </section>
  )
}

export default Hero
