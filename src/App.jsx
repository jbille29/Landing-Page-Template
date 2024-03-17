
import heroImg from './assets/cat gif 2.gif'
import camera from './assets/projector.png'
import EmailForm from './components/EmailForm'

import Navbar from './components/Navbar'

const App = () => {


  return (
    <div className="landing-container">
      <header>
        <Navbar/>

        <section className='heading'>
      
          <div className="copy-container">

            <h1>A <span className='underline'>Projector</span> Designed Exclusively for <span className='underline'>Cat</span> Entertainment</h1>
            <p>Stimulate your cat with our easy-to-use projector, featuring three captivating videos pre-installed for immediate enjoyment.
            Join our waiting list to be the first to know when Purrject becomes available!
            </p>
            <EmailForm />
            
          </div>

          <div className="hero-container">
        
            <img className='hero' src={heroImg} alt="" />
          </div>
        </section>
      </header>

      <div className="gradient-border"></div>

      <section className='product-features'>
        <div className="product-image">
          <img src={camera} alt="" />
          <p className='image-disclaimer'>The image above is a conceptual rendering and for illustrative purposes only. The final design of Purrject may vary. Stay tuned for updates on the official product launch and design.</p>
        </div>
      
        <div className='product-features-list'>
          <div>
            <h5>Effortless Entertainment</h5>
            <p><strong className='strong'>Preloaded with Cat-Approved Videos: </strong>Purrject will come preloaded with a carefully selected set of videos to captivate your cat's natural instincts.</p>
          </div>
          <div>
            <h5>Simple and User-Friendly</h5>
            <p><strong className='strong'>One-Touch Operation:</strong> We're designing Purrject to be incredibly easy to use. It will feature a single button to turn it on and switch between videos.</p>
          </div>
          <div>
            <h5>Customize Your Cat's View Experience</h5>
            <p><strong className='strong'>USB Port for Additional Videos: </strong> Looking to add more variety? Purrject will include a USB port, allowing you to easily upload new videos. This offers endless possibilities to entertain and engage your cat with fresh scenes.</p>
          </div>
          <div>
            <h5>Designed with Pets in Mind</h5>
            <p><strong className='strong'>Durable and Safe: </strong>Understanding that cats can be a playful bunch, Purrject is being designed to withstand the occasional bump or knock. Its pet-friendly construction aims to ensure both safety and durability, giving you peace of mind.</p>
          </div>
        </div>
      </section>

      <div className="gradient-border"></div> 

      <section className='contact-us'>
        <h3>Got Questions?</h3>
        <a href="mailto:jbille29@gmail.com">Email me</a>
      </section>

    </div>
  )
}

export default App
