import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header-right.scss';

class HeaderRight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, rightTitle } = this.props;

    return (
      <ul className="dou-header-right">
      <Link to="/" className="hidden">
        <i className="iconfont icon-left"></i>
        <label>{rightTitle}</label>
      </Link>
        <p>{title}</p>
        <Link to="/">
          <label>{rightTitle}</label>
          <i className="iconfont icon-right"></i>
        </Link>
      </ul>
    )
  }
}

export default HeaderRight;
