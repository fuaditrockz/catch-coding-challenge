import React, { Component } from 'react';
import { Layout } from 'antd';

class MainHeader extends Component {
  render() {
    return (
      <Layout.Header>
        <h1 style={{color: "white"}}>Catch Coding Challenge</h1>
      </Layout.Header>
    )
  }
}

export default MainHeader;