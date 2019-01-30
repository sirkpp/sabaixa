import React, { Component } from 'react';
import Product from "./Product";
import "./../css/company.css";

export default class Company extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            isLoaded: false,

        }
    }

    componentDidMount() {
        fetch('/api/product')
            .then(response => {
                return (response.json());
            })
            .then(json => {
                //Fetched product is stored in the state
                this.setState({
                    isLoaded: true,
                    product: json,
                });
            });
    }



    render = () => {
        var { isLoaded, product } = this.state;
        return (
            <div className="ind-company">
                <div className="company-header">
                    <h3><span> Experience : 3years </span>    BNK group pvt. Ltd.</h3>
                </div>
                <div className="body-content">
                    
                        <div className="products">

                            {
                                <div className="product">
                                    {product.map(item => (
                                        <div className="ind-product" key={item.id}>
                                            <Product data={[item.img_path, "/register", item.product_name, item.product_type, item.product_detail, "kathmandu"]} />
                                        </div>
                                    ))}
                                </div>
                            }

                        </div>

                        <div className="details">
                            <ul>
                                <li>
                                    <span className="title-k">Main Products </span>: Apples, Shoes, Mangoes
                            </li> 
                                <li>
                                <span className="title-k">Country/Region </span> : Nepal, Kathmandu
                            </li>
                                <li>
                                <span className="title-k">Total Revenue </span> : Rs. 50 lakh
                            </li>
                                <li>
                                <span className="title-k">Top Markets </span> : Kathmandu, Biratnagar, Delhi
                            </li>
                                <li>
                                <span className="title-k">Response Rate </span> : 80%
                            </li>
                            </ul>
                        </div>
                   
                </div>
                <div>
                    <button>Contact</button>
                    <button>
                        Leave Message
                    </button>
                </div>
            </div>
        );
    }
}
