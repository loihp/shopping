import React, { Component } from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route, Switch } from "react-router-dom";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Home from "./section/Home";
/* ================================================= */

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/" component={Home} exact />
      </section>
    );
  }
}

export default Section;
