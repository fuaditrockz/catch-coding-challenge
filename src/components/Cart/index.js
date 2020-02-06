import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import CartProduct from './subcomponents/CartProduct';

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
            <Col span={24} style={{ paddingTop: 10 }}>
              <CartProduct />
              <CartProduct />
              <CartProduct />
              <CartProduct />
            </Col>
          </Row>
        </div>
        <div className="totalCartWrapper">
          <Row>
            <Col span={6}>
              <h1>Total:</h1>          
            </Col>
            <Col offset={8} span={10}>
              <h1 className="totalPriceText">Rp 28,000</h1>
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