import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Analytics from './Components/Analytics'
import Newsletter from './Components/Newsletter'
import Card from './Components/Card'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Main />
        <Analytics />
        <Newsletter />
        <Card />
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
