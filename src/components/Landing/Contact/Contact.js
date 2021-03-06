import React from 'react'

import './Contact.css'
import map from '../../../Image/contact/Группа масок 1.png'

function Contact() {
  return (
    <div id="contact" className="contact__wrapper">
      <div className="contact__left-container">
        <h2 className="contact__titile">
          Контакты
        </h2>
        <p className="contact__text">
          630091, г. Новосибирск, ул. Мичурина 23/1
          3 этаж, 305 офис
          <br></br><br></br>
          телефон:<br></br>
          +7(383)287-91-21
        </p>
      </div>
      <div className="contact__right-container">
        <img src={map} alt="" className="cotact__map"/>
      </div>
    </div>
  )
}

export default Contact
