import React from 'react'

import './Services.css'

import statistics from '../../../Image/services/STATISTICS.png'
import blank from '../../../Image/services/BLANK.png'
import chat from '../../../Image/services/CHAT.png'
import mail from '../../../Image/services/MAIL.png'
import display from '../../../Image/services/DISPLAY.png'

function Services() {
  return (
    <div className="services__wrapper">
      <div className="sevices__top">
        <div className="services__left-container">
          <p className="services__text">
            В списке сфер нашей деятельности также присутствует юридическое
            сопровождение бизнеса. Также мы оказываем помощь по взысканию
            алиментов, разделу имущества при расторжении брака, разрешению
          конфликтных ситуаций с недобросовестными начальниками и т. д.<br></br>
          Мы помогаем своим клиентам в решении споров в судебном и досудебном
          порядке. В нашей компетенции широчайший перечень направлений,
          связанных с отраслями права
          </p>
          <div className="services__bnt-cintainer">
            <button className="services__btn">
              Начать Сейчас
            </button>
            <button className="services__btn services__btn_link">
              Подробнее
            </button>
          </div>
        </div>
        <div className="services__right-container">
          <p className="services__text services__text_right">
            Наши адвокатские услуги эффективны, и мы всегда оказываем клиенту
            весь комплекс услуг по ведению дела в суде с такой степенью
            заботливости, осмотрительности и эффективности, которые
            обеспечивают ему достижение заявленных целей. При этом мы
            оцениваем не затраченные усилия, а достигнутый результат.
            Адвокатская помощь предоставляется юристами, обладающими
            богатым опытом в решении сложных юридических вопросов.
          </p>
        </div>
      </div>
      <h2 className="services__title">
        Наши услуги
      </h2>
      <div className="services__list">
        <div className="services__item">
          <img src={statistics} alt="небанкротство" className="services__ico" />
          <h3 className="services__subtitle">
            НЕБАНКРОТСТВО
          </h3>
        </div>
        <div className="services__item">
          <img src={chat} alt="судебные споры" className="services__ico" />
          <h3 className="services__subtitle">
            СУДЕБНЫЕ СПОРЫ
          </h3>
        </div>
        <div className="services__item">
          <img src={mail} alt="досудебное решение" className="services__ico" />
          <h3 className="services__subtitle">
            ДОСУДЕБНОЕ РЕШЕНИЕ
          </h3>
        </div>
        <div className="services__item">
          <img src={display} alt="бизнес" className="services__ico" />
          <h3 className="services__subtitle">
            БИЗНЕС
          </h3>
        </div>
        <div className="services__item">
          <img src={blank} alt="документы" className="services__ico" />
          <h3 className="services__subtitle">
            ДОКУМЕНТЫ
          </h3>
        </div>
      </div>
      <h2 className="services__super-title">
        СВОБОДНЫЙ ЮРИСТ
      </h2>
      <div className="sevices__top sevices__top_btm">
        <div className="services__left-container services__left-container_btm">
          <p className="services__text">
            Ключевыми сферами деятельности Юридической фирмы являются
            правовая помощь при возникновении проблем с погашением
            кредитов, уменьшение суммы кредитного долга, защита
            интересов клиентов в судах общей юрисдикции, хозяйственных
            и административных судах всех инстанций.
            <br></br><br></br>
            Компания оказывает услуги по гражданским делам и административным
            делам, а именно: по взысканию задолженности, алиментов, работа
            с судебными приставами, составление исковых заявлений, жалоб,
            обращений и других документов. Представляет интересы в суде
            Новосибирска и области.
          </p>
          <p className="services__text services__text_btm">
            Защита в лице Имя Фамилия Очество осуществляется на всех стадиях
            судебного процесса: в досудебном расследовании, в суде всех
            инстанций.
          </p>
          <div className="services__bnt-cintainer">
            <button className="services__btn">
              Начать Сейчас
            </button>
            <button className="services__btn services__btn_link">
              Подробнее
            </button>
          </div>
        </div>
        <div className="services__right-container
        services__right-container_btm">
          <p className="services__text services__text_right
          services__text_right_btm">
            Кроме этого, юристы и адвокаты фирмы специализируется на
            предоставлении услуг, связанных с организацией и сопровождением
            бизнеса, предоставляет услуги по регистрации предприятий, а также
            внесению изменений в уставные документы. Обеспечивает комплексное
            сопровождение хозяйственной деятельности, сопровождение проверок
            контролирующих органов (налоговое право), решение трудовых и
            земельных споров. Оказываем правовую помощь в области гражданских
            правоотношений.
            <br></br><br></br>
            «Свободный юрист» — это команда высококвалифицированных опытных
             адвокатов, которая предоставляет широкий спектр юридических услуг
            в отраслях административного, хозяйственного, жилищного,
            земельного, уголовного, семейного, трудового, финансового
            (налогового) и гражданского права. Если Вам нужна оперативная,
            качественная правовая помощь юриста Новосибирска или адвоката
            Новосибирска за умеренную цену — тогда это к нам!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
