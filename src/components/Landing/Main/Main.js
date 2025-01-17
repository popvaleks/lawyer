import React from 'react'

import './Main.css'

function Main({ hadleOpenForm }) {
  return (
    <div id="main" className="main__wrapper">
      <div className="main__text">
        <h2 className="main__title">
          Профессиональный&nbsp;правовой сервис онлайн
        </h2>
        <p className="main__subtitle">
          Мы успешно оказываем юридическую помощь&nbsp;
          в области семейного, административного, жилищного,
          гражданского и&nbsp;уголовного права
        </p>
        <button onClick={hadleOpenForm} className="main__btn">
          Начать сейчас
        </button>
      </div>

    </div>
  )
}

export default Main
