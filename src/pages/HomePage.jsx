import React from "react";
import IconsSection from "../components/Iconssection";
import NewsContent from "../components/NewsContent";
import { VscBellDot } from "react-icons/vsc";
import AllNews from "../components/AllNews";
import Banner from "../components/Banner";
function HomePage() {
  return (
    <div className="HomePage">
      <IconsSection />
      <div className="news-one">
        <div className="HomeNewsContent">
          {NewsContent.map((newscontent) => {
            return (
              <div className="NewsContentContainer" key={newscontent.id}>
                <div className="newscontent">
                  <img src={newscontent.image} alt="" />
                  <a href={newscontent.link} className="newscontentlink">
                    {newscontent.title}
                  </a>
                  <div className="newscon">
                    <p>
                      {newscontent.clock} / {newscontent.date}.
                      {newscontent.month}.{newscontent.year}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-alert">
        <div className="home-alert-left">
          <VscBellDot className="home-alert-left-icon" />
          <h3>Хотите узнать новости первыми? подключите уведомления!</h3>
        </div>
        <div className="home-alert-right">
          <button>Включит уведомления!</button>
        </div>
      </div>
      <div className="newscontainerall">
        <div className="AllNews">
          <h3 >Последние новости</h3>
          {AllNews.map((allnews) => {
            return (
              <div className="AllNewscontainer" key={allnews.id}>
                <div className="AllNewsContent">
                  <div className="AllNewsContent-left">
                    <img src={allnews.image} alt="" />
                  </div>
                  <div className="AllNewsContent-right">
                    <div className="allnewslink">
                      <a href={allnews.link}>{allnews.title}</a>
                    </div>

                    <p className="allnewslink1">{allnews.title1}</p>
                    <div className="allnewscon">
                      {allnews.clock} / {allnews.date}.{allnews.month}.
                      {allnews.year}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="allnewsbutton">Больше новостей</button>
        </div>
        <div className="AllNews-right">
          <div className="allnewscontainer">
            <div className="allnewscontainer1">
              <h2>Cамые популярные новости</h2>
              <p>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </p>
              <span>11:31 / 15.05.2020</span>
              <div className="line"></div>
            </div>
            <div className="allnewscontainer1">
              <p>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </p>
              <span>11:31 / 15.05.2020</span>
              <div className="line"></div>
            </div>
            <div className="allnewscontainer1">
              <p>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </p>
              <span>11:31 / 15.05.2020</span>
              <div className="line"></div>
            </div>
            <div className="allnewscontainer1">
              <p>
                По факту прорыва Сардобинского водохранилища возбуждено
                уголовное дело
              </p>
              <div className="lineup">
                <span className="lineup">11:31 / 15.05.2020</span>
              </div>

            </div>
          </div>

          <div className="img"></div>
        </div>
      </div>
      <Banner/>
    </div>
  );
}

export default HomePage;
