import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-top">
          <button className="footer-button">NAMANGANLIKLAR24</button>
          <p>
            Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых
            последних новостей:
          </p>
          <div className="footer-buton1">
            <span></span>
            <p className="add">Подписатся</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-text">
            <p className="footer-p">О сайте</p>
            <p>
              Воспроизводство, копирование, тиражирование, распростране ние и
              иное использование информации с сайта «NAMANGANLIKLAR24.UZ»
              возможно только с предварительного письменного разрешения
              редакции.
            </p>
          </div>
          <div className="footer-text">
            <p className="footer-p">Информация о сайте</p>
            <p className="footer-p">Напишите нам </p>
            <p className="footer-p">Реклама </p>
            <p className="footer-p">Прислать новость</p>
          </div>
          <div className="footer-text">
            <p className="footer-p">Использование материалов</p>
            <p className="footer-p">Темы дня</p>
            <p className="footer-p">Наша команда</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
