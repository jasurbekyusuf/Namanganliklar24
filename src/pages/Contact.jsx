import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h3>Напишите нам</h3>
      <div className="contact-container">
        <div className="contact-left">
          <form action="">
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="Электронная почта" />
            <input type="number" placeholder="Номер телефона" />
            <input type="text" placeholder="Тема" />
            <textarea
              placeholder="Текст"
            ></textarea>
            <button className="contact-button">Прикрепить файл</button>
            <input type="text" className="input-cod" placeholder="Код" />
            <button className="contact-button button33">Отправить</button>
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-right-container">
            <h3>NAMANGANLIKLAR24</h3>
            <div className="card">
              <div className="contact-right-one">
                <p>Электронная почта</p>
                <p>Социальные сети</p>
                <p>Телеграм канал</p>
                <p>Мобильная приложение</p>
              </div>
              <div className="contact-right-two">
                <p className="contact-pp">info@namanganliklar24.uz</p>
                <div className="contact-social">
                    <div className="span1"></div>
                    <div className="span2"></div>
                    <div className="span3"></div>
                </div>
                <div className="contact-button">
                  <span> </span> 
                  <p>Подписатся</p> 
                </div>
                <div className="contact-appstore">
                  <div className="contact-appstore-left dive">
                    <span></span>
                    <p><span1>Google</span1> Play</p>
                  </div>
                  <div className="contact-appstore-right dive">
                    <span></span>
                    <p>App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
