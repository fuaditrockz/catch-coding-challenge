import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';

import { fetchProducts } from '../../../actions/productActions';

const mapStateToProps = (state) => ({
  products: state.productsReducer.items,
  loading: state.productsReducer.loading,
  error: state.productsReducer.error
})

class ProductsList extends Component {
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
    let { products, loading, error } = this.props
    const data = {
      data2: 2
    }
    /* console.log(Array.isArray(products.results))
    console.log(typeof data.data2) */
    console.log(this.state.products)
    
    if(this.props.loading) {
      return (
        <Row>
          <Col xs={24}>
            <h1>Loading</h1>
          </Col>
        </Row>
      )
    } else if(this.props.error) {
      return (
        <Row>
          <Col xs={24}>
            <h1>Error</h1>
          </Col>
        </Row>
      )
    }

    return (
      <Row gutter={[10, 10]}>
        {this.state.products.map((product, key) => {
          return (
            <Col xs={12} sm={12} md={8} lg={6} xl={6} key={key}>
              <div className="cardContainer">
                <img
                  alt={product.name}
                  src={product.imageUrl}
                />
                <div className="cardHoverContainer">
                  <div className="hoverBackground">
                  <Button 
                    className="addToCartButton"
                    type="primary" 
                    shape="round" 
                    icon="plus-circle" 
                    size="large"
                  >
                    Add to Cart
                  </Button>
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
          )
        })}
      </Row>
    );
  }
}

export default connect(mapStateToProps)(ProductsList)