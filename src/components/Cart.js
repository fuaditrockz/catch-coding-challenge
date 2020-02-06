import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';

export default class Cart extends Component {
  render() {
    return (
      <aside style={containerStyle}>
        <div className="shoppingCartWrapper">
          <Row>
            <Col span={24}>
              <h1>
                <Icon type="shopping" theme="filled" /> Shopping Cart
              </h1>
            </Col>
            <Col span={24}>
              <h3>You have no items in your cart.</h3>
            </Col>
          </Row>
        </div>
      </aside>
    );
  }
}

const containerStyle = {
  width: "25%",
  minHeight: "100%",
  backgroundColor: "#fff",
  padding: "20px 20px",
}