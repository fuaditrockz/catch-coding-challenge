import React, { Component } from 'react';
import { Layout } from 'antd';

export default class MainFooter extends Component {
  render() {
    return (
      <Layout.Footer style={containerStyle}>
        <h4>Made with love By Fuadit Muhammad</h4>
      </Layout.Footer>
    )
  }
}

const containerStyle = {
  backgroundColor: "#F9A26C",
  padding: "20px 30px",
}