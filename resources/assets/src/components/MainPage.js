import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import './../css/navigation.css';
import SearchForm from './mini_parts/SearchForm';



class MainPage extends Component{

    myfunction=()=>{
		var foo=document.querySelector('#responsive-nav');
		var foo2=document.querySelector('#navigation');
		foo.classList.toggle("open");
		foo2.classList.toggle("shadow");
	}
	
	myfunction2=() =>{
		var foo=document.querySelector("#freak-list-1");
		foo.classList.toggle("open");
	}

	myfunction3=()=>{
		var foo=document.querySelector("#freak-list-2");
		foo.classList.toggle("open");
	}

	random =()=>

	{var barr=document.querySelector("#responsive-nav");
	window.onClick=(event)=>{
		if(event.target==barr){
			barr.classList.remove("open");
		}
	}

	}

	
    render(){

        

        return(
        <div>
            
	
	<header>
		
		<div id="top-header">
			<div className="container">
				<div className="pull-left">
					<span>Welcome to Byapar</span>
				</div>
				<div className="pull-right">
					<ul className="header-top-links">
						<li><NavLink to='#' >Store</NavLink></li>
						<li><NavLink to='#' >Newsletter</NavLink></li>
						<li><NavLink to='#' >FAQ</NavLink></li>
						<li className="dropdown default-dropdown">
							<NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i className="fa fa-caret-down"></i></NavLink>
							<ul className="custom-menu">
								<li><NavLink to='#' >English (ENG)</NavLink></li>
								<li><NavLink to='#' >Russian (Ru)</NavLink></li>
								<li><NavLink to='#' >French (FR)</NavLink></li>
								<li><NavLink to='#' >Spanish (Es)</NavLink></li>
							</ul>
						</li>
						<li className="dropdown default-dropdown">
							<NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD <i className="fa fa-caret-down"></i></NavLink>
							<ul className="custom-menu">
								<li><NavLink to='#' >USD ($)</NavLink></li>
								<li><NavLink to='#' >EUR (€)</NavLink></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div id="header">
			<div className="container">
				<div className="pull-left">
				<ul style={{display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <li >
                        <NavLink to="/"><span className="site-name">Byapar</span></NavLink>
                    </li>

                    <li style={{display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <SearchForm getItem={this.getItem}/>
                    </li>
				</ul>
					{/*
					<div className="header-logo">
						<NavLink to='/' className="logo" >
							<span style={{fontSize:"46px",color:"black",fontWeight:"700",padding:"0px 3px"}}>Byapar</span>
						</NavLink>
					</div>
					

					
					<div className="header-search">
						<form>
							<input className="input search-input" type="text" placeholder="Enter your keyword"/>
							<select className="input search-categories">
								<option value="0">All Categories</option>
								<option value="1">Category 01</option>
								<option value="1">Category 02</option>
							</select>
							<button className="search-btn"><i className="fa fa-search"></i></button>
						</form>
					</div>
					*/}
				</div>
				<div className="pull-right">
					<ul className="header-btns">
						
						<li className="header-account dropdown default-dropdown">
							<div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
								<div className="header-btns-icon">
									<i className="fa fa-user-o"></i>
								</div>
								<strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
							</div>
							<NavLink to='/login'  className="text-uppercase">Login</NavLink> / <NavLink to='/register'  className="text-uppercase">Join</NavLink>
							<ul className="custom-menu">
								<li><NavLink to='#' ><i className="fa fa-user-o"></i> My Account</NavLink></li>
								<li><NavLink to='#' ><i className="fa fa-heart-o"></i> My Wishlist</NavLink></li>
								<li><NavLink to='#' ><i className="fa fa-exchange"></i> Compare</NavLink></li>
								<li><NavLink to='#' ><i className="fa fa-check"></i> Checkout</NavLink></li>
								<li><NavLink to='/login' ><i className="fa fa-unlock-alt"></i> Login</NavLink></li>
								<li><NavLink to='#' ><i className="fa fa-user-plus"></i> Create An Account</NavLink></li>
							</ul>
						</li>
						
						
						
						<li className="nav-toggle collapsed" onClick={this.myfunction}>
							<button className="nav-toggle-btn main-btn icon-btn" style={{right:"10px", top:"10px", position:"absolute"}} ><i className="fa fa-bars"></i></button>
						</li>
						
					</ul>
				</div>
			</div>
			
		</div>
		
	</header>
	
	<div id="navigation">
		
		<div className="container">
			<div style={{borderRight:"1px solid rgba(0,0,0,0.2)"}}id="responsive-nav">
				
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
										<hr className="hidden-md hidden-lg"/>
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
										<hr className="hidden-md hidden-lg"/>
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
										<hr/>
										<NavLink to='#' className="banner banner-1" >
											<img src={require("./img/banner05.jpg" )} alt=""/>
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
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><NavLink to='#' >Women’s Clothing</NavLink></li>
											<li><NavLink to='#' >Men’s Clothing</NavLink></li>
											<li><NavLink to='#' >Phones & Accessories</NavLink></li>
											<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
											<li><NavLink to='#' >Bags & Shoes</NavLink></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
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
										<hr/>
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
											<img src={require("./img/banner04.jpg" )} alt=""/>
											<div className="banner-caption">
												<h3 className="white-color">NEW<br/>COLLECTION</h3>
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
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><NavLink to='#' >Women’s Clothing</NavLink></li>
											<li><NavLink to='#' >Men’s Clothing</NavLink></li>
											<li><NavLink to='#' >Phones & Accessories</NavLink></li>
											<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
											<li><NavLink to='#' >Bags & Shoes</NavLink></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
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
										<hr/>
										<ul className="list-links">
											<li>
												<h3 className="list-links-title">Categories</h3></li>
											<li><NavLink to='#' >Women’s Clothing</NavLink></li>
											<li><NavLink to='#' >Men’s Clothing</NavLink></li>
											<li><NavLink to='#' >Phones & Accessories</NavLink></li>
											<li><NavLink to='#' >Jewelry & Watches</NavLink></li>
											<li><NavLink to='#' >Bags & Shoes</NavLink></li>
										</ul>
										<hr className="hidden-md hidden-lg"/>
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
										<hr/>
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
					<ul id="freak-list-2" className="menu-list">
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
										<hr className="hidden-md hidden-lg"/>
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
										<hr className="hidden-md hidden-lg"/>
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
										<hr/>
										<NavLink to='#' className="banner banner-1" >
											<img src={require("./img/banner05.jpg" )} alt=""/>
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
												<img src={require("./img/banner06.jpg" )} alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Women’s</h3>
												</div>
											</NavLink>
											<hr/>
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
												<img src={require("./img/banner07.jpg" )} alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Men’s</h3>
												</div>
											</NavLink>
										</div>
										<hr/>
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
												<img src={require("./img/banner08.jpg" )} alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Accessories</h3>
												</div>
											</NavLink>
										</div>
										<hr/>
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
												<img src={require("./img/banner09.jpg" )} alt=""/>
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Bags</h3>
												</div>
											</NavLink>
										</div>
										<hr/>
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

	
	{/*
	<div id="home">
		
		<div className="container">
			
			<div className="home-wrap">
				
				<div id="home-slick">
					
					<div className="banner banner-1">
						<img src={require("./img/banner01.jpg" )} alt=""/>
						<div className="banner-caption text-center">
							<h1>Bags sale</h1>
							<h3 className="white-color font-weak">Up to 50% Discount</h3>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
					
					<div className="banner banner-1">
						<img src={require("./img/banner02.jpg" )} alt=""/>
						<div className="banner-caption">
							<h1 className="primary-color">HOT DEAL<br/><span className="white-color font-weak">Up to 50% OFF</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
					
					<div className="banner banner-1">
						<img src={require("./img/banner03.jpg" )} alt=""/>
						<div className="banner-caption">
							<h1 className="white-color">New Product <span>Collection</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
		
	</div>
	
	<div className="section">
		
		<div className="container">
			
			<div className="row">
				
				<div className="col-md-4 col-sm-6">
					<NavLink to='#' className="banner banner-1" >
						<img src={require("./img/banner10.jpg" )} alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</NavLink>
				</div>
				

				
				<div className="col-md-4 col-sm-6">
					<NavLink to='#' className="banner banner-1" >
						<img src={require("./img/banner11.jpg" )} alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</NavLink>
				</div>
				

				
				<div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
					<NavLink to='#' className="banner banner-1" >
						<img src={require("./img/banner12.jpg" )} alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</NavLink>
				</div>
				

			</div>
			
		</div>
		
	</div>
	

	
	<div className="section">
		
		<div className="container">
			
			<div className="row">
				
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Deals Of The Day</h2>
						<div className="pull-right">
							<div className="product-slick-dots-1 custom-dots"></div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="banner banner-2">
						<img src={require("./img/banner14.jpg" )} alt=""/>
						<div className="banner-caption">
							<h2 className="white-color">NEW<br/>COLLECTION</h2>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-9 col-sm-6 col-xs-6">
					<div className="row">
						<div id="product-slick-1" className="product-slick">
							
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product01.jpg")} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							

							
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product07.jpg")} alt=""  />
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							

							
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product06.jpg")} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							

							
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<ul className="product-countdown">
										<li><span>00 H</span></li>
										<li><span>00 M</span></li>
										<li><span>00 S</span></li>
									</ul>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product08.jpg" )} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
			</div>
			

			
			<div className="row">
				
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Deals Of The Day</h2>
						<div className="pull-right">
							<div className="product-slick-dots-2 custom-dots">
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single product-hot">
						<div className="product-thumb">
							<div className="product-label">
								<span className="sale">-20%</span>
							</div>
							<ul className="product-countdown">
								<li><span>00 H</span></li>
								<li><span>00 M</span></li>
								<li><span>00 S</span></li>
							</ul>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product01.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-9 col-sm-6 col-xs-6">
					<div className="row">
						<div id="product-slick-2" className="product-slick">
							
							<div className="product product-single">
								<div className="product-thumb">
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product06.jpg" )} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							

							
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span className="sale">-20%</span>
									</div>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product05.jpg" )} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							

							
							<div className="product product-single">
								<div className="product-thumb">
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product04.jpg" )} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50</h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							

							
							<div className="product product-single">
								<div className="product-thumb">
									<div className="product-label">
										<span>New</span>
										<span className="sale">-20%</span>
									</div>
									<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
									<img src={require("./img/product03.jpg" )} alt=""/>
								</div>
								<div className="product-body">
									<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
									<div className="product-rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-o empty"></i>
									</div>
									<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
									<div className="product-btns">
										<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
										<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
										<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							

						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		
	</div>
	

	
	<div className="section section-grey">
		
		<div className="container">
			
			<div className="row">
				
				<div className="col-md-8">
					<div className="banner banner-1">
						<img src={require("./img/banner13.jpg" )} alt=""/>
						<div className="banner-caption text-center">
							<h1 className="primary-color">HOT DEAL<br/><span className="white-color font-weak">Up to 50% OFF</span></h1>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-4 col-sm-6">
					<NavLink to='#' className="banner banner-1" >
						<img src={require("./img/banner11.jpg" )} alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</NavLink>
				</div>
				

				
				<div className="col-md-4 col-sm-6">
					<NavLink to='#' className="banner banner-1" >
						<img src={require("./img/banner12.jpg" )} alt=""/>
						<div className="banner-caption text-center">
							<h2 className="white-color">NEW COLLECTION</h2>
						</div>
					</NavLink>
				</div>
				
			</div>
			
		</div>
		
	</div>
	

	
	<div className="section">
		
		<div className="container">
			
			<div className="row">
				
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Latest Products</h2>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product01.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product02.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product03.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product04.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			

			
			<div className="row">
				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="banner banner-2">
						<img src={require("./img/banner15.jpg" )} alt=""/>
						<div className="banner-caption">
							<h2 className="white-color">NEW<br/>COLLECTION</h2>
							<button className="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product07.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product06.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product05.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			

			
			<div className="row">
				
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Picked For You</h2>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product04.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product03.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50</h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product02.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="product product-single">
						<div className="product-thumb">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
							<img src={require("./img/product01.jpg" )} alt=""/>
						</div>
						<div className="product-body">
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div className="product-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star-o empty"></i>
							</div>
							<h2 className="product-name"><NavLink to='#' >Product Name Goes Here</NavLink></h2>
							<div className="product-btns">
								<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
								<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		
	</div>
	

	
	<footer id="footer" className="section section-grey">
		
		<div className="container">
			
			<div className="row">
				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						
						<div className="footer-logo">
							<NavLink to='#' className="logo" >
		            <img src={require("./img/logo.png")} alt=""/>
	)}	          </NavLink>
						</div>
						

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

						
						<ul className="footer-social">
							<li><NavLink to='#' ><i className="fa fa-facebook"></i></NavLink></li>
							<li><NavLink to='#' ><i className="fa fa-twitter"></i></NavLink></li>
							<li><NavLink to='#' ><i className="fa fa-instagram"></i></NavLink></li>
							<li><NavLink to='#' ><i className="fa fa-google-plus"></i></NavLink></li>
							<li><NavLink to='#' ><i className="fa fa-pinterest"></i></NavLink></li>
						</ul>
						
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">My Account</h3>
						<ul className="list-links">
							<li><NavLink to='#' >My Account</NavLink></li>
							<li><NavLink to='#' >My Wishlist</NavLink></li>
							<li><NavLink to='#' >Compare</NavLink></li>
							<li><NavLink to='#' >Checkout</NavLink></li>
							<li><NavLink to='#' >Login</NavLink></li>
						</ul>
					</div>
				</div>
				

				<div className="clearfix visible-sm visible-xs"></div>

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">Customer Service</h3>
						<ul className="list-links">
							<li><NavLink to='#' >About Us</NavLink></li>
							<li><NavLink to='#' >Shiping & Return</NavLink></li>
							<li><NavLink to='#' >Shiping Guide</NavLink></li>
							<li><NavLink to='#' >FAQ</NavLink></li>
						</ul>
					</div>
				</div>
				

				
				<div className="col-md-3 col-sm-6 col-xs-6">
					<div className="footer">
						<h3 className="footer-header">Stay Connected</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
						<form>
							<div className="form-group">
								<input className="input" placeholder="Enter Email Address"/>
							</div>
							<button className="primary-btn">Join Newslatter</button>
						</form>
					</div>
				</div>
				
			</div>
			
			<hr/>
			
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
					
					<div className="footer-copyright">
						
						Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <NavLink to='#' href="https://colorlib.com" target="_blank">Colorlib</NavLink>
						
					</div>
					
				</div>
			</div>
			
		</div>
		
	</footer>
	

	




*/}






        </div>);
    }
}

export default MainPage;