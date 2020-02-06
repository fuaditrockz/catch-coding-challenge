import React, { Component } from 'react';
import { Row, Pagination } from 'antd';

import ProductCard from './subcomponents/ProductCard';

export default class Products extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Row style={{ marginBottom: 10 }}>
          <h1>Showing results for "<span style={{ fontWeight: 800 }}>Best Price</span>"</h1>
        </Row>
        <Row gutter={[10, 10]}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Pagination defaultCurrent={6} total={500} />
        </Row>
      </div>
    )
  }
}

const containerStyle = {
  padding: 20,
  flex: 1,
}