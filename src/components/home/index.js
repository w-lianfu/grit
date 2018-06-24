import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button } from 'antd-mobile';

import { ZButton } from '@/common/styled/button';
import './scss/one.scss';
import Store from './store';

const todo = new Store();

@observer
class Home extends Component {
  render() {
    return (
      <div>
        <ZButton>Hello</ZButton>
        <p>Home Page...</p>
        <Button type="primary">Hello, Ant Mobile!</Button>
        <p>{todo.title}</p>
        <Link to="/data">数据中心</Link>
      </div>
    )
  }
}

export default Home;
