import React, { Component } from 'react';
import { Layout } from 'antd';

export default class MainHeader extends Component {
  render() {
    return (
      <Layout.Header style={containerStyle}>
        <h1 style={textStyle}>Catch Coding Challenge</h1>
      </Layout.Header>
    )
  }
}

const containerStyle = {
  backgroundColor: '#325D79'
}

const textStyle = {
  color: "white",
  fontWeight: "bold"
}