import React from 'react'

import './Form.css'

function Form() {
  return (

    <div className="fixed-overlay">
      <div className="modal">
        <div className="form__wrapper">
          <div className="form__container">
            <h3 className="form__title">
              Напишите нам
            </h3>
            <p className="form__text">
              Мы обязательно решим Ваш вопрос
            </p>
            <form action="submit" className="form__form">
              <div className="form__input-container">
                <p className="form__name">
                  Имя
                </p>
                <input type="text" className="form__input" />
              </div>
              <div className="form__input-container">
                <p className="form__name">
                  Электронная почта
                </p>
                <input type="email" className="form__input" />
              </div>
              <div className="form__input-container">
                <p className="form__name">
                  Имя
                </p>
                <input type="tel" className="form__input" />
              </div>
              <div className="form__input-container">
                <p className="form__name">
                  Опишите свой вопрос
                </p>
                <textarea type="text" className="form__input
             form__input_questions"/>
              </div>
              <button type="submit" className="form__button">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div className="form__wrapper">
    //   <div className="form__container">
    //     <h3 className="form__title">
    //       Напишите нам
    //     </h3>
    //     <p className="form__text">
    //       Мы обязательно решим Ваш вопрос
    //     </p>
    //     <form action="submit" className="form__form">
    //       <div className="form__input-container">
    //         <p className="form__name">
    //           Имя
    //         </p>
    //         <input type="text" className="form__input"/>
    //       </div>
    //       <div className="form__input-container">
    //         <p className="form__name">
    //           Электронная почта
    //         </p>
    //         <input type="email" className="form__input"/>
    //       </div>
    //       <div className="form__input-container">
    //         <p className="form__name">
    //           Имя
    //         </p>
    //         <input type="tel" className="form__input"/>
    //       </div>
    //       <div className="form__input-container">
    //         <p className="form__name">
    //           Опишите свой вопрос
    //         </p>
    //         <textarea type="text" className="form__input
    //          form__input_questions"/>
    //       </div>
    //       <button type="submit" className="form__button">
    //         Отправить
    //       </button>
    //     </form>
    //   </div>
    // </div>
  )
}

export default Form
