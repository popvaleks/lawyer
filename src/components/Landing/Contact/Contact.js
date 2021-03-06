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
        {/* // eslint-disable-next-line react/no-unknown-property */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1143.0310291485748!2d82.91952765833514!3d55.042128531928824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5c7fef4d569%3A0x338b586b1a2bed1a!2zVWxpdHNhIE1pY2h1cmluYSwgMjMvMSwgMyDRjdGC0LDQtiwgMzA1INC-0YTQuNGBLCBOb3Zvc2liaXJzaywgTm92b3NpYmlyc2theWEgb2JsYXN0JywgNjMwMDkx!5e0!3m2!1sen!2sru!4v1615053583908!5m2!1sen!2sru" width="854" height="856" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe> */}
      </div>
    </div>
  )
}

export default Contact
