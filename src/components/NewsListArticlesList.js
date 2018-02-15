import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import NewsListArticle from "./NewsListArticle";

class NewsListArticlesList extends Component {
  render() {
    const { articles } = this.props;
    return articles.map((article, i) => {
      return (
        <NewsListArticle
          key={i}
          index={i}
          title={article.title}
          body={article.description}
          hidden={article.hidden}
        />
      );
    });
  }
}

const mapStateToProps = state => ({
  hiddenArticles:
    state.news.lists.length === 0
      ? 0
      : state.news.lists[state.news.activeList].results
          .slice(0)
          .filter(article => article.hidden).length,
  articles:
    (state.news.lists.length > 0 &&
      state.news.lists[state.news.activeList].results) ||
    []
});

NewsListArticlesList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(NewsListArticlesList);
