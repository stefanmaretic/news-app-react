import React, { Component } from "react";

import "./App.css";

import NewsSearch from "./components/NewsSearch";
import NewsListTabs from "./components/NewsListTabs";
import NewsListArticlesList from "./components/NewsListArticlesList";

class App extends Component {
  render() {
    return (
      <div>
        <NewsSearch />
        <NewsListTabs className="parent-container" />
        <NewsListArticlesList />
      </div>
    );
  }
}

export default App;
