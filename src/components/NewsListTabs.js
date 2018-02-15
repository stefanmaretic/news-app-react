import React, { Component } from "react";
import { connect } from "react-redux";
import { setActiveList } from "../actions";
import PropTypes from "prop-types";

import { hideTab } from "../actions";
import "../styles/news-list.css";

class NewsListTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    // () => {
    //   this.setActiveList(0);
    //   this.props.hideTab(index)
    // }

    this.props.hideTab(index);
  }

  render() {
    const { lists } = this.props;
    return lists.map((list, index) => {
      return (
        this.props.lists.length > 0 && (
          <div key={index} className="news-list--tab">
            <i
              onClick={e => {
                e.preventDefault();
                this.props.setActiveList(index);
              }}
            >
              {list.keyword}
            </i>
            <button
              index={index}
              onClick={() => {
                this.onClick(index);
              }}
            >
              <b>&#10005;</b>
            </button>
          </div>
        )
      );
    });
  }
}

const mapStateToProps = state => ({
  lists: state.news.lists.length ? state.news.lists : []
});

const mapDispatchToProps = {
  setActiveList,
  hideTab
};

NewsListTabs.propTypes = {
  lists: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsListTabs);
