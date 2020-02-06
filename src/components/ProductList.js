import React, { Component } from 'react';
import { Layout, Row, Col, Card } from 'antd';

import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    return (
      <Layout.Content style={containerStyle}>
        <Row gutter={[10, 10]}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </Layout.Content>
    )
  }
}

const containerStyle = {
  padding: 10,
}