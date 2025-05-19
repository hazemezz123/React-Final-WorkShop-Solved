import React from "react";
import { useArticles } from "../context/ArticlesContext";
import "bootstrap/dist/css/bootstrap.min.css";
const GeneralArticles = () => {
  const { general } = useArticles();

  return (
    <div className="container">
      <h1 className="text-center display-3 my-3">General Articles</h1>
      {general.map((article, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralArticles;
