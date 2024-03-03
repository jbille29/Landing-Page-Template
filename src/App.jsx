
import cameraImg from './assets/camera.png'
import heroImg from './assets/cat gif.gif'

import Navbar from './components/Navbar'

const App = () => {
 

  return (
    <div className="landing-container">
      <Navbar/>

      <div className="copy-container">

        <h1>Light up your cat's world with Purrjection</h1>
        <p>Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.</p>
        <div className="signup-container">
          <label htmlFor=""></label>
          <input type="email" 
            placeholder='cool-cat-owner@catsrule.com'/>
          <button>Sign up</button>
        </div>
        
      </div>

      <div className="hero-container">
     
        <img className='hero' src={heroImg} alt="" />
      </div>

    </div>
  )
}

export default App
