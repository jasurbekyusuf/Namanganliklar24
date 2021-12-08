import React from "react";
import News from "../components/News";

function NewsPage() {
  return (
    <div className="NewsPage">
      <div className="newscontainerall">
        <div className="AllNews">
          <h3 className="politika-h3 politika-h33">News</h3>

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
      <div className="news-one">
        <div className="HomeNewsContent">
          {News.map((newscontent) => {
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
    </div>
  );
}

export default NewsPage;
