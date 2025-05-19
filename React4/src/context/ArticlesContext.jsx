import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
const ArticlesContext = createContext(null);

export const ArticlesProvider = ({ children }) => {
  const [general, setGeneral] = useState([]);
  const [BBCNews, setBBCNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f9862cf993c24adab428e1ebfdcc165e"
      )
      .then((res) => setGeneral(res.data.articles));
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f9862cf993c24adab428e1ebfdcc165e"
      )
      .then((res) => setBBCNews(res.data.articles));
  }, []);

  const values = { general, BBCNews };
  return (
    <ArticlesContext.Provider value={values}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  return useContext(ArticlesContext);
};
