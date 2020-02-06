import React, { Component } from 'react';
import { Row } from 'antd';

import ProductCard from './ProductCard';

export default class ProductList extends Component {
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
  padding: 10,
  flex: 1,
}