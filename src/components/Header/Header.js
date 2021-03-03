import React from 'react'

import './Header.css'
import headerLogo from './/header-logo.svg'

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
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
          <li className="header__link">ГЛАВНАЯ</li>
          <li className="header__link">О НАС</li>
          <li className="header__link">УСЛУГИ</li>
          <li className="header__link">КОНТАКТЫ</li>
          <li className="header__link">LANGUAGE</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
