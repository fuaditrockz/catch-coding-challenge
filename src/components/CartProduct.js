import React, { Component } from 'react';
import { InputNumber } from 'antd';

export default class CartProduct extends Component {
  render() {
    return (
      <div className="cartProductContainer">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        /> 
        <div className="cartProductContent">
          <h1>Hello World</h1>
          <h3>Rp 28,000</h3>
          <InputNumber min={1} max={100000} defaultValue={1} onChange={() => console.log("Hello")} />
        </div>
      </div>
    );
  }
}