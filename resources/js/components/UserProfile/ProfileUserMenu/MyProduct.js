import React,{Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./MyProduct.css";
import Product from "./Product"
import ProductInfo from "../../ProductInfo/ProductInfo";

export default class MyProducts extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_email:this.props.email,
            products:[
                {id:1,productname:"VANS sneakers"},
                {id:2,productname:"Converse sneakers"},
                {id:3,productname:"Goldstar sneakers"}
            ]
        }
    }

    // componentDidMount(){
    //     /*fetch the products of current user*/
    //     /*url needs to be updated so as to get [username]'s product*/
    //     fetch('/api/product/count/'+ this.props.count)
    //         .then(response => {
    //             return (response.json());
    //         })
    //         .then(json => {
    //             //Fetched product is stored in the state
    //             this.setState({
    //                 isLoaded: true,
    //                 products: json,
    //             });
    //         });
    // }

    render(){
        const products = this.state.products.map(product => (
            <Link to={`/productinfo/${product.id}`}>
                <Product key={product.id} info={product}/>
            </Link>));

        const routes = this.state.products.map(product => (
            <Route path={`/productinfo/${product.id}`} component={ProductInfo}/>
            ));
        return(
            <Router>
                <div className="product-container">
                    {products}
                    {routes}
                </div>
            </Router>
        )
    }
}