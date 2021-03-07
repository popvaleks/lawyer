import React, { useState } from 'react'

import './App.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'
import handleClick from '../../utils/scrollHandler'
import Form from './Form/Form'

function App() {
  const [scroll, setScroll] = useState(0)
  const [formTrue, setFormTrue] = useState(false)
  const body = document.getElementById('body')

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const hadleOpenForm = () => {
    setFormTrue(true)
    body.style.overflow = 'hidden'
  }

  const hadleCloseForm = () => {
    setFormTrue(false)
    body.style.overflow = ''
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      {scroll >= 1080 &&
        <div onClick={() => handleClick('main')}
          className="app__arrow">
          <a className="app__arrow-link">
            <div className="app__arrow-line"></div>
          </a>
        </div>}
      <Header />
      <Landing
        hadleOpenForm={hadleOpenForm} />
      <Footer />
      {formTrue &&
        <Form
          hadleCloseForm={hadleCloseForm}
        />}
    </div>
  )
}

export default App
