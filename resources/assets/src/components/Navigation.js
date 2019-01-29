import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './../css/navigation.css';


class Navigation extends Component {

	myfunction = () => {
		var foo = document.querySelector('#responsive-nav');
		var foo2 = document.querySelector('#navigation');
		foo.classList.toggle("open");
		foo2.classList.toggle("shadow");
	}

	myfunction2 = () => {
		var foo = document.querySelector("#freak-list-1");
		foo.classList.toggle("open");
	}

	myfunction3 = () => {
		var foo = document.querySelector("#freak-list-2");
		foo.classList.toggle("open");
	}

	random = () => {
		var barr = document.querySelector("#responsive-nav");
		window.onClick = (event) => {
			if (event.target == barr) {
				barr.classList.remove("open");
			}
		}

	}


	render() {



		return (
			<div>
				<li className="nav-toggle collapsed ham-menu-k" onClick={this.myfunction}>
					<button className="nav-toggle-btn main-btn icon-btn" style={{ right: "10px", top: "10px", position: "absolute" }} ><i className="fa fa-bars"></i></button>
				</li>



				<div style={{background:"black"}} id="navigation">

					<div className="container-k">
						<div style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }} id="responsive-nav">

							<div className="category-nav">
								<span className="category-header">Categories <i onClick={this.myfunction2} className="fa fa-list"></i></span>
								<ul id="freak-list-1" className="category-list">
									<li className="dropdown side-dropdown">
										<NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women’s Clothing <i className="fa fa-angle-right"></i></NavLink>
										<div className="custom-menu">
											<div className="row">
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr className="hidden-md hidden-lg" />
												</div>
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr className="hidden-md hidden-lg" />
												</div>
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
											</div>
											<div className="row hidden-sm hidden-xs">
												<div className="col-md-12">
													<hr />
													<NavLink to='#' className="banner banner-1" >
														<img src={require("./img/banner05.jpg")} alt="" />
														<div className="banner-caption text-center">
															<h2 className="white-color">NEW COLLECTION</h2>
															<h3 className="white-color font-weak">HOT DEAL</h3>
														</div>
													</NavLink>
												</div>
											</div>
										</div>
									</li>
									<li><NavLink to='#' >Men’s Clothing</NavLink></li>
									<li className="dropdown side-dropdown"><NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Phones & Accessories <i className="fa fa-angle-right"></i></NavLink>
										<div className="custom-menu">
											<div className="row">
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr className="hidden-md hidden-lg" />
												</div>
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
												<div className="col-md-4 hidden-sm hidden-xs">
													<NavLink to='#' className="banner banner-2" >
														<img src={require("./img/banner04.jpg")} alt="" />
														<div className="banner-caption">
															<h3 className="white-color">NEW<br />COLLECTION</h3>
														</div>
													</NavLink>
												</div>
											</div>
										</div>
									</li>
									<li><NavLink to='#' >Computer & Office</NavLink></li>
									<li><NavLink to='#' >Consumer Electronics</NavLink></li>
									<li className="dropdown side-dropdown">
										<NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Jewelry & Watches <i className="fa fa-angle-right"></i></NavLink>
										<div className="custom-menu">
											<div className="row">
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr className="hidden-md hidden-lg" />
												</div>
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr className="hidden-md hidden-lg" />
												</div>
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li><NavLink to='#' >Bags & Shoes</NavLink></li>
									<li><NavLink to='#' >View All</NavLink></li>
								</ul>
							</div>

							<div className="menu-nav">
								<span className="menu-header">Menu <i onClick={this.myfunction3} className="fa fa-bars"></i></span>
								<ul  id="freak-list-2" className="menu-list">
									<li><NavLink to='#' >Home</NavLink></li>
									<li><NavLink to='#' >Shop</NavLink></li>
									<li className="dropdown mega-dropdown"><NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women <i className="fa fa-caret-down"></i></NavLink>
										<div className="custom-menu">
											<div className="row">
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr className="hidden-md hidden-lg" />
												</div>
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
													<hr className="hidden-md hidden-lg" />
												</div>
												<div className="col-md-4">
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
											</div>
											<div className="row hidden-sm hidden-xs">
												<div className="col-md-12">
													<hr />
													<NavLink to='#' className="banner banner-1" >
														<img src={require("./img/banner05.jpg")} alt="" />
														<div className="banner-caption text-center">
															<h2 className="white-color">NEW COLLECTION</h2>
															<h3 className="white-color font-weak">HOT DEAL</h3>
														</div>
													</NavLink>
												</div>
											</div>
										</div>
									</li>
									<li className="dropdown mega-dropdown full-width"><NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Men <i className="fa fa-caret-down"></i></NavLink>
										<div className="custom-menu">
											<div className="row">
												<div className="col-md-3">
													<div className="hidden-sm hidden-xs">
														<NavLink to='#' className="banner banner-1" >
															<img src={require("./img/banner06.jpg")} alt="" />
															<div className="banner-caption text-center">
																<h3 className="white-color text-uppercase">Women’s</h3>
															</div>
														</NavLink>
														<hr />
													</div>
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
												<div className="col-md-3">
													<div className="hidden-sm hidden-xs">
														<NavLink to='#' className="banner banner-1" >
															<img src={require("./img/banner07.jpg")} alt="" />
															<div className="banner-caption text-center">
																<h3 className="white-color text-uppercase">Men’s</h3>
															</div>
														</NavLink>
													</div>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
												<div className="col-md-3">
													<div className="hidden-sm hidden-xs">
														<NavLink to='#' className="banner banner-1" >
															<img src={require("./img/banner08.jpg")} alt="" />
															<div className="banner-caption text-center">
																<h3 className="white-color text-uppercase">Accessories</h3>
															</div>
														</NavLink>
													</div>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
												<div className="col-md-3">
													<div className="hidden-sm hidden-xs">
														<NavLink to='#' className="banner banner-1" >
															<img src={require("./img/banner09.jpg")} alt="" />
															<div className="banner-caption text-center">
																<h3 className="white-color text-uppercase">Bags</h3>
															</div>
														</NavLink>
													</div>
													<hr />
													<ul className="list-links">
														<li>
															<h3 className="list-links-title">Categories</h3></li>
														<li><NavLink to='#' >Women’s Clothing</NavLink></li>
														<li><NavLink to='#' >Men’s Clothing</NavLink></li>
														<li><NavLink to='#' >Phones & Accessories</NavLink></li>
														<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
														<li><NavLink to='#' >Bags & Shoes</NavLink></li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li><NavLink to='#' >Sales</NavLink></li>
									<li className="dropdown default-dropdown"><NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Pages <i className="fa fa-caret-down"></i></NavLink>
										<ul className="custom-menu">
											<li><NavLink to='#' href="index.html">Home</NavLink></li>
											<li><NavLink to='#' href="products.html">Products</NavLink></li>
											<li><NavLink to='#' href="product-page.html">Product Details</NavLink></li>
											<li><NavLink to='#' href="checkout.html">Checkout</NavLink></li>
										</ul>
									</li>
								</ul>
							</div>

						</div>
					</div>

				</div>	
			</div>
			);
	}
}

export default Navigation;