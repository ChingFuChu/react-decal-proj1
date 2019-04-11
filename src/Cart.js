import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt"

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      totalPrice: 0
    }
  }

  handleAddToCart(productName, price) {
    let newArr = [...this.state.cartItems];

    let update = false;
    for (var i in newArr) {
      if (productName === newArr[i].productName) {
        newArr[i].count += 1;
        this.setState({
          cartItems: newArr,
          totalPrice: this.state.totalPrice + price});
        update = true;
        break;
      }

    }

    if (!update) {
      let newElem = {
        productName: productName,
        price: price,
        count: 1
      }
      newArr.push(newElem);
      this.setState({
        cartItems: newArr,
        totalPrice: this.state.totalPrice + price});
    }
  }

  handleRemoveFromCart(productName, price) {
    let newArr = [...this.state.cartItems];

    const result = newArr.filter(arr => arr.productName != productName)

    for (var i in newArr) {
      if (productName === newArr[i].productName) {
        if (newArr[i].count > 1) {
          newArr[i].count -= 1;
          this.setState({
            cartItems: newArr,
            totalPrice: this.state.totalPrice - price});
          break;
        } else if (newArr[i].count == 1) {
          this.setState({
            cartItems: result,
            totalPrice: this.state.totalPrice - price});
          break;
        }

      }

    }

  }

  render() {
    return (
        <div className="page-content">
          {ProductData.products.map(product => (
            <Product productName={product.name} price={product.cost}
            onAddToCart={(name, price)=> this.handleAddToCart(name, price)}
            onRemoveFromCart={(name, price)=> this.handleRemoveFromCart(name, price)}/>))}

            <div><Receipt items={this.state.cartItems} totalPrice={this.state.totalPrice.toFixed(2)}/></div>
        </div>
    );
  }

}

export default Cart;
