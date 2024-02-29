
import cameraImg from './assets/camera.png'
import heroImg from './assets/hero.png'

const App = () => {
 

  return (
    <div className="landing-container">

      <div className="copy-container">

        <h1>Whoa! A header</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam odio quod omnis, adipisci velit recusandae itaque consequuntur inventore ullam dolore.</p>
        <div className="signup-container">
          <label htmlFor=""></label>
          <input type="email" />
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
