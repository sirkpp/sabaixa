import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Footer extends Component {
    render = () => {
        return (
            <div>
                <footer style={{background:"black",color:"white"}} id="footer" className="section section-grey col-md-12">

                    <div className="container">

                        <div style={{color:"white"}} className="row">

                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="footer">

                                    <div className="footer-logo">
                                        <NavLink style={{
                                            color: "orangered",
                                            fontSize: "46px",
                                            fontWeight: "700",
                                            marginRight: "50px"
                                        }} to='#' className="logo" >

                                            BYAPAR      </NavLink>
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
                                            <input className="input" placeholder="Enter Email Address" />
                                        </div>
                                        <button className="primary-btn">Join Newslatter</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">

                                <div className="footer-copyright">

                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Team BNK

                                </div>

                            </div>
                        </div>

                    </div>

                </footer>
            </div>
        );
    }
}