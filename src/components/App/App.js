import React from 'react'

import './App.css'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'
import handleClick from '../../utils/scrollHandler'
import Form from './Form/Form'

function App() {
  const [scroll, setScroll] = React.useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
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
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
      <Form></Form>
    </div>
  )
}

export default App
