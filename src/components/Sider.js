import React, { Component } from 'react';
import { Row } from 'antd';

export default class Cart extends Component {
  render() {
    return (
      <aside style={containerStyle}>
        <Row>
          <h1>Test</h1>
        </Row>
      </aside>
    );
  }
}

const containerStyle = {
  width: "25%",
  minHeight: "100%",
  backgroundColor: "#fff",
  padding: 10,
}