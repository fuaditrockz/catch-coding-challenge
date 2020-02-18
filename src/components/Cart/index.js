import React, { Component } from "react"
import { Row, Col, Icon } from "antd"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import CartProduct from "./subcomponents/CartProduct"
import {
  addToCart,
  removeFromCart,
  deleteFromCart
} from "../../dispatchers/cart"

const mapStateToProps = state => ({
  state: { cart: state.productsReducer.cart }
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToCart,
      removeFromCart,
      deleteFromCart
    },
    dispatch
  )

class Cart extends Component {
  addToCart = async id => {
    await this.props.addToCart(id)
    return
  }

  removeFromCart = async id => {
    await this.props.removeFromCart(id)
    return
  }

  deleteFromCart = async id => {
    await this.props.deleteFromCart(id)
    return
  }

  render() {
    return (
      <aside style={containerStyle}>
        <div className="shoppingCartWrapper">
          <Row>
            <Col span={24}>
              <h1>
                <Icon type="shopping" theme="filled" /> Shopping Cart
              </h1>
            </Col>
            <Col span={24}>
              <h3>You have no items in your cart.</h3>
            </Col>
            <Col span={24} style={{ paddingTop: 10 }}>
              {this.props.state.cart.list.map((item, i) => {
                return (
                  <CartProduct
                    removeFromCart={this.removeFromCart}
                    addToCart={this.addToCart}
                    deleteFromCart={this.deleteFromCart}
                    item={item}
                    key={i}
                  />
                )
              })}
            </Col>
          </Row>
        </div>
        <div className="totalCartWrapper">
          <Row>
            <Col span={6}>
              <h1>Total:</h1>
            </Col>
            <Col offset={8} span={10}>
              <h1 className="totalPriceText">
                Rp {this.props.state.cart.total}
              </h1>
            </Col>
          </Row>
        </div>
      </aside>
    )
  }
}

const containerStyle = {
  width: "25%",
  minHeight: "100%",
  backgroundColor: "#fff",
  padding: "20px 20px"
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
