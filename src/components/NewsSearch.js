import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchNews } from "../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ keyword: this.input.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchNews(this.state.keyword);
    this.setState({ keyword: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="search-bar">
          <input
            type="text"
            value={this.state.keyword}
            placeholder="What should I search for?"
            onChange={this.onChange}
            ref={keyword => {
              this.input = keyword;
            }}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  fetchNews
};

export default connect(null, mapDispatchToProps)(Search);
