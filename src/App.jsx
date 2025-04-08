import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from './components/About'
import Review from './components/Review'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsappButton'
import CallButton from './components/CallButton'
import Contacto from './components/Contacto'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div>
          <Home/>
        </div>
        <div>
          <Dishes/>
        </div>
        <div>
          <About/>

        </div>
        <div>
          <Review/>
        </div>
        <div>
          <Contacto/>
        </div>
        <div>
          <Footer/>
        </div>
        <div>
          <CallButton/>
        </div>
        <div>
          <WhatsAppButton/>
        </div>
        
      </main>
    </div>
  )
}

export default App

