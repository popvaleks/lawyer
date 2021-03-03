import React from 'react'

import './Landing.css'

import Main from './Main/Main'
import About from './About/About'
import List from './List/List'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Form from './Form/Form'

function Landing() {
  return (
    <div className="landing__wrapper">
      <Main></Main>
      <About></About>
      <List></List>
      <Services></Services>
      <Contact></Contact>
      <Form></Form>
    </div>
  )
}

export default Landing
