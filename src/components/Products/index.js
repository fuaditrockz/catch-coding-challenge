import React, { Component } from 'react';
import { Row, Pagination } from 'antd';
import { connect } from 'react-redux';

import ProductsList from './subcomponents/ProductsList';
import { fetchProducts } from '../../actions/productActions';

const mapStateToProps = (state) => ({
  products: state.productsReducer.items,
  loading: state.productsReducer.loading,
  error: state.productsReducer.error
})

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    await this.props.dispatch(fetchProducts())
    this.pushDataToState()
  }

  pushDataToState = () => {
    this.setState({
      products: this.props.products.results
    })
  }

  render() {
    return (
      <div style={containerStyle}>
        <Row style={{ marginBottom: 10 }}>
          <h1>Showing results for "<span style={{ fontWeight: 800 }}>Best Price</span>"</h1>
        </Row>
        <ProductsList 
          products={this.state.products} 
          loading={this.props.loading}
          error={this.props.error}
        />
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

export default connect(mapStateToProps)(Products)