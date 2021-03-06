import React from 'react'

import './Header.css'
import headerLogo from './/header-logo.svg'
import handleClick from '../../utils/scrollHandler'

function Header() {
  const hoverHandler = () => {
    document.getElementById('main')
      .style.filter = 'grayscale(0%)'
  }
  const hoverHandlerOff = () => {
    document.getElementById('main')
      .style.filter = ''
  }

  return (
    <div onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandlerOff} className="header__wrapper">
      <div className="link header__logo" onClick={() => handleClick('main')}>
        <img src={headerLogo} alt="Юридическая помощь"
          className="header__logo-img" />
        <div className="header__logo-text">
          <h1 className="header__logo-title">
            СВОБОДНЫЙ ЮРИСТ
          </h1>
          <p className="header__logo-subtitle">
            деловое агенство
          </p>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__li">
            <a onClick={() => handleClick('main')}
              className="link header__link">ГЛАВНАЯ</a>
          </li>
          <li className="header__li">
            <a onClick={() => handleClick('about')}
              className="link header__link">О НАС</a>
          </li>
          <li className="header__li">
            <a onClick={() => handleClick('services')}
              className="link header__link">УСЛУГИ</a>
          </li>
          <li className="header__li">
            <a onClick={() => handleClick('contact')}
              className="link header__link">КОНТАКТЫ</a>
          </li>
          <li className="header__li">
            <a className="link header__link">LANGUAGE</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
