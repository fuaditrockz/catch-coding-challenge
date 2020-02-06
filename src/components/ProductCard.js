import React, { Component } from 'react';
import { Col } from 'antd';

export default class ProductCard extends Component {
  render() {
    return (
      <Col xs={12} sm={12} md={8} lg={6} xl={6}>
        <div className="cardContainer">
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <div className="cardHoverContainer">
            <div className="hoverBackground">

            </div>
          </div>
          <div className="cardStatus">
            <h3>SOLD OUT</h3>
          </div>
          <div className="cardContent">
            <h4>Beruang Kutub</h4>
            <h3><s>Rp 35,000</s></h3>
            <h1>Rp 25,000</h1>
          </div>
          
        </div>
      </Col>
    );
  }
}