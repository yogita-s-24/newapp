import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "../../components/NewsArticle/NewsArticle";

const Home = () => {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=pune&from=2023-09-30&to=2023-09-30&sortBy=popularity&apiKey=926deb960338402fbdf5f96a1d09a363"
    );
    setNews(response.data.articles);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div>
      <h1 className="text-center fs-1">News App</h1>
      <div className="d-flex justify-content-evenly">
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
