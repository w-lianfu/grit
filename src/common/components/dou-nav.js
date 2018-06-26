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
      <div className="dou-nav">
        <Link to="/">
          <i className={name === "home" ? "none" : "iconfont icon-home"}></i>
          <i className={name === "home" ? "iconfont icon-home-fill" : "none"}></i>
        </Link>
        <Link to="/follow">
          <i className={name === "follow" ? "none" : "iconfont icon-fire"}></i>
          <i className={name === "follow" ? "iconfont icon-fire-fill" : "none"}></i>
        </Link>
        <Link to="/add">
          <i className={name === "add" ? "none" : "iconfont icon-plus-circle"}></i>
          <i className={name === "add" ? "iconfont icon-plus-circle-fill" : "none"}></i>
        </Link>
        <Link to="/message">
          <i className={name === "message" ? "none" : "iconfont icon-message"}></i>
          <i className={name ==="message" ? "iconfont icon-message-fill" : "none"}></i>
        </Link>
        <Link to="/me">
          <i className={name === "me" ? "none" : "iconfont icon-my"}></i>
          <i className={name === "me" ? "iconfont icon-my-fill" : "none"}></i>
        </Link>
      </div>
    )
  }
}

export default DouNav;
