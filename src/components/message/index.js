import React, { Component } from 'react';

import DouNav from '@/common/components/dou-nav';
import HeaderRight from '@/common/components/header-right';
import './index.scss';

class Message extends Component {
  render() {
    return (
      <div className="message-page dou-page">
        <HeaderRight title="消息" rightTitle="联系人" />

        <div className="message-page__container">
          <p>message...</p>
        </div>

        <DouNav name="message" />
      </div>
    )
  }
}

export default Message;
