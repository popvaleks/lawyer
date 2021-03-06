import React from 'react'

import './List.css'
import clock from '../../../Image/list-header/icon_clock-adv.svg'
import check from '../../../Image/list-header/icon_check.png'
import whapsup from '../../../Image/social/whatsup.png'
import viber from '../../../Image/social//viber.png'
import tg from '../../../Image/social/tg22.png'
import zoom from '../../../Image/social/zoom.png'
import vk from '../../../Image/social/vkontakte_logo.png'

function List() {
  return (
    <div className="list__wrapper">
      <div className="list__header">
        <div className="list__header-content">
          <img src={clock} alt="Рассрочка" className="list__header-ico" />
          <div className="list__header-content-block">
            <h3 className="list__header-title">
              Рассрочка оплаты
            </h3>
            <p className="list__header-text">
              Мы предоставляем рассрочку на оплату услуг адвоката
            </p>
          </div>
        </div>
        <div className="list__header-content">
          <img src={check} alt="Рассрочка" className="list__header-ico" />
          <div className="list__header-content-block">
            <h3 className="list__header-title">
              Индивидуальный подход
            </h3>
            <p className="list__header-text">
              Поможем с учетом ваших обстоятельств
            </p>
          </div>
        </div>
        <div className="list__header-content">
          <img src={clock} alt="Рассрочка" className="list__header-ico" />
          <div className="list__header-content-block">
            <h3 className="list__header-title">
              Удобство
            </h3>
            <p className="list__header-text">
              Большую часть вопросов<br></br>мы можем решить онлайн
            </p>
          </div>
        </div>
      </div>
      {/* Help */}
      <div className="list__help-container">
        <div className="list__help-left">
          <h2 className="list__help-title">
            Квалифицированная помощь<br></br>не выходя из дома
          </h2>
          <p className="list__help-text">
            Свободный Юрист заботится о вашем здоровье.<br></br>
            Теперь вы можете получить нашу помощь или консультацию
            дистанционно,<br></br>
            любым удобным для вас способом.<br></br>
            Просто оставьте заявку, и наш специалист свяжется с вами в
            ближайшее<br></br>время.<br></br>
            Современные проблемы требуют современный решений.
          </p>
          <button className="list__help-btn">
            Начать Сейчас
          </button>
          <p className="list__help-text list__help-text_social">
            Свободный юрист поддерживает:
          </p>
          <div className="list__help-list">
            <img src={whapsup} alt="whapsup" className="list__help-social" />
            <img src={viber} alt="viber" className="list__help-social" />
            <img src={tg} alt="telegramm" className="list__help-social" />
            <img src={zoom} alt="zoom" className="list__help-social" />
            <img src={vk} alt="vkontakte" className="list__help-social" />
          </div>
        </div>
        <div className="list__help-right"></div>
      </div>
    </div>
  )
}

export default List
