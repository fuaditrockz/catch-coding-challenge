import React, { Component } from "react"
import { Row, Col, Button } from "antd"

class ProductsList extends Component {
  render() {
    if (this.props.loading) {
      return (
        <Row>
          <Col xs={24}>
            <h1>Loading</h1>
          </Col>
        </Row>
      )
    } else if (this.props.error) {
      return (
        <Row>
          <Col xs={24}>
            <h1>Error</h1>
          </Col>
        </Row>
      )
    }

    return (
      <Row gutter={[10, 10]} style={{ minHeight: "75vh" }}>
        {this.props.products.map((product, key) => {
          return (
            <Col xs={12} sm={12} md={8} lg={6} xl={6} key={key}>
              <div className="cardContainer">
                <img alt={product.name} src={product.imageUrl} />
                <div className="cardHoverContainer">
                  <div className="hoverBackground">
                    <Button
                      className="addToCartButton"
                      type="primary"
                      shape="round"
                      icon="plus-circle"
                      size="large"
                      onClick={e => {
                        e.preventDefault()
                        this.props.addToCart(product.id)
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="cardStatus">
                  <h3>
                    {product.quantityAvailable === 0
                      ? "SOLD OUT"
                      : product.quantityAvailable + " Items"}
                  </h3>
                </div>
                <div className="cardContent">
                  <h4 className="cardTitle">{product.name}</h4>
                  <h3>
                    <s>
                      {product.retailPrice === 0
                        ? ""
                        : "Rp " +
                          product.retailPrice
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </s>
                  </h3>
                  <h1>
                    Rp{" "}
                    {product.salePrice
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </h1>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    )
  }
}

export default ProductsList
