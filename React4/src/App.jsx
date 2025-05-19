import React from "react";
import { ArticlesProvider } from "./context/ArticlesContext";
import GeneralArticles from "./components/GeneralArticles";
import BBCArticles from "./components/BBCArticles";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const App = () => {
  return (
    <ArticlesProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/general" element={<GeneralArticles />} />
        <Route path="/bbcnews" element={<BBCArticles />} />
      </Routes>
    </ArticlesProvider>
  );
};

export default App;
