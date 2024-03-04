
import heroImg from './assets/cat gif.gif'
import EmailForm from './components/EmailForm'

import Navbar from './components/Navbar'

const App = () => {


  return (
    <div className="landing-container">
      <Navbar/>

      <main>

        <div className="copy-container">

          <h1>Light up your cat's world with <span className="underline">Purrjection</span></h1>
          <p>Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.</p>
          <EmailForm />
          
        </div>

        <div className="hero-container">
      
          <img className='hero' src={heroImg} alt="" />
        </div>
      </main>

    </div>
  )
}

export default App
