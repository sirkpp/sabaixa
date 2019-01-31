import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ProductInfo.css";
import { imageofprod } from "../img/images.js";

export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productid: 1,
      producttitle: "VANS Sneakers",
      imageorder: [
        imageofprod[0],
        imageofprod[1],
        imageofprod[2],
        imageofprod[3]
      ],
      producthighlight:
        "The original branded shoes imported directly from the 'VANS' company so as to deliver a quality product at lowest possible price.",
      star: 3,
      sellertitle: "Vatsal Complex",
      sellerprofile: "a_vatsalcomplex",
      sellerauth: "Official VANS authorised distributor",
      minsalequantity: 5,
      minmeasuringunit: "pairs",
      availablemeasuringunit: "pairs",
      priceperunit: 1200,
      totalquantity: 100,
      description:
        "Sold by [Seller Username goes here. Seller offers you the 7 days reutrn policy.",
      productinfo:
        "Original Shoe from VANS. Comes in double soul. Highly comfortable and robust performance."
    };
    this.changeItemToDisplay = this.changeItemToDisplay.bind(this);
  }

  changeItemToDisplay(e) {
    let itemdisplayed = this.state.imageorder[0];
    let tochange = this.state.imageorder[e.target.id];
    console.log(tochange);
    let neworder = this.state.imageorder.map(item => item);
    for (let item of this.state.imageorder) {
      if (tochange === item) {
        neworder[0] = tochange;
        neworder[e.target.id] = itemdisplayed;
      }
    }
    this.setState({ imageorder: neworder });
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="content-wrapper">
            <div className="item-container">
              <div className="container">
                <div className="col-md-12">
                  <div className="product col-md-3 service-image-left">
                    <center>
                      <img
                        id="item-display"
                        src={this.state.imageorder[0]}
                        alt="First Sample Picture of Product"
                      />
                    </center>
                  </div>

                  <div className="container service1-items col-sm-2 col-md-2 pull-left">
                    <center>
                      <div id="item-1" className="service1-item">
                        <img
                          src={this.state.imageorder[1]}
                          alt="Second Sample Picture of Product"
                          id="1"
                          onClick={this.changeItemToDisplay}
                        />
                      </div>
                      <div id="item-2" className="service1-item">
                        <img
                          src={this.state.imageorder[2]}
                          alt="Third Sample Picture of Product"
                          id="2"
                          onClick={this.changeItemToDisplay}
                        />
                      </div>
                      <div id="item-3" className="service1-item">
                        <img
                          src={this.state.imageorder[3]}
                          alt="Fourth Sample Picture of Product"
                          id="3"
                          onClick={this.changeItemToDisplay}
                        />
                      </div>
                    </center>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="product-title">{this.state.producttitle}</div>
                  <div className="product-desc">
                    {this.state.producthighlight}
                  </div>
                  <div className="product-rating">
                    {[1, 2, 3, 4, 5].map(star => {
                      if (this.state.star >= star) {
                        return <i className="fa fa-star gold" />;
                      } else {
                        return <i className="fa fa-star-o" />;
                      }
                    })}
                  </div>
                  <hr />
                  <div className="product-price">
                    Rs. {this.state.priceperunit} per{" "}
                    {this.state.minmeasuringunit}
                  </div>
                  <div className="product-stock">In Stock</div>
                  <hr />
                  <div className="seller-title">
                    <strong>Sold By : </strong>
                    <em>
                      <Link to={this.state.sellerprofile}>
                        {this.state.sellertitle}
                      </Link>{" "}
                      - {this.state.sellerauth}
                    </em>
                  </div>
                  <div className="min-quantity">
                    <strong>Minimum Order : </strong>
                    <em>
                      {this.state.minsalequantity} {this.state.minmeasuringunit}
                    </em>
                  </div>
                  <div className="available-quantity">
                    <strong>Available Quantity:</strong>{" "}
                    <em>
                      {this.state.totalquantity}{" "}
                      {this.state.availablemeasuringunit}
                    </em>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="col-md-12 product-info">
                <ul id="myTab" className="nav nav-tabs nav_tabs">
                  <li>
                    <Link to="/" data-toggle="tab">
                      DESCRIPTION
                    </Link>
                  </li>
                  <li>
                    <Link to="/productinfo" data-toggle="tab">
                      PRODUCT INFO
                    </Link>
                  </li>
                  <li>
                    <Link to="/review" data-toggle="tab">
                      REVIEWS
                    </Link>
                  </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                  <Route
                    path="/"
                    exact={true}
                    render={() => (
                      <section className="container product-info">
                        {this.state.description}
                      </section>
                    )}
                  />
                  <Route
                    path="/productinfo"
                    render={() => (
                      <section className="container product-info">
                        {this.state.productinfo}
                      </section>
                    )}
                  />
                  <Route
                    path="/review"
                    render={() => (
                      <section className="container product-info">
                        Public review about the product and the seller goes
                        here.
                      </section>
                    )}
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
