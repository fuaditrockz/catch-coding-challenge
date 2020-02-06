import React, { Component } from 'react';
import { Row, Pagination } from 'antd';
import { connect } from 'react-redux';

import ProductCard from './subcomponents/ProductCard';
import { fetchProducts } from '../../actions/productsActions';

const mapStateToProps = state => ({
  products: state.products.items
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: dispatch({ type: 'FETCH PRODUCTS' })
});

class Products extends Component {
  render() {
    console.log(this.props.products)
    console.log(this.props.fetchProducts)
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

export default connect(mapStateToProps, fetchProducts)(Products)