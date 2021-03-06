import React from 'react'

import './App.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="app__arrow">
        <a href="#" className="app__arrow-link">
          <div className="app__arrow-line"></div>
        </a>
      </div>
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  )
}

export default App
