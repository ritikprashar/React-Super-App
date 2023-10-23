import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  console.log(news);
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=608397e60f0b41edb7f10957f3dd74aa"
      )
        .then(async (data) => await data.json())
        .then((res) => setNews(res.articles[0]));
    };
    fetchNews();
  }, []);
  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  });
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  });
  return (
    <div
      style={{
        height: "87vh",
        width: "25vw",
        position: "relative",
        borderRadius: "12px",
        background: "#fff",
        marginLeft: "16px",
      }}
    >
      <img
        src={news.urlToImage}
        style={{
          height: "61vh",
          borderRadius: "12px",
          width: "25vw",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
        }}
        alt=""
      />
      <div
        style={{
          height: "25vh",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          width: "25vw",
          background: "white",
          fontSize: "0.9rem",
          fontFamily: "Roboto",
          fontWeight: "500",
          padding: "15px",
          color: "#272727",
        }}
      >
        {news.description}
      </div>
      <div
        style={{
          position: "absolute",
          width: "25vw",
          height: "20vh",
          background: "rgba(0, 0, 0, 0.74)",
          top: "41vh",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            marginBottom: "4px",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: 500,
            letterSpacing: " 0.64px",
          }}
        >
          {news.title}
        </p>
        <span
          style={{
            fontSize: "0.8rem",
            marginRight: "5px",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: 600,
            letterSpacing: " 0.365px",
          }}
        >
          {date} |
        </span>
        <span
          style={{
            fontSize: "0.8rem",
            color: "#FFF",
            fontFamily: "Roboto",
            fontWeight: 600,
          }}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default News;
