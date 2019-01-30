import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Product from "./Product";
import Company from "./Company";
import "./../css/Home.css"

const Home = () => {
    return (
        <div className="whole-home">
            <Navigation />
            <div style={{ marginLeft: "calc(270px + 5%)" }} className="container-home">

                <div className="home-wrap">

                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>


                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={require("./img/banner01.jpg")} alt="Chania" />
                                <div className="carousel-caption carousel-caption-k">
                                    <h3 style={{ color: "white" }}>Los Angeles</h3>
                                    <p>LA is always so much fun!</p>
                                </div>
                            </div>

                            <div className="item ">
                                <img src={require("./img/banner02.jpg")} alt="Chicago" />
                                <div className="carousel-caption carousel-caption-k">
                                    <h3 style={{ color: "white" }}>Chicago</h3>
                                    <p>Thank you, Chicago!</p>
                                </div>
                            </div>

                            <div className="item ">
                                <img src={require("./img/banner03.jpg")} alt="New York" />
                                <div className="carousel-caption carousel-caption-k">
                                    <h3 style={{ color: "white" }} >New York</h3>
                                    <p>We love the Big Apple!</p>
                                </div>
                            </div>
                        </div>


                        <a className="left carousel-control carousel-control-k" href="#myCarousel" data-slide="prev">
                            <div className="right-arrow"></div>
                        </a>
                        <a className="right carousel-control carousel-control-k" href="#myCarousel" data-slide="next">
                            <div className="left-arrow"></div>
                        </a>
                    </div>
                </div>

            </div>
            
            <div className="products">
                <h1 style={{width:"100%",padding:"30px 0px",textAlign:"center"}}>Products</h1>

                <div className="ind-product">
                <Product data={["banner01.jpg","google.com", "Leather Bags","100 pieces","Rs. 5000 per 100 pieces","Biratnagar"]}/>
                </div>
                <div className="ind-product">
                <Product data={["banner01.jpg","google.com", "Leather Bags","100 pieces","Rs. 5000 per 100 pieces","Biratnagar"]}/>
                </div>
                <div className="ind-product">
                <Product data={["banner01.jpg","google.com", "Leather Bags","100 pieces","Rs. 5000 per 100 pieces","Biratnagar"]}/>
                </div>
                <div className="ind-product">
                <Product data={["banner01.jpg","google.com", "Leather Bags","100 pieces","Rs. 5000 per 100 pieces","Biratnagar"]}/>
                </div>
                <div className="ind-product">
                <Product data={["banner01.jpg","google.com", "Leather Bags","100 pieces","Rs. 5000 per 100 pieces","Biratnagar"]}/>
                </div>
                
                
            </div>
            <Company />
            <Footer />

        </div>
    );
}

export default Home;