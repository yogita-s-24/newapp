import React from "react";
import "./NewsArticle.css";

const NewsArticle = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => {
  return (
    <div className="container">
      <div className="card card-container shadow">
        <img
          src={urlToImage}
          className="card-img-top new-article-Img p-2"
          alt="..."
        />
        <div class="card-body">
          <h4 className="card-text">{title}</h4>
          <div className="d-flex">
            <p>{author}</p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;