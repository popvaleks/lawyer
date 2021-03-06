import React from 'react'

import './About.css'

function About() {
  return (
    <div id="about" className="about__wrapper">
      <h2 className="about__title">
        О нас
      </h2>
      <p className="about__text">
        В юридическом бизнесе, как и в остальных сферах
        деятельности, связанных с оказанием услуг, залогом успеха служат -
        хорошая деловая<br></br>
        репутация и  доброе имя! Мы, в лице нашего Партнерства, осознаем
        величину
        ответственности, которую берем на себя,<br></br>
         предоставляя юридический
        сервис, с учетом
        особенностей Клиентского обращения и наших возможностей.<br></br>
        Благодаря значительному опыту работы наших сотрудников, креативному
        подходу<br></br>
        в решении поставленных задач, с которыми приходят Люди, и<br></br>
        наличием
        отработанных стратегий, нам удается разрешать сложные вопросы в<br></br>
        различных отраслях российского и зарубежного законодательства.
      </p>
      <div className="about__sign"></div>
      <div className="about__card-list">
        <div className="about__card-item about__card-item_bcg1">
          <div className="about__card-icon icon1"></div>
          <h3 className="about__card-title">
            Оправданная ценовая политика
          </h3>
          <p className="about__card-text">
            Мы не предлагаем пустых, ненужных действий и мер
          </p>
        </div>
        <div className="about__card-item about__card-item_bcg2">
          <div className="about__card-icon about__card-icon_icon2"></div>
          <h3 className="about__card-title" style={{ color: 'white' }}>
            Юридические<br></br>
            услуги №1
          </h3>
          <p className="about__card-text" style={{ color: 'white' }}>
            Теперь у вас нет необходимости в трате времени
            на ожидание приёма в очередях. Вы сможете получить
            консультацию компетентного юриста в течение 10 минут.
          </p>
        </div>
        <div className="about__card-item about__card-item_bcg3">
          <div className="about__card-icon about__card-icon_icon3"></div>
          <h3 className="about__card-title">
            Надежно и <br></br>оперативно
          </h3>
          <p className="about__card-text">
            Теперь у вас нет необходимости в трате времени на
            ожидание приёма в очередях. Вы сможете получить консультацию
            компетентного юриста в течение 10 минут.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
