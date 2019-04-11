import React from "react";
import ProductData from "./Data";

class Product extends React.Component {
  constructor(props) {
    super(props);

  }

  /*addToCart() {
    this.num += 1;
    if (this.num > this.props.limit) {
      alert("This item is out of stock!");
    }
    else {
      alert(`you have add ${this.num} ${this.props.productName}s in your cart.`);
    }
  }*/

 //
  render() {
    return (
      <div ClassName="page-content">
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <div class="header">{this.props.productName}</div>
              <div class="description">{this.props.price}</div>
            </div>
            <div class="ui bottom attached button" onClick={()=>this.props.onAddToCart(this.props.productName, this.props.price)}>
              <i class="add icon"></i>
              Add to Cart
            </div>
            <div class="ui bottom attached button" onClick={()=>this.props.onRemoveFromCart(this.props.productName, this.props.price)}>
              <i class="remove icon"></i>
              Remove from Cart
            </div>
          </div>
        </div>
      </div>
    )


  }
}

export default Product;
