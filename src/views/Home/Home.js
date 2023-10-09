import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "../../components/NewsArticle/NewsArticle";

const Home = () => {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=pune&from=2023-10-04&to=2023-10-09&sortBy=popularity&apiKey=8c8d186be70442138c5aaf04488a0cac"
    );
    setNews(response.data.articles);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div>
      <h1 className="text-center fs-1">News App</h1>
      <div className=" main">
        {news.map((newsArticle, index) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newsArticle;

          return (
            <div className="">
              <NewsArticle
                author={author}
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                content={content}
                key={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
