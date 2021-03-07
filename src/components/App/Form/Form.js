import React, { useState } from 'react'

import './Form.css'

function Form({ hadleCloseForm }) {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [telInput, setTelInput] = useState('')
  const [questInput, setQustInput] = useState('')

  const resetForm = () => {
    setNameInput('')
    setEmailInput('')
    setTelInput('')
    setQustInput('')
  }

  const handleNameChange = (evt) => {
    setNameInput(evt.target.value)
  }
  const handleEmailChange = (evt) => {
    setEmailInput(evt.target.value)
  }
  const handleTelChange = (evt) => {
    setTelInput(evt.target.value)
  }
  const handleQuestChange = (evt) => {
    setQustInput(evt.target.value)
  }

  const closeFormClick = (evt) => {
    if (evt.target.className === 'fixed-overlay') {
      hadleCloseForm()
      resetForm()
    }
  }

  const closeForm = () => {
    hadleCloseForm()
    resetForm()
  }

  React.useEffect(() => {
    const escHandler = evt => {
      if (evt.key === 'Escape') {
        closeForm()
      }
    }
    window.addEventListener('keyup', escHandler)
    return (
      () => window.removeEventListener('keyup', escHandler))
  }, [])

  return (
    <div onClick={closeFormClick} className="fixed-overlay">
      <div className="modal">
        <div className="form__wrapper">
          <div className="form__container">
            <h3 className="form__title">
              Напишите нам
            </h3>
            <p className="form__text">
              Мы обязательно решим Ваш вопрос
            </p>
            <form onSubmit={() => console.log('submit')} className="form__form">
              <div className="form__input-container">
                <p className="form__name">
                  Имя
                </p>
                <input onChange={handleNameChange} required={true}
                  value={nameInput} type="text" className="form__input" />
              </div>
              <div className="form__input-container">
                <p className="form__name">
                  Электронная почта
                </p>
                <input onChange={handleEmailChange} required={true}
                  value={emailInput} type="email" className="form__input" />
              </div>
              <div className="form__input-container">
                <p className="form__name">
                  Номер телефона
                </p>
                <input onChange={handleTelChange} required={true}
                  value={telInput} type="tel" className="form__input" />
              </div>
              <div className="form__input-container">
                <p className="form__name form__name_quest">
                  Опишите свой вопрос
                </p>
                <textarea onChange={handleQuestChange} required={true}
                  value={questInput} type="text" className="form__input
             form__input_questions"/>
              </div>
              <button onClick={closeForm}
                className="form__button">
                Отправить
              </button>
              <button onClick={closeForm}
                className="form__button-esc">
                <span className="form__button-cross"></span>
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
