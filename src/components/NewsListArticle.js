import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { hideTabListItem } from "../actions/index";

class NewsListArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete() {
    this.props.hideTabListItem(this.props.index);
  }

  render() {
    const { title, body, hidden } = this.props;
    if (hidden) return null;
    return (
      <div className="news-list--article" index={this.props.index}>
        <button
          className="news-list--article__button"
          onClick={this.onClickDelete}
        >
          <b>&#10005;</b>
        </button>
        {title && <h2>{title}</h2>}
        {body && <p>{body}</p>}
      </div>
    );
  }
}

const mapDispatchToProps = {
  hideTabListItem
};

NewsListArticle.propTypes = {
  hideTabList: PropTypes.func,
  onClickDelete: PropTypes.func,
  hidden: PropTypes.bool
};

export default connect(null, mapDispatchToProps)(NewsListArticle);
