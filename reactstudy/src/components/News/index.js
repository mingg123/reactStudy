import React, { useState, useCallback } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";
import NewsPage from "./NewsPage";
import { Route, Router, BrowserRouter } from "react-router-dom";

const NewsMain = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <BrowserRouter>
      <Route path="/:category?" component={NewsPage} />;
    </BrowserRouter>
  );
};
export default NewsMain;
