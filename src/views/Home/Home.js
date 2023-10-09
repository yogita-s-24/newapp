import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "../../components/NewsArticle/NewsArticle";

const Home = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Pune");


  const loadNews = async () => {
    try{
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-04&to=2023-10-09&sortBy=popularity&apiKey=8c8d186be70442138c5aaf04488a0cac`
    );
    setNews(response.data.articles);
    }
    catch (err) {
      console.log('error', err)}
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(()=> {
    loadNews()
  },[searchQuery]);

  return (
    <div>
      <h1 className="text-center fs-1 py-4">News App</h1>
      <input className="d-block mx-auto input-search shadow p-2" type="text" value={searchQuery} onChange={(e)=>{
        setSearchQuery(e.target.value)
      }}/>
      <div className=" main py-5">
        {
        news.map((newsArticle, index) => {
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
              <NewsArticle author={author} title={title}
                description={description} url={url}
                urlToImage={urlToImage} publishedAt={publishedAt}
                content={content} key={index}
              />
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default Home;
