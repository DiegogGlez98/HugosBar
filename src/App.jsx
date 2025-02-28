import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from './components/About'

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
      </main>
    </div>
  )
}

export default App

