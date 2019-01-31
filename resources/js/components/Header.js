import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "./mini_parts/SearchForm";
import "./../css/Header.css";

export default class Header extends Component {

    getItem = (e) => {
        const productName = e.target.elements.productName.value;
        e.preventDefault();//prevents from refrehing
        console.log(productName);
    }



    render = () => {
        return (
            <div className="header-box-k">
                <header>

                    <div id="top-header" className="top-header-k">
                        <div className="container">
                            <div className="pull-left">
                                <span>Welcome to Byapar</span>
                            </div>
                            <div className="pull-right">
                                <ul className="header-top-links">
                                    <li><NavLink to='/store' >Store</NavLink></li>
                                    <li><NavLink to='#' >Newsletter</NavLink></li>
                                    <li><NavLink to='#' >FAQ</NavLink></li>
                                    <li className="dropdown default-dropdown">
                                        <NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i className="fa fa-caret-down"></i></NavLink>
                                        <ul className="custom-menu">
                                            <li><NavLink to='#' >English (ENG)</NavLink></li>
                                            <li><NavLink to='#' >Nepali (Np)</NavLink></li>
                                            <li><NavLink to='#' >Hindi (Hi)</NavLink></li>
                                            <li><NavLink to='#' >Maithali (Ma)</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown default-dropdown">
                                        <NavLink to='#' className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD <i className="fa fa-caret-down"></i></NavLink>
                                        <ul className="custom-menu">
                                            <li><NavLink to='#' >Nepali Rupees (Rs.)</NavLink></li>
                                            <li><NavLink to='#' >USD ($)</NavLink></li>
                                            <li><NavLink to='#' >EUR (€)</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="header">
                        <div className="container container-k">
                            <div className="pull-left pull-left-k">
                                <ul className="search-bar-k">
                                    <li >
                                        <NavLink to="/"><div className="site-name-k">BYAPAR</div></NavLink>
                                    </li>

                                    <li className="actual-form" >
                                        <SearchForm getItem={this.getItem} />
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="pull-right pull-right-k">
                                <ul className="header-btns">

                                    <li className="header-account dropdown default-dropdown header-account-k">
                                        <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                                            <div className="header-btns-icon">
                                                <i className="fa fa-user-o"></i>
                                            </div>
                                            <strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
                                        </div>
                                        <NavLink to='/login' className="text-uppercase">Login</NavLink> / <NavLink to='/register' className="text-uppercase">Join</NavLink>
                                        <ul className="custom-menu">
                                            <li><NavLink to='/profile' ><i className="fa fa-user-o"></i> My Account</NavLink></li>
                                            <li><NavLink to='#' ><i className="fa fa-heart-o"></i> My Wishlist</NavLink></li>
                                            <li><NavLink to='/login' ><i className="fa fa-unlock-alt"></i> Login</NavLink></li>
                                            <li><NavLink to='/register' ><i className="fa fa-user-plus"></i> Create An Account</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </header>
            </div>
        );
    }
}