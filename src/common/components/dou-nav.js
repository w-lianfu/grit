import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'antd-mobile';

import './dou-nav.scss';

class DouNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name } = this.props;

    return (
      <nav className="dou-nav">
        <Link to="/">
          <i className={name === "home" ? "none" : "iconfont icon-home size20 c999"}></i>
          <i className={name === "home" ? "iconfont icon-home-fill size20" : "none"}></i>
        </Link>
        <Link to="/follow">
          <i className={name === "follow" ? "none" : "iconfont icon-fire size20 c999"}></i>
          <i className={name === "follow" ? "iconfont icon-fire-fill size20" : "none"}></i>
        </Link>
        <Link to="/add">
          <i className={name === "add" ? "none" : "iconfont icon-plus-circle size30 c999"}></i>
          <i className={name === "add" ? "iconfont icon-plus-circle-fill size30" : "none"}></i>
        </Link>
        <Link to="/message">
          <i className={name === "message" ? "none" : "iconfont icon-message size20 c999"}></i>
          <i className={name ==="message" ? "iconfont icon-message-fill size20" : "none"}></i>
        </Link>
        <Link to="/me">
          <i className={name === "me" ? "none" : "iconfont icon-my size20 c999"}></i>
          <i className={name === "me" ? "iconfont icon-my-fill size20" : "none"}></i>
        </Link>
      </nav>
    )
  }
}

export default DouNav;
