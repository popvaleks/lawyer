import React from 'react'

import './Landing.css'

import Main from './Main/Main'
import About from './About/About'
import List from './List/List'
import Services from './Services/Services'
import Contact from './Contact/Contact'

// eslint-disable-next-line react/prop-types
function Landing({ hadleOpenForm }) {
  return (
    <div className="landing__wrapper">
      <Main
        hadleOpenForm={hadleOpenForm}
      />
      <About />
      <List
        hadleOpenForm={hadleOpenForm}
      />
      <Services
        hadleOpenForm={hadleOpenForm}
      />
      <Contact />
    </div >
  )
}

export default Landing
