import React, { Component } from "react"
import { InputNumber, Button } from "antd"

export default class CartProduct extends Component {
  render() {
    return (
      <div className="cartProductContainer">
        <img alt={this.props.item.name} src={this.props.item.imageUrl} />
        <div className="cartProductContent">
          <h1>
            {this.props.item.name.length > 9
              ? `${this.props.item.name.substring(0, 8)}...`
              : this.props.item.name}
          </h1>
          <h3>Rp {this.props.item.price}</h3>
          <InputNumber
            min={1}
            max={100000}
            value={this.props.item.quantity}
            onChange={e =>
              e > this.props.item.quantity
                ? this.props.addToCart(this.props.item.id)
                : this.props.removeFromCart(this.props.item.id)
            }
          />
        </div>
        <Button
          className="cartProductDelete"
          type="danger"
          shape="circle"
          icon="delete"
          size="small"
          onClick={() => this.props.deleteFromCart(this.props.item.id)}
        />
      </div>
    )
  }
}
