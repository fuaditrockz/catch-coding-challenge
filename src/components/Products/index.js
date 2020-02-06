import React, { Component } from 'react';
import { Row } from 'antd';

import ProductCard from './subcomponents/ProductCard';

export default class Products extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Row gutter={[10, 10]}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </div>
    )
  }
}

const containerStyle = {
  padding: 20,
  flex: 1,
}