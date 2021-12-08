import React from "react";
import { NavLink } from "react-router-dom";
import IconsSection from "../components/Iconssection";
import Politiknews from "../components/Politiknews";

function Politks() {
  return (
    <div className="Politiks">
      <IconsSection/>
      <div className="newscontainerall">
        <div className="AllNews">
          <h3 className="politika-h3">Политика</h3>
          {Politiknews.map((allnews) => {
            return (
              <div className="AllNewscontainer" key={allnews.id}>
                <div className="AllNewsContent">
                  <div className="AllNewsContent-left">
                    <img src={allnews.image} alt="" />
                  </div>
                  <div className="AllNewsContent-right">
                    <div className="allnewslink">
                      <a href={allnews.link}><NavLink className="navlink" to="/news" exact activeClassName="active">{allnews.title}</NavLink></a>
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
    </div>
  );
}

export default Politks;
