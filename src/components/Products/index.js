import React, { Component } from 'react'
import { Row, Pagination } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductsList from './subcomponents/ProductsList'
import { fetchProducts } from '../../dispatchers/products'
import { addToCart } from '../../dispatchers/cart'

const mapStateToProps = state => ({
  products: state.productsReducer.items,
  loading: state.productsReducer.loading,
  error: state.productsReducer.error
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts,
      addToCart
    },
    dispatch
  )

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      setCurrentPage: 1,
      minValue: 0,
      maxValue: 8,
      totalPerPage: 8
    }
  }

  async componentDidMount() {
    await this.props.fetchProducts()
    this.pushDataToState()
  }

  addToCart = async id => {
    await this.props.addToCart(id)
  }

  pushDataToState = () => {
    this.setState({
      products: this.props.products.results
    })
  }

  handlePaginationChange = value => {
    this.setState({
      minValue: (value - 1) * this.state.totalPerPage,
      maxValue: value * this.state.totalPerPage,
      setCurrentPage: value
    })
  }

  render() {
    const {
      products,
      minValue,
      maxValue,
      totalPerPage,
      setCurrentPage
    } = this.state

    return (
      <div style={containerStyle}>
        <Row style={{ marginBottom: 10 }}>
          <h1>
            Showing results for '
            <span style={{ fontWeight: 800 }}>Best Price</span>'
          </h1>
        </Row>
        <ProductsList
          products={products.slice(minValue, maxValue)}
          loading={this.props.loading}
          error={this.props.error}
          addToCart={this.addToCart}
        />
        <Row style={{ marginTop: 30 }}>
          <Pagination
            defaultCurrent={1}
            current={setCurrentPage}
            defaultPageSize={totalPerPage}
            total={products.length}
            onChange={this.handlePaginationChange}
          />
        </Row>
      </div>
    )
  }
}

const containerStyle = {
  padding: 20,
  flex: 1
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
