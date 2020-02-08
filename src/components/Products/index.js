import React, { Component } from 'react';
import { Row, Pagination } from 'antd';

import ProductsList from './subcomponents/ProductsList';

class Products extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Row style={{ marginBottom: 10 }}>
          <h1>Showing results for "<span style={{ fontWeight: 800 }}>Best Price</span>"</h1>
        </Row>
        <ProductsList />
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

export default Products;