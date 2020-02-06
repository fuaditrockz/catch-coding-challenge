import React, { Component } from 'react';
import { Layout } from 'antd';

export default class MainFooter extends Component {
  render() {
    return (
      <Layout.Footer style={containerStyle}>
        <h4 style={text}>Made with love By Fuadit Muhammad</h4>
      </Layout.Footer>
    )
  }
}

const containerStyle = {
  backgroundColor: "#F9A26C",
  padding: "10px 20px",
}

const text = {
  marginBottom: 0
}